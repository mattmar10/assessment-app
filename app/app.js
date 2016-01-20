'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'ngRoute',
  'ngMaterial',
  'myApp.view1',
  'myApp.assessment',
  'myApp.version'
]).
config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when('/assessment', {
        templateUrl: 'assessment/assessment.html',
        controller: 'AssessmentCtrl'
    });

    $routeProvider.otherwise({
        redirectTo: '/view1'
    });
}]);
