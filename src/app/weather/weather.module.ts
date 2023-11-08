import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { WeatherComponent } from "./weather/weather.component";
import { SharedModule } from "@shared/shared.module";
import { WeatherMachine } from "./_xstate/weather-machine.service";
import { GetWeatherTextPipe } from './pipes/get-weather-text.pipe';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
import { FilterByDatePipe } from './pipes/filter-by-date.pipe';
import { WeatherService } from "./services/weather.service";

@NgModule({
  declarations: [
    WeatherComponent,
    GetWeatherTextPipe,
    WeatherDetailsComponent,
    FilterByDatePipe
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [WeatherMachine, WeatherService],
  exports: [
    WeatherComponent
  ]
})
export class WeatherModule {}
