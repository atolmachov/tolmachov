var map,
    infoWindowContent = document.getElementsByClassName('info-freeUA')[0].outerHTML;
function initMap() {
    var freeUA = {lat: 48.73445, lng: 37.57949},
        map = new google.maps.Map(document.getElementById('map'), {
        zoom: 19,
        center: freeUA
    }),
        marker = new google.maps.Marker({
        position: freeUA,
        map: map,
        title: 'FreeUA'
    }),
    infoWindow = new google.maps.InfoWindow ({
        content: infoWindowContent
    });
    marker.setMap(map);
    marker.addListener('click', function () {
        infoWindow.open(map,  marker);
    })
}
//
// ;(function(){
//
// })();