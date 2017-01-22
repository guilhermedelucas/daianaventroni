(function() {
    console.log("hello");
    if (window.innerWidth > 800) {
        $('.nav_menu a').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 55
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });


        $(window).on('scroll', function(e) {
			if ($("#modal").hasClass('modal')) {
				$('.nav_menu').removeClass('fixed');
			} else if ($(window).scrollTop() > 245) {
				$('.nav_menu').addClass('fixed');
			} else {
				$('.nav_menu').removeClass('fixed');
			}
        });



	for (var i = 0; i < 4; i++) {
		$("#img_modal" + i).on("click", function(e){
			$('.nav_menu').removeClass('fixed');
			var imgUrl = e.target.src;
			$("#modal").addClass("modal").css("display", "block");
			$("#modal_frame").prepend("<img src='" + imgUrl + "'class='img_modal'><p class='close_modal'>Clique na imagem para fechar</p>");
		})
	}



	$("#modal_frame").on("click", function(e){
		$('.nav_menu').addClass('fixed');
		$("#modal").removeClass("modal").css("display", "none");
		$("#modal_frame").empty();
		})

		}

})();
