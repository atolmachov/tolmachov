;(function($){
    $(function(){
        $('.slick-slider').slick({
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
    infoWindowContent = document.getElementsByClassName('info-freeUA')[0].outerHTML;
function initMap() {
    var monticello = {lat: 40.679943, lng: -73.9309167},
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            center: monticello
        }),
        marker = new google.maps.Marker({
            position: monticello,
            map: map,
            // icon: '../img/pin.png',
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

