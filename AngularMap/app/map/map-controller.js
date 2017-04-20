'use strict';

var injectParams = ['$scope', 'mapService'];

var mapController = function ($interval, mapService) {
    var that = this;

    mapService.loadPos().then(that.currentLocation = mapService.getPos());
    that.currentLocation = mapService.getPos();
};

mapController.$inject = injectParams;

angular.module('myApp.map').controller('mapController', mapController);