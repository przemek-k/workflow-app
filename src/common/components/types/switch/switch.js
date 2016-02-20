import template from './switch.tpl';

export default (formlyConfigProvider) => {
  formlyConfigProvider.setType({
    templateUrl: template.name,
    name: 'switch',
    defaultOptions: {
      templateOptions: {
        disabled: false
      },
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
