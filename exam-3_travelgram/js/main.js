;(function($){
    $(function(){
        $('.slick-slider').slick({
            prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-up"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-down"></i></button>',
            dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1
        });
        var menu = $('nav > ul');
        $('.hamburger').on('click', function () {
            // menu.toggle();
            menu.toggleClass('visible');
            $(this).toggleClass('menu-opened');
        });
    });
})(jQuery);

var marker;

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: {lat: 12.9768701, lng: 77.589954}
    });

    marker = new google.maps.Marker({
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: {lat: 12.9768701, lng: 77.589954}
    });
    marker.addListener('click', toggleBounce);
}

function toggleBounce() {
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}
