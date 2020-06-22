import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimalesService {

  animales: Array<any>;

  constructor() {

    this.animales = [
      {
        "nombreEsp": "Foca",
        "nombreIng": "seal",
        "imagen": "/assets/foca.jpg",
        "id": 1
      },
      {
        "nombreEsp": "Rata",
        "nombreIng": "rat",
        "imagen": "/assets/rata.jpg",
        "id": 2
      },
     
     
      {
        "nombreEsp": "Leon",
        "nombreIng": "lion",
        "imagen": "/assets/leon.jpg",
        "id": 3
      },

      {
        "nombreEsp": "Gato",
        "nombreIng": "Cat",
        "imagen": "/assets/gato.jpg",
        "id": 4
      },

      {
        "nombreEsp": "Perro",
        "nombreIng": "Dog",
        "imagen": "/assets/perro.jpg",
        "id": 5
      },

      {
        "nombreEsp": "Serpiente",
        "nombreIng": "Snake",
        "imagen": "/assets/serpiente.jpg",
        "id": 6
      },
     
      
    ]

   }

   obtenerAnimales(){
     return this.animales;
   }
}
