'use strict';
var injectParams = ['$scope', '$http', '$q', 'foursquareFactory'];

var foursquareController = function ($scope, $http, $q, foursquareFactory) {

    // function loadFoursquare(){
    foursquareFactory.getData()
        .then(foursquareFactory.putData)
        .then(displayData)
        .catch(displayError);
    // }

    // function getData(){
    //     return $http.get(url);
    // }

    function displayData(data){
        $scope.data = data;
        console.log("assigning 4s data");
    }

    function displayError(error){
        $scope.errorMessage = error;
    }

};
foursquareController.$inject = injectParams;
angular.module('myApp.foursquare').controller('foursquareController', foursquareController);