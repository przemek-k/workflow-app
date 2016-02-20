import angular from 'angular';
import BuilderModule from 'app/admin/builder/builder.module'
import UsersModule from 'app/admin/users/users.module'

import { AdminController } from './admin.controller';
import adminTemplate from './admin.tpl';

function ConfigureModule($stateProvider){
  $stateProvider.state('admin', {
    url: '/admin',
    template: '<admin></admin>'
  });
}

export default angular
  .module('admin', [
    BuilderModule.name,
    UsersModule.name,
    adminTemplate.name
  ])
  .component('admin', {
    templateUrl: adminTemplate.name,
    controller: AdminController
  })
  .config(ConfigureModule);
