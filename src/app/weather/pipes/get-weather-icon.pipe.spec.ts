import { GetWeatherIconPipe } from './get-weather-icon.pipe';

describe('GetWeatherIconPipe', () => {
  it('create an instance', () => {
    const pipe = new GetWeatherIconPipe();
    expect(pipe).toBeTruthy();
  });
});
