
import DS from 'ember-data';
const { Model, attr } = DS;

export default Model.extend({
  username: attr('string'),
  userType: attr('string'),
  status: attr('string')
});
