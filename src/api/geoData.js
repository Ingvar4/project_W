import { apiKey, baseUrl } from './apiKeyAndHost.js';
import { cityInput, getWeatherByForm } from '../components/inputForm.js';
import { showError } from '../components/error.js';
import { isCyrillic } from '../helpers/checkCyrillic.js';
import { replaceAbbreviation } from '../helpers/cityAbbreviation.js';
import { saveCityToLocalStorage } from '../helpers/saveCityToLocalStorage.js';

export const getGeoData = async () => {
  let city = cityInput.value.trim();

  if (!city) {
    return;
  }

  if (!isCyrillic(city)) {
    showError('Проверьте название города');
    return;
  }

  city = replaceAbbreviation(city);

  try {
    const geoUrl = `${baseUrl}/geo/1.0/direct`;
    const queryParams = new URLSearchParams({
      q: city,
      limit: 1,
      appid: apiKey,
    });

    const geoResponse = await fetch(`${geoUrl}?${queryParams.toString()}`);
    const geoData = await geoResponse.json();

    if (!geoData.length) {
      throw new Error('Город не найден');
    }
    //деструктурируем приходящие данные согласно документации openweathermap
    const { lat, lon } = geoData[0];

    saveCityToLocalStorage(city);

    const weatherData = await getWeatherByForm(lat, lon);
    const forecastData = await getWeatherByForm(lat, lon);
    
  } catch (error) {
    console.error(error.message);
    showError('Данные не получены');
  }
};