import 'babel/external-helpers';
import angular from 'angular';
import 'angular-ui-router';
import 'ocLazyLoad';
import 'angular-formly';
import 'common/components/ng-formly-material.module';
import 'angular-messages';
import 'angular-animate';
import 'angular-material';
import 'npm:ui-router-extras@0.0.14/release/modular/ct-ui-router-extras.future';
import 'npm:ui-router-extras@0.0.14/release/modular/ct-ui-router-extras.core';
import loginTemplate from './login/login.tpl';
import signupTemplate from './login/signup.tpl';
import { FastClick } from 'fastclick';
import { themeConfig } from 'app/config/theme-config';
import { routeConfig } from 'app/config/route-config';
import { debugConfig } from 'app/config/debug-config';
import 'firebase';
import 'angularfire';
import userModule from 'common/services/user';

export default angular
  .module('workflow', [
    'ui.router',
    'oc.lazyLoad',
    'formly', //Todo move formly down to dashboard
    'formlyMaterial',
    'ngMessages',
    'ngAnimate',
    'ngMaterial',
    'ct.ui.router.extras.future',
    'firebase',
    loginTemplate.name,
    signupTemplate.name,
    userModule.name
  ])
  .config(debugConfig)
  .config(routeConfig)
  .config(themeConfig)
  .config(/*@ngInject*/ function ($httpProvider) { $httpProvider.useApplyAsync(true); })
  .run(function() { FastClick.attach(document.body); });

angular.element(document).ready(function() {
  angular.bootstrap(document.body, [ 'workflow' ], { strictDi: true });
});
