'use strict';

var injectParams = ['$scope', 'mapService'];

var mapController = function ($interval, mapService) {
    var that = this;
    that.currentLocation = {lat: 0, lng: 0};

    mapService.getCurrentPosition().then(function (pos) {
        mapService.syncLocation.lat = pos.coords.latitude;
        mapService.syncLocation.lng = pos.coords.longitude;
        that.currentLocation.lat = mapService.syncLocation.lat;
        that.currentLocation.lng = mapService.syncLocation.lng;
    });

};

mapController.$inject = injectParams;

angular.module('myApp.map').controller('mapController', mapController);