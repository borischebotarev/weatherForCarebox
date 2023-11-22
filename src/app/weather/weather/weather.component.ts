import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { WeatherMachine } from "../_xstate/weather-machine.service";
import {
  WeatherInit,
  WeatherRetry
} from "../_xstate/weather-machine.events";
import { filter, map } from "rxjs/operators";
import { Observable } from "rxjs";
import { Errors, WeatherItem } from "../_xstate/weather-machine.shema";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherComponent implements OnInit {
  public currentDate: string = '';
  readonly loading$: Observable<boolean>;
  readonly data$: Observable<{ dataDaily: WeatherItem[], dataHourly: WeatherItem[], location: string }>;
  readonly errors$: Observable<Errors>;

  constructor(private weatherMachine: WeatherMachine) {
    this.loading$ = this.weatherMachine.weatherState$.pipe(
      map(state => state.matches('loading'))
    );
    this.data$ = this.weatherMachine.weatherState$.pipe(
      filter(state => state.matches('success')),
      map(state => state.context)
    );
    this.errors$ = this.weatherMachine.weatherState$.pipe(
      filter(state => state.matches('failure')),
      map(state => state.context.errors)
    );
  }

  ngOnInit() {
    this.weatherMachine.send(new WeatherInit());
  }

  retry() {
    this.weatherMachine.send(new WeatherRetry());
  }

  showDetails(date: string) {
    this.currentDate = date;
    // document.getElementById('details')?.scrollIntoView({ behavior: "smooth" });
  }
}
