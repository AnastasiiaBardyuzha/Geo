export const API_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=62cb1aff129ffa5f0374b5be5fad9256&id=';

export const getData = async (url: string) => {
  const response = await fetch(url);

  return response.json();
};
