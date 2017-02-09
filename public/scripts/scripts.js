(function() {
    // initi revit container hide
    $('#container_revit').hide();


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


        function toggleMenu() {
            setInterval(()=>{
                    $('#container_sketch').slideToggle(400, "linear");
                    $('#container_revit').slideToggle(400, "linear");
                }, 5000);
                // toggleMenu();
        }
        toggleMenu()

        // setTimeout(()=>{
        // $('#toggleRevit').on('click', function (){
        //     $('#container_sketch').slideToggle(400, "linear");
        //     $('#container_revit').slideToggle(400, "linear");
        // })}, 3000);
        // setTimeout(()=> {
        // $('#toggleSketchup').on('click', function (){
        //     $('#container_revit').slideToggle(400, "linear");
        //     $('#container_sketch').slideToggle(400, "linear");
        // }), 6000})
        // toggleMenu();
        // }

        $('#about-sketch').on('click', function (){
            $('.about-container').removeClass('translateOut');
            $('.about-container').addClass('translateIn');
        })

        $('#about-revit').on('click', function (){
            $('.about-container').removeClass('translateIn');

            $('.about-container').addClass('translateOut');
        })


})();
