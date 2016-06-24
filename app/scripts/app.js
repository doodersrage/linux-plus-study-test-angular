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
    'ngTouch',
    'LocalStorageModule'
  ])
  .config(function (localStorageServiceProvider) {
    localStorageServiceProvider
      .setPrefix('quiz')
      .setStorageType('sessionStorage')
      .setNotify(true, true)
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/lx0-103', {
        templateUrl: 'views/lx0-103.html',
        controller: 'QuizCtrl'
      })
      .when('/lx0-104', {
        templateUrl: 'views/lx0-104.html',
        controller: 'QuizCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
