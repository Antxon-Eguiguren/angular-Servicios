import { Injectable } from '@angular/core';
import { Persona } from './models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  arrPersonas: Persona[];

  constructor() {
    this.arrPersonas = [
      new Persona('Antxon', 'Eguiguren', 34),
      new Persona('Julia', 'Besada', 32),
      new Persona('Aitziber', 'Redondo', 30),
      new Persona('Jorge', 'Torroglosa', 25),
    ];
  }

  // Método para devolver todo el array
  getAll(): Persona[] {
    return this.arrPersonas;
  }

  // Método para devolver el array de personas que sean mayores que una edad determinada pasada por parámetro.
  getByEdad(pEdad: number): Persona[] {
    // const arrFiltradoEdad = this.arrPersonas.filter(persona => {
    //   return persona.edad > pEdad;
    // });
    // return arrFiltradoEdad;

    return this.arrPersonas.filter(persona => persona.edad > pEdad);
  }

}
