import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { OpenWeatherResponse } from './interface/types';
import { LoadingScreen } from './components';
import CurrentWeather from './pages/CurrentWeather';
import { usePosition } from './hooks/usePosition';

function App() {
  const [weatherData, setWeatherData] = useState<OpenWeatherResponse>();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const position = usePosition();
  console.log(position);

  const baseUrl = 'http://api.openweathermap.org/data/2.5';

  useEffect(() => {
    const getWeatherData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await axios.get<OpenWeatherResponse>(
          `${baseUrl}/onecall?lat=${position.latitude}&lon=${position.longitude}&exclude=hourly,minutely&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
        );
        setWeatherData(result.data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };

    getWeatherData();
  }, [position]);

  if (isLoading) {
    return <LoadingScreen />;
  }
  if (isError || !weatherData) {
    return <div>Something went wrong ...</div>;
  }
  return (
    <>
      <CurrentWeather weatherData={weatherData} />
    </>
  );
}

export default App;
