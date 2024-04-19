
$(".parentslider").slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    prevArrow: ".prev",
    nextArrow: ".next",
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false
            }
        }
    ]
});