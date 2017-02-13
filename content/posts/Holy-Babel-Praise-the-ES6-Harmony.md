---
title: 'Holy Babel! Praise the ES6 Harmony.'
date: 2016-03-24 16:04:28
tags: JavaScript
layout: Post
hero: ../../assets/babel.png
---

**ECMAScript6** 簡稱 **ES6** 或 **ES2015** 是 JavaScript 在 2015 年的最新進化，從前 js 都常被開發者們調侃是一個不好的語言，現在雖然當然還不夠好，但在持續的進化的過程中，每年推出新的 spec 的進度應該過不了多久就會成為超夢了吧～

**ES6** 的最新進化多了好幾個技能可以學，它們讓 js 變得更加好用，這篇介紹主要涵蓋一下我個人認為比較常用、必學的技能，還有一些使用的時機和方式，讓大家都可以偷學幾招存進招式機裡哦！

## Prerequirement
- 基本 JavaScript 語法

## Babel
雖然 ES6 是 JavaScript 官方的進化，但是瀏覽器們卻還沒有全部跟上，很多功能都還沒加進去，或是根本沒有加任何功能，要想要搶先使用這些功能就必須先將自己的 code 做一些前處理的編譯，於是就出現了目前最受歡迎的編譯器 [Babel](https://babeljs.io/)，它除了可以讓你編譯 ES6 的原始碼以外，還可以編譯 ES7 或一些尚還在提案階段的新功能唷！使用前不妨造訪他們的網站吧，doc 我認為寫得相當清楚詳細。

Babel 在使用的環境和狀況下會有不同的設定方式，以下簡單介紹幾種比較常見的設定方式，其餘在官網都有相當詳盡的說明。

### Browser-only
假如一開始學習時沒有使用任何的 bundler system 的話，直接用 `<script>` tag 也許是最快最方便的一種方式了，使用方式很簡單，直接在 `<head>` 加入 CDN。
```html
<script src=" https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.4.4/babel.min.js"></script>
```
之後的 script source 都可以直接使用囉！

### Node.js
如果是後端的環境的話根據使用的情況也會有不同的方式，但最基本的還是直接安裝 `babel-cli` 就可以立即見效。另外要使用一些 ES6 的功能也要安裝 `preset-es2015`。

```bash
$ npm install --save-dev babel-cli babel-preset-es2015
```
新建一個叫做 `.babelrc` 的檔案，裡面告訴 Babel 要使用什麼樣的 preset。
```js
// .babelrc
{ "presets": ["es2015"] }
```

之後 `babel` 指令可以編譯原始碼，`babel-node` 可以執行原始碼或進入 REPL 模式。
```bash
$ babel src.js -o build.js # 將 src.js 編譯成 build.js
$ babel src/ -d dist/ -w # 將 src 目錄底下的 js 都編譯到 dist 目錄底下，且不斷檢查變更
$ babel-node src.js # 直接編譯並執行 src.js (相當於 node src.js)
$ babel-node # 進入 babel 的 REPL mode (相當於直接執行 node)
```
其中 `babel-node` 只適合使用在開發階段，正式上線時還是要使用預先編譯過後的版本。

### Bundler
使用像 `webpack` 或是 `browserify` 之類的 bundler 時有各式的使用方法，這部分根據使用方式不同會有比較多的變化，請直接參考官網的教學囉 (其實是懶得寫)。


## Features

### Arrows function
```js
// es5
var foo = function(bar) {
    // ...
};

// es6
var foo = (bar) => {
    // ...
};
```
**Arrows function** 是一個 function 的 short hand 用法，除了簡化 **function** 的用法以外也會把 parent 的 `this` 正確的傳入 function 中，這是一個相當實用的功能，在很多情況下都非常好用。
```js
// es5
function foo() {
    this.name = "hello";

    setTimeout(function() {
        console.log(this.name); // undefined
    }, 1000);
}

// es6
function foo() {
    this.name = "hello";

    setTimeout(() => {
        console.log(this.name); // hello
    }, 1000);
}
```
基本的用法簡單上來說是將 `function` 捨去，並在 arguments 和 function 的開頭 `{` 之前加入 arrow `=>`，不過其他還有一些簡單的用法分別用在不同的情況。

arguments 的使用方式：
```js
var foo = () => {
    // 沒有 argument 的 function
};

var foo = bar => {
    // 只有一個 argument 時可以省去括號
};

var foo = (bar, bar2) => {
    // 兩個以上時用 , 隔開
};
```

若沒有太多的步驟要執行，只要簡單的快速回傳值的話可以這麼寫：
```js
var foo = () => bar;
// 或
var foo = () => (bar);
// 相當於：
var foo = () => {
    return bar;
};

// 若要回傳一個 object 也可以這麼寫
var foo = () => ({
    bar: "bar"
});
// 相當於：
var foo = () => {
    return {
        bar: "bar"
    };
};
```
簡單來說若要直接回傳值的話可以用小括號表示或直接省略，若是 object 的話因為直接省略會和 function 的 syntax 衝突，所以外面需要包一層小刮號。

**Arrows function** 在一般情況下非常好用，除了跟 **functional programming** 非常合以外，其他基本上所有的情況都最好使用 **arrows function** 來取代原本的 function。唯一的例外就是當內部的 `this` 有特別指定是自己的時候用 **arrows function** 會得到錯誤的值，這在一些針對舊式的 jQuery 的套件上滿常見的，這時候直接改用原本的 function syntax 就可以了。

### Let & Const
`let` 和 `const` 是在宣告變數時新的使用方式，原本的 `var` 是不夠嚴謹的，所以常常會得到意料之外的結果或 bug，`let` 只存在於你宣告的 block 裡面，可以解決許多問題。
```js
// es5
var bar;

(function() {
    bar = "hello";
})();

var bar = "world";

console.log(bar); // world

// es6
let bar;

{
    bar = "hello";
};

let bar = "world"; // ERROR! 重複宣告 bar
```

而 `const` 顧名思義就是一經宣告後就不變的變數，不允許改變也不允許重複宣告，不過對於 Object 和 Array 還是可以新增 key 或值的，只是一樣無法重複宣告。
```js
const bar = "foo"; // const 宣告時一定要給予其值 (廢話)

bar = "hello"; // ERROR! 改變了 const 變數

const foo = ["hello"];
foo.push("world");
console.log(foo); // ["hello", "world"]
```

至於最佳的使用情況是：**幾乎任何情況，都應該使用 `let` 來取代 `var`。** 而且，**唯一的例外是，只要是不曾更改過的定值就優先使用 `const`。** 簡單來說，所有情況都不應該再出現 `var` 囉～！~~RIP `var` ~2015。~~

### Template Strings
原本 js 的 string `'` 和 `"` 都可以使用，並無什麼不同，但是卻缺少了一些方便好用的功能，而 **Template strings** 的 ``` ` ``` 帶來了解決方案。
```js
// es5
var bar = "hello";
var foo = "world";
var str = bar + ", " + foo + "!"; // hello, world!

// es6
const bar = "hello";
const foo = "world";
const str = `${bar}, ${foo}!`; // hello, world!
```
`${}`帶來了簡單的方式讓我們可以任意塞變數進去，另外也可以輕易地辦到多行的 string。
```js
// es5
var multiline = "bar foo foo \
bar bar foo";

// es6
const multiline = `bar foo foo
bar bar foo`;
```
這些功能在處理 url 的 get 等等的情況下特別好用，但在一般情況下沒有變數或是多行的需求時是可以用一般的方式的。


### Default
原本 js 的 function 不支援 default value，所以常常必須在 function 裡面做類似下面的處理，但有了 default 後就可以直接指定預設的值。
```js
// es5
var bar = function(foo) {
    foo = foo || "hello"; // 注意，這是不夠嚴謹的作法
    return foo;
};

console.log(bar()); // hello

// es6
const bar = (foo = "hello") => {
    return foo;
};

console.log(bar()); // hello
```
原本要寫出正確的 code 常常會寫得很長，而且如果又有很多個變數時更是痛苦，有了 default value 後就方便許多啦！

### Spread & Rest
這可能是對一般人來說最神奇的一個新功能，不過實在是非常的好用呀～廢話不多說直接看範例比較好懂。
```js
const foo = [1, 2, 3];

const bar = [...foo, 4, 5, 6];

console.log(bar); // [1, 2, 3, 4, 5, 6]
```
簡單來說可以想成它把 Array 拆開成一個一個個別的值放進另一個 Array 裡面，然後會自然的很完美的 fit 進去，太神奇了神奇到我都不太會解釋了 XD，多多使用就會習慣了啦～
```js
// 可以隨意放在任何位置
const foo = [1, 2];
const bar = [5, 6];
console.log( [...foo, 3, 4, ...bar] ); // [1, 2, 3, 4, 5, 6]

// better Array.push()
const foo = [3, 4];
const bar = [1, 2];
bar.push(...foo);
console.log(bar); // [1, 2, 3, 4]
```
除了 Array 以外 Object 也是可以使用的，這樣的用法在需要覆蓋原本的 Object 值時非常常用，在 **Redux** 官方中也是推薦這種作法。**不過要在 Object 中使用需要使用 `babel-preset-stage-2` 的 preset。**
```js
const foo = {
    "key1": "value1",
    "key2": "value2"
};

const bar = {
    ...foo,
    "key2": "new value",
    "key3": "value3"
};

console.log(bar); // { key1: 'value1', key2: 'new value', key3: 'value3' }
```
在 Object 中使用時放置的時機很重要，**放在後面的會覆蓋掉前面存在過的 key**。

這樣的功能也同樣可以使用在 function 的 arguments 內，而這就是 **Rest**，而這只可以使用在 Array 上。
```js
const foo = (...bar) => {
    return bar.length;
};

console.log(foo(1, 2, 3)); // 3
```
很神奇地把一個一個分開的 argument 轉成一個 Array 丟給 function 了！如果覺得這東西會太神奇的話就慢慢習慣吧哈哈～不過這已經在許多程式語言中是相當常見的語法了。

### Destructuring
_解構_ 是一個特殊的語法可以讓你把一個 Array 或 Object 中的值提取出來另存在一個變數裡，這在 **React** 的拿取 `props` 的過程中也是非常常見的用法。

```js
const [bar, foo] = [1, 2];
console.log(bar, foo); // 1, 2

const { bar, foo } = { bar: 1, foo: 2 };
console.log(bar, foo); // 1, 2
```
另外也可以使用在 function 的 arguments 中。
```js
const bar = ({ foo }) => {
    return foo;
};

console.log( bar({ foo: 1 }) ); // 1
```
搭配 **Default** 可以有更好的寫法。
```js
const bar = ({ foo, key = 2 }) => {
    return foo + key;
};

console.log( bar({ foo: 1 }) ); // 3
```

### Enhanced Object Literals
在創建 Object 的時候有了更好的方法。
```js
const foo = 1;

const bar = {
    foo,
    sayHi() {
        console.log("Hi");
    },
    [`item${foo}`]: `value${foo}`
};

console.log(bar); // { foo: 1, sayHi: [Function: sayHi], item1: 'value1' }
bar.sayHi(); // Hi
```
其中 `foo` 就是 `foo: foo` 的縮寫，這在使用 Object 時也是很常用的小技巧 (_有仔細注意的話會發現上面 Destructuring 的例子就是這個技巧的延伸_)。


### Class
相信如果有接觸過其他的程式語言的話就會知道 Class 是什麼東西，今天 js 終於也有了它啦～痛哭流涕～。包含了基本的 constructor 和繼承的使用，這裡就不贅述，如果不懂 Class 是什麼的話找一個比較詳細的教學文來看會比較好哦～

```js
class Car {
    constructor(color) {
        this.type = "car";
        this.color = color;
    }

    drive() {
        console.log(`GO! My ${this.color} ${this.type}!`);
    }
}

class Taxi extends Car {
    constructor(color) {
        super(color);
        this.type = "taxi";
    }
}

const taxi = new Taxi("yellow");
taxi.drive(); // GO! My yellow taxi!
```

### Promise
關於 **Promise** 的介紹我已經在先前有寫過一篇簡單的[介紹文](https://kevin940726.github.io/blog/2016/03/22/I-Promise-you-it-s-going-to-be-great/)了，歡迎前往觀看～

### Module import/export
相信如果熟悉 Node.js 的環境的人都知道 `require()` 是什麼東西，如今在 bundler 的幫助下整個 js 的生態圈都已經 modulize 化了，除了後端，連前端都可以使用 `require()` 了，不過還是有許多不方便之處，而 es6 的 `import` 和 `export` 就是這個問題的很好的解決方案。

首先是 module export 的寫法。
```js
// module.js
// es5
module.exports = {
    foo: function() {
        return "bar";
    }
};

// es6
export default {
    foo() {
        return "bar";
    }
};
```

在 import 時。
```js
// es5
var Module = require('./module.js');
console.log( Module.foo() ); // bar

// es6
import Module from './module';
console.log( Module.foo() ); // bar

// or
import { foo } from './module';
console.log( foo() ); // bar
```
以上是一些基本的用法，不過還有很多在原本的 module 下比較難處理的用法。
```js
// export
export { name1, name2 };
export { variable1 as name1, variable2 as name2 };
export let name1 = foo, name2 = bar;
```
`export default` 會讓其他檔案在 `import` 時指定預設的變數或 function。
```js
export default name1;
export default const name1 = foo;
```
import 時預設會將 `export default` 的值 import 進來，如果只想要 import 其中的某些值或 method，使用類似 Destructuring 的語法會讓你的 code 更有系統和結構化，聰明的 bundler 會只幫你把需要的東西 import，省去不少空間和載入速度。用 `as` 來替引入的 module 改名。
```js
// import
import name1 from 'module';
import { name1, name2 } from 'module';
import { variable1 as name1, variable2 as name2 } from 'module';
import name1, { name2 } from 'module';
```
使用 module 的 `import`/`export` 短短篇幅可能沒辦法解釋得非常清楚，有使用過的 Node.js 環境或接觸過其他類似語言(如 Python)的人可能比較能夠理解，詳細還是要自己常常使用才會比較清楚整體架構，不過這除了是使用 bundler 的核心價值以外，也有在開發上可以很有系統的做 code splitting 的優點，更好的除錯和大型專案 scale up 時帶來更清楚的架構，不管前後端都已經是不可或缺的一種開發模式了。

### Others
**ES6** 還有很多很好用的新功能，這裡只簡單介紹幾個我個人比較常用的，還有其他包括 `for...of`、`Map`、`Set`等非常好用的新功能，詳細可以看強者大大的[整理](https://github.com/lukehoban/es6features#readme)。

## Conclusion
雖然瀏覽器還沒有全數支援所有的新功能，但是使用新的且穩定的功能在新的專案上已經是必然的趨勢，中大型專案如 [Redux](https://github.com/reactjs/redux) 和 facebook 的 [draft.js](https://github.com/facebook/draft-js) 都是直接使用 babel 撰寫的，所以不要因為好像要做一些特別的設定才能開始就排斥它，認為是一些邪門歪道 (XD)，趕緊跟上潮流才能當最強訓練家啊～不過當然也不建議直接開始使用 ES7 一些還在 stage 階段的功能 (如 async/await 等)，除了相對不穩定以外，未來也很有可能會更改，使用已經確定或是在社群中已經廣為使用的功能吧！
