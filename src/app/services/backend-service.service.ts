import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BackendServiceService {

  constructor(protected http: HttpClient) { }

  /**
   * Function responsible for get weather information from backend api.
   * @param cityName 
   * @returns temperature in Celsius
   */
  getWeatherByCityName(cityName: string): Observable<any> {
    return this.http.get(`${environment.backend_uri}` + 'openweather/bycity/' + cityName);
  }

  /**
   * Function responsible for get the Array of Pokemons for type from the backend
   * @param pokemonType 
   * @returns 
   */
  getPokemonByType(pokemonType: string): Observable<any> {
    return this.http.get(`${environment.backend_uri}` + 'pokemon/bytype/' + pokemonType);
  }

  /**
   * Function responsible for get the image of a pokemon for url from the backend
   * @param url 
   * @returns 
   */
  getPokemonImageByUrl(url: string): Observable<any> {
    let params = new HttpParams().set('url', url);
    return this.http.get(`${environment.backend_uri}` + 'pokemon/imagem', { params });
  }

}
