import { Serializer as ListInvSerializer } from
  '../mixins/regenerated/serializers/i-i-s-informacionnokonsultacionnaya-sistema-list-inv';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ListInvSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
