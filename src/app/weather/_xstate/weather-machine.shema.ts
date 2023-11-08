
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
  data: WeatherItem[];
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
