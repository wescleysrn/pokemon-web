import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OpenweatherServiceService {

  constructor(protected http: HttpClient) { }

  /**
   * Function responsible for get weather information from open weather api.
   * @param cityName 
   * @returns temperature in Celsius
   */
  getWeatherByCityName(cityName: string): Observable<any> {
    let params = new HttpParams().set('q', cityName)
                                 .set('appid', `${environment.openweather_key}`)
                                 .set('units', 'metric');
    return this.http.get(`${environment.openweather_uri}`, { params });
  }

}
