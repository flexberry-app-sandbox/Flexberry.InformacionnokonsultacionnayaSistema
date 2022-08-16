import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-informacionnokonsultacionnaya-sistema-support-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-informacionnokonsultacionnaya-sistema-list-size+size':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'name',
            required: true,
            relationName: 'size',
            projection: 'SizeL',
            autocomplete: true,
          };
          break;

        case 'i-i-s-informacionnokonsultacionnaya-sistema-list-inv+investment':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'name',
            required: true,
            relationName: 'investment',
            projection: 'InvestmentL',
            autocomplete: true,
          };
          break;

        case 'i-i-s-informacionnokonsultacionnaya-sistema-list-industry+subindustry':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'name',
            required: true,
            relationName: 'subindustry',
            projection: 'SubindustryL',
            autocomplete: true,
          };
          break;

        case 'i-i-s-informacionnokonsultacionnaya-sistema-list-component+component':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'name',
            required: true,
            relationName: 'component',
            projection: 'ComponentL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
