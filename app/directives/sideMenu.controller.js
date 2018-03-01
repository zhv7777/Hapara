'use strict';

angular.module('sideMenuDirective', [])
.service('Mode', function() {
  this.AssesLevel = "teacher";
  this.getAssessLevel = function(){
    return this.AssesLevel;
  }
})

.controller('sideMenuController', ['$scope','$httpParamSerializer', 'Mode', function($scope, $httpParamSerializer, Mode) {
  $scope.feed = {};
  $scope.feed.configs = [
    {name: "Sign out", url: "libraries.html"},
    {name: "Setting", url: "libraries.html"},
    {name: "student@school.org", url: "/"},
    {name: "teacher@school.org", url: "lessons.html"}
  ];
    $('.side-menu').change(function(){
      var selected = $('.side-menu option:selected').text().toString();
      if(selected.indexOf('student') >= 0){
        Mode.AssesLevel = "student";
      }
      else {
        Mode.AssesLevel = "teacher";
      }
    })
}]);
