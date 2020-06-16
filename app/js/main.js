$(function() {

    $('.header__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        fade: true,
        speed: 800,
        infinite: true,
        cssEase: 'ease-in-out',
        touchThreshold: 100,
        appendDots: '.header__inner-content',
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

function GoUrl(url) {
    location.href = url;
}

function initialize() {
    var myLatlng = new google.maps.LatLng(53.3333, -3.08333),
        mapOptions = {
            zoom: 11,
            center: myLatlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
    var map = new google.maps.Map(document.getElementById('map'), mapOptions),
        contentString = 'Здесь должен быть какой-то адрес',
        infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 500
        });

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
    });

    google.maps.event.addDomListener(window, "resize", function() {
        var center = map.getCenter();
        google.maps.event.trigger(map, "resize");
        map.setCenter(center);
    });
}
google.maps.event.addDomListener(window, 'load', initialize);

// responsive: [{
//     breakpoint: 900,
//     settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         arrows: false,
//     }
// }]