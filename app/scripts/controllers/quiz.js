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
    $scope.qstCnt = 0;
    $scope.answeredQsts = [];
    $scope.answeredQstsLst = [];
    $scope.userSelections = [];
    $scope.checkVals = {};
    $scope.prevQstID = 0;
    $scope.curQstID = 0;
    $scope.curQstNum = 0;
    $scope.curCnt = 0;
    $scope.remCnt = 0;
    $scope.results = '';
    $scope.nextBtn = 0;
    $scope.resultsBtn = 0;
    $scope.per_correct = 0;
    $scope.perTest = {cnt: 20};
    $scope.testLimiters = [
      {cnt: 10},
      {cnt: 20},
      {cnt: 40},
      {cnt: 60},
      {cnt: 80},
      {cnt: 100},
      {cnt: 120}
    ]
    // shared local vars
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

      $scope.qstView = '<p>' + qstTxt + '</p>' + options;

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

      // update controller vars
      $scope.qstCnt = $scope.questions.length;

      //console.log($scope.perTest.cnt);

      // load initial question
      $scope.questIter();

    };

    // update test based on selected question count
    $scope.updateTest = function(){
      if(confirm('Changing the test\'s question count will cause your existing progress to start from the beginning. Is this okay?')){
        // restart test with newly set question limit
        $scope.testInit();
      }
    }

    $scope.questIter = function(reqQst){

      var qstsLimit = $scope.perTest.cnt,
          qstsAnswd = $scope.answeredQsts.length || 0,
          randQst = reqQst || Math.floor((Math.random() * qstsLimit));

      // reset Everything
      $scope.nextBtn = 0;
      $scope.userSelections = [];
      $scope.results = '';

      // update counts
      $scope.currentCnt();
      $scope.remCnt = qstsLimit - $scope.curCnt;

      // check for previous question view
      if(typeof $scope.answeredQstsLst[$scope.curQstNum] !== 'undefined'){
        reqQst = randQst = $scope.answeredQstsLst[$scope.curQstNum];
      }

      // update current question number
      $scope.curQstNum += 1;

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
      // get previous question ID
      var prevNum = $scope.curQstNum-2,
          prevID = $scope.answeredQstsLst[prevNum];

      // check for end of question list
      if(typeof prevID !== 'undefined'){
        // update current question number
        $scope.curQstNum -= 2;
        // load previous question
        $scope.questIter(prevID);
      }

    };

    // gather user score data
    $scope.getScores = function(){
      var ansQstsLn = $scope.answeredQstsLst.length,
          i = 0,
          correctCnt = 0;

      // walk through all user supplied answers
      for(i; i < ansQstsLn; ++i){
        if($scope.answeredQsts[$scope.answeredQstsLst[i]].ansCorrect === 1){
          ++correctCnt;
        }
      }

      $scope.per_correct = Math.round((100 / $scope.curCnt) * correctCnt);
    };

    // get per completed
    $scope.perCompleted = function(){
      return Math.round((100 / $scope.perTest.cnt) * $scope.curCnt-1);
    };

    // get per remaining
    $scope.perRemaning = function(){
      return Math.round((100 / $scope.perTest.cnt) * $scope.remCnt);
    };

    // check current question for correctness
    $scope.checkSelections = function(){
      var curQuest = $scope.questions[$scope.curQstID],
          correctAnswersCnt = curQuest.answers.length,
          selAnswersCnt = $scope.userSelections.length,
          i = 0,
          j = 0,
          correctCnt = 0,
          ansCorrect = 0;

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
            // check for correct answer
            if(correctCnt === correctAnswersCnt){
              ansCorrect = 1;
            }
          break;
          case 'text':
            for(j; j < correctAnswersCnt; ++j){
              if($scope.userSelections === curQuest.answers[j]){
                correctCnt += 1;
                ansCorrect = 1;
              }
            }
          break;
        }

        // store and show results
        $scope.answeredQsts[$scope.curQstID] = { 'answers': $scope.userSelections };
        // store correct status
        $scope.answeredQsts[$scope.curQstID].ansCorrect = ansCorrect;
        // saved answered questions
        if($scope.answeredQstsLst.indexOf($scope.curQstID) === -1){
          $scope.answeredQstsLst.push($scope.curQstID);
        }
        // update correct stats
        $scope.results = 'Correct answers: ' + curQuest.answers + '<br>Your Results: ' + correctCnt + ' correct';
        if($scope.perCompleted() < 100){
          $scope.nextBtn = 1;
          $scope.resultsBtn = 0;
        } else {
          $scope.nextBtn = 0;
          $scope.resultsBtn = 1;
        }

        // update user scores
        $scope.getScores();

    };

    // print quiz results
    $scope.viewResults = function(){
      
    };

}]);
