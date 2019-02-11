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
    });
})(jQuery);
// var map,
//     infoWindowContent = document.getElementsByClassName('info-freeUA')[0].outerHTML;
function initMap() {
    var navigator = {lat: 12.9768701, lng: 77.589954},
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 12,
            center: navigator
        }),
        marker = new google.maps.Marker({
            position: navigator,
            map: map,
            title: 'You are this'
        }),
        infoWindow = new google.maps.InfoWindow ({
            content: infoWindowContent
        });
    marker.setMap(map);
    marker.addListener('click', function () {
        infoWindow.open(map,  marker);
    })
}