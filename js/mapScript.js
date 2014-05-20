function initialize() {
  var myLatlng1 = new google.maps.LatLng(44.771463, 4.721819);
  // var myLatlng2 = new google.maps.LatLng(51.972203, 5.668239);
  var mapOptions = {
    zoom: 4,
    disableDefaultUI: true,
    center: myLatlng1
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'),
                                mapOptions);

  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h2 id="firstHeading" class="firstHeading">Rompon, France</h2>'+
      '<div id="bodyContent">'+
      '<p>The village where I grew up</p>'+
      '</div>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
      content: contentString
  });

  var marker = new google.maps.Marker({
      position: myLatlng1,
      map: map,
      title: 'Rompon, France'
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });
}


google.maps.event.addDomListener(window, 'load', initialize);