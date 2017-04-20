'use strict';
var injectParams = ['$scope'];

var foursquareController = function ($scope) {

};
foursquareController.$inject = injectParams;
angular.module('myApp.foursquare').controller('foursquareController', foursquareController);