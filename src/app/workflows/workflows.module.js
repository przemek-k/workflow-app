import angular from 'angular';

import formsModule from './forms/forms.module';
import { WorkflowsController } from './workflows.controller';
import workflowsTemplate from './workflows.tpl';

function ConfigureModule($stateProvider){
  $stateProvider.state('app.workflows', {
    url: '/workflows',
    template: '<workflows></workflows>'
  });
}

export default angular
  .module('workflows', [
    workflowsTemplate.name,
    formsModule.name
  ])
  .component('workflows', {
    templateUrl: workflowsTemplate.name,
    controller: WorkflowsController
  })
  .config(ConfigureModule);
