import { fromEventPattern, of } from 'rxjs';
import {
  interpret,
  Machine,
  MachineOptions,
  State,
  assign,
  EventObject
} from 'xstate';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { WeatherContext, WeatherSchema } from "./weather-machine.shema";
import { WeatherEvent, WeatherFail, WeatherSuccess } from "./weather-machine.events";
import { weatherMachineConfig } from "./weather-machine.config";
import { WeatherService } from "../services/weather.service";

@Injectable()
export class WeatherMachine {
  weatherMachineOptions: Partial<MachineOptions<WeatherContext, WeatherEvent>> = {
    services: {
      getData: (_, event) => this.weatherService.getWeatherData().pipe(
        map(data => new WeatherSuccess(data.location.name, data.timelines.daily, data.timelines.hourly)),
        catchError(result => of(new WeatherFail(result.error)))
      ),
    },
    actions: {
      setData: assign((context, event) => ({
        dataDaily: ((event as WeatherSuccess).dataDaily || []).slice(0, 5),
        dataHourly: ((event as WeatherSuccess).dataHourly || []),
        location: (event as WeatherSuccess).location,
      })),
      setErrors: assign((context, event) => ({
        errors: (event as WeatherFail).errors
      })),
    },
  };

  private _weatherMachine = Machine<WeatherContext, WeatherSchema, WeatherEvent>(
    weatherMachineConfig
  ).withConfig(this.weatherMachineOptions);
  private service = interpret(this._weatherMachine, {devTools: true}).start();

  public weatherState$ = fromEventPattern<[State<WeatherContext, WeatherEvent>, EventObject]>(
    handler => {
      return this.service.onTransition(handler);
    },
    (_, service) => service.stop()
  ).pipe(map(([state, _]) => state));

  send(event: WeatherEvent) {
    this.service.send(event);
  }

  constructor(private weatherService: WeatherService) {}
}
