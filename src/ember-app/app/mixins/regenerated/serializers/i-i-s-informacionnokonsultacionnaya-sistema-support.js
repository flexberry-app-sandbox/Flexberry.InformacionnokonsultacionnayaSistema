import Mixin from '@ember/object/mixin';
import $ from 'jquery';

export let Serializer = Mixin.create({
  getAttrs: function () {
    let parentAttrs = this._super();
    let attrs = {
      form: { serialize: 'odata-id', deserialize: 'records' },
      listComponent: { serialize: false, deserialize: 'records' },
      listIndustry: { serialize: false, deserialize: 'records' },
      listSize: { serialize: false, deserialize: 'records' },
      listInv: { serialize: false, deserialize: 'records' }
    };

    return $.extend(true, {}, parentAttrs, attrs);
  },
  init: function () {
    this.set('attrs', this.getAttrs());
    this._super(...arguments);
  }
});
