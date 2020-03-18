const hiddenApiKey = window.btoa('62cb1aff129ffa5f0374b5be5fad9256');

export const API_URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${window.atob(hiddenApiKey)}&id=`;

export const getData = async (url: string) => {
  const response = await fetch(url);

  return response.json();
};
