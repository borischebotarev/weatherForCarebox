import { Errors, WeatherItem } from "./weather-machine.shema";

export class WeatherInit {
  readonly type = 'INIT';
}

export class WeatherLoading {
  readonly type = 'LOADING';
}

export class WeatherSuccess {
  readonly type = 'SUCCESS';
  constructor(public location: string, public dataDaily: WeatherItem[], public dataHourly: WeatherItem[]) {}
}

export class WeatherRetry {
  readonly type = 'RETRY';
}

export class WeatherFail {
  readonly type = 'FAILURE';

  constructor(public errors: Errors) {}
}

export type WeatherEvent = WeatherInit | WeatherLoading | WeatherRetry | WeatherSuccess | WeatherFail;

