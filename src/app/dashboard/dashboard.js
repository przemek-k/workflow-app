import angular from 'angular';

import { modalModule } from 'common/core';
import popupModule from 'common/components/popup';
import timeModule from 'common/components/time';

import { DashboardController } from './DashboardController';
import dashboardTemplate from './dashboards.tpl';

function ConfigureModule($stateProvider){
  $stateProvider.state('dashboards', {
    url: '/dashboards',
    templateUrl: dashboardTemplate.name,
    controller: DashboardController,
    controllerAs: 'dashboardCtrl'
  });
}

export default angular
  .module('dashboard', [
    modalModule.name,
    popupModule.name,
    timeModule.name,
    dashboardTemplate.name
  ])
  .component('dashboards', )
  .config(ConfigureModule);
