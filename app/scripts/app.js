'use strict';

/**
 * @ngdoc overview
 * @name webHmlFhirConversionDashboardApp
 * @description
 * # webHmlFhirConversionDashboardApp
 *
 * Main module of the application.
 */
angular
  .module('webHmlFhirConversionDashboardApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'webHmlFhirConversionDashboardApp.controllers',
    'webHmlFhirConversionDashboardApp.services'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/status', {
        templateUrl: 'views/status.html',
        controller: 'status',
        controllerAs: 'statusCtrl'
      })
      .otherwise({
        redirectTo: '/status'
      });
  });
