import angular from 'angular';

import SelectModule from 'common/components/select';
import DateModule from 'common/components/date';
import ModalModule from 'common/components/modal';
import UserModule from 'common/services/user';

import { LoginController } from './login.controller';
import loginTemplate from './login.tpl';
import signupTemplate from './signup.tpl';
import './login.css!';

function ConfigureModule($stateProvider){
  $stateProvider.state('login', {
    url: '/login',
    template: '<login></login>'
  });

  $stateProvider.state('login.signup', {
    url: '/signup',
    template: '<signup></signup>'
  });
}

export default angular
  .module('login', [
    SelectModule.name,
    DateModule.name,
    ModalModule.name,
    UserModule.name,
    loginTemplate.name,
    signupTemplate.name
  ])
  .component('login', {
    templateUrl: loginTemplate.name,
    controller: LoginController
  })
  .component('signup', {
    templateUrl: signupTemplate.name
  })
  .config(ConfigureModule);
