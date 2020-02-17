import { Component, OnInit } from '@angular/core';
import { PlanetasService } from './planetas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  randomNum: number;
  arrNombres: string[];

  constructor(private planetasService: PlanetasService) { }

  async ngOnInit() {
    // this.planetasService.getRandomNum()
    //   .then(response => {
    //     this.randomNum = response.success;
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });

    const response = await this.planetasService.getRandomNum();
    this.randomNum = response.success;

    this.planetasService.getNames()
      .then(arr => console.log(arr));
  }
}
