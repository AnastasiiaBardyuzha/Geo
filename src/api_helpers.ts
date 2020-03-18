export const API_URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${window.atob('NjJjYjFhZmYxMjlmZmE1ZjAzNzRiNWJlNWZhZDkyNTY=')}&id=`;

export const getData = async (url: string) => {
  const response = await fetch(url);

  return response.json();
};
