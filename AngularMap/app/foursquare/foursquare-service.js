'use strict';

var injectParams = ['$http', '$q', 'mapService'];

var foursquareFactory = function ($http, $q, mapService) {

    // maybe data creation can sit here
};

foursquareFactory.$inject = injectParams;

angular.module('myApp.foursquare').factory('foursquareFactory', foursquareFactory);