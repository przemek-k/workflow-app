import angular from 'angular';

import { ReportsController } from './reports.controller';
import reportsTemplate from './reports.tpl';

function ConfigureModule($stateProvider){
  $stateProvider.state('app.reports', {
    url: '/reports',
    template: '<reports></reports>'
  });
}

export default angular
  .module('reports', [
    reportsTemplate.name
  ])
  .component('reports', {
    templateUrl: reportsTemplate.name,
    controller: ReportsController
  })
  .config(ConfigureModule);
