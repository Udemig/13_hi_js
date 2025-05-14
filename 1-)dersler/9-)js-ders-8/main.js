// * Javascript BOM (Browser Object Modal):

// Javascript'de kullanıcının tarayıcı etkileşimini sağlayan model'e BOM denir.Bu modelde tarayıcı ile alakalı özelliklere erişerek kullanıcı etkileşimi arttırlır.

// * Window: Tarayıcıdaki açılır pencereyi temsil eder.Global scope'a sahip tüm değişken,fonksiyonlar window elemanın bir parçasıdır.

//console.log(window.innerWidth);  Tarayıcının genişliğini verir
// console.log(window.innerHeight);  Tarayıcının yüksekliğini verir

// console.log(window.close); Tarayıcı sekmesini kapatmak için kullanılır

// console.log(window.history); Tarayıcı sekmesinin geçmişine erişmek için kullanılır

// *  window.navigator objesi ile kullanıcının tarayıcı bilgilerine erişebiliriz.Gpu,bluetooth sürümü,kullanıcı konumu ....

// * window.navigator.geolocation ile ise kullanıcının konumuna izin alarak erişebiliriz.Bu obje içersinde watchPosition [kullanıcının konumunu izlemek için kullanılır],getCurrentPosition [kullanıcının o an ki konumuna erişmek için kullanılır.],clearWatch [kullanıcının konumunun izlenmesini sıfırlamak için kullanılır]

console.log(
  window.navigator.geolocation.getCurrentPosition(
    () => {
      console.log(`Konuma erişildi`);
    },
    () => {
      console.log(`Konuma erişilemedi`);
    }
  )
);

// *  window.location ile tarayıcı'daki url bilgilerine [hostname,pathname,...] erişmek için kullanılır.

if (window.location.pathname == "/index.html") {
  console.log(`Ana sayfa`);
} else {
  console.log(`Ürün sayfası`);
}

// * Javascript LocalStorage

// LocalStorage ile tarayıcıda veri depolayabiliriz.Ama bu veriler çok büyük boyutlu değildir.10mb sınır vardır.Localstorage'a kayıt edilecek veriler string format'da olmalıdır.Localstorage'a kayıt edilen veriler sayfa yenilense bile kaybolmaz.

// Localstorage'a kayıt:
// Localstorage'a kayıt yapmak için `localStorage.setItem()` metodu kullanılır.Bu metot bizden 2 değer talep eder.Birincisi key diğeri ise value.Bu iki değerinde string formatta olması gerekir.Eğer dizi,obje,.. gibi değerler localStorage'a kayıt edilecekse ilk olarak bunu stringe çevirmemiz sonrasında ise localeStorage'a kayıt etmemiz gerekir.Kayıt sırasında verilen key değeri localStorage'daki verilere erişirken kullanılır.
localStorage.setItem("name", "Rümeysa");
localStorage.setItem("surname", "Baysal");

// Localstorage'dan veri alma:
// Localstorage'dan veri almak için `localStorage.getItem()` metodu kullanılır.Bu metot bizden hangi değere erişilecekse bunun key'ini vermemizi ister.
const kullaniciAdi = localStorage.getItem("name");

// Localstorage'dan veri kaldırma:
// Localstorage'dan veri kaldırmak için `localStorage.removeItem()` metodu kullanılır.Bu metod hangi eleman kaldırılacaksa onun key'ini vermemizi ister.
localStorage.removeItem("surname");

// Localstorage'ı temizleme:
// Localstorage'ı temizlemek için `localStorage.clear()` metodu kullanılır.
// localStorage.clear();

const kullanıcı = ["Ali", "Mehmet", "Ayşe", "Hakan"];

const kullanıcıStr = JSON.stringify(kullanıcı);

localStorage.setItem("kullancı", kullanıcıStr);
