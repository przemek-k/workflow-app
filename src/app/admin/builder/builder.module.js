import angular from 'angular';

import { BuilderController } from './builder.controller';
import builderTemplate from './builder.tpl';

function ConfigureModule($stateProvider){
  $stateProvider.state('root.admin.builder', {
    url: '/builder',
    templateUrl: builderTemplate.name,
    controller: BuilderController,
    controllerAs: 'builderCtrl'
  });
}

export default angular
  .module('admin.builder', [
    builderTemplate.name
  ])
  .config(ConfigureModule);
