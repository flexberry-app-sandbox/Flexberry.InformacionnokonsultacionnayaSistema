import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-informacionnokonsultacionnaya-sistema-size', 'Unit | Model | i-i-s-informacionnokonsultacionnaya-sistema-size', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-informacionnokonsultacionnaya-sistema-component',
    'model:i-i-s-informacionnokonsultacionnaya-sistema-form',
    'model:i-i-s-informacionnokonsultacionnaya-sistema-investment',
    'model:i-i-s-informacionnokonsultacionnaya-sistema-list-component',
    'model:i-i-s-informacionnokonsultacionnaya-sistema-list-industry',
    'model:i-i-s-informacionnokonsultacionnaya-sistema-list-inv',
    'model:i-i-s-informacionnokonsultacionnaya-sistema-list-size',
    'model:i-i-s-informacionnokonsultacionnaya-sistema-size',
    'model:i-i-s-informacionnokonsultacionnaya-sistema-subindustry',
    'model:i-i-s-informacionnokonsultacionnaya-sistema-support',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
