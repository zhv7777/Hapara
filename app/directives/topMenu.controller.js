'use strict';

angular.module('topMenuDirective', [])


.controller('topMenuController', ['$scope','$httpParamSerializer', 'Mode', '$timeout', function($scope, $httpParamSerializer, Mode, $timeout) {
  $scope.topMenuOptions = [
    {name: "Classes", url: "/", hidden: false, active: true, level: "all"},
    {name: "Lessons", url: "lessons.html", hidden: false, active: false, level: 'teacher'},
    {name: "Libraries", url: "libraries.html", hidden: false, active: false, level: 'teacher'},
    {name: "Assignments", url: "assignments.html", hidden: true, active: false, level: 'student'}
  ];
  $scope.assessLevel = Mode.getAssessLevel();
  $scope.test = function(){
    $scope.level = Mode.getAssessLevel();
    console.log($scope.level);
  }
  $(document).ready(function(){
    $('#selectMode').change(function(){
      $timeout(function () {
        $scope.assessLevel = Mode.getAssessLevel();
      }, 100);

    });
  })
}]);
