import angular from 'angular';

import runs from './runs/index';

import wrappers from './wrappers/index';
import dividerTemplate from './wrappers/divider/divider.tpl';
import inputContainerTemplate from './wrappers/input-container/input-container.tpl';
import labelTemplate from './wrappers/label/label.tpl';
import messagesTemplate from './wrappers/messages/messages.tpl';

import types from './types/index';
import checkboxTemplate from './types/checkbox/checkbox.tpl';
import chipsTemplate from './types/chips/chips.tpl';
import datepickerTemplate from './types/datepicker/datepicker.tpl';
import inputTemplate from './types/input/input.tpl';
import radioTemplate from './types/radio/radio.tpl';
import selectTemplate from './types/select/select.tpl';
import sliderTemplate from './types/slider/slider.tpl';
import switchTemplate from './types/switch/switch.tpl';
import textareaTemplate from './types/textarea/textarea.tpl';

const ngModuleName = 'formlyMaterial';

angular.module(ngModuleName, [
  checkboxTemplate.name,
  chipsTemplate.name,
  datepickerTemplate.name,
  inputTemplate.name,
  radioTemplate.name,
  selectTemplate.name,
  sliderTemplate.name,
  switchTemplate.name,
  textareaTemplate.name,
  dividerTemplate.name,
  inputContainerTemplate.name,
  labelTemplate.name,
  messagesTemplate.name
]).config(['formlyConfigProvider', (formlyConfigProvider) => {
    const configs = [runs, wrappers, types];

    configs.forEach((config) => {
      for (let i = 0; i < config.length; i++) {
        config[i](formlyConfigProvider);
      }
    });
  }]);

export default ngModuleName;
