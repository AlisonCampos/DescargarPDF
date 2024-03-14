
import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    addUser() {

    },
    deleteUser() {

    },
    editUser() {

    },
    searchUser() {
      
    },
    updateUserType(event) {
      this.set('userType', event.target.value);
    },
    updateStatus(event) {
      this.set('status', event.target.value);
    }
  }
});
