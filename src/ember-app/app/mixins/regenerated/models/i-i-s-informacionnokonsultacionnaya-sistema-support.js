import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  description: DS.attr('string'),
  link: DS.attr('string'),
  form: DS.belongsTo('i-i-s-informacionnokonsultacionnaya-sistema-form', { inverse: null, async: false }),
  listComponent: DS.hasMany('i-i-s-informacionnokonsultacionnaya-sistema-list-component', { inverse: 'support', async: false }),
  listIndustry: DS.hasMany('i-i-s-informacionnokonsultacionnaya-sistema-list-industry', { inverse: 'support', async: false }),
  listSize: DS.hasMany('i-i-s-informacionnokonsultacionnaya-sistema-list-size', { inverse: 'support', async: false }),
  listInv: DS.hasMany('i-i-s-informacionnokonsultacionnaya-sistema-list-inv', { inverse: 'support', async: false })
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.i-i-s-informacionnokonsultacionnaya-sistema-support.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  description: {
    descriptionKey: 'models.i-i-s-informacionnokonsultacionnaya-sistema-support.validations.description.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  link: {
    descriptionKey: 'models.i-i-s-informacionnokonsultacionnaya-sistema-support.validations.link.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  form: {
    descriptionKey: 'models.i-i-s-informacionnokonsultacionnaya-sistema-support.validations.form.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  listComponent: {
    descriptionKey: 'models.i-i-s-informacionnokonsultacionnaya-sistema-support.validations.listComponent.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  listIndustry: {
    descriptionKey: 'models.i-i-s-informacionnokonsultacionnaya-sistema-support.validations.listIndustry.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  listSize: {
    descriptionKey: 'models.i-i-s-informacionnokonsultacionnaya-sistema-support.validations.listSize.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  listInv: {
    descriptionKey: 'models.i-i-s-informacionnokonsultacionnaya-sistema-support.validations.listInv.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('SupportE', 'i-i-s-informacionnokonsultacionnaya-sistema-support', {
    name: attr('Наименование', { index: 0 }),
    description: attr('Описание', { index: 1 }),
    link: attr('Ссылка на сайт', { index: 2 }),
    form: belongsTo('i-i-s-informacionnokonsultacionnaya-sistema-form', 'Форма предоставления', {
      name: attr('', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'name' }),
    listSize: hasMany('i-i-s-informacionnokonsultacionnaya-sistema-list-size', 'Условие 1: Размер компании', {
      name: attr('Наименование', { index: 0 }),
      size: belongsTo('i-i-s-informacionnokonsultacionnaya-sistema-size', 'Размер компании', {
        name: attr('', { index: 2, hidden: true })
      }, { index: 1, displayMemberPath: 'name' })
    }),
    listInv: hasMany('i-i-s-informacionnokonsultacionnaya-sistema-list-inv', 'Условие 2: Инвестиции ', {
      name: attr('Наименование', { index: 0 }),
      investment: belongsTo('i-i-s-informacionnokonsultacionnaya-sistema-investment', 'Инвестиции', {
        name: attr('', { index: 2, hidden: true })
      }, { index: 1, displayMemberPath: 'name' })
    }),
    listIndustry: hasMany('i-i-s-informacionnokonsultacionnaya-sistema-list-industry', 'Условие 3: Подотрасль', {
      name: attr('Наименование', { index: 0, hidden: true }),
      subindustry: belongsTo('i-i-s-informacionnokonsultacionnaya-sistema-subindustry', 'Подотрасль', {
        name: attr('Name', { index: 2, hidden: true })
      }, { index: 1, displayMemberPath: 'name' })
    }),
    listComponent: hasMany('i-i-s-informacionnokonsultacionnaya-sistema-list-component', 'Условие 4: Соц.составляющая', {
      name: attr('Наименование', { index: 0 }),
      component: belongsTo('i-i-s-informacionnokonsultacionnaya-sistema-component', 'Соц.составляющая', {
        name: attr('Name', { index: 2, hidden: true })
      }, { index: 1, displayMemberPath: 'name' })
    })
  });

  modelClass.defineProjection('SupportL', 'i-i-s-informacionnokonsultacionnaya-sistema-support', {
    name: attr('Наименование', { index: 0 }),
    description: attr('Описание', { index: 1 }),
    link: attr('Ссылка на сайт', { index: 2 }),
    form: belongsTo('i-i-s-informacionnokonsultacionnaya-sistema-form', 'Форма предоставления', {
      name: attr('Форма предоставления', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
