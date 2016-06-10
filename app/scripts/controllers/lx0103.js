'use strict';

/**
 * @ngdoc function
 * @name quizApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the quizApp
 */
angular.module('quizApp')
  .controller('Lx0103Ctrl', ['$scope','$sce', function ($scope,$sce) {
    // init controller vars
    $scope.qstView = '';
    $scope.answeredQsts = [];
    $scope.userSelections = [];
    $scope.checkVals = {};
    $scope.prevQstID = 0;
    $scope.curQstID = 0;
    $scope.curCnt = 0;
    $scope.remCnt = 0;
    $scope.results = '';
    $scope.nextBtn = 0;

    // load exam questions
    $scope.questions = [];
    $scope.questions[0] = {
      'type': 'single',
      'text': 'Which SysV init configuration file should be modified to disable the ctrl-alt-delete key combination?',
      'options': {
        'A': '/etc/keys',
        'B': '/proc/keys',
        'C': '/etc/inittab',
        'D': '/proc/inittab',
        'E': '/etc/reboot'
      },
      'answers': [
        'C'
      ]
    };
    $scope.questions[1] = {
      'type': 'single',
      'text': 'During a system boot cycle, what program is executed after the BIOS completes its tasks?',
      'options': {
        'A': 'The bootloader',
        'B': 'The inetd program',
        'C': 'The init program',
        'D': 'The kernel'
      },
      'answers': [
        'A'
      ]
    };
    $scope.questions[2] = {
      'type': 'multiple',
      'text': 'Which run levels should never be declared as the default run level when using SysV init? (Choose TWO correct answers.)',
      'options': {
        'A': 0,
        'B': 1,
        'C': 3,
        'D': 5,
        'E': 6
      },
      'answers': [
        'A',
        'E'
      ]
    };
    $scope.questions[3] = {
      'type': 'single',
      'text': 'Which of the following statements is correct when talking about /proc/?',
      'options': {
        'A': 'All changes to files in /proc/ are stored in /etc/proc.d/ and restored on reboot.',
        'B': 'All files within /proc/ are read-only and their contents cannot be changed.',
        'C': 'All changes to files in /proc/ are immediately recognized by the kernel.',
        'D': 'All files within /proc/ are only readable by the root user.'
      },
      'answers': [
        'C'
      ]
    };
    $scope.questions[4] = {
      'type': 'multiple',
      'text': 'What of the following statements are true regarding /dev/ when using udev? (Choose TWO correct answers.)',
      'options': {
        'A': 'Entries for all possible devices get created on boot even if those devices are not connected.',
        'B': 'Additional rules for udev can be created by adding them to /etc/udev/rules.d/.',
        'C': 'When using udev, it is not possible to create block or character devices in /dev/ using mknod.',
        'D': 'The /dev/ directory is a filesystem of type tmpfs and is mounted by udev during system startup.',
        'E': 'The content of /dev/ is stored in /etc/udev/dev and is restored during system startup.'
      },
      'answers': [
        'B',
        'D'
      ]
    };
    $scope.questions[5] = {
      'type': 'multiple',
      'text': 'Which of the following information is stored within the BIOS? (Choose TWO correct answers.)',
      'options': {
        'A': 'Boot device order',
        'B': 'Linux kernel version',
        'C': 'Timezone',
        'D': 'Hardware configuration',
        'E': 'The system\'s hostname'
      },
      'answers': [
        'A',
        'D'
      ]
    };
    $scope.questions[6] = {
      'type': 'multiple',
      'text': 'Which of the following commands reboots the system when using SysV init? (Choose TWO correct answers.)',
      'options': {
        'A': 'shutdown -r now',
        'B': 'shutdown -r "rebooting"',
        'C': 'telinit 6',
        'D': 'telinit 0',
        'E': 'shutdown -k now "rebooting"'
      },
      'answers': [
        'A',
        'C'
      ]
    };
    $scope.questions[7] = {
      'type': 'multiple',
      'text': 'Which of the following are init systems used within Linux systems? (Choose THREE correct answers.)',
      'options': {
        'A': 'startd',
        'B': 'systemd',
        'C': 'Upstart',
        'D': 'SysInit',
        'E': 'SysV init'
      },
      'answers': [
        'B',
        'C',
        'E'
      ]
    };
    $scope.questions[8] = {
      'type': 'text',
      'text': 'Which file in the /proc filesystem lists parameters passed from the bootloader to the kernel? (Specify the file name only without any path.)',
      'answers': [
        'cmdline',
        '/proc/cmdline'
      ]
    };

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
      var qstsAnswd = $scope.answeredQsts.length || 0,
          i = 0,
          ansCnt = 0;

      for(i; i < qstsAnswd; ++i){
        if($scope.answeredQsts[i]){
          ansCnt += 1;
        }
      }

      $scope.curCnt = ansCnt + 1;
    };

    // test display
    $scope.testInit = function(reqQst){
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
        $scope.testInit();
      }

    };

    // load previous question
    $scope.loadPrevious = function(){

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
        $scope.results = 'Correct answers: ' + curQuest.answers + '<br>Your Results: ' + correctCnt + ' correct';
        $scope.nextBtn = 1;

    };

  }]);
