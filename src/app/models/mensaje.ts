//import { Empresa } from './empresa';

export class Mensaje {
    
  _id: string;
  para: number;
  desde: string;
  texto: string;
  fecha: Date;
  //empresa: Empresa;

  constructor(id?: string, para?: number, desde?: string, texto?: string, fecha?: Date) {
    this._id = id;
    this.para = para;
    this.desde = desde;
    this.texto = texto;
    this.fecha = new Date();
    //this.empresa = new Empresa();
  }
}
