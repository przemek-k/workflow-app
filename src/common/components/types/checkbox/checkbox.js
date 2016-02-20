import template from './checkbox.tpl';

export default (formlyConfigProvider) => {
  formlyConfigProvider.setType({
    templateUrl: template.name,
    name: 'checkbox',
    defaultOptions: {
      ngModelAttrs: {
        disabled: {
          bound: 'ng-disabled'
        }
      }
    },
    apiCheck: (check) => ({
      templateOptions: {
        disabled: check.bool.optional,
        theme: check.string.optional
      }
    })
  });
};
