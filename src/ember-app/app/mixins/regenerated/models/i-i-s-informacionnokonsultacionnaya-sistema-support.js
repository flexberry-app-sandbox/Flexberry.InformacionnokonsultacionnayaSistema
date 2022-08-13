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
    name: attr('Name', { index: 0 }),
    description: attr('Description', { index: 1 }),
    listInv: hasMany('i-i-s-informacionnokonsultacionnaya-sistema-list-inv', 'List inv', {
      name: attr('Name', { index: 0 })
    }),
    listSize: hasMany('i-i-s-informacionnokonsultacionnaya-sistema-list-size', 'List size', {
      name: attr('Name', { index: 0 })
    })
  });

  modelClass.defineProjection('SupportL', 'i-i-s-informacionnokonsultacionnaya-sistema-support', {
    name: attr('Name', { index: 0 }),
    description: attr('Description', { index: 1 })
  });
};
