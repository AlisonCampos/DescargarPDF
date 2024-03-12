
import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class UserController extends Controller {
  @service fetch;

  @action
  async saveUser(event) {
    event.preventDefault();

    let newUser = {
      username: this.username,
      password: this.password,
      userType: this.userType,
      status: this.status
    };

    let response = await this.fetch.post('/api/users', { body: JSON.stringify(newUser) });

    if (response.ok) {
      this.set('message', 'Usuario creado exitosamente!');
    } else {
      this.set('message', 'Hubo un error: ' + response.statusText);
    }
  }

  @action
  updateUserType(event) {
    this.set('userType', event.target.value);
  }

  @action
  updateStatus(event) {
    this.set('status', event.target.value);
  }
}
