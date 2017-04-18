var uluru = {lat: -25.363, lng: 131.044};

function geoError(error) {
    console.log(error.message);
}

window.onload = function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(pos){
            uluru = {lat: pos.coords.longitude, lng: pos.coords.latitude}
        }, geoError);
    } else {
        alert('Geolocation is not supported');
    }
};

function getVenues(latLng){
    var lat = latLng.lat();
    var lng = latLng.lng();
    var url = "https://apidev.foursquare.com/v2/venues/trending?ll=#{lat},#{lng}&limit=50&radius=15000&#{foursquare_clientID}&#{foursquare_clientSecret}";
    console.log(url);
    $.ajax({
        type: "GET",
        dataType: "jsonp",
        url: url,
        context: document.body,
        success: function(response){
            console.log(JSON.stringify(response));
        }
    });
}

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });

    map.addListener('center_changed', function() {
        // 3 seconds after the center of the map has changed, pan back to the
        // marker.
//                      window.setTimeout(function() {
//                          map.panTo(marker.getPosition());
//                      }, 3000);
        getVenues(map.getCenter());
    });

}
