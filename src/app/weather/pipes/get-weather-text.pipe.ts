import { Pipe, PipeTransform } from '@angular/core';
import { codes } from '@core/utils/weather-codes';

@Pipe({
  name: 'getWeatherText'
})
export class GetWeatherTextPipe implements PipeTransform {

  transform(value?: number): string {
    if (!value && value !== 0) {
      return `${value}`
    }
    return codes[value] || $localize`weatherNotFound`;
  }

}
