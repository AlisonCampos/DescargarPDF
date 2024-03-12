
import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    addUser() {
      // Aquí va el código para agregar un usuario
    },
    deleteUser() {
      // Aquí va el código para eliminar un usuario
    },
    editUser() {
      // Aquí va el código para editar un usuario
    },
    searchUser() {
      // Aquí va el código para buscar un usuario
    },
    updateUserType(event) {
      this.set('userType', event.target.value);
    },
    updateStatus(event) {
      this.set('status', event.target.value);
    }
  }
});
