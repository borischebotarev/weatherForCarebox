import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { WeatherItem } from "../_xstate/weather-machine.shema";

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherDetailsComponent {
  @Input() list: WeatherItem[] = []
}
