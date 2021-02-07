$(document).ready(function() {
    // jQuery code
    //////////////////////// Prevent closing from click inside dropdown
    $(document).on("click", ".dropdown-menu", function(e) {
        e.stopPropagation();
    });

    if ($(window).width() < 992) {
        $(".has-submenu a").click(function(e) {
            e.preventDefault();
            $(this)
                .next(".megasubmenu")
                .toggle();

            $(".dropdown").on("hide.bs.dropdown", function() {
                $(this)
                    .find(".megasubmenu")
                    .hide();
            });
        });
    }

    // Slick Carousel
    $(".ts-carousel").slick({
        autoplay: true,
        arrows: true,
        prevArrow: ".ts-carousel__navs--prev",
        nextArrow: ".ts-carousel__navs--next"
    });

    $(".ts-products").slick({
        slidesToShow: 3,
        centerMode: true,
        arrows: true,
        variableWidth: true,
        prevArrow: ".ts-carousel__navs--prev",
        nextArrow: ".ts-carousel__navs--next"
    });

    $(".dropdown").on("show.bs.dropdown", function() {
        $(this)
            .find(".dropdown-menu")
            .first()
            .stop(true, true)
            .slideDown();
    });

    // Add slideUp animation to Bootstrap dropdown when collapsing.
    $(".dropdown").on("hide.bs.dropdown", function() {
        $(this)
            .find(".dropdown-menu")
            .first()
            .stop(true, true)
            .hide();
    });

    $(".dp_image-show").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: ".dp_image-nav"
    });
    $(".dp_image-nav").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: ".dp_image-show",
        centerMode: true,
        focusOnSelect: true
    });
});
