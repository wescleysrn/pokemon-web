import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {

  constructor(protected http: HttpClient) { }

  /**
   * Function responsible for get the Array of Pokemons for type
   * @param pokemonType 
   * @returns 
   */
  getPokemonByType(pokemonType: string): Observable<any> {
    return this.http.get(`${environment.pokeapi_uri}` + pokemonType);
  }

  /**
   * Function responsible for get the image of a pokemon for url
   * @param url 
   * @returns 
   */
  getPokemonImageByUrl(url: string): Observable<any> {
    return this.http.get(url);
  }

}
