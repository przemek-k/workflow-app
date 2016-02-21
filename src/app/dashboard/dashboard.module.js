import angular from 'angular';

import { DashboardController } from './dashboard.controller';
import dashboardTemplate from './dashboard.tpl';

function ConfigureModule($stateProvider){
  $stateProvider.state('app.dashboard', {
    url: '/dashboard',
    template: '<dashboard></dashboard>'
  });
}

export default angular
  .module('dashboard', [
    dashboardTemplate.name
  ])
  .component('dashboard', {
    templateUrl: dashboardTemplate.name,
    controller: DashboardController
  })
  .config(ConfigureModule);
