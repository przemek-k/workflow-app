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

    $urlRouterProvider.otherwise('/dashboard');
    $stateProvider.state('app', {
      abstract: true,
      controller: /*@ngInject*/ function($scope, $mdSidenav, $location){
        $scope.selected = { url: '/dashboard' };
        $scope.menu = [
          {
            name: 'Dashboard',
            avatar: 'dashboard',
            url: '/dashboard'
          },
          {
            name: 'Processes',
            avatar: 'hub',
            url: '/processes'
          },
          {
            name: 'Reports',
            avatar: 'reports',
            url: '/processes'
          },
          {
            name: 'Admin',
            avatar: 'settings',
            url: '/admin'
          }
        ];
        $scope.selectUser = function(item) {
          $scope.selected.url = item.url;
          $location.url(item.url);
        };
        $scope.logout = function () { $location.url('/login'); };
        $scope.toggleList = function() { $mdSidenav('left').toggle(); };
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
    .icon("account"     , "dist/assets/svg/account_circle.svg"       , 36)
    .icon("cached"      , "dist/src/assets/svg/cached.svg"           , 36)
    .icon("dashboard"   , "dist/assets/svg/dashboard.svg"            , 36)
    .icon("hub"         , "dist/assets/svg/device_hub.svg"           , 36)
    .icon("logout"      , "dist/assets/svg/exit_to_app.svg"          , 36)
    .icon("face"        , "dist/assets/svg/face_black.svg"           , 36)
    .icon("notification", "dist/assets/svg/notifications.svg"        , 36)
    .icon("app-settings", "dist/assets/svg/settings_applications.svg", 36)
    .icon("settings"    , "dist/assets/svg/settings.svg"             , 36)
    .icon("menu"        , "dist/assets/svg/menu.svg"                 , 36)
    .icon("super-user"  , "dist/assets/svg/supervisor_account.svg"   , 36)
    .icon("reports"     , "dist/assets/svg/trending_up.svg"          , 36)
    .icon("timeline"    , "dist/assets/svg/timeline.svg"             , 36);

  $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('pink')
    .warnPalette('red');
});

app.run(function() { FastClick.attach(document.body); });

angular.element(document).ready(function() {
  angular.bootstrap(document.body, [ app.name ], { strictDi: true });
});

export default app;
