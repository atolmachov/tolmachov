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
        icon: 'beetroot.png',
        title: 'FreeUA'
    }),
    infoWindow = new google.maps.InfoWindow ({
        content: infoWindowContent
    });
        infoWindow.open(map,  marker);
}
