import { Component, ChangeDetectionStrategy } from '@angular/core';
import { WeatherService } from "@core/services/weather.service";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherComponent {
  public readonly weatherData$ = this.weatherService.getWeatherData();

  constructor(private readonly weatherService: WeatherService) {}
}
