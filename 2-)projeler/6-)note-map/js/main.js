// ! Kullanıcıdan konum bilgisi isteyen ve eğer konum paylaşırsa kullanıcı konumuna göre haritayı başlat eğer izin vermezse varsayılan konuma göre haritayı başlat

window.navigator.geolocation.getCurrentPosition(
  (e) => {},
  (e) => {}
);

// ! Leaflet haritasının kurulumunu yapan fonksiyon
function loadMap() {
  // Haritanın kapsam kurulumu
  var map = L.map("map").setView([51.505, -0.09], 10);

  // Haritayı arayüze ekleme
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);
}

loadMap();
