import angular from 'angular';

import FormsModule from './forms/forms.module'
import { ProcessesController } from './processes.controller';
import processesTemplate from './processes.tpl';

function ConfigureModule($stateProvider){
  $stateProvider.state('root.processes', {
    url: '/processes',
    template: '<processes></processes>'
  });
}

export default angular
  .module('processes', [
    processesTemplate.name,
    FormsModule
  ])
  .component('processes', {
    templateUrl: processesTemplate.name,
    controller: ProcessesController
  })
  .config(ConfigureModule);
