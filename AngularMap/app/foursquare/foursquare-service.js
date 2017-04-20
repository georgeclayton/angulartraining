'use strict';

var injectParams = ['$http', '$q', 'mapService'];

var foursquareFactory = function ($http, $q, mapService) {
    var factory = {};

    var data = null;

    function getUrl(){
        return 'https://api.foursquare.com/v2/venues/search?v=20161016&ll='
            + mapService.loadPos().lat + '%2C%20'
            + mapService.loadPos().lng +
            '&query=coffee&intent=checkin&client_id=UFR43GPU2M23AB3BJNRMNZVWMS15PXHY3KGBSIUHZDXR3RQA&client_secret=QBGT44DY10K5U55VE5WEBW5O00E4QFTSEJWAJBU2JFIOW4SS';

    }

    factory.data = data;
    factory.getData = function () {
        return $http.get(getUrl());
    };

    factory.putData = function (response) {
        data = null;
        data = response.data;
        // console.log(data);
        return data;
    };

    return factory;
};

foursquareFactory.$inject = injectParams;

angular.module('myApp.foursquare').factory('foursquareFactory', foursquareFactory);