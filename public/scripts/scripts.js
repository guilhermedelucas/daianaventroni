$(function() {
	$('.nav_menu a').bind('click',function(event){
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top -10
		}, 1500,'easeInOutExpo');
		event.preventDefault();
	});

	$(window).bind('scroll', function (e) {
    	if ($(window).scrollTop() > 245) {
        	$('.nav_menu').addClass('fixed');
    	} else {
        	$('.nav_menu').removeClass('fixed');
    	}
	});
});
