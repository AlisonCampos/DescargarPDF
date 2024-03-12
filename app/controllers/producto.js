// app/controllers/producto.js
import Controller from '@ember/controller';
import { action } from '@ember/object';

export default Controller.extend({
  actions: {
    insertar() {
      // Aquí va el código para insertar un producto en la base de datos
    },
    cancelar() {
      // Aquí va el código para cancelar la operación
    },
    updateTipo(event) {
      this.set('tipo', event.target.value);
    },
    updateSubtipo(event) {
      this.set('subtipo', event.target.value);
    }
  }
});
