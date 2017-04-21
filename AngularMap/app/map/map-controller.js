'use strict';

var injectParams = ['$scope', 'mapService'];

var mapController = function ($interval, mapService) {
    var that = this;

    mapService.loadPosition().then(function () {
        that.currentLocation = mapService.getCurrentLocation();
    });


};

mapController.$inject = injectParams;

angular.module('myApp.map').controller('mapController', mapController);