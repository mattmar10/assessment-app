(function () {
    'use strict';

    angular.module('myApp').directive('assessment', function (QuestionService) {
        return {
            restrict: 'AE',
            scope: {},
            templateUrl: 'assessment/question-template.html',
            link: function (scope, elem, attrs) {
                scope.start = function () {
                    scope.id = 0;
                    scope.quizOver = false;
                    scope.inProgress = true;
                    scope.getQuestion();
                };

                scope.reset = function () {
                    scope.inProgress = false;
                    scope.score = 0;
                };

                scope.getLikertValue = function () {
                    console.log('getting value');
                    return scope.likertSlider;
                };

                scope.getQuestion = function () {
                    var q = QuestionService.getQuestion(scope.id);
                    if (q) {
                        scope.question = q.question;
                        scope.options = q.options;
                        scope.answer = q.answer;
                        scope.answerMode = true;
                    } else {
                        scope.quizOver = true;
                    }
                };

                scope.checkAnswer = function () {
                    if (!$('input[name=answer]:checked').length) return;

                    var ans = $('input[name=answer]:checked').val();

                    if (ans == scope.options[scope.answer]) {
                        scope.score++;
                        scope.correctAns = true;
                    } else {
                        scope.correctAns = false;
                    }

                    scope.answerMode = false;
                };

                scope.nextQuestion = function () {
                    scope.id++;
                    scope.getQuestion();
                };

                scope.reset();
            }
        };
    });

})();
