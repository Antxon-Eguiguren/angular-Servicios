import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlanetasService {

  baseUrl: string;
  randomUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'https://swapi.co/api/planets/?format=json';
    this.randomUrl = 'https://random.ngrok.io/random/num';
  }

  // Método que devuelve los objetos de la API (página a página).
  getAll(pPage = 1): Promise<any> {
    return this.httpClient.get<any>(`${this.baseUrl}&page=${pPage}`).toPromise();
  }

  // Método para sacar los nombres de los planetas (el primer 'then' pasa como parámetro su RETURN al segundo 'then')
  getNames() {
    return new Promise((resolve, reject) => {
      this.getAll()
        .then(response => {
          const arrNuevo = response.results.map(planet => planet.name);
          return arrNuevo;
        })
        .then(arrNombres => {
          // Esto se podría resolver en el then de arriba, lo hacemos por practicar then encadenados.
          resolve(arrNombres);
        });
    });
  }

  // Método para recoger un número aleatorio desde el servidor de Mario
  getRandomNum(): Promise<any> {
    const body = {
      max: 10,
      min: 1
    };
    return this.httpClient.post<any>(this.randomUrl, body).toPromise();
  }

}
