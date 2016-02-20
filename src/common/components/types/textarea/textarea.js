import template from './textarea.tpl';
import { ngModelAttrsTransformer } from './../../helpers/index';

export default (formlyConfigProvider) => {
  formlyConfigProvider.setType({
    templateUrl: template.name,
    name: 'textarea',
    wrapper: ['label', 'messages', 'inputContainer'],
    defaultOptions: {
      ngModelAttrs: {
        disabled: {
          bound: 'ng-disabled'
        },
        rows: {
          attribute: 'rows'
        },
        cols: {
          attribute: 'cols'
        }
      },
      templateOptions: {
        grow: true
      }
    },
    apiCheck: (check) => ({
      templateOptions: {
        disabled: check.bool.optional,
        rows: check.number.optional,
        cols: check.number.optional,
        grow: check.bool.optional,
        theme: check.string.optional
      }
    })
  });

  formlyConfigProvider.extras.fieldTransform.push((fields) => {
    return ngModelAttrsTransformer(fields, (field) => (
      field.type === 'textarea' &&
      field.templateOptions.grow === false
    ), 'grow', {
      attribute: 'md-no-autogrow'
    });
  });
};
