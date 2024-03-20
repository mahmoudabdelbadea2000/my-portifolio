import {
  colorsElements,
  darkThemeElement,
  settingsElement,
  switshContainerElement,
} from "./elements";

const convertColorsFromScreen = (e) => {
  document.documentElement.style.setProperty(
    "--skin-color",
    e.target.dataset.color
  );
};

settingsElement.addEventListener("click", () =>
  switshContainerElement.classList.toggle("open")
);

colorsElements.forEach((color) => {
  color.addEventListener("click", (e) => convertColorsFromScreen(e));
});

window.addEventListener("scroll", () => {
  if (switshContainerElement.classList.contains("open")) {
    switshContainerElement.classList.remove("open");
  }
});

darkThemeElement.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (darkThemeElement.querySelector("i").classList.contains("fa-moon")) {
    darkThemeElement.innerHTML = `<i class="fa-solid fa-sun switch-icon"></i>`;
  } else {
    darkThemeElement.innerHTML = `<i class="fa-solid fa-moon switch-icon"></i>`;
  }
});

window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    darkThemeElement.innerHTML = `<i class="fa-solid fa-sun switch-icon"></i>`;
  } else {
    darkThemeElement.innerHTML = `<i class="fa-solid fa-moon switch-icon"></i>`;
  }
});
