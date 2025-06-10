//переключение темы светлая/темная
export function switchTheme() {
  const themeSwitch = document.getElementById('themeSwitch');
  let userHasChosenTheme = false;

  themeSwitch.addEventListener('change', toggleTheme);
  //функция получения темы (getAttribute)
  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');

    let newTheme;
    if (currentTheme === 'dark') {
      newTheme = 'light';
    } else {
      newTheme = 'dark';
    }

    userHasChosenTheme = true;

    setTheme(newTheme);
  }
  //функция для установки темы (setAttribute)
  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    if (userHasChosenTheme) {
    //сохраняем выбор в localStorage
    localStorage.setItem('theme', theme);
    }
  }

  const savedTheme = localStorage.getItem('theme');

  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    const themeByBrowser = getThemeByBrowserSetting();
    if (themeByBrowser === 'dark') {
      setTheme('dark');
    } else {
      //функция получения темы в зависимости от времени суток
      const themeByTime = getThemeByTime();
      setTheme(themeByTime);
    }
  }

  function getThemeByTime() {
    const now = new Date();
    const hours = now.getHours();
    return hours >= 7 && hours < 22 ? 'light' : 'dark';
  }
}
//получение темы в зависимости от настроек браузера
function getThemeByBrowserSetting() {
  if (
    window.matchMedia && 
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    return 'dark';
  } else {
    return 'light';
  }
}