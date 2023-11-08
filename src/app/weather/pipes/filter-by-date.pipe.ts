import { Pipe, PipeTransform } from '@angular/core';
import { WeatherItem } from "../_xstate/weather-machine.shema";

@Pipe({
  name: 'filterByDate'
})
export class FilterByDatePipe implements PipeTransform {

  transform(list: WeatherItem[], selectedDate: string): WeatherItem[] {
    return list.filter(item => new Date(item.time).getDate() === new Date(selectedDate).getDate());
  }

}
