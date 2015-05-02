$(document).ready(function() {
	var topset = false;
	$('.coverImg').fadeIn(1000);

	$('#menuCircle').draggable({
		containment: "body",
		start: function( event, ui ) {
			$(this).animate({
				backgroundColor: 'rgba(0,0,0,0.8)',
				borderColor: 'rgba(255,255,255,1.0)',
				boxShadowColor: 'rgba(0,0,0,1.0)'
			});
		},
		stop: function( event, ui ) {
			if ($(this).offset().left+$(this).width()/2 > ($(window).width()/2)){
				$(this).animate({
					left: $(window).width()-$(this).width()-4,
					easing: "easeInOutCubic"
				}, 500);
			}
			else{
				$(this).animate({
					left: 0,
					easing: "easeInOutCubic"
				}, 500);
			}
			// if ($('.navbar').position().top != $(this).position().top && topset){
			// 	$('.navbar').animate({
			// 		top: $('#menuCircle').position().top-2,
			// 		easing: "easeInOutCubic"
			// 	}, 500);
			// 	topset = true;
			// }
			$(this).animate({
				backgroundColor: 'rgba(0,0,0,0.6)',
				borderColor: 'rgba(255,255,255,0.9)',
				boxShadowColor: 'rgba(0,0,0,0.8)'
			});		
		}
	});
	$('#menuCircle').click(function(event) {
		event.stopPropagation();
		// if (!topset && $(window).scrollTop() > $(window).height()){
		// 	$('.navbar').animate({
		// 		top: $('#menuCircle').position().top-2,
		// 		easing: "easeInOutCubic"
		// 	}, 500);
		// 	topset = true;
		// }
		$('html, body').animate({
			scrollTop: 0,
		}, 1000);
	});
	// $('html').click(function() {
	// 	if (topset){
	// 		$('.navbar').animate({
	// 			top: 0,
	// 			easing: "easeInOutCubic"
	// 		}, 500);
	// 		topset = false;
	// 	}
	// });
	$('.navbar a').click(function(event) {
		if (!$(this).parent().hasClass("right")){
			console.log("no");
			event.preventDefault();
			$('html, body').stop().animate( {
				scrollTop: $($(this).attr('href')).offset().top-80
			}, 500);
		}
	});
	$('.coverCircle').click(function(event) {
		event.preventDefault();
		if ($(window).scrollTop() >= $(window).height()-100){
			$('html, body').stop().animate( {
				scrollTop: 0
			}, 1000);
		}
		else{
			$('html, body').stop().animate( {
				scrollTop: $('#about').offset().top-80
			}, 500);
		}
	});
	var navbarTop = $('.navbar').offset().top;
	var progressTrigger = false;
	$(window).scroll(function() {
		if ($(window).scrollTop() >= navbarTop){
			$('.navbar').removeClass("bottom");
			$('.navbar').addClass("sticky");
			$('.navbar li a').css("color", "black");
			$('.navbar li svg path').css("fill", "#000000");
		}
		else{
			$('.navbar').removeClass("sticky");
			$('.navbar').addClass("bottom");
			$('.navbar li a').css("color", "white");
			$('.navbar li svg path').css("fill", "#FFFFFF");
		}


		for (var progress in progresses){
			delayAni(progresses[progress].progressVar, progresses[progress].progressDOM, progresses[progress].max);
			delayAni(progresses[progress].progressMobileVar, progresses[progress].progressMobileDOM, progresses[progress].max);
		}

	});
	

	var humor = progresses[Object.keys(progresses)[Object.keys(progresses).length-1]];
	var increment = true;
	$('#skills .column:last-child').click(function() {
		if (humor.progressVar.value() >= 1){
			increment = false;
		}
		else if (humor.progressVar.value() <= 0.8){
			increment = true;
		}

		if (increment){
			humor.progressVar.set(humor.progressVar.value()+0.01);
			humor.progressMobileVar.set(humor.progressVar.value()+0.01);		
		}
		else{
			humor.progressVar.set(humor.progressVar.value()-0.01);	
			humor.progressMobileVar.set(humor.progressVar.value()-0.01);
		}
	});


});

var progressAttr = function(color, width) {
	width = typeof width != 'undefined' ? width : 7;
	var attr = {
		color: '#aaa',
		strokeWidth: width,
		trailWidth: 1,
		easing: 'easeOutCirc',
		duration: 1500,
		text: {
			value: '0 %',
		},

		from: { color: '#aaa', width: 1 },
		to: { color: color, width: width },
		// Set default step function for all animate calls
		step: function(state, circle) {
		    circle.path.setAttribute('stroke', state.color);
		    circle.path.setAttribute('stroke-width', state.width);
		    circle.setText((circle.value() * 100).toFixed(0) + " %");
		}
	}
    return attr;
}

var progressAttrMobile = function(color) {
	var attr ={
		color: '#aaa',
		strokeWidth: 5,
		trailWidth: 1,
		easing: 'easeOutCirc',
		duration: 1500,

		from: { color: '#aaa', width: 1 },
		to: { color: color, width: 7 },
		// Set default step function for all animate calls
		step: function(state, circle) {
		    circle.path.setAttribute('stroke', state.color);
		    circle.path.setAttribute('stroke-width', state.width);
		}
	}
	return attr;
}

var progresses = [
	{
		progressVar: new ProgressBar.Circle('#progress_html', progressAttr("#F16529")),
		progressDOM: $('#progress_html'),
		progressMobileVar: new ProgressBar.Line('#progressMobile_html', progressAttr("#F16529", 1)),
		progressMobileDOM: $('#progressMobile_html'),
		max: '0.8'
	},
	{
		progressVar: new ProgressBar.Circle('#progress_css', progressAttr("#2AA9E0")),
		progressDOM: $('#progress_css'),
		progressMobileVar: new ProgressBar.Line('#progressMobile_css', progressAttr("#2AA9E0", 1)),
		progressMobileDOM: $('#progressMobile_css'),
		max: '0.4',
	},
	{
		progressVar: new ProgressBar.Circle('#progress_javascript', progressAttr("#F0DB4F")),
		progressDOM: $('#progress_javascript'),
		progressMobileVar: new ProgressBar.Line('#progressMobile_javascript', progressAttr("#F0DB4F", 1)),
		progressMobileDOM: $('#progressMobile_javascript'),
		max: '0.6'
	},
	{
		progressVar: new ProgressBar.Circle('#progress_php', progressAttr("#6082BB")),
		progressDOM: $('#progress_php'),
		progressMobileVar: new ProgressBar.Line('#progressMobile_php', progressAttr("#6082BB", 1)),
		progressMobileDOM: $('#progressMobile_php'),
		max: '0.5'
	},
	{
		progressVar: new ProgressBar.Circle('#progress_python', progressAttr("#366E9D")),
		progressDOM: $('#progress_php'),
		progressMobileVar: new ProgressBar.Line('#progressMobile_python', progressAttr("#366E9D", 1)),
		progressMobileDOM: $('#progressMobile_python'),
		max: '0.65'
	},
	{
		progressVar: new ProgressBar.Circle('#progress_r', progressAttr("#8A8E88")),
		progressDOM: $('#progress_r'),
		progressMobileVar: new ProgressBar.Line('#progressMobile_r', progressAttr("#8A8E88", 1)),
		progressMobileDOM: $('#progressMobile_r'),
		max: '0.8'
	},
	{
		progressVar: new ProgressBar.Circle('#progress_csharp', progressAttr("#373535")),
		progressDOM: $('#progress_csharp'),
		progressMobileVar: new ProgressBar.Line('#progressMobile_csharp', progressAttr("#373535", 1)),
		progressMobileDOM: $('#progressMobile_csharp'),
		max: '0.7'
	},
	{
		progressVar: new ProgressBar.Circle('#progress_latex', progressAttr("#000000")),
		progressDOM: $('#progress_latex'),
		progressMobileVar: new ProgressBar.Line('#progressMobile_latex', progressAttr("#000000", 1)),
		progressMobileDOM: $('#progressMobile_latex'),
		max: '0.25'
	},
	{
		progressVar: new ProgressBar.Circle('#progress_humor', progressAttr("#800080")),
		progressDOM: $('#progress_humor'),
		progressMobileVar: new ProgressBar.Line('#progressMobile_humor', progressAttr("#800080", 1)),
		progressMobileDOM: $('#progressMobile_humor'),
		max: '0.9'
	},
]

var delayAni = function(progressVar, progressDOM, max){
	if ($(window).scrollTop() >= progressDOM.offset().top-2*$(window).height()/3 && progressVar.value() == 0){
		progressVar.animate(max);
	}
	else if ($(window).scrollTop() < progressDOM.offset().top-$(window).height() && progressVar.value() == max){
		progressVar.set(0);
	}
}









