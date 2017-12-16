function initMap() {
    var centerPnt = {lat: 52.230604, lng: 20.987288};
    var map = new google.maps.Map(document.getElementById('mainMap'), {
        zoom: 16,
        center: centerPnt,
        styles : [{"featureType": "all", "elementType": "labels.text.fill", "stylers": [{"saturation": 36 }, {"color": "#000000"}, {"lightness": 40 } ] }, {"featureType": "all", "elementType": "labels.text.stroke", "stylers": [{"visibility": "on"}, {"color": "#000000"}, {"lightness": 16 } ] }, {"featureType": "all", "elementType": "labels.icon", "stylers": [{"visibility": "off"} ] }, {"featureType": "administrative", "elementType": "geometry.fill", "stylers": [{"color": "#000000"}, {"lightness": 20 } ] }, {"featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{"color": "#000000"}, {"lightness": 17 }, {"weight": 1.2 } ] }, {"featureType": "landscape", "elementType": "geometry", "stylers": [{"color": "#000000"}, {"lightness": 20 } ] }, {"featureType": "poi", "elementType": "geometry", "stylers": [{"color": "#000000"}, {"lightness": 21 } ] }, {"featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{"color": "#000000"}, {"lightness": 17 } ] }, {"featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{"color": "#000000"}, {"lightness": 29 }, {"weight": 0.2 } ] }, {"featureType": "road.arterial", "elementType": "geometry", "stylers": [{"color": "#000000"}, {"lightness": 18 } ] }, {"featureType": "road.local", "elementType": "geometry", "stylers": [{"color": "#000000"}, {"lightness": 16 } ] }, {"featureType": "transit", "elementType": "geometry", "stylers": [{"color": "#000000"}, {"lightness": 19 } ] }, {"featureType": "water", "elementType": "geometry", "stylers": [{"color": "#000000"}, {"lightness": 17 } ] } ]
    });
    var marker = new google.maps.Marker({
        position: centerPnt,
        map: map,
        icon : 'images/marker.png'
    });
}

export {initMap}