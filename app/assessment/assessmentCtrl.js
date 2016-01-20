'use strict';

var assessmentModule = angular.module('myApp.assessment', ['ngRoute'])

assessmentModule.controller('AssessmentCtrl', ['$scope', 'QuestionService', function ($scope, QuestionService) {

    console.log(QuestionService.getQuestion(1));

    $scope.getLikertValue = function () {
        console.log('getting value');
        return $scope.likertSlider;
    }
}]);
