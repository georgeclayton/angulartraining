'use strict';

var injectParams = ['$scope', 'mapFactory'];

var mapController = function ($interval, mapFactory) {
    var that = this;
    mapFactory.getCurrentPos().then(function (loc) {
        //warning....
        console.log('In async callback');
        console.log(that);

        that.currentLocation = {
            lat: loc.coords.latitude,
            lng: loc.coords.longitude
        };
    }, function (err) {
        console.log(err);
    })
};

mapController.$inject = injectParams;

angular.module('myApp.map').controller('mapController', mapController);