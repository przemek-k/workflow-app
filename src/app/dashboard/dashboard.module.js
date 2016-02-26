import angular from 'angular';

import { DashboardController } from './dashboard.controller';
import dashboardTemplate from './dashboard.tpl';
import appTemplate from '../app.tpl';

function ConfigureModule($stateProvider){
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
          name: 'My workflows',
          avatar: 'hub',
          url: '/workflows'
        },
        {
          name: 'Reports',
          avatar: 'reports',
          url: '/workflows'
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

  $stateProvider.state('app.dashboard', {
    url: '/dashboard',
    template: '<dashboard></dashboard>'
  });
}

export default angular
  .module('dashboard', [
    dashboardTemplate.name,
    appTemplate.name
  ])
  .component('dashboard', {
    templateUrl: dashboardTemplate.name,
    controller: DashboardController
  })
  .config(ConfigureModule);
