jQuery(function ($) {
// style switcher area hide & active

    $('.style-switch-button').on('click', function () {
        $('.template_style_switcher').toggleClass("style-switch-active");
    });

// template color

    $('#blue').on('click', function (e) {
        $('#switcher').attr('href', 'resources/css/color/blue.css');
        $(".tmp_color a").css({'border':'none'});
        $(this).css({'border':'2px solid #b4f3c5'});
        e.preventDefault();
    });

    $('#bridge').on('click', function (e) {
        $('#switcher').attr('href', 'resources/css/color/bridge.css');
        $(".tmp_color a").css({'border':'none'});
        $(this).css({'border':'2px solid #b4f3c5'});
        e.preventDefault();
    });

    $('#green').on('click', function (e) {
        $('#switcher').attr('href', 'resources/css/color/green.css');
        $(".tmp_color a").css({'border':'none'});
        $(this).css({'border':'2px solid #b4f3c5'});
        e.preventDefault();
    });

    $('#light_blue').on('click', function (e) {
        $('#switcher').attr('href', 'resources/css/color/light_blue.css');
        $(".tmp_color a").css({'border':'none'});
        $(this).css({'border':'2px solid #b4f3c5'});
        e.preventDefault();
    });

    $('#orange').on('click', function (e) {
        $('#switcher').attr('href', 'resources/css/color/orange.css');
        $(".tmp_color a").css({'border':'none'});
        $(this).css({'border':'2px solid #b4f3c5'});
        e.preventDefault();
    });

    $('#pink').on('click', function (e) {
        $('#switcher').attr('href', 'resources/css/color/pink.css');
        $(".tmp_color a").css({'border':'none'});
        $(this).css({'border':'2px solid #b4f3c5'});
        e.preventDefault();
    });

    $('#red').on('click', function (e) {
        $('#switcher').attr('href', 'resources/css/color/red.css');
        $(".tmp_color a").css({'border':'none'});
        $(this).css({'border':'2px solid #b4f3c5'});
        e.preventDefault();
    });

    $('#yellow').on('click', function (e) {
        $('#switcher').attr('href', 'resources/css/color/yellow.css');
        $(".tmp_color a").css({'border':'none'});
        $(this).css({'border':'2px solid #b4f3c5'});
        e.preventDefault();
    });

// color scheme
    $('#light').on('click', function (e) {
        $('#switcher_scheme').attr('href', 'resources/css/light_style.css');
        $(".color_scheme a").css({'border':'none'});
        $(this).css({'border':'2px solid #b4f3c5'});
        e.preventDefault();
    });

    $('#dark').on('click', function (e) {
        $('#switcher_scheme').attr('href', 'resources/css/dark_style.css');
        $(".color_scheme a").css({'border':'none'});
        $(this).css({'border':'2px solid #b4f3c5'});
        e.preventDefault();
    });

    $('#mega_dark').on('click', function (e) {
        $('#switcher_scheme').attr('href', 'resources/css/mega_dark_style.css');
        $(".color_scheme a").css({'border':'none'});
        $(this).css({'border':'2px solid #b4f3c5'});
        e.preventDefault();
    });

// on load checked selected styles
    $(window).on('load', function () {
        $('#light_blue').css({'border':'2px solid #b4f3c5'});
        $('#mega_dark').css({'border':'2px solid #b4f3c5'});
    });
});