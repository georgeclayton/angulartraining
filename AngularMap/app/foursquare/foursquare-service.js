'use strict';

var injectParams = ['$http', '$q'];

var foursquareFactory = function ($http, $q) {
    // var data = [];
    // var url = 'https://api.foursquare.com/v2/venues/search?v=20161016&ll=41.878114%2C%20-87.629798&query=coffee&intent=checkin&client_id=UFR43GPU2M23AB3BJNRMNZVWMS15PXHY3KGBSIUHZDXR3RQA&client_secret=QBGT44DY10K5U55VE5WEBW5O00E4QFTSEJWAJBU2JFIOW4SS';
    //
    // $http({method: 'GET', url: url}).then(function (response) {
    //     data = response.data;
    // });
    //
    //
    //
    //
    // return {
    //     data: getData
    // };
};

foursquareFactory.$inject = injectParams;

angular.module('myApp.foursquare').factory('foursquareFactory', foursquareFactory);