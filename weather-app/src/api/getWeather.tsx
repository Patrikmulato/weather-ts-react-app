import axios from 'axios';

let baseUrl = 'http://api.openweathermap.org/data/2.5/';

const getWeather = async (city: string) => {
  try {
    console.log(`${baseUrl}weather?q=${city}`);
    const response = await axios.get(
      `${baseUrl}weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default getWeather;
