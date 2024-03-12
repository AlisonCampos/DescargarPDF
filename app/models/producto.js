// app/models/producto.js
import DS from 'ember-data';
const { Model, attr } = DS;

export default Model.extend({
  nombre: attr('string'),
  tipo: attr('string'),
  subtipo: attr('string'),
  descripcion: attr('string'),
  maximo: attr('number'),
  minimo: attr('number'),
  stock: attr('number'),
  precio: attr('number'),
  costo: attr('number')
});
