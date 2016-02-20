import angular from 'angular';

// import modalModule from 'common/components/modal';
// import selectModule from 'common/components/select';
// import dateModule from 'common/components/date';
// import timeModule from 'common/components/time';

import { UsersController } from './users.controller';
import usersTemplate from './users.tpl';

function ConfigureModule($stateProvider){
  $stateProvider.state('admin.users', {
    url: '/users',
    template: '<users></users>'
  });
}

export default angular
  .module('admin.users', [
    // modalModule.name,
    // dateModule.name,
    // timeModule.name,
    // selectModule.name,
    usersTemplate.name
  ])
  .component('users', {
    templateUrl: usersTemplate.name,
    controller: UsersController
  })
  .config(ConfigureModule);
