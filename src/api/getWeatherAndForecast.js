import { apiKey, baseUrl } from "./apiKeyAndHost.js";

const fetchData = async (endpoint, lat, lon) => {
  const url = new URL(`${baseUrl}/data/2.5/${endpoint}`);

  const queryParams = new URLSearchParams({
    lat: lat,
    lon: lon,
    appid: apiKey,
    lang: 'ru',
    units: 'metric',
  });
  url.search = queryParams.toString();

  const responce = await fetch(url);

  if (!responce.ok) {
    throw new Error('Не удалось загрузить данные о погоде');
  }
  return responce.json();
};

export const getWeather = async (lat, lon) => {
  return fetchData('weather', lat, lon);
};

export const getForecast = async (lat, lon) => {
  return fetchData('forecast', lat, lon);
};