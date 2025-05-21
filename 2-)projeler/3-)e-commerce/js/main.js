import { uiElements } from "./ui.js";

uiElements.menuIcon.addEventListener("click", () => {
  // uiElements içerisindeki nav elemanına "open" classını ekle-çıkar
  uiElements.nav.classList.toggle("open");
});
