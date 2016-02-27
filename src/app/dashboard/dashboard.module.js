import angular from 'angular';

import { DashboardController } from './dashboard.controller';
import dashboardTemplate from './dashboard.tpl';
import appWrapperTemplate from './app-wrapper.tpl';

function ConfigureModule($stateProvider){
  $stateProvider.state('app', {
    abstract: true,
    controller: /*@ngInject*/ function($scope, $mdSidenav, $location, CurrentUser){
      $scope.selected = { url: '/dashboard' };
      $scope.menu = CurrentUser.getUserRoutes();
      $scope.selectUser = function(item) {
        $scope.selected.url = item.urlPrefix;
        $location.url(item.urlPrefix);
      };
      $scope.logout = function () { $location.url('/login'); };
      $scope.toggleList = function() { $mdSidenav('left').toggle(); };
    },
    templateUrl: appWrapperTemplate.name
  });

  $stateProvider.state('app.dashboard', {
    url: '/dashboard',
    template: '<dashboard></dashboard>'
  });
}

export default angular
  .module('dashboard', [
    dashboardTemplate.name,
    appWrapperTemplate.name
  ])
  .component('dashboard', {
    templateUrl: dashboardTemplate.name,
    controller: DashboardController
  })
  .config(ConfigureModule);
