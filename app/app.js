'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'sideMenuDirective',
  'topMenuDirective'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.when("/", {
      controller: "homeCtrl",
      templateUrl: "components/home/homeView.html"
  })
}]);
