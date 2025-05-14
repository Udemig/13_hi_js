// * Javascript Dizilerde Döngü Kullanımı

// todo: Bir öğrenci dizisindeki her öğrenci için "merhaba,öğrenciAdı" yazdırınız.

const öğrenciler = ["Ahmet", "Ali", "Burak", "Mahmut"];

// document.write(`Merhaba, ${öğrenciler[0]} <br/> `);
// document.write(`Merhaba, ${öğrenciler[1]} <br/> `);
// document.write(`Merhaba, ${öğrenciler[2]} <br/> `);
// document.write(`Merhaba, ${öğrenciler[3]} <br/> `);

// * forEach: Bir dizideki tüm elemanlar için bir işlev tetiklemek için kullanılır.

öğrenciler.forEach((öğrenciAdı) => {
  document.write(`Merhaba, ${öğrenciAdı} <br/> `);
});

// * map: Bir dizideki tüm elemanlar için bir işlev tetiklemek için kullanılır ve geriye bir dizi return eder.Bu sebeple dizi üzerinden değişiklikler yapabiliriz.

// todo: Sayılar dizisinin elemanlarını 2 ile çarpınız.Yeni ve eski diziyi yazdırınız.

const sayılar = [1, 2, 3, 4, 5];

const sayılar1 = sayılar.map((sayı) => {
  return sayı * 2;
});

document.write(`Sayılar  Dizisi: ${sayılar} <br/> `);

document.write(`Sayılar1 Dizisi: ${sayılar1} <br/> `);

document.write(`-------------------------------------- <br/> `);

/*
 * Bir dizinin tüm elemanları üzerinden bir işlev tetiklemek için forEach ve map kullanılır.Bu iki metod ilede bir dizi üzerinde dönme işlemi yapılabilir.

 ! Aralarındaki fark ise forEach ile sadece dizi elemanları üzerinden dönülerek işlem yapılabilir.Ama map ile hem dizi elemanları üzerinden dönülür hemde map return işlemi yapabildiğinden geriye yeni bir dizi oluşturulabilir.


*/

// todo: Bir kullanıcı dizisi oluşturunuz.Bu kullanıcı dizisindeki herbir eleman için  "Hoşgeldiniz kullanıcıAdı ! " şeklinde çıktı veriniz.

const kullanıcılar = [
  "Bahadır",
  "Basri",
  "Berfin",
  "Emre",
  "Fatmanur",
  "Furkan",
];

kullanıcılar.forEach((kullanıcı) => {
  document.write(`Merhaba, ${kullanıcı} <br/> `);
});

document.write(`-------------------------------------- <br/> `);

// todo: Elinizde 5 kişinin 2018'deki yaşlarından oluşan bir dizi bulunsun.Bu kişilerin 2025 yılındaki yaşlarını hesaplayınız ve yeni bir diziye aktarınız.

const kullanıcıYaşları = [25, 27, 29, 33, 45, 50];

document.write(`Kullanıcı Yaşları: ${kullanıcıYaşları} <br/> `);

const kullanıcıYaşları1 = kullanıcıYaşları.map((yaş) => yaş + 7);

document.write(`Kullanıcı Yaşları-1: ${kullanıcıYaşları1} <br/> `);

// todo: öğrenciler1 dizisindeki herbir elemanın puanının %40'ını alarak yeni bir  dizi tanımlayınız.

const öğrenciler1 = [
  { id: 1, isim: "Ahmet Hakan", puan: 86 },
  { id: 2, isim: "Bahadır Ahmet ", puan: 40 },
  { id: 3, isim: "Fatma Çoban", puan: 24 },
  { id: 4, isim: "Hasan Koparan", puan: 78 },
  { id: 5, isim: "Nermin Ruken", puan: 91 },
  { id: 6, isim: "Pınar Dağdemir", puan: 56 },
];

// öğrenciler1 dizisi içerisindeki notları düzenleyerek notlar dizisine aktar
const notlar = öğrenciler1.map((öğrenci) => Math.round(öğrenci.puan * 0.4));

// öğrenciler1 dizisi içerisindeki puan değerini değiştir diğer kısımları sabit tut.Elde edilen elemanları yeni bir diziye aktar
const öğrenciler2 = öğrenciler1.map((öğrenci) => {
  return {
    ...öğrenci, // öğrenci içerisinde puan dışarındaki tüm değerleri koru
    puan: Math.round(öğrenci.puan * 0.4),
  };
});

// öğrenciler1 dizisi
console.log(öğrenciler1);

// öğrenciler2 dizisi ==> Sadece puan değerleri güncellendi
console.log(öğrenciler2);

document.write(`Öğrenci Notları: ${notlar} <br/> `);

// * Javascript Spread Operatör:

// - Bir diziyi veya obje içerisindeki elemanları genişletmek için kullanılır.

const dizi1 = [1, 2, 3, 4];

console.log(dizi1);

const dizi2 = [...dizi1, 12, 2422];

console.log(dizi2);

const kullanıcı = {
  isim: "Furkan",
  soyisim: "Yılmaz",
};

console.log(kullanıcı);

const kullanıcı1 = { ...kullanıcı, yaş: 30 };

console.log(kullanıcı1);

document.write("--------------------- ", "<br/>");

// * Javascript try-catch-finally

// Javascript'de program içerisinde bir hata olması durumunda bu hatayı yönetmek için try-catch yapısı kullanılabilir.try{}catch(error){} yapısında try{} kısmında bir işlem tetiklenir eğer bir hata alınırsa bu catch kısmında yakalanır.

try {
  // throw ==> Elle hata fırlatmak için kullanılır.
  throw new Error(`İşlem gerçekleşirken bir hata oluştu:404`); // Bu kısım catch kısmı çalışsın diye yazıldı.Bilinçli şekilde hata patlatıldı.Projelerde buna gerek kalmayacak
  document.write("İşlem gerçekleşiyor ....", "<br/>");
} catch (hata) {
  document.write(`Hataaa: ${hata} <br/> `);
} finally {
  document.write(`Finallll `);
}

// ! Özetle: try kısmında bir işlem gerçekleşir.Eğer bu işlem sırasında bir sıkıntı olursa catch bloğu devreye girer.Eğer bir sıkıntı olmazsa sadece try bloğu çalışır.

// * Javascript Scope Kavramı:

// Scope javascript'deki değişkenlerin erişilebilir oldukları alanı ifade eder.

// 1-) Global Scope:

// Global scope'a sahip bir değişkene program içerisinde heryerden erişebiliriz.

// 2-) Function Scope:

// Bir function'ın {} leri içerisinde tanımlanan değişkeneler function scope'a sahiptir.Bu değişkenlere sadece function {} içerisinden erişilebilir.

// 3-) Block Scope:

// Bir {} içerisinde tanımlanan değişkenlerin scope'u block scope olur.Bu değişkenlere sadece tanımlandığı {} içerisinde erişilebilir.

const isim = "Pınar"; // Global scope

const çiktiVer = () => {
  document.write(isim, "<br/>");
};

çiktiVer();

const hesapla = () => {
  let toplam = 3 + 4 + 5 + 6; // Function Scope
};

hesapla();
// document.write("Toplam:", toplam, "<br/>");  toplam is not defined hatası verir.Sebebi toplam değişkeninin function scope'a sahip olması

if (true) {
  const kullaniciAdi = "Önder"; // Block Scope
}

// document.write("Kullanıcı İsmi:", kullaniciAdi, "<br/>"); kullaniciAdi is not defined hatası verdi.Çünkü kullaniciAdi değişkeni block scope'a sahip

// todo: Pc tarafından 0-100 arasında oluşturulacak bir random sayıyı kullanıcının 3 hak içerisinde tahmin etmesi gerekmektedir.Eğer 3 hak içerisinde tahmin edebilirse "Tebrikler doğru tahmin ettiniz" eğer hakkı  var ve doğru tahmin edemediyse "Daha büyük sayı giriniz" veya "Daha küçük sayı giriniz" şeklinde kullanıcıyı yönlendiriniz.Eğer hakkı kalmadıysa "Tüm haklarını tükendi.Random sayı: " şeklinde çıktı veren uygulamayı oluşturunuz.

// ! for ile çözüm

// const randomSayı = Math.round(Math.random() * 100);
// console.log(randomSayı);
// for (let sayi = 1; sayi <= 3; sayi++) {
//   let tahmin = parseInt(prompt(`0-100 arasında bir sayı giriniz:`));
//   if (tahmin == randomSayı) {
//     alert(`Tebrikler doğru bildiniz  :)`);
//     break;
//   } else if (tahmin > randomSayı) {
//     alert(`Daha küçük sayı giriniz`);
//   } else {
//     alert(`Daha büyük sayı giriniz `);
//   }
//   if (sayi == 3) {
//     alert(`Hakkınız yok sayı: ${randomSayı} idi`);
//   }
// }

// ! while ile çözüm

// 1-) Rastgele sayı ve hak değişkeni oluştur
// 2-) Kullanıcının hakkı oldukça tahmin yapabilsin
// 3-) Doğru bildiyse tebrikler bildiniz,bilemediyse ve hakkı varsa büyük sayı giriniz veya küçük sayı giriniz diyerek kullanıcıyı yönlendir

const randomSayı = Math.round(Math.random() * 100);
console.log(randomSayı);

let hak = 3;

// while (hak > 0) {
//   // Kullanıcı sayı tahmininde bulunsun
//   const kullanıcıSayısı = Number(
//     prompt("0-100 arasından bir tahminde bulununuz:")
//   );

//   // Random sayı ve kullanıcı sayı değişkenlerini karşılaştır
//   if (!kullanıcıSayısı) {
//     alert("Lütfen tahminde bulununuz!");
//     continue;
//   } else if (randomSayı === kullanıcıSayısı) {
//     alert("Tebrikler doğru tahmin ettiniz");
//     hak = 0;
//   } else if (kullanıcıSayısı > randomSayı) {
//     alert("Daha küçük tahminde bulununuz:");
//   } else if (hak != 1) {
//     alert("Daha büyük tahminde bulununuz:");
//   }

//   console.log(kullanıcıSayısı);

//   // Eğer kullanıcı hakkı bittiyse uyarı ver
//   if (hak == 1) {
//     alert(
//       `Maalesef hakklarınız bitti.Doğru bilemediniz.Random sayı: ${randomSayı}`
//     );
//   }
//   // Döngü çalıştıkça hakkı güncelle
//   hak--;
// }

// todo: sayılar2 dizisi içerisinde tek ve çift sayılar bulunduran karma bir sayı dizisidir.Bu dizi içerisindeki tek ve çift sayı adetini hesaplayınız.Toplam kaç adet tek sayı var kaç adet çift sayı var bunları yazdırınız.

// For döngüsü ile çözüm
const sayılar2 = [1, 3, 5, 23, 44, 56, 89, 24, 44];

let tekSayıAdeti = 0;
let çiftSayıAdeti = 0;

for (let sayaç = 0; sayaç < sayılar2.length; sayaç++) {
  if (sayılar2[sayaç] % 2 === 0) {
    // Çift
    çiftSayıAdeti++;
  } else {
    // Tektir
    tekSayıAdeti++;
  }
}

console.log(`Tek sayı adeti: ${tekSayıAdeti} `);

console.log(`Çift sayı adeti: ${çiftSayıAdeti} `);

// forEach ile çözüm
const sayilar2 = [1, 3, 5, 23, 44, 56, 89, 24, 44];

let tekSayac = 0;
let ciftSayac = 0;

sayilar2.forEach((sayi) => {
  if (sayi % 2 === 0) {
    ciftSayac++;
  } else {
    tekSayac++;
  }
});

console.log(`Toplam tek sayı adedi: ${tekSayac}`);
console.log(`Toplam çift sayı adedi: ${ciftSayac}`);

// * Javascript Set--Map Yapısı

// ! Set yapısı javascript'de benzersiz değerler elde etmek için kullanılır.Set yapısı oluşturulurken new Set() kullanılarak Set yapısının bir örneği alınır.Sonrasında bir değişkene atanarak kullanılır.

const setArabalar = new Set();

// * set yapısına ekleme yapmak için  add metodu kullanılır.
setArabalar.add("Bmw");
setArabalar.add("Mercedes");
setArabalar.add("Audi");
setArabalar.add("Ferrari");
// setArabalar.add("Ferrari"); Ferrari öncesinde eklendiğinden tekrar ekleme yapmaz.
setArabalar.add("Tesla");

console.log("----------------------------------");

console.log(setArabalar);

// * set yapısını temizlemek için clear metodu kullanılır.
// setArabalar.clear();

// * set yapısından bir elemanı silmek için delete metodu kullanılır.

setArabalar.delete("Tesla");

// * set yapısı içerisinde bir eleman varmı diye kontrol etmek için has metodu kullanılır.

console.log(setArabalar.has("Tesla"));

console.log(setArabalar);

// console.log(setArabalar[0]); set bir dizi olmadığından dizilere ait metotlar kullanılamaz.
