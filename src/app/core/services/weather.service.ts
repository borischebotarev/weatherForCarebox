import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "@environment";
import { Weather } from "@core/interfaces/weather.interface";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private readonly weatherUrl = environment.apiUrl + '/get-weather';

  constructor(private http: HttpClient) {}

  getWeatherData(): Observable<Weather> {
    return this.http.get<Weather>(this.weatherUrl);
  }
}
