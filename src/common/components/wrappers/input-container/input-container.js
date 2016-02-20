import template from './input-container.tpl';

export default (formlyConfigProvider) => {
  formlyConfigProvider.setWrapper({
    templateUrl: template.name,
    name: 'inputContainer'
  });
};
