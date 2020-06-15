$(function() {

    $('.header__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,

    });



    $('.about__slider-inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider__nav'

    });


    $('.slider__nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.about__slider-inner',

    });

});

$('.header__menu-btn').on('click', function() {
    $('.menu').slideToggle();
})

// responsive: [{
//     breakpoint: 900,
//     settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         arrows: false,
//     }
// }]