'use strict';

angular.module('myApp.home', [])

.directive("menu", function(Mode) {
    return {
        templateUrl : function(elem, attr){
          return 'directives/' + attr.path + '.html'
        }

    };
})

.controller('homeCtrl', ['$scope','$httpParamSerializer', function($scope, $httpParamSerializer) {
  $scope.name = "Victoria";
  $scope.menuHover = function(){
    this.option.active = true;
  }
  $scope.menuNoHover = function(){
    this.option.active = false;
  }
}]);
