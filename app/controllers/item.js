
import Controller from '@ember/controller';
import { action } from '@ember/object';

export default Controller.extend({
  actions: {
    addItem() {
      // Aquí va el código para agregar un item
    },
    deleteItem() {
      // Aquí va el código para eliminar un item
    },
    editItem() {
      // Aquí va el código para editar un item
      // Puedes usar 'transitionToRoute' para redirigir a otra página
      // this.transitionToRoute('ruta-de-edicion');
    }
  }
});
