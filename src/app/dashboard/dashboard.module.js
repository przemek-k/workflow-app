import angular from 'angular';

import { modalModule } from 'common/core';
import popupModule from 'common/components/popup';
import timeModule from 'common/components/time';

import { DashboardController } from './dashboard.controller';
import dashboardTemplate from './dashboard.tpl';

function ConfigureModule($stateProvider){
  $stateProvider.state('dashboards', {
    url: '/dashboards',
    template: '<dashboard></dashboard>'
  });
}

export default angular
  .module('dashboard', [
    modalModule.name,
    popupModule.name,
    timeModule.name,
    dashboardTemplate.name
  ])
  .component('dashboard', {
    templateUrl: dashboardTemplate.name,
    controller: DashboardController
  })
  .config(ConfigureModule);
