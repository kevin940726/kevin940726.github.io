$('document').ready(function() {

	$('.arrow-wrap').click(function() {
		if ($('html, body').scrollTop() < 100) {
			$('html, body').animate( {
				scrollTop: $(".content").offset().top
			}, 1000);
		}
		else {
			$('html, body').animate( {
				scrollTop: $(".bg-wrapper").offset().top
			}, 500);
		}
		return false;
		e.preventDefault();
	});

	$('a[href^="#"]').click(function() {
		$("html, body").animate({
			scrollTop: $(this.hash).offset().top
		}, 500);
		return false;
		e.preventDefault();
	});

});