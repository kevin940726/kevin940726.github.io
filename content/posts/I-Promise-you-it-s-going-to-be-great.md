---
title: "I Promise you, it's going to be great!"
date: 2016-03-22 14:15:05
tags: JavaScript
layout: Post
---

**Promise** 是一個 ES6 JavaScript 中的新功能，雖然瀏覽器尚未全部支援，但其實早在很久以前就已經被非常多人使用，除了知名的 [bluebird](http://bluebirdjs.com/docs/getting-started.html) 套件以外，早在 jQuery 時就已經有人使用了，這篇文章會小小介紹 Promise 在 js 中的應用以及它解決的問題。

## Prerequirement
- 基本 JavaScript
- callback function 應用
- 基本 jQuery 的 ajax get 用法

---
## Problem

相信稍微有寫過幾次 js 的人都知道 js 是一個 asynchronous 的語言，意味著在處理需要等待時間的程式碼時是非同步的，各個 function 在過程中彼此獨立，誰也不等待誰。

```js
var x = 1;

function make2(x) {
    setTimeout(function() {
        x = 2;
    }, 1000);

    return x;
}

console.log(make2(x)); // 1
```

那我們要怎麼知道某個事件處理完了再換人執行呢？在以往我們一般都是用 `callback` function 來幫我們處理這件事，以上面的例子為例，我們可以改寫成這樣：

```js
var x = 1;

function make2(x, callback) {
    setTimeout(function() {
        x = 2;
        callback(x);
    }, 1000);
}

make2(x, function(x) {
    console.log(x); // 2
});
```

把需要回傳的值放在最後的 callback function 中引用就可以得到預期的結果了，以上都是很簡單很基本的處理方式，事實上其實也是非常完整的解決方案，一般幾乎所有的需求都可以靠 callback 解決，那我們為什麼還需要學 Promise 呢？

假如我們今天要去爬某個相簿網站的 api，要先拿出最近一本相簿的 `album_id` ，再用相簿的 `album_id` 拿出該相簿的第一張相片，假設該網站有一個 api 可以拿出相簿的 `album_id`，另外一個 api 可以透過傳入的 `album_id` 拿到第一張相片的 `photo_id`，那我們可以這樣寫。

```js
$.get(GET_LATEST_ALBUM_API, function(album_id) {
    $.get(GET_FIRST_PHOTO_API + album_id, function(photo_id) {
        // the first photo in the latest album
    });
});
```

嗯⋯⋯看起來沒什麼問題呀？那⋯⋯如果我們現在想要拿該相片的拍攝者，還有那個人的名字，還有他的大頭貼，又這個網站對於所有的需求都獨立開另外一個 api ，而且還是一層一層的疊下去的。意思是我要得到相片的 `photo_id` 才可以得到拍攝者的 `user_id`，要得到拍攝者的 `user_id` 才可以得到他的名字，而又要有名字才可以得到他的大頭貼⋯⋯，先不討論什麼奇怪的 api 會這樣設計，那我們可能也會覺得說：「那又怎樣？我會寫啊！」，於是⋯⋯

```js
$.get(GET_LATEST_ALBUM_API, function(album_id) {
    $.get(GET_FIRST_PHOTO_API + album_id, function(photo_id) {
        $.get(GET_AUTHOR_API + photo_id, function(user_id) {
            $.get(GET_USER_NAME_API + user_id, function(user_name) {
                $.get(GET_USER_PHOTO_API + user_name, function(user_photo) {
                    // FINALLY!
                });
            });
        });
    });
});
```

天啊怎麼一層一層疊下去啊，好像不在寫 code，在玩疊疊樂了，如果要做的判斷和處理更多，或是又要再往下去呼叫 api 時光是看到 code 就快暈倒了吧！而這就是惡名昭彰的 **callback hell**，顧名思義就是一個天殺的地獄，所有人在寫 callback 時最討厭遇到這樣的問題了吧！

這個時候救世主 **Promise** 老大哥就出來跟小弟 callback 說：「欸欸小子，吃不消了吧？讓我來救救你吧！」，於是 callback 就哭著跑去抱住 Promise 然後一邊擦淚一邊責怪你的 code 寫得不好讓它進入地獄了。

## Introducing Promise

Promise 是什麼呢？我們知道了它要解決的問題可是還是對它完全不了解，其實 Promise 直翻就是**保證**，記住這個原則，**它就是用來保證事件一定會完成的方法**。還是不懂嗎？讓我們用 Promise 重新寫一次上面的例子。

```js
// jQuery 的 get method 可以無痛轉換成 Promise 寫法

$.get(GET_LATEST_ALBUM_API)
    .then(function(album_id) {
        return $.get(GET_FIRST_PHOTO_API + album_id);
    })
    .then(function(photo_id) {
        return $.get(GET_AUTHOR_API + photo_id);
    })
    .then(function(user_id) {
        return $.get(GET_USER_NAME_API + user_id);
    })
    .then(function(user_name) {
        return $.get(GET_USER_PHOTO_API + user_name);
    })
    .then(function(user_photo) {
        // WE DID IT!
    });
```

天啊傑克～這真是太神奇啦～～～，**Promise** 的**保證**真的很有信用耶！比所有台灣的政客都還要值得信賴呢！

看完了基本的 Promise 應用，讓我們再回來看看 Promise 背後的原理和用法。

Promise 是一個 object，在創造一個新的 Promise 時他吃一個 function，而這個 function 各吃兩個 function，第一個是 Promise 完成時的 callback，第二個則是失敗(拒絕)時的 callback。
```js
var x = 1;

var myPromise = new Promise(
    function(resolve, reject) {
        setTimeout(function() {
            x = 2;
            resolve(x);
        }, 1000);
    }
);
```
新建完的 Promise 就會有兩個 method 可以使用，一個是 `then()` 代表 Promise 成功時執行的 callback，第二個是 `catch()` 代表失敗時的 callback。

而 `then()` function也可以吃兩個 callback 參數，第一個是成功時的，第二個也自然是失敗的。

```js
myPromise.then(function(x) {
    console.log(x); // 2
}, function() {
    // rejected
});
```

在 `then()` function 中也是可以回傳值的，你可以回傳一個簡單的值或是回傳另一個 Promise，而回傳後的值可以一直 chain 連鎖下去，一直 then then then⋯⋯直到最後。

```js
myPromise
    .then(function(x) {
        return x + 1; // return simple value
    })
    .then(function(x) {
        return anotherPromise(x); // return another Promise
    })
    .catch(function(error) {
        // catch error at the end, any error happened above will be rejected into here.
    });
```

就這樣簡單的一些 method 就可以開始自己新建一個 Promise 了，運用一些 higher-order function 的技巧可以建立可重複使用的 Promise function，例如我們練習把原本 jQuery 的 get callback function 改寫成 Promise 的方法。

```js
$.prototype.getPromise = function(url) {
    return new Promise(
        function(resolve, reject) {
            $.get(url, resolve);
        }
    );
};

$.getPromise(url)
    .then(function(response) {
        console.log(response);
    })
    .catch(function(reason) {
        console.log(reason);
    });
```

不過其實鮮少會有機會需要自己建立這樣的 Promise function，大部分都直接使用現成的套件，包括 jQuery 和 bluebird 以外，原生的瀏覽器也有部分支援了 Promise 的基本用法，若是要向下支援的話我推薦直接使用跨瀏覽器的 [polyfill](https://github.com/taylorhakes/promise-polyfill)，假如不需要使用一些特殊的功能的話，輕量的 polyfill 就已經很夠用了，若只是內部使用或是只是在測試的話在 modern browser 上都已經支援了，直接使用就可以了。

## More Examples

基本上 Promise 的使用方式真的很簡單，沒有太多神奇的用法，照著上面的一些範例就可以處理大部分的問題了，不過有時候還是會有一些情況是需要多依靠一些方法的。

假如我們把上面拿相簿 api 的例子改變一下，這次我們不拿最近一本相簿的第一張相片了，我們要拿全部的相簿以及他們各自的全部的相片，這次我也不只拿拍攝者一個人了，我要拿的是所有按這張相片喜歡的所有人，以及他們各自所有的名字和大頭貼，一般直覺上我們可能一開始會這麼寫。
```js
$.get(GET_ALL_ALBUM_API)
    .then(function(albums) {
        albums.forEach(function(album_id) {
            $.get(GET_ALL_PHOTO_API + album_id)
                .then(function(photos) {
                    photos.forEach(function(photo_id) {
                        // ...
                        // you get the point...
                    });
                });
        });
    });
```
這個簡單的例子可以發現一般 Promise 在處理 list 的時候還是不太順暢的，一旦出現了 list 就破壞了原本
 chain 的結構，寫出來的 code 就跟他的小弟 callback hell 一樣了。

那是不是就代表這種情況 Promise 也無用武之地？當然不是囉～不然這篇就不會是在介紹 Promise 了，不是說過我**保證**會做好做滿的嗎？其實解決方法很簡單，我們不一個一個**保證**單一個政策了，我們**全部保證**做到，絕對不跳票！超級P來拯救咧～

### Promise.all()

```js
$.get(GET_ALL_ALBUM_API)
    .then(function(albums) {
        return Promise.all(albums.map(function(album.id) {
            return $.get(GET_ALL_PHOTO_API + album_id);
        }));
    })
    .then(function(photos) {
        console.log(photos);
        // [
        //     [album1_photo1, album1_photo2, ...],
        //     [album2_photo1, album2_photo2, ...],
        //     ...
        // ]
    });
```

`Promise.all()` 吃一個 array 當作參數，array 中的每個值都是 Promise，形成一個 list of Promise 的概念，最後也會確保每個 Promise 都完成了以後才進入 `then()` function，以上面的例子來說我先將各個 `album_id` 代入 Promise function 透過 `map()` 得到一個 Promise 的 Array，將它們餵給 `Promise.all()` 後就會得到一個大的
 Promise 大哥大，在最後 `return` 它後就可以繼續利用 `then()` chain 下去了，之後的做法也都依此類推，最後就可以拿到一個非常大的 Array 裡面包含了所有的相簿、所有的相片、所有的按喜歡的人以及他們各自的名字和大頭貼了。

---

Promise 是不是很簡單又很方便呀～在下一個專案上練習使用看看吧！
