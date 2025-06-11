export const saveCityToLocalStorage = (city) => {
  localStorage.setItem('recentCities', JSON.stringify(city));
};