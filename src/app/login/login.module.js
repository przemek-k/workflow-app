import angular from 'angular';

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
