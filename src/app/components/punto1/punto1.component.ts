import { Component, OnInit } from '@angular/core';
import { AsistenteService } from 'src/app/services/asistente.service';
import { Asistente } from 'src/app/models/asistente';


@Component({
  selector: 'app-punto1',
  templateUrl: './punto1.component.html',
  styleUrls: ['./punto1.component.css']
})
export class Punto1Component implements OnInit {

  asistentes: Array<Asistente>;
  asistente: Asistente;
  submited: boolean;

  constructor(private asistenteService: AsistenteService) { 
    this.asistentes = new Array<Asistente>();
    this.asistente = new Asistente();
    this.refrescarAsistentes();
    

  }

  ngOnInit(): void {
  }

  guardarAsistente(){
    this.asistenteService.addAsistente(this.asistente).subscribe(
      (result)=>{
        alert("Punto guardado");
        this.refrescarAsistentes();
      },
      (error)=>{
        console.log(error);
      }
    )

    
    this.asistente = new Asistente();
    console.log(this.asistente);

  }

  
  refrescarAsistentes(){
    this.asistenteService.getAsistentes().subscribe(
      (result) => {
        this.asistentes = new Array<Asistente>();
        result.forEach(element => {
          var asis: Asistente = new Asistente();
          Object.assign(asis, element);
          this.asistentes.push(asis);
        });
      },
      (error) => {
        console.log(error);
      }
    )   

  }

  elegirAsistente(asistente: Asistente){
    asistente=this.asistentes.find(element=>element._id == asistente._id )
    this.asistente = asistente;

  }

  borrarAsistente(asistente: Asistente){
    this.asistenteService.deleteAsistente(asistente).subscribe(
      (result)=>{
        alert("Asistente eliminado");
        this.refrescarAsistentes();
      }, 
      (error)=>{
        console.log(error);
      }
    );
    
  }


  modificarAsistente(){    
     
    this.asistenteService.updateAsistente(this.asistente).subscribe(
      result => {
        alert("Asistente Modificado");
        this.refrescarAsistentes();
        
      },
      error => {
        console.log(error);
      }
    )

    this.asistente = new Asistente();
    console.log(this.asistente);
  }

  
}


