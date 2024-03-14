
import DS from 'ember-data';
const { Model, attr } = DS;

export default class UserModel extends Model {
  @attr('string') nombre;
  @attr('string') tipoUsuario;
  @attr('string') estadoUsuario;
  @attr('boolean') esAdministrador;
}
