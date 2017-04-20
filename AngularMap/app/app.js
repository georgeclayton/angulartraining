'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.map',
  'myApp.foursquare',
  // 'myApp.weather',
  // 'myApp.news',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider
      .when('/foursquare', {
          templateUrl: 'foursquare/foursquare-view.html',
          controller: 'foursquareController'
      })
      // .otherwise({redirectTo: '/foursquare'});
}]);
