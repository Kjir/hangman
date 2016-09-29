'use strict';

// Declare app level module which depends on views, and components
angular.module('rn.hangman', [
  'ui.bootstrap',
  'ui.router'
])
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
      $stateProvider.state('home', {
        url: '',
        templateUrl: 'home.html',
        controller: 'HomeController',
        controllerAs: 'vm'
      });

      $urlRouterProvider.otherwise('');
    }
  ]);
