(function() {
    // initi revit container hide

    $(document).ready(function() {
        $('#fullpage').fullpage();
        anchors:['home', 'revit', 'sketchup', 'autocad', 'promob', 'photoshop', 'corel', 'contato']
    });


    if ($(window).width() > 768) {
        $("#nav-mobile").hide();
    } else {
        $("#nav-desktop").hide();
        $(".clearfixlist").css('display','none');
    }

    var pull = $('.menu-icon');
    var menu = $('.clearfixlist');
    var menuHeight = menu.height();

    $(pull).on('click', function(e) {
        e.preventDefault();
        $(this).css({'transition' : '.5s all'});
        $(this).toggleClass('btn-close').toggleClass('btn-open');
        menu.slideToggle(function () {
            if ($(this).is(':visible')) {
                $(this).css('display','inline-flex')};
            });
    });

    $(window).resize(function(){
        if ($(window).width() > 768) {
            $("#nav-mobile").hide();
            $("#nav-desktop").show();
        } else {
            $("#nav-desktop").hide();
            $("#nav-mobile").show();
            $(".clearfixlist").css('display','none');
        }
    })

    $('#nav-mobile>ul').children().on('click', function(){
        $(pull).toggleClass('btn-close').toggleClass('btn-open');
        menu.slideToggle(function () {
            if ($(this).is(':visible')) {
                $(this).css('display','inline-flex')};
            });
    })


})();
