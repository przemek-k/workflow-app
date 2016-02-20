import angular from 'angular';
import modalModule from 'common/components/modal';
import formsTemplate from './forms.tpl';

function ConfigureModule($stateProvider){
  $stateProvider.state('forms', {
    url: '/forms',
    template: '<forms></forms>'
  });
}

export default angular
  .module('forms', [
    formsTemplate.name,
    modalModule.name
  ])
  .component('forms', {
    templateUrl: formsTemplate.name
  })
  .config(ConfigureModule);
