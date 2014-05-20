function initialize() {
  var mapOptions = {
    zoom: 4,
    center: new google.maps.LatLng(-33, 151),
    disableDefaultUI: true
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'),
                                mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);