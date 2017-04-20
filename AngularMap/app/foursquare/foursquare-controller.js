'use strict';
var injectParams = ['$scope', '$http', '$q', 'foursquareFactory'];

var foursquareController = function ($scope, $http, $q, foursquareFactory) {
    $scope.lat = 41.878114;
    $scope.lng = -87.629798;

    var url = 'https://api.foursquare.com/v2/venues/search?v=20161016&ll='+$scope.lat+'%2C%20'+$scope.lng+'&query=coffee&intent=checkin&client_id=UFR43GPU2M23AB3BJNRMNZVWMS15PXHY3KGBSIUHZDXR3RQA&client_secret=QBGT44DY10K5U55VE5WEBW5O00E4QFTSEJWAJBU2JFIOW4SS';

    // function loadFoursquare(){
    foursquareFactory.getData().then(foursquareFactory.putD).catch(displayError());
    // }

    // function getData(){
    //     return $http.get(url);
    // }

    function displayData(){
        $scope.data = foursquareFactory.data;
    }

    function displayError(error){
        $scope.errorMessage = error;
    }

};
foursquareController.$inject = injectParams;
angular.module('myApp.foursquare').controller('foursquareController', foursquareController);