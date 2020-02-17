import { Component, OnInit } from '@angular/core';
import { PlanetasService } from '../planetas.service';

@Component({
  selector: 'app-lista-planetas',
  templateUrl: './lista-planetas.component.html',
  styleUrls: ['./lista-planetas.component.css']
})
export class ListaPlanetasComponent implements OnInit {

  arrPlanetas: any[];
  paginaActual: number;
  numPaginas: number;

  constructor(private planetasService: PlanetasService) {
    this.paginaActual = 1;
  }

  async ngOnInit() {
    // this.planetasService.getAll()
    //   .then(response => {
    //     this.arrPlanetas = response.results;
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });

    const response = await this.planetasService.getAll(this.paginaActual);
    this.arrPlanetas = response.results;
    this.numPaginas = Math.ceil(response.count / 10);
  }

  async cambiarPagina(siguiente) {
    if (siguiente) {
      this.paginaActual++;
    } else {
      this.paginaActual--;
    }
    const response = await this.planetasService.getAll(this.paginaActual);
    this.arrPlanetas = response.results;
  }
}
