import 'babel/external-helpers';

import angular from 'angular';
import 'angular-ui-router';
import 'angular-material';
import 'angular-animate';
import 'angular-messages';
import 'angular-formly';
import 'common/components/ng-formly-material.module';
import 'ocLazyLoad';
import { FastClick } from 'fastclick';
import loginTemplate from './login/login.tpl';
import 'ui-router-extras';

var lazyLoad = {};

let app = angular
  .module('demo', [
    'ui.router',
    'oc.lazyLoad',
    'formly',
    'formlyMaterial',
    'ngMessages',
    'ngAnimate',
    'ngMaterial',
    'ct.ui.router.extras.future',
    loginTemplate.name
  ]);

app.config([
  '$urlRouterProvider',
  '$locationProvider',
  '$compileProvider',
  '$logProvider',
  '$httpProvider',
  '$stateProvider',
  '$futureStateProvider',
  '$ocLazyLoadProvider',
  function (
    $urlRouterProvider,
    $locationProvider,
    $compileProvider,
    $logProvider,
    $httpProvider,
    $stateProvider,
    $futureStateProvider,
    $ocLazyLoadProvider
  ) {

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    }).hashPrefix('!');

    $httpProvider.useApplyAsync(true);

    $urlRouterProvider.otherwise('/login');

    $stateProvider.state('login', {
      url: '/login',
      templateUrl: loginTemplate.name,
      controller: function($scope, $http, $location) {
        $scope.doLogin = function() {

          $http.get('./src/app/routes.json').then(function (resp) {
            angular.forEach(resp.data, function (fstate) {
              lazyLoad.futureStateProvider.futureState(fstate);

              $location.url('/dashboard');
            });
          });

          lazyLoad.futureStateProvider.stateFactory('load', ['$q', '$ocLazyLoad', 'futureState',
            function ($q, $ocLazyLoad, futureState) {

              var def = $q.defer();

              System.import(futureState.src).then(loaded => {
                var newModule = loaded;
                if (!loaded.name) {
                  var key = Object.keys(loaded);
                  newModule = loaded[key[0]];
                }

                $ocLazyLoad.load(newModule).then(function() {
                  def.resolve();
                }, function() {
                  console.log('error loading: ' + loaded.name);
                });
              });

              return def.promise;
            }
          ]);
        };
      }
    });

    lazyLoad = {
      stateProvider: $stateProvider,
      futureStateProvider: $futureStateProvider
    };

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
    .icon("dashboard"   , "dist/assets/svg/dashboard.svg"            , 36)
    .icon("hub"         , "dist/assets/svg/device_hub.svg"           , 36)
    .icon("logout"      , "dist/assets/svg/exit_to_app.svg"          , 36)
    .icon("notification", "dist/assets/svg/notifications.svg"        , 36)
    .icon("settings"    , "dist/assets/svg/settings.svg"             , 36)
    .icon("menu"        , "dist/assets/svg/menu.svg"                 , 36)
    .icon("reports"     , "dist/assets/svg/trending_up.svg"          , 36)
    .icon("apps"        , "dist/assets/svg/apps.svg"                 , 36);

  $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('grey')
    .warnPalette('red');
});

app.run(function() { FastClick.attach(document.body); });

angular.element(document).ready(function() {
  angular.bootstrap(document.body, [ app.name ], { strictDi: true });
});

export default app;
