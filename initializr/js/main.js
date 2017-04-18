var chasesidePosition = {lat: 50.7442907, lng: -1.8258587};
var currentPosition = chasesidePosition;

function blocked(error) {
    console.log(error.message);
    initMap(currentPosition.lat, currentPosition.lng)
}

window.onload = function () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (pos) {
            initMap(pos.coords.latitude, pos.coords.longitude)
        }, blocked);
    } else {
        alert('Geolocation is not supported');
    }
};

function getVenues(latLng) {
    var lat = latLng.lat();
    var lng = latLng.lng();
    var url = "https://apidev.foursquare.com/v2/venues/trending?ll=#{lat},#{lng}&limit=50&radius=15000&#{foursquare_clientID}&#{foursquare_clientSecret}";
    console.log(url);
    $.ajax({
        type: "GET",
        dataType: "jsonp",
        url: url,
        context: document.body,
        success: function (response) {
            console.log(JSON.stringify(response));
        }
    });
}

function initMap(lat, lng) {
    var latLng = new google.maps.LatLng(lat, lng);

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: latLng,
    });

    var marker = new google.maps.Marker({
        position: latLng,
        map: map,
        title: "Your location"
    });

    map.addListener('center_changed', function () {
        // 3 seconds after the center of the map has changed, pan back to the
        // marker.
//                      window.setTimeout(function() {
//                          map.panTo(marker.getPosition());
//                      }, 3000);
        getVenues(map.getCenter());
    });

}
