
import Controller from '@ember/controller';
import { action } from '@ember/object';

export default Controller.extend({
  actions: {
    insertar() {
    },
    cancelar() {
    },
    updateTipo(event) {
      this.set('tipo', event.target.value);
    },
    updateSubtipo(event) {
      this.set('subtipo', event.target.value);
    }
  }
});
