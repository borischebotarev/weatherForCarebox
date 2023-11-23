import { Pipe, PipeTransform } from '@angular/core';
import { WeatherItem } from "../_xstate/weather-machine.shema";

@Pipe({
  name: 'filterByDate'
})
export class FilterByDatePipe implements PipeTransform {

  transform(list: WeatherItem[], selectedDate: string): WeatherItem[] {
    const targetDate = new Date(selectedDate);

    return list.filter(item => {
      const itemDate = new Date(item.time);
      return itemDate.getFullYear() === targetDate.getFullYear() &&
        itemDate.getMonth() === targetDate.getMonth() &&
        itemDate.getDate() === targetDate.getDate();
    });
  }

}
