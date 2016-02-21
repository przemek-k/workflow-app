import angular from 'angular';

import { UsersController } from './users.controller';
import usersTemplate from './users.tpl';

function ConfigureModule($stateProvider){
  $stateProvider.state('root.admin.users', {
    url: '/users',
    template: '<users></users>'
  });
}

export default angular
  .module('admin.users', [
    usersTemplate.name
  ])
  .component('users', {
    templateUrl: usersTemplate.name,
    controller: UsersController
  })
  .config(ConfigureModule);
