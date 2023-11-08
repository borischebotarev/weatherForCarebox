import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { WeatherComponent } from "./weather.component";
import { SharedModule } from "@shared/shared.module";
import { WeatherMachine } from "./_xstate/weather-machine.service";
import { GetWeatherTextPipe } from './get-weather-text.pipe';

@NgModule({
  declarations: [
    WeatherComponent,
    GetWeatherTextPipe
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [WeatherMachine],
  exports: [
    WeatherComponent
  ]
})
export class WeatherModule {}
