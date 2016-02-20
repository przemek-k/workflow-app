import template from './divider.tpl';

export default (formlyConfigProvider) => {
  formlyConfigProvider.setWrapper({
    templateUrl: template.name,
    name: 'divider',
    apiCheck: (check) => ({
      templateOptions: {
        divider: check.oneOf(['before', 'after']).optional
      }
    })
  });
};
