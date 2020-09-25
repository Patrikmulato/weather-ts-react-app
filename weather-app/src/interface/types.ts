export interface OpenWeatherResponse {
  alerts: any;
  current: WeatherData;
  daily: dailyWeatherData[];
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
}
export interface WeatherData {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: number;
  humidity: number;
  pressure: number;
  sunrise: number;
  sunset: number;
  temp: number;
  uvi: number;
  visibility: number;
  weather: Weather[];
  wind_deg: number;
  wind_speed: number;
}
export interface Weather {
  description: string;
  icon: string;
  id: number;
  main: string;
}

export interface dailyWeatherData
  extends Omit<WeatherData, 'feels_like' | 'temp'> {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: FeelsLike;
  humidity: number;
  pressure: number;
  sunrise: number;
  sunset: number;
  temp: Temp;
  uvi: number;
  visibility: number;
  weather: Weather[];
  wind_deg: number;
  wind_speed: number;
}

export interface Temp {
  day: number;
  min: number;
  max: number;
  night: number;
  eve: number;
  morn: number;
}
export interface FeelsLike {
  day: number;
  night: number;
  eve: number;
  morn: number;
}

export interface GeolocationPosition {
  coords: {
    accuracy: number;
    altitude: number;
    altitudeAccuracy: number;
    heading: number;
    latitude: number;
    longitude: number;
    speed: number;
  };
  timestamp: number;
}
