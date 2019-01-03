;(function($){
    $(function(){
        $('.slick-slider').slick({
            prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
            dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 1000,
            slidesToShow: 3,
            slidesToScroll: 1
        });
    });
})(jQuery);
var map,
    infoWindowContent = document.getElementsByClassName('monticello')[0].outerHTML;
function initMap() {
    var monticello = {lat: 40.679943, lng: -73.9309167},
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            center: monticello
        }),
        marker = new google.maps.Marker({
            position: monticello,
            map: map,
          //  icon: '../img/Pin.png',
            title: 'Monticello'
        }),
        infoWindow = new google.maps.InfoWindow ({
            content: infoWindowContent
        });
    marker.setMap(map);
    marker.addListener('click', function () {
        infoWindow.open(map,  marker);
    })
}

