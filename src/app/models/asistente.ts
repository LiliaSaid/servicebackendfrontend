export class Asistente {
    _id: number;
    usuario: string;
    nombreOrganizacion: string;
    solicitaConstancia: boolean;

    constructor(id?: number , usuario?:string  , nombreOrganizacion?:string , solicitaConstancia?:boolean){
        this._id = id;
        this.usuario = usuario;
        this.nombreOrganizacion = nombreOrganizacion;
        this.solicitaConstancia = solicitaConstancia;        
    }
    
}
 