import template from './messages.tpl';

export default (formlyConfigProvider) => {
  formlyConfigProvider.setWrapper({
    templateUrl: template.name,
    name: 'messages'
  });
};
