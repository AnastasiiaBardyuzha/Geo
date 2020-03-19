const API_KEY = window.atob('NjJjYjFhZmYxMjlmZmE1ZjAzNzRiNWJlNWZhZDkyNTY=');

export const API_URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${API_KEY}&id=`;

export const getData = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);

  return response.json();
};
