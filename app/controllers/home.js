
import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class HomeController extends Controller {
  get usuariosFiltrados() {
    let tipoUsuarioSeleccionado = this.tipoUsuarioSeleccionado;
    let estadoUsuarioSeleccionado = this.estadoUsuarioSeleccionado;

    return this.model.filter((usuario) => {
      return usuario.tipoUsuario === tipoUsuarioSeleccionado && usuario.estadoUsuario === estadoUsuarioSeleccionado;
    });
  }

  @action
  eliminarUsuario(usuario) {
    if (this.currentUser.esAdministrador) {
      usuario.destroyRecord();
    }
  }

  @action
  editarUsuario(usuario) {
    if (this.currentUser.esAdministrador) {
    }
  }
}
