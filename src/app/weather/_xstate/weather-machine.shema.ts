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
export interface WeatherItem {
  time: string,
  values: WeatherValues
}

export interface WeatherValues {
  temperature: number;
  temperatureAvg?: number;
  windSpeed: number;
  windSpeedAvg?: number;
  weatherCode: number;
  weatherCodeMax?: number;
}

export interface WeatherContext {
  location: string;
  dataDaily: WeatherItem[];
  dataHourly: WeatherItem[];
  errors: Errors;
}

export interface WeatherSchema {
  states: {
    init: {};
    loading: {};
    success: {};
    failure: {};
  };
}

export interface Errors {
  [key: string]: string;
}
