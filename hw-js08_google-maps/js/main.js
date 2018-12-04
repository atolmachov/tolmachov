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
// function poltava() {
//     var poltava = {lat: 49.595428, lng: 34.547883},
//         map = new google.maps.Map(document.getElementById('map'), {
//             zoom: 19,
//             center: poltava
//         }),
//         marker = new google.maps.Marker({
//             position: poltava,
//             map: map,
//             icon: 'beetroot.png',
//             title: 'Poltava'
//         }),
//         infoWindow = new google.maps.InfoWindow ({
//             content: infoWindowContent
//         });
//     infoWindow.open(map,  marker);
// }
// function kiev() {
//     var kiev = {lat: 50.469863, lng: 30.431971},
//         map = new google.maps.Map(document.getElementById('map'), {
//             zoom: 19,
//             center: kiev
//         }),
//         marker = new google.maps.Marker({
//             position: kiev,
//             map: map,
//             icon: 'beetroot.png',
//             title: 'Kiev'
//         }),
//         infoWindow = new google.maps.InfoWindow ({
//             content: infoWindowContent
//         });
//     infoWindow.open(map,  marker);
// }
//
// var selectOption = document.getElementsByTagName('option');
// if (selectOption = (Value='Kramatorsk')) {
//     freeUA();
// }
// if (selectOption == (Value='Poltava')) {
//     poltava();
// } else {
//     kiev();
// }
//
// ;(function(){
//
// })();