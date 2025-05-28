import API from "./api.js";
import UI from "./ui.js";

const api = new API();
const ui = new UI();

// ! Sayfa yüklendiğinde api isteği at
document.addEventListener("DOMContentLoaded", async () => {
  //     Api isteği at
  const songs = await api.getPopular();

  ui.renderCards(songs);
});
