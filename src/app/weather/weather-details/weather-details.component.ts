import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { WeatherItem } from "../_xstate/weather-machine.shema";

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherDetailsComponent {
  @Input() list: WeatherItem[] = []
  @Input() currentDay?: string;
  @Input() mode: 'day' | 'time' = 'day';
  @Output() selected = new EventEmitter<WeatherItem>();

  setCurrentItem(day: WeatherItem) {
    if (this.mode === 'day') {
      this.selected.next(day);
    }
  }
}
