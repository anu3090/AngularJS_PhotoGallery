
'use strict';
/*Mainly used for displaying the routing information */

angular.module('app',['ngRoute','albums']).
config(['$routeProvider','$locationProvider', function ($routeProvider,$locationProvider) {
  $routeProvider
      .when('/albums',
          {
            templateUrl: 'partials/albums.html',controller: 'albumcontroller'
          });
  $routeProvider
      .when('/albums/:id',
          {
            templateUrl: '/partials/photos.html',controller: 'photocontroller'
          });
  $routeProvider.otherwise({ redirectTo: '/albums' });
  //$locationProvider.html5Mode(true);
}]);

angular.module('albums',[]);