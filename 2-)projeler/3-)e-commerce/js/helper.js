// localStorage'a kayıt yapacak fonksiyon
const saveToLocalStorage = (key, cart) => {
  // Dışarıdan verilen key değeri ve cart dizisi ile locale ekleme yap
  localStorage.setItem(key, JSON.stringify(cart));
};
// localStorage'dan elemanları alacak fonksiyon
const getFromLocalStorage = (key) => {
  // localStorage'dan belirtilen key'e sahip elemanları al ve js objesine çevirip return et
  const strData = localStorage.getItem(key);

  // Eğer strData varsa bunu js nesnesine çevirip return et ama yoksa [] return et
  return strData ? JSON.parse(strData) : [];
};

export { saveToLocalStorage, getFromLocalStorage };
