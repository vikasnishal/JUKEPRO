'use strict';

/**
 * @ngdoc overview
 * @name wooqerApp
 * @description
 * # wooqerApp
 *
 * Main module of the application.
 */
angular
  .module('wooqerApp', [
    'ngRoute','ui.bootstrap','wooqerApp.controllers','wooqerApp.servicesV3','wooqerApp.filters',
    'wooqerApp.directives'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/documents', {
        templateUrl: 'views/browseMedia.html'
      })
      .when('/videos', {
        templateUrl: 'views/browseMedia.html'
      })
      .when('/images', {
        templateUrl: 'views/browseMedia.html'
      })
      .when('/data_details/:uniqueID',{
        templateUrl:'views/dataDetails.html',
      })
      .otherwise({
        redirectTo: '/documents',
      });
  });
