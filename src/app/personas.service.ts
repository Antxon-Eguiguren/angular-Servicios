import { Injectable } from '@angular/core';
import { Persona } from './models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  arrPersonas: Persona[];

  constructor() {
    this.arrPersonas = [
      new Persona('Antxon', 'Girón', 34),
      new Persona('Julia', 'Besada', 32),
      new Persona('Aitziber', 'Redondo', 30),
      new Persona('Jorge', 'Torroglosa', 25),
    ];
  }

  // Método para devolver todo el array
  getAll(): Persona[] {
    return this.arrPersonas;
  }

  // Método que devuelve todas las peronas a través de una promesa
  getAllPromise(): Promise<Persona[]> {
    const prom = new Promise<Persona[]>((resolve, reject) => {
      resolve(this.arrPersonas);
      reject('Error');
    });
    return prom;
  }

  // Método para devolver el array de personas que sean mayores que una edad determinada pasada por parámetro.
  getByEdad(pEdad: number): Persona[] {
    // const arrFiltradoEdad = this.arrPersonas.filter(persona => {
    //   return persona.edad > pEdad;
    // });
    // return arrFiltradoEdad;
    return this.arrPersonas.filter(persona => persona.edad > pEdad);
  }

  // El mismo método que antes pero a través de una promesa
  getByEdadPromise(pEdad: number): Promise<Persona[]> {
    const prom = new Promise<Persona[]>((resolve, reject) => {
      resolve(this.arrPersonas.filter(persona => persona.edad > pEdad));
      reject('Error');
    });
    return prom;
  }

  // Método que filtra por nombre y/o apellidos y se ejecuta a través de una promesa
  getByNamePromise(pString: string): Promise<Persona[]> {
    const prom = new Promise<Persona[]>((resolve, reject) => {
      resolve(this.arrPersonas.filter(persona => {
        const nombreCompleto = this.eliminarDiacriticos(this.eliminarEspacios(persona.nombre + persona.apellidos));
        const pStringNew = this.eliminarDiacriticos(this.eliminarEspacios(pString));
        return nombreCompleto.toLowerCase().includes(pStringNew.toLowerCase());
      }));
      reject('Error');
    });
    return prom;
  }

  // Función para eliminar espacios de un string
  eliminarEspacios(pCadena: string): string {
    const regex = / /g;
    return pCadena.replace(regex, '');
  }

  // Función para eliminar los acentos y caracteres raros
  eliminarDiacriticos(texto: string): string {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

}
