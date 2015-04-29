$(document).ready(function() {
	var topset = false;
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
			if ($('.navbar-list').position().top != $(this).position().top && topset){
				$('.navbar-list').animate({
					top: $('#menuCircle').position().top-2,
					easing: "easeInOutCubic"
				}, 500);
				topset = true;
			}
			$(this).animate({
				backgroundColor: 'rgba(0,0,0,0.6)',
				borderColor: 'rgba(255,255,255,0.9)',
				boxShadowColor: 'rgba(0,0,0,0.8)'
			});		
		}
	});
	$('#menuCircle').click(function(event) {
		event.stopPropagation();
		if (!topset){
			$('.navbar-list').animate({
				top: $('#menuCircle').position().top-2,
				easing: "easeInOutCubic"
			}, 500);
			topset = true;
		}
		else{
			$('.navbar-list').animate({
				top: 0,
				easing: "easeInOutCubic"
			}, 500);
			topset = false;
		}
	});
	$('html').click(function() {
		if (topset){
			$('.navbar-list').animate({
				top: 0,
				easing: "easeInOutCubic"
			}, 500);
			topset = false;
		}
	});
	$('.navbar-list a').click(function() {
		$('html, body').stop().animate( {
			scrollTop: $($(this).attr('href')).offset().top-50
		}, 500);
	});
});
