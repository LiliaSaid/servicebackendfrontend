export class Empresa {
    _id: string;
    nombre: string;
    email: string;
  
    constructor(id?: string, nombre?: string, email?: string) {
      this._id = id;
      this.nombre = nombre;
      this.email = email;
    }
}
