'use strict';

/**
 * @ngdoc overview
 * @name quizApp
 * @description
 * # quizApp
 *
 * Main module of the application.
 */
angular
  .module('quizApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/lx0-103', {
        templateUrl: 'views/lx0-103.html',
        controller: 'Lx0103Ctrl'
      })
      .when('/lx0-104', {
        templateUrl: 'views/lx0-104.html',
        controller: 'Lx0103Ctrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
