
import DS from 'ember-data';
const { Model, attr } = DS;

export default Model.extend({
  subcategoria: attr('string'),
  categoria: attr('string'),
  nombre: attr('string')
});
