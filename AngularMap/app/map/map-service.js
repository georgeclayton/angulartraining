'use strict';

var injectParams = ['$q'];

var mapFactory = function ($q) {

    var factory = {};

    factory.getCurrentPos = function () {
        // $q is angular's implementation of promise
        return $q(function (resolve, reject) {
            navigator.geolocation.getCurrentPosition(function (pos) {
                resolve(pos);
            }, function (err) {
                reject(err);
            });
        });


    };

    return factory;
};

mapFactory.$inject = injectParams;

angular.module('myApp.map').factory('mapFactory', mapFactory);