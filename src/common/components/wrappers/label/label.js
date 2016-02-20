import template from './label.tpl';

export default (formlyConfigProvider) => {
  formlyConfigProvider.setWrapper({
    templateUrl: template.name,
    name: 'label',
    apiCheck: (check) => ({
      templateOptions: {
        label: check.string
      }
    })
  });
};
