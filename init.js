//создаём данный файл для инициализации всего приложения
import { switchTheme } from "./src/components/switchTheme.js";
import { getGeoData } from "./src/api/geoData.js";
import { getWeatherByForm } from "./src/components/inputForm.js";
import { renderCurrentTime } from "./src/helpers/currentTime.js";

export function initApp() {
  switchTheme();
  getGeoData();
  getWeatherByForm();
  renderCurrentTime();
}