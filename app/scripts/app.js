//'use strict';
//
///**
// * @ngdoc overview
// * @name ejemploAngularOrlyApp
// * @description
// * # ejemploAngularOrlyApp
// *
// * Main module of the application.
// */
//angular
//  .module('ejemploAngularOrlyApp', [
//    'ngAnimate',
//    'ngCookies',
//    'ngResource',
//    'ngRoute',
//    'ngSanitize',
//    'ngTouch'
//  ])
//  .config(function ($routeProvider) {
//    $routeProvider
//      .when('/', {
//        templateUrl: 'views/main.html',
//        controller: 'MainCtrl',
//        controllerAs: 'main'
//      })
//      .when('/about', {
//        templateUrl: 'views/about.html',
//        controller: 'AboutCtrl',
//        controllerAs: 'about'
//      })
//      .otherwise({
//        redirectTo: '/'
//      });
//  });
//
//
//************************
    

'use strict';
 
angular.module('ejemploAngularOrlyApp', [
'ngCookies',
'ngResource',
'ngSanitize',
'ngRoute'
 ])
.config(function ($routeProvider) {
     $routeProvider
        .when('/', {
             templateUrl: 'views/main.html',
             controller: 'MainCtrl'
        })
     
      .when('/test', {
        templateUrl: 'views/test.html',
        controller: 'TestCtrl'
      })     
      .when('/crud', {
        templateUrl: 'views/crud.html',
         controller: 'CrudCtrl'
      }) 
     
 .otherwise({
     redirectTo: '/'
 });
});

