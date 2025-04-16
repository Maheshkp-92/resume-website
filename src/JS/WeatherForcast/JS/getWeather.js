import axios from 'axios';

export const getWeather = async (location = 'Bangalore') => {
  const API_KEY = 'e739f6f52ce918304c4f3d351930334c';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;
  console.log('Fetching weather for Location:',location);

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error('Weather API Error:', error.response.data);
      alert(`Error: ${error.response.data.message}`);
    } else {
      console.error('Network Error:', error.message);
    }
    return null;
  }
};

