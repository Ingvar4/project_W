import { capitalizeCity } from "./capitalize.js";

export const saveCityToLocalStorage = (city) => {
  const capitalizedCity = capitalizeCity(city);//функция для приведения к заглавной букве
  let cities = JSON.parse(localStorage.getItem('recentCities')) || [];
  if (!cities.includes(capitalizedCity)) {
    cities.unshift(capitalizedCity);
    if (cities.length > 5) {
      cities.pop();
    }
    localStorage.setItem('recentCities', JSON.stringify(cities));
  }
};