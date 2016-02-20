import template from './radio.tpl';

export default (formlyConfigProvider) => {
  formlyConfigProvider.setType({
    templateUrl: template.name,
    name: 'radio',
    wrapper: ['label'],
    apiCheck: (check) => ({
      templateOptions: {
        options: check.arrayOf(check.object),
        labelProp: check.string.optional,
        valueProp: check.string.optional,
        theme: check.string.optional
      }
    })
  });
};
