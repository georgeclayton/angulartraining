'use strict';

var injectParams = ['$q'];

var mapService = function ($q) {
    var cachedLocation = {};
    var factory = {
        getCurrentPosition: getCurrentPosition,
        syncLocation: {lat:0, lng:0}
    };
    return factory;

    function getCurrentPosition() {
        // $q is angular's implementation of promise
        return $q(function (resolve, reject) {
            navigator.geolocation.getCurrentPosition(function (pos) {
                console.log('In first async callback');
                console.log(pos.coords.longitude);
                resolve(pos);
            }, function (err) {
                reject(err);
            });
        });
    }


};

mapService.$inject = injectParams;

angular.module('myApp.map').factory('mapService', mapService);