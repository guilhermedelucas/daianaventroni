function initMap() {
  var uluru = {lat: -22.215883, lng: -49.94275440000001};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
