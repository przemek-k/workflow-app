import 'babel/external-helpers';

import angular from 'angular';
import 'angular-ui-router';
import 'angular-formly';
import 'angular-material';
import 'angular-animate';
import 'angular-messages';
import 'common/components/ng-formly-material.module'
import 'ocLazyLoad';
import { FastClick } from 'fastclick';
import appTemplate from './app.tpl';
import routing from 'common/utils/routing';

let app = angular
  .module('demo', [
    'ui.router',
    'oc.lazyLoad',
    'formly',
    'formlyMaterial',
    'ngMessages',
    'ngAnimate',
    'ngMaterial',
    appTemplate.name
  ]);

app.config(routing(app));

app.config([
  '$urlRouterProvider',
  '$locationProvider',
  '$compileProvider',
  '$logProvider',
  '$httpProvider',
  '$stateProvider',
  '$ocLazyLoadProvider',
  function (
    $urlRouterProvider,
    $locationProvider,
    $compileProvider,
    $logProvider,
    $httpProvider,
    $stateProvider,
    $ocLazyLoadProvider
  ) {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    }).hashPrefix('!');
    $httpProvider.useApplyAsync(true);
    $urlRouterProvider.otherwise('/login');
    $stateProvider.state('root', {
      abstract: true,
      controller: function($scope, $mdSidenav, $location){
        $scope.selected = null;
        $scope.menu = [
          {
            name: 'Login',
            avatar: 'svg-1',
            url: 'login'
          },
          {
            name: 'Dashboard',
            avatar: 'svg-4',
            url: 'dashboard'
          },
          {
            name: 'Processes',
            avatar: 'svg-3',
            url: 'processes'
          },
          {
            name: 'Admin',
            avatar: 'svg-2',
            url: 'admin'
          }
        ];
        $scope.selectUser = function(item) {
          $scope.selected = item;
          $location.url(item.url);
        };
        $scope.toggleList = function() {
          $mdSidenav('left').toggle();
        };
      },
      templateUrl: appTemplate.name
    });

    if(window.prod){
      $logProvider.debugEnabled(false);
      // http://ng-perf.com/2014/10/24/simple-trick-to-speed-up-your-angularjs-app-load-time/
      $compileProvider.debugInfoEnabled(false);
    }

    $ocLazyLoadProvider.config({ debug: false });
  }
]);

app.config(function($mdThemingProvider, $mdIconProvider){

  $mdIconProvider
    .defaultIconSet("dist/assets/svg/avatars.svg", 128)
    .icon("menu"       , "dist/assets/svg/menu.svg"        , 24)
    .icon("share"      , "dist/assets/svg/share.svg"       , 24)
    .icon("google_plus", "dist/assets/svg/google_plus.svg" , 512)
    .icon("hangouts"   , "dist/assets/svg/hangouts.svg"    , 512)
    .icon("twitter"    , "dist/assets/svg/twitter.svg"     , 512)
    .icon("phone"      , "dist/assets/svg/phone.svg"       , 512);

  $mdThemingProvider.theme('default')
    .primaryPalette('brown')
    .accentPalette('red');
});

app.run(function() { FastClick.attach(document.body); });

angular.element(document).ready(function() {
  angular.bootstrap(document.body, [ app.name ], { strictDi: true });
});

export default app;
