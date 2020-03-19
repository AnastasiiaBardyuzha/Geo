export interface City {
  id: number;
  city: string;
}

export interface WeatherInterface {
  temp: number;
  pressure: number;
  humidity: number;
  windSpeed: number;
}

export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

export interface Wind {
  speed: number;
  deg: number;
}

export interface TownWeather {
  main: Main;
  wind: Wind;
}
