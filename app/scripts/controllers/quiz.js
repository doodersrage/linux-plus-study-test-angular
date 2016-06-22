'use strict';

/**
 * @ngdoc function
 * @name quizApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the quizApp
 */
angular.module('quizApp')
  .controller('QuizCtrl', ['$scope','$sce', function ($scope,$sce) {
    // init controller vars
    $scope.qstView = '';
    $scope.answeredQsts = [];
    $scope.answeredQstsLst = [];
    $scope.userSelections = [];
    $scope.checkVals = {};
    $scope.prevQstID = 0;
    $scope.curQstID = 0;
    $scope.curCnt = 0;
    $scope.remCnt = 0;
    $scope.results = '';
    $scope.nextBtn = 0;
    $scope.Math = Math;

    // load exam questions
    $scope.questions = [];

    // toggle selection for a given fruit by name
    $scope.toggleSelection = function(sel) {
      var idx = $scope.userSelections.indexOf(sel);

      // is currently selected
      if (idx > -1) {
        $scope.userSelections.splice(idx, 1);
      } // is newly selected
      else {
        $scope.userSelections.push(sel);
      }
    };

    // generate single anser question options
    $scope.genSingle = function(options){
      var i = 0,
          optsStr = '',
          key;

      for (key in options) {
        optsStr += '<div class="radio">';
        optsStr += '<label>';
        optsStr += '<input type="radio" ng-model="userSelections" value="' + key + '"> ' + key + '. ' + options[key];
        optsStr += '</label>';
        optsStr += '</div>';
      }

      return optsStr;
    };

    // generate multiple anser question options
    $scope.genMultiple = function(options){
      var i = 0,
          optsStr = '',
          key;

      for (key in options) {
        $scope.checkVals[key] = false;
        optsStr += '<div class="checkbox">';
        optsStr += '<label>';
        optsStr += '<input type="checkbox" name="userSelections[]" ng-checked="selection.indexOf(key) > -1" ng-click="toggleSelection(\''+key+'\')" value="' + key + '"> ' + key + '. ' + options[key];
        optsStr += '</label>';
        optsStr += '</div>';
      }

      return optsStr;
    };

    // print selected question
    $scope.prntQuestion = function(question){
      var qstTxt = question.text,
          options = '';

      // determine question type
      switch(question.type){
        case 'single':
          options = $scope.genSingle(question.options);
        break;
        case 'multiple':
        options = $scope.genMultiple(question.options);
        break;
        case 'text':
          options = '<div class="checkbox">';
          options += '<label>';
          options += '<input type="text" ng-model="userSelections" class="form-control"> ';
          options += '</label>';
          options += '</div>';
        break;
      }

      $scope.qstView = '<h3>' + qstTxt + '</h3>' + options;

    };

    // get current cnt
    $scope.currentCnt = function(){
      $scope.curCnt = $scope.answeredQstsLst.length + 1;
    };

    // test display
    $scope.testInit = function(questSet){

      // loads questions
      if(questSet === 'lx0103' || typeof questSet === 'undefined'){
        $scope.questions = lx0103;
      } else if(questSet === 'lx0104'){
        $scope.questions = lx0104;
      } else {
        $scope.questions = [];
      }

      // load initial question
      $scope.questIter();

    };

    $scope.questIter = function(reqQst){

      var qstsLimit = $scope.questions.length,
          qstsAnswd = $scope.answeredQsts.length || 0,
          randQst = reqQst || Math.floor((Math.random() * qstsLimit));

      // reset Everything
      $scope.nextBtn = 0;
      $scope.userSelections = [];
      $scope.results = '';

      // update counts
      $scope.currentCnt();
      $scope.remCnt = qstsLimit - $scope.curCnt;

      // present random question then repeat until all questions have been shown
      if(typeof $scope.answeredQsts[randQst] === 'undefined' || reqQst){
        $scope.curQstID = randQst;
        $scope.prntQuestion($scope.questions[randQst]);
      } else {
        $scope.questIter();
      }

    };

    // load previous question
    $scope.loadPrevious = function(){
      var prevID = $scope.answeredQstsLst.indexOf(Number($scope.curQstID));
      if(prevID === -1){
        if($scope.answeredQstsLst.length > 0){
          prevID = $scope.answeredQstsLst[$scope.answeredQstsLst.length - 1];
        }
      }
      $scope.questIter(prevID);
    };

    // check current question for correctness
    $scope.checkSelections = function(){
      var curQuest = $scope.questions[$scope.curQstID],
          correctAnswersCnt = curQuest.answers.length,
          selAnswersCnt = $scope.userSelections.length,
          i = 0,
          j = 0,
          correctCnt = 0;

        // determine question type
        switch(curQuest.type){
          case 'single':
          case 'multiple':
            for(i; i < selAnswersCnt; ++i){
              j = 0;
              for(j; j < correctAnswersCnt; ++j){
                if($scope.userSelections[i] === curQuest.answers[j]){
                  correctCnt += 1;
                }
              }
            }
          break;
          case 'text':
            for(j; j < correctAnswersCnt; ++j){
              if($scope.userSelections === curQuest.answers[j]){
                correctCnt += 1;
              }
            }
          break;
        }

        // store and show results
        $scope.answeredQsts[$scope.curQstID] = $scope.userSelections;
        if($scope.answeredQstsLst.indexOf($scope.curQstID)){
          $scope.answeredQstsLst.push($scope.curQstID);
        }
        $scope.results = 'Correct answers: ' + curQuest.answers + '<br>Your Results: ' + correctCnt + ' correct';
        $scope.nextBtn = 1;

    };

  }]);
