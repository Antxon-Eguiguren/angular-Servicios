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

  getAll(pPage = 1): Promise<any> {
    return this.httpClient.get<any>(`${this.baseUrl}&page=${pPage}`).toPromise();
  }

  getRandomNum(): Promise<any> {
    const body = {
      max: 10,
      min: 1
    };
    return this.httpClient.post<any>(this.randomUrl, body).toPromise();
  }
}
