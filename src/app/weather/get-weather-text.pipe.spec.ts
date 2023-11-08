import { GetWeatherTextPipe } from './get-weather-text.pipe';

describe('GetWeatherTextPipe', () => {
  it('create an instance', () => {
    const pipe = new GetWeatherTextPipe();
    expect(pipe).toBeTruthy();
  });
});
