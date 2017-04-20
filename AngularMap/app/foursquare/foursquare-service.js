'use strict';

var injectParams = ['$http', '$q'];

var foursquareFactory = function ($http, $q) {
    var factory = {};

    var data = null;

    var lat = 41.878114;
    var lng = -87.629798;
    var url = 'https://api.foursquare.com/v2/venues/search?v=20161016&ll='+lat+'%2C%20'+lng+'&query=coffee&intent=checkin&client_id=UFR43GPU2M23AB3BJNRMNZVWMS15PXHY3KGBSIUHZDXR3RQA&client_secret=QBGT44DY10K5U55VE5WEBW5O00E4QFTSEJWAJBU2JFIOW4SS';

    factory.data = data;
    factory.getdata = function getData(){
        return $http.get(url);
    };

    factory.putData = function putData(response){
        data = null;
        data = response.data;
    };

    return factory;
};

foursquareFactory.$inject = injectParams;

angular.module('myApp.foursquare').factory('foursquareFactory', foursquareFactory);