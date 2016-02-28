import angular from 'angular';
import { DashboardController } from './dashboard.controller';
import dashboardTemplate from './dashboard.tpl';
import appWrapperTemplate from './../app-wrapper/app-wrapper.tpl';
import { AppWrapperController } from './../app-wrapper/app-wrapper.controller';
import './../app-wrapper/app-wrapper.css!';
import menuLinkTemplate from './../app-wrapper/sidenav/menu-link.tpl';
import { MenuLinkController } from './../app-wrapper/sidenav/menu-link.controller';
import menuToggleTemplate from './../app-wrapper/sidenav/menu-toggle.tpl';
import { MenuToggleController } from './../app-wrapper/sidenav/menu-toggle.controller';

function ConfigureModule($stateProvider){
  $stateProvider.state('app', {
    abstract: true,
    template: '<app-wrapper></app-wrapper>'
  });

  $stateProvider.state('app.dashboard', {
    url: '/dashboard',
    template: '<dashboard></dashboard>'
  });
}

export default angular
  .module('dashboard', [
    dashboardTemplate.name,
    appWrapperTemplate.name,
    menuLinkTemplate.name,
    menuToggleTemplate.name
  ])
  .component('appWrapper', {
    templateUrl: appWrapperTemplate.name,
    controller: AppWrapperController
  })
  .component('dashboard', {
    templateUrl: dashboardTemplate.name,
    controller: DashboardController
  })
  .component('menuLink', {
    bindings: {
      section: '<'
    },
    require: {
      appCtrl: '^appWrapper'
    },
    templateUrl: menuLinkTemplate.name,
    controller: MenuLinkController
  })
  .component('menuToggle', {
    bindings: {
      section: '<'
    },
    require: {
      appCtrl: '^appWrapper'
    },
    templateUrl: menuToggleTemplate.name,
    controller: MenuToggleController
  })
  .config(ConfigureModule);
