import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private readonly weatherUrl = environment.apiUrl + '/get-weather';

  constructor(private http: HttpClient) {}

  getWeatherData(): Observable<any> {
    return this.http.get(this.weatherUrl);
  }
}
