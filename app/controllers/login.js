
import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    login() {
      const username = this.model.username;
      const password = this.model.password;

      
      console.log(`Logged in as ${username}`);
    }
  }
});
