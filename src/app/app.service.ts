import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private httpClient: HttpClient
  ) { }

  /**
   * for the get all cities data
   */
  getCities(): Observable<any> {
    return this.httpClient.get('http://api.openweathermap.org/data/2.5/group?id=658225,3128760,3176959,3067696,2988507&appid=3d8b309701a13f65b660fa2c64cdc517');
  }

  /**
   * for the get all cities data
   */
  getCityByName(city): Observable<any> {
    return this.httpClient.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3d8b309701a13f65b660fa2c64cdc517`);
  }
}
