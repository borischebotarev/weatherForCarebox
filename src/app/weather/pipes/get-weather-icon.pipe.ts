import { Pipe, PipeTransform } from '@angular/core';
import { weatherIconCodes } from "../../utils/weather-codes";

@Pipe({
  name: 'getWeatherIcon'
})
export class GetWeatherIconPipe implements PipeTransform {

  transform(value?: number): string {
    return weatherIconCodes[value || 0];
  }

}
