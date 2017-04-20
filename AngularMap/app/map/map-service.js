'use strict';

var injectParams = ['$q'];

var mapService = function ($q) {

    var factory = {};

    var curPos = { lat: 50, lng: 20 };

    factory.getPos = function () {
        return curPos;
    };

    factory.loadPos = function () {
        // $q is angular's implementation of promise
        return $q(function (resolve, reject) {
            navigator.geolocation.getCurrentPosition(function (pos) {
                curPos = {
                    lat: pos.coords.latitude,
                    lng: pos.coords.longitude
                };
                console.log(curPos);
                resolve(pos);
            }, function (err) {
                reject(err);
            });
        });


    };

    return factory;
};

mapService.$inject = injectParams;

angular.module('myApp.map').factory('mapService', mapService);