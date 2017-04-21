'use strict';
var injectParams = ['$scope', '$http', '$q', 'mapService'];

var foursquareController = function ($scope, $http, $q, mapService) {






    mapService.getCurrentPosition()
        .then(grabCoords)
        .then(getData)
        .then(displayData)
        .catch(displayError);

    function grabCoords(pos) {
        mapService.syncLocation.lat = pos.coords.latitude;
        mapService.syncLocation.lng = pos.coords.longitude;
        return $q.resolve(pos);
    }

    function getData(pos){
        var url = 'https://api.foursquare.com/v2/venues/search?v=20161016&ll='+pos.coords.latitude+'%2C%20'+pos.coords.longitude+'&query=coffee&intent=checkin&client_id=UFR43GPU2M23AB3BJNRMNZVWMS15PXHY3KGBSIUHZDXR3RQA&client_secret=QBGT44DY10K5U55VE5WEBW5O00E4QFTSEJWAJBU2JFIOW4SS';
        return $http.get(url);
    }

    function displayData(response){
        $scope.data = response.data;
    }

    function displayError(error){
        $scope.errorMessage = error;
    }

};
foursquareController.$inject = injectParams;
angular.module('myApp.foursquare').controller('foursquareController', foursquareController);