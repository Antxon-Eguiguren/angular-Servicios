import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../personas.service';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  arrPersonas: Persona[];
  edad: number;

  constructor(private personasService: PersonasService) {
    this.edad = 30;
  }

  async ngOnInit() {
    // Llamada normal
    // this.arrPersonas = this.personasService.getAll();

    // Llamada a través de la promesa
    // this.personasService.getAllPromise()
    //   .then(pArrPersonas => {
    //     this.arrPersonas = pArrPersonas;
    //   }).catch(err => console.log(err));

    // Llamada a través de la promesa con ASYNC/AWAIT
    this.arrPersonas = await this.personasService.getAllPromise();

  }

  async manejarClick() {
    // Llamada normal
    // this.arrPersonas = this.personasService.getByEdad(this.edad);

    // Llamada a través de la promesa con ASYNC/AWAIT
    this.arrPersonas = await this.personasService.getByEdadPromise(this.edad);
  }

}
