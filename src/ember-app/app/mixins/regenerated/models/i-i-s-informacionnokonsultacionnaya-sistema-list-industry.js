import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  subindustry: DS.belongsTo('i-i-s-informacionnokonsultacionnaya-sistema-subindustry', { inverse: null, async: false }),
  support: DS.belongsTo('i-i-s-informacionnokonsultacionnaya-sistema-support', { inverse: 'listIndustry', async: false })
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.i-i-s-informacionnokonsultacionnaya-sistema-list-industry.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  subindustry: {
    descriptionKey: 'models.i-i-s-informacionnokonsultacionnaya-sistema-list-industry.validations.subindustry.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  support: {
    descriptionKey: 'models.i-i-s-informacionnokonsultacionnaya-sistema-list-industry.validations.support.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ListIndustryE', 'i-i-s-informacionnokonsultacionnaya-sistema-list-industry', {
    name: attr('Name', { index: 0, hidden: true }),
    subindustry: belongsTo('i-i-s-informacionnokonsultacionnaya-sistema-subindustry', 'Subindustry', {
      name: attr('Name', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'name' })
  });
};
