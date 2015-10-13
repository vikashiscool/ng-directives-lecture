(function(angular) {
  'use strict';
angular.module('githubApp', [])
  .controller('Controller', ['$scope', function($scope) {
    $scope.instructors = [
   {
     name: 'Nathan Allen',
     github: 'nathanallen',
     image: 'https://avatars3.githubusercontent.com/u/1489337?',
     position: 'Instructor',
     cohort: 21,
   },
   {
     name: 'Alex White',
     github: 'awhit012',
     image: 'https://avatars0.githubusercontent.com/u/6307308?',
    position: 'Instructor',
     cohort: 23,
   },
   {
     name: 'Ilias Tsangaris',
     github: 'iliastsangaris',
     image: 'https://avatars.githubusercontent.com/u/4505008?',
     position: 'Instructor',
     cohort: 21,
   },
   {
     name: 'Briana Veenstra',
     github: 'bgveenstra',
     image: 'https://avatars.githubusercontent.com/u/3254910?',
     position: 'Instructor',
     cohort: 22,
   },
   {
     name: 'Justin Castilla',
     github: 'justincastilla',
     image: 'https://avatars.githubusercontent.com/u/4304660?',
     position: 'Instructor',
     cohort: 21,
   },
   {
     name: 'Adam Braus',
     github: 'ajbraus',
     image: 'https://avatars2.githubusercontent.com/u/997531?',
     position: 'Instructor',
     cohort: 23,
   },
   {
     name: 'Matthew Villwock',
     github: 'mtvillwock',
     image: 'https://avatars2.githubusercontent.com/u/8475488?',
     position: 'Instructor',
     cohort: 23,
   },
   {
     name: 'Ben Hulan',
     github: 'benhulan',
     image: 'https://avatars1.githubusercontent.com/u/7320191?',
     position: 'Instructor',
     cohort: 22,
   },
   {
     name: 'Juliana Lopker',
     github: 'jlopker',
     image: 'https://avatars1.githubusercontent.com/u/3010270?',
     position: 'Instructor',
     cohort: 23,
   },
   {
      name: 'Vikash Parekh',
      github: 'vikashiscool',
      image: 'https://avatars1.githubusercontent.com/u/9686256?v=3&s=460',
      position: 'Developer In Residence',
      cohort: 21,
    },
    {
      name: 'Andrew Patzsch',
      github: 'mrpatzsch',
      image: 'https://avatars2.githubusercontent.com/u/10443141?v=3&s=460',
      position: 'Developer In Residence',
      cohort: 21,
    },
    {
      name: 'Bedford Williamson',
      github: 'goodbedford',
      image: 'https://avatars1.githubusercontent.com/u/2454833?v=3&s=460',
      position: 'Developer In Residence',
      cohort: 22,
    },
    {
      name: 'Ben Manning',
      github: 'ben-manning',
      image: 'https://avatars0.githubusercontent.com/u/8397980?v=3&s=460',
      position: 'Instructor',
      cohort: 24,
    },
    {
      name: 'Travis Gaff',
      github: 'tgaff',
      image: 'https://avatars2.githubusercontent.com/u/1916144?v=3&s=460',
      position: 'Developer In Residence',
      cohort: 23,
    }
  ];
    $scope.orderProp = 'cohort';
  }])
})(window.angular);
