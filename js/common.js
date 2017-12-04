$(document).ready(function() {
    $(".main_menu_button").click(function () {
        $(".main_menu ul").slideToggle();
    });


    $(".slick_area").slick({
        autoplay: true,
        autoplaySpeed: 3300,
        fade: true,
        pauseOnHover: true,
        swipe: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    swipe: true
                }
            }]
    });

    $(".slick_area_2").slick({
        autoplay: true,
        autoplaySpeed: 2500,
        swipe: true,
        rows: 3,
        slidesPerRow: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 968,
                settings: {
                    fade: true,
                    pauseOnHover: false,
                }
            }]
    });

    $("ol").hide();
    $(".history_txt").hide();
    $("h4 span, h3 span").click(function () {
        $(this).parent().next().slideToggle();
    });
    $(".main_menu a, .top").mPageScroll2id({
        offset: 10
    });

});