'use strict';

/**
 * @ngdoc overview
 * @name gitHubApp
 * @description
 * # gitHubApp
 *
 * Main module of the application.
 */
angular
  .module('gitHubApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('state1', {
          url: "/home",
          templateUrl: "views/test.html",
          controller: 'GitHubDataController'
         })
        .state('state1.edit', {
          url: "/edit/{userId}",
          templateUrl: "views/user.html",
          controller: 'UserController'
         });  

        $urlRouterProvider.otherwise("/home");
  });
