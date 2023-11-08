import { WeatherItem } from "../../weather/_xstate/weather-machine.shema";

export interface Weather {
  location: {
    lat: number;
    lon: number;
    name: string;
    type: string;
  },
  timelines: {
    daily: WeatherItem[],
    hourly: WeatherItem[],
    minutely: WeatherItem[]
  }
}
