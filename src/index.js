import css from "./css/style.css";
import menuList from "./menu.json";
import menuHbs from "./menu.hbs";

const refs = {
  menu : document.querySelector('.js-menu'),
  themeSwitch : document.querySelector('#theme-switch-toggle'),
  body: document.querySelector('body'),
}

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const menuItem = menuHbs(menuList);

refs.menu.insertAdjacentHTML("afterbegin", menuItem)

if (localStorage.getItem("theme")) {
  refs.body.classList.add(Theme.DARK);
  refs.themeSwitch.checked = true;
}

refs.themeSwitch.addEventListener("change", (event) => {
  if (event.target.checked) {
    refs.body.classList.remove(Theme.LIGHT);
    refs.body.classList.add(Theme.DARK);
    localStorage.setItem("theme", "!");
  } else {
    refs.body.classList.remove(Theme.DARK);
    refs.body.classList.add(Theme.LIGHT);
    localStorage.removeItem("theme");
  }
});