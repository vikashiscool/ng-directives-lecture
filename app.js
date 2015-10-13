(function(angular) {
  'use strict';
angular.module('githubApp', [])
  .controller('Controller', ['$scope', function($scope) {
    $scope.students = [
      {
        name: 'Nathan Allen',
        github: 'nathanallen',
        image: 'https://avatars3.githubusercontent.com/u/1489337?',
        tenure: 2
      },
      {
        name: 'Ilias Tsangaris',
        github: 'iliastsangaris',
        image: 'https://avatars.githubusercontent.com/u/4505008?',
        tenure: 1
      },
      {
        name: 'Justin Castilla',
        github: 'justincastilla',
        image: 'https://avatars.githubusercontent.com/u/4304660?',
        tenure: 3
      }
    ];
    $scope.orderProp = 'tenure';
  }])
  .directive('studentNamecard', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/student-namecard.html',
  }})
  .directive('studentAvatar', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/student-avatar.html'
    }
  })
})(window.angular);
