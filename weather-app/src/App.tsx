import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { OpenWeatherResponse } from './interface/types';
import { LoadingScreen } from './components';
import CurrentWeather from './pages/CurrentWeather';

function App() {
  const [weatherData, setWeatherData] = useState<OpenWeatherResponse>();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const baseUrl = 'http://api.openweathermap.org/data/2.5';

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getPosition(position: PositionCallback) {
      console.log(position);
    });
  }


  useEffect(() => {
    const getWeatherData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await axios.get<OpenWeatherResponse>(
          `${baseUrl}/onecall?lat=33.441792&lon=-94.037689&exclude=hourly,minutely&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
        );
        setWeatherData(result.data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };

    getWeatherData();
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }
  if (isError || !weatherData) {
    return <div>Something went wrong ...</div>;
  }
  return (
    <>
      <CurrentWeather weatherData={weatherData} city={'Budapest'} />
    </>
  );
}

export default App;
