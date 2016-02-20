import template from './select.tpl';
import { ngModelAttrsManipulator } from './../../helpers/index';

export default (formlyConfigProvider) => {
  formlyConfigProvider.setType({
    templateUrl: template.name,
    name: 'select',
    wrapper: ['label', 'messages', 'inputContainer'],
    defaultOptions: {
      templateOptions: {
        disabled: false
      },
      ngModelAttrs: {
        disabled: {
          bound: 'ng-disabled'
        },
        onClose: {
          bound: 'md-on-close'
        },
        onOpen: {
          bound: 'md-on-open'
        }
      }
    },
    apiCheck: (check) => ({
      templateOptions: {
        disabled: check.bool.optional,
        options: check.arrayOf(check.object),
        multiple: check.bool.optional,
        labelProp: check.string.optional,
        valueProp: check.string.optional,
        onClose: check.func.optional,
        onOpen: check.func.optional,
        theme: check.string.optional
      }
    })
  });

  formlyConfigProvider.templateManipulators.preWrapper.push((tpl, options) => {
    const to = options.templateOptions || {};
    // adds multiple only when:
    // templateOptions.multiple equals true
    return to.multiple === true ? ngModelAttrsManipulator(tpl, options, 'multiple') : tpl;
  });
};
