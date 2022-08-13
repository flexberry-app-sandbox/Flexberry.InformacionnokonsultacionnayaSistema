import { Serializer as SupportSerializer } from
  '../mixins/regenerated/serializers/i-i-s-informacionnokonsultacionnaya-sistema-support';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(SupportSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
