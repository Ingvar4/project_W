const currentCity = document.querySelector('.city');
const currentTemp = document.querySelector('.temperature');
const feelsLike = document.querySelector('.feels');
const currentDescription = document.querySelector('.description');

export const renderCurrentWeather = (data, city) => {
  currentCity.textContent = city || 'Неизвестно';
  currentTemp.textContent = `${Math.round(data.main?.temp || 0)}°С`;
  feelsLike.textContent = `${Math.round(data.main?.feels_like || 0)}°С`;
  currentDescription.textContent = data.weather?.[0]?.description || 'Неизвестно';
};