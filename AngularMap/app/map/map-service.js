'use strict';

var injectParams = ['$q'];

var mapService = function ($q) {

    var factory = {};

    var currentLocation = { lat: 50, lng: 20 };

    factory.getCurrentLocation = function () {
        return currentLocation;
    };

    function getCurrentPosition () {
        // $q is angular's implementation of promise
        return $q(function (resolve, reject) {
            navigator.geolocation.getCurrentPosition(function (pos) {
                resolve(pos);
            }, function (err) {
                reject(err);
            });
        });
    }

    factory.loadPosition = function () {
        getCurrentPosition().then(function (loc) {
            //warning....
            console.log('In async callback');
            console.log(JSON.stringify(loc));

            currentLocation = {
                lat: loc.coords.latitude,
                lng: loc.coords.longitude
            };
        }, function (err) {
            console.log(err);
        });
    };

    return factory;
};

mapService.$inject = injectParams;

angular.module('myApp.map').factory('mapService', mapService);