import { Pipe, PipeTransform } from '@angular/core';
import { weatherTextCodes } from '@core/utils/weather-codes';

@Pipe({
  name: 'getWeatherText'
})
export class GetWeatherTextPipe implements PipeTransform {

  transform(value?: number): string {
    return weatherTextCodes[value || 0];
  }

}
