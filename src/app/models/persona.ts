export class Persona {
    nombre: string;
    apellidos: string;
    edad: number;

    constructor(pNombre: string, pApellidos: string, pEdad: number) {
        this.nombre = pNombre;
        this.apellidos = pApellidos;
        this.edad = pEdad;
    }
}