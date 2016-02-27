import 'babel/external-helpers';

import angular from 'angular';
import 'angular-ui-router';
import 'ocLazyLoad';
import 'angular-formly';
import 'common/components/ng-formly-material.module';
import 'angular-messages';
import 'angular-animate';
import 'angular-material';
import 'ui-router-extras'; //Todo load only future states
import { FastClick } from 'fastclick';
import loginTemplate from './login/login.tpl';
import { themeConfig } from 'app/config/theme-config';
import { routeConfig } from 'app/config/route-config';
import { debugConfig } from 'app/config/debug-config';

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
    loginTemplate.name
  ])
  .config(debugConfig)
  .config(routeConfig)
  .config(themeConfig)
  .config(/*@ngInject*/ function ($httpProvider) { $httpProvider.useApplyAsync(true); })
  .run(function() { FastClick.attach(document.body); });

angular.element(document).ready(function() {
  angular.bootstrap(document.body, [ 'workflow' ], { strictDi: true });
});
