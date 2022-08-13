import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Informacionnokonsultacionnaya_sistema',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Informacionnokonsultacionnaya_sistema',
          title: 'Informacionnokonsultacionnaya_sistema'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
