'use strict';

var injectParams = ['$http', '$q'];

var foursquareService = function ($http, $q) {

};

foursquareService.$inject = injectParams;

angular.module('myApp.foursquare').factory('foursquareService', foursquareService);