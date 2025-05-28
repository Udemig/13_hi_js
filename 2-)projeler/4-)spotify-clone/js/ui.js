class UI {
  // Kurucu metot
  constructor() {
    // Html'deki elemanlara eriş
    this.musicList = document.querySelector("#music-list");
  }

  // Api'dan gelen veriler ile arayüzü renderlayan fonksiyon
  renderCards(songs) {
    // Dışarıdan verilen şarkı verisinin içerisindeki her eleman için bir Html oluştur

    songs.forEach((song) => {
      console.log(song);

      // Bir tane card elemanı oluştur
      const card = document.createElement("div");

      // Oluşturulan card elemanına class ata
      card.className = "card";

      // *

      // Oluşturulan,class atanan elemanın Html'ini belirle
      card.innerHTML = `              <figure>
                <img
                  src="${song.images.coverarthq}"
                  alt="card-image"
                />
                <div class="play">
                  <i class="bi bi-play-fill"></i>
                </div>
              </figure>

              <div class="card-info">
                <h4>${song.title}</h4>
                <h4>${song.subtitle}</h4>
              </div>`;

      // Oluşturulan,class atanan,Html içeriği belirlenen elemanı arayüze ekle
      this.musicList.appendChild(card);
    });
  }
}

export default UI;
