function initMap() {
  var city = {lat: 52.223342, lng: 16.834148};
  var map = new google.maps.Map(document.getElementById('map'),
    {
    zoom: 10,
    center: city,
    scrollwheel: false,
    draggable: false,
    zoomControl: true,
    navigationControl: true,
    mapTypeControl: false,
    scaleControl: false,
    disableDefaultUI: true,
    // mapTypeId: google.maps.MapTypeId.ROADMAP,
    // gestureHandling: 'none',
    styles: [
      // {"featureType":"all","elementType":"geometry","stylers":[{"color":"#ffffff"}]},
      // {"elementType":"geometry.fill","stylers":[{color: '#242f3e'}]},
    {"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":1},{"color":"#0146ad"},{"lightness":65}]},
    {"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"off"},{"color":"#0146ad"},{"lightness":16}]},
    {"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},

    // {"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#dbe042"},{"lightness":1}]},

    {"featureType":"ground","elementType":"geometry.fill","stylers":[{"color":"#0146ad"},{"lightness":15}]},
    {"featureType":"landscape.natural","elementType":"geometry.fill", "stylers":[{"color":"#0146ad"},{"lightness":10}]},
    {"featureType":"poi.park", "elementType":"geometry.fill", "stylers":[{"visibility":"off"}]},



    // {"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#76ad01"},{"lightness":10}]},
    {"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#0146ad"},{"lightness":50},{"weight":1.2}]},

    // {"featureType":"poi","elementType":"geometry","stylers":[{"color":"#0146ad"},{"lightness":21}]},
    {"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#0146ad"},{"lightness":17}]},
    {"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#0146ad"},{"lightness":29},{"weight":0.2}]},
    {"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#0146ad"},{"lightness":18}]},
    {"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#0146ad"},{"lightness":16}]},
    // {"featureType":"transit","elementType":"geometry","stylers":[{"color":"#0146ad"},{"lightness":19}]},
    {"featureType":"water","elementType":"geometry","stylers":[{"color":"#0146ad"},{"lightness":45}]},
    {"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#0146ad"},{"lightness":15}]},
    {name: 'styled'}
    ],
  });


  var marker = new google.maps.Marker({
    position: city,
    map: map,

  });
}
