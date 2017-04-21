'use strict';
var injectParams = ['$scope', '$http', 'foursquareFactory', 'mapService'];

var foursquareController = function ($scope, $http, foursquareFactory, mapService) {
    $scope.lat = mapService.getCurrentLocation().lat;
    $scope.lng = mapService.getCurrentLocation().lng;

    var url = 'https://api.foursquare.com/v2/venues/search?v=20161016&ll='+$scope.lat+'%2C%20'+$scope.lng+'&query=coffee&intent=checkin&client_id=UFR43GPU2M23AB3BJNRMNZVWMS15PXHY3KGBSIUHZDXR3RQA&client_secret=QBGT44DY10K5U55VE5WEBW5O00E4QFTSEJWAJBU2JFIOW4SS';


    getData().then(displayData).catch(displayError());

    function getData(){
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