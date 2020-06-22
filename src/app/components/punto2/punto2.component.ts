import { Component, OnInit } from '@angular/core';
import { Mensaje } from 'src/app/models/mensaje';
//import { Empresa } from 'src/app/models/empresa';
//import { EmpresaService } from 'src/app/services/empresa.service';
import { MensajeService } from 'src/app/services/mensaje.service';

@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css']
})
export class Punto2Component implements OnInit {
  mensaje: Mensaje;
  //empresa: Empresa;
  mensajes: Array<Mensaje>;
  //empresas: Array<Empresa>;

  constructor(private mensajeService: MensajeService) { 
    this.mensaje = new Mensaje();
    //this.empresa = new Empresa();
    this.mensajes = new Array<Mensaje>();
    //this.empresas = new Array<Empresa>();
    this.refrescarMensajes();
    //this.refrescarEmpresas();
    
  }


  
  public enviarMensaje() {
    this.mensaje.fecha = new Date();
    this.mensajeService.addMensaje(this.mensaje).subscribe(
      (result)=>{
        alert("Mensaje Enviado");
      },
      (error)=>{
        console.log(error);
      }
    )

    this.refrescarMensajes();
    this.mensaje = new Mensaje();
    console.log(this.mensaje);
    
  }

  public cantidadrestante(){
    return (120-this.mensaje.texto.length);
  }


  /*public agregarEmpresa() {
    this.empresaService.addEmpresa(this.empresa).subscribe(
      (result)=>{
        alert("empresa guardado");
        this.refrescarEmpresas();
      },
      (error)=>{
        console.log(error);
      }
    )

    
    this.empresa = new Empresa();
    console.log(this.empresa);
  }

  refrescarEmpresas(){
    this.empresaService.getEmpresas().subscribe(
      (result) => {
        this.mensajes = new Array<Mensaje>();
        result.forEach(element => {
          var emp: Empresa = new Empresa();
          Object.assign(emp, element);
          this.empresas.push(emp);
        });
      },
      (error) => {
        console.log(error);
      }
    )   
  }*/
  refrescarMensajes(){

    this.mensajeService.getMensajes().subscribe(
      (result) => {
        this.mensajes = new Array<Mensaje>();
        result.forEach(element => {
          var msj: Mensaje = new Mensaje();
          Object.assign(msj, element);
          this.mensajes.push(msj);
        });
      },
      (error) => {
        console.log(error);
      }
    )   

  }
  ngOnInit(): void {
  }

}
