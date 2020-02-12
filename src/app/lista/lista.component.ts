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

  ngOnInit() {
    this.arrPersonas = this.personasService.getAll();
  }

  manejarClick() {
    this.arrPersonas = this.personasService.getByEdad(this.edad);
  }

}
