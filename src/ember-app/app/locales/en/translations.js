import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISInformacionnokonsultacionnaya_sistemaComponentLForm from './forms/i-i-s-informacionnokonsultacionnaya-sistema-component-l';
import IISInformacionnokonsultacionnaya_sistemaFormLForm from './forms/i-i-s-informacionnokonsultacionnaya-sistema-form-l';
import IISInformacionnokonsultacionnaya_sistemaInvestmentLForm from './forms/i-i-s-informacionnokonsultacionnaya-sistema-investment-l';
import IISInformacionnokonsultacionnaya_sistemaSizeLForm from './forms/i-i-s-informacionnokonsultacionnaya-sistema-size-l';
import IISInformacionnokonsultacionnaya_sistemaSubindustryLForm from './forms/i-i-s-informacionnokonsultacionnaya-sistema-subindustry-l';
import IISInformacionnokonsultacionnaya_sistemaSupportLForm from './forms/i-i-s-informacionnokonsultacionnaya-sistema-support-l';
import IISInformacionnokonsultacionnaya_sistemaComponentEForm from './forms/i-i-s-informacionnokonsultacionnaya-sistema-component-e';
import IISInformacionnokonsultacionnaya_sistemaFormEForm from './forms/i-i-s-informacionnokonsultacionnaya-sistema-form-e';
import IISInformacionnokonsultacionnaya_sistemaInvestmentEForm from './forms/i-i-s-informacionnokonsultacionnaya-sistema-investment-e';
import IISInformacionnokonsultacionnaya_sistemaSizeEForm from './forms/i-i-s-informacionnokonsultacionnaya-sistema-size-e';
import IISInformacionnokonsultacionnaya_sistemaSubindustryEForm from './forms/i-i-s-informacionnokonsultacionnaya-sistema-subindustry-e';
import IISInformacionnokonsultacionnaya_sistemaSupportEForm from './forms/i-i-s-informacionnokonsultacionnaya-sistema-support-e';
import IISInformacionnokonsultacionnaya_sistemaComponentModel from './models/i-i-s-informacionnokonsultacionnaya-sistema-component';
import IISInformacionnokonsultacionnaya_sistemaFormModel from './models/i-i-s-informacionnokonsultacionnaya-sistema-form';
import IISInformacionnokonsultacionnaya_sistemaInvestmentModel from './models/i-i-s-informacionnokonsultacionnaya-sistema-investment';
import IISInformacionnokonsultacionnaya_sistemaListComponentModel from './models/i-i-s-informacionnokonsultacionnaya-sistema-list-component';
import IISInformacionnokonsultacionnaya_sistemaListIndustryModel from './models/i-i-s-informacionnokonsultacionnaya-sistema-list-industry';
import IISInformacionnokonsultacionnaya_sistemaListInvModel from './models/i-i-s-informacionnokonsultacionnaya-sistema-list-inv';
import IISInformacionnokonsultacionnaya_sistemaListSizeModel from './models/i-i-s-informacionnokonsultacionnaya-sistema-list-size';
import IISInformacionnokonsultacionnaya_sistemaSizeModel from './models/i-i-s-informacionnokonsultacionnaya-sistema-size';
import IISInformacionnokonsultacionnaya_sistemaSubindustryModel from './models/i-i-s-informacionnokonsultacionnaya-sistema-subindustry';
import IISInformacionnokonsultacionnaya_sistemaSupportModel from './models/i-i-s-informacionnokonsultacionnaya-sistema-support';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-informacionnokonsultacionnaya-sistema-component': IISInformacionnokonsultacionnaya_sistemaComponentModel,
    'i-i-s-informacionnokonsultacionnaya-sistema-form': IISInformacionnokonsultacionnaya_sistemaFormModel,
    'i-i-s-informacionnokonsultacionnaya-sistema-investment': IISInformacionnokonsultacionnaya_sistemaInvestmentModel,
    'i-i-s-informacionnokonsultacionnaya-sistema-list-component': IISInformacionnokonsultacionnaya_sistemaListComponentModel,
    'i-i-s-informacionnokonsultacionnaya-sistema-list-industry': IISInformacionnokonsultacionnaya_sistemaListIndustryModel,
    'i-i-s-informacionnokonsultacionnaya-sistema-list-inv': IISInformacionnokonsultacionnaya_sistemaListInvModel,
    'i-i-s-informacionnokonsultacionnaya-sistema-list-size': IISInformacionnokonsultacionnaya_sistemaListSizeModel,
    'i-i-s-informacionnokonsultacionnaya-sistema-size': IISInformacionnokonsultacionnaya_sistemaSizeModel,
    'i-i-s-informacionnokonsultacionnaya-sistema-subindustry': IISInformacionnokonsultacionnaya_sistemaSubindustryModel,
    'i-i-s-informacionnokonsultacionnaya-sistema-support': IISInformacionnokonsultacionnaya_sistemaSupportModel
  },

  'application-name': 'Informacionnokonsultacionnaya_sistema',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Informacionnokonsultacionnaya_sistema',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Informacionnokonsultacionnaya_sistema',
          title: 'Informacionnokonsultacionnaya_sistema'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'информационно-консультационная-система': {
          caption: 'Информационно-консультационная система',
          title: 'Информационно-консультационная система',
          'i-i-s-informacionnokonsultacionnaya-sistema-support-l': {
            caption: 'Вид поддержки',
            title: ''
          },
          'i-i-s-informacionnokonsultacionnaya-sistema-form-l': {
            caption: 'Форма',
            title: ''
          },
          'i-i-s-informacionnokonsultacionnaya-sistema-subindustry-l': {
            caption: 'Подотрасль',
            title: ''
          },
          'i-i-s-informacionnokonsultacionnaya-sistema-size-l': {
            caption: 'Размер компании',
            title: ''
          },
          'i-i-s-informacionnokonsultacionnaya-sistema-component-l': {
            caption: 'Соц.составляющая',
            title: ''
          },
          'i-i-s-informacionnokonsultacionnaya-sistema-investment-l': {
            caption: 'Инвестиции',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-informacionnokonsultacionnaya-sistema-component-l': IISInformacionnokonsultacionnaya_sistemaComponentLForm,
    'i-i-s-informacionnokonsultacionnaya-sistema-form-l': IISInformacionnokonsultacionnaya_sistemaFormLForm,
    'i-i-s-informacionnokonsultacionnaya-sistema-investment-l': IISInformacionnokonsultacionnaya_sistemaInvestmentLForm,
    'i-i-s-informacionnokonsultacionnaya-sistema-size-l': IISInformacionnokonsultacionnaya_sistemaSizeLForm,
    'i-i-s-informacionnokonsultacionnaya-sistema-subindustry-l': IISInformacionnokonsultacionnaya_sistemaSubindustryLForm,
    'i-i-s-informacionnokonsultacionnaya-sistema-support-l': IISInformacionnokonsultacionnaya_sistemaSupportLForm,
    'i-i-s-informacionnokonsultacionnaya-sistema-component-e': IISInformacionnokonsultacionnaya_sistemaComponentEForm,
    'i-i-s-informacionnokonsultacionnaya-sistema-form-e': IISInformacionnokonsultacionnaya_sistemaFormEForm,
    'i-i-s-informacionnokonsultacionnaya-sistema-investment-e': IISInformacionnokonsultacionnaya_sistemaInvestmentEForm,
    'i-i-s-informacionnokonsultacionnaya-sistema-size-e': IISInformacionnokonsultacionnaya_sistemaSizeEForm,
    'i-i-s-informacionnokonsultacionnaya-sistema-subindustry-e': IISInformacionnokonsultacionnaya_sistemaSubindustryEForm,
    'i-i-s-informacionnokonsultacionnaya-sistema-support-e': IISInformacionnokonsultacionnaya_sistemaSupportEForm
  },

});

export default translations;
