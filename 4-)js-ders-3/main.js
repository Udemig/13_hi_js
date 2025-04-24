// todo: hayvan adında bir obje oluşturunuz.Bu obje içerisinde en az 1 string,1 number,1 boolean,1 array,1 function ve 1 obje tanımlayınız.Objeye ve obje içerisindeki key'lerer erişiniz obje içerisindeki fonksiyonu çalıştırınız.

const hayvan = {
  isim: "Tekir",
  yaş: 2,
  dişiMi: false,
  hobiler: ["uyumak", "yemek yemek", "oynamak"],
  kediTanitim: function () {
    console.log("Kedi ad: " + this.isim + " Kedi yaş:" + this.yaş);
  },
  sahibi: {
    isim: "Ali",
    yaş: 30,
    meslek: "Mühendis",
  },
};

// console.log(hayvan);
// console.log(hayvan.isim);
// console.log(hayvan.hobiler);
// console.log(hayvan.hobiler[1]);
// hayvan.kediTanitim();

const kişiler = [
  { id: 1, isim: "Ahmet", yaş: 30, puan: 80 },
  { id: 2, isim: "Bahadır", yaş: 20, puan: 70 },
  { id: 3, isim: "Ebru", yaş: 29, puan: 42 },
  { id: 4, isim: "Ayşe", yaş: 24, puan: 30 },
];

console.table(kişiler);

// ! find: Bir dizi içerisindeki bir elemanı bulmak için kullanılır.Bu metod ()içerisinde hangi şarta göre eleman bulunacağını söylememizi ister.

const bulunanKişi = kişiler.find(function (kullanıcı) {
  return kullanıcı.isim == "Ebru";
});

console.log(bulunanKişi);

const bulunanKişi1 = kişiler.find(function (kullanıcı) {
  return kullanıcı.puan == 90;
});

console.log(bulunanKişi1);

console.log("---------------------------");

// ! filter: Bir dizi içerisindeki elemanları filtrelemek için kullanılır.Bu metod ()içerisinde hangi şarta göre eleman filtreleyeceğimizi söylememizi ister.

const derstenGeçenKişiler = kişiler.filter(function (kullanıcı) {
  return kullanıcı.puan > 50;
});

console.log(derstenGeçenKişiler);

// ! find geriye bir obje filter ise geriye bir dizi döndürür.Bu sebeple  find bir dizi içerisinde belirtilen sarta sahip tek bir elemanı döndürür.Filter ise belirtilen şartlara uyan birden fazla elemanı döndürür.

// ! sort: Bir diziyi sıralamak için kullanılır.Sort metodu string elemanları sıralarken herhangi bir sıkıntı çıkarmazken number elemanları sıralarken ufak bir hata yapar.Bu hatanın sebebi elemanları sadece ilk basamağına göre sıralamasıdır.Bu durumu düzeltmek için sort metodu içerisine bir fonksiyon yazarak bu sorunu çözeriz.

const öğrenciler = ["Ahmet", "Mehmet", "Büşra", "Melis", "Kürşat"];

console.log(öğrenciler.sort());

console.log(öğrenciler.sort().reverse());

const sayılar = [12, 34, 65, 98, 11, 456, 23, 44, 9896, 4, 6, 8, 101, 123454];

console.log(
  sayılar.sort(function (a, b) {
    return a - b;
  })
);

console.log(
  sayılar.sort(function (a, b) {
    return b - a;
  })
);

// * Javascript Template Literals (Backtick)

// Javascript'de değişkenleri direkt olarak yazarız.String ifadeleri ise "" içerisine alırız.String ifade ve değişkenleri bir arada kullanırken "," veya "+" ile bunları ayırmamız gerekir.Bu durum string ve değişken sayısının arttığı durumda bizim için sıkıntı yaratır.Bu durumu çözmek için Javascript Template Literals (Backtick) kullanabiliriz.Backtick kullanarak string ve değişkenleri bir arada kullanabiliriz.

const kullaniciAdi = "Bahadır Ahmet";
const yaş = 25;
const meslek = "Developer";

document.write(
  kullaniciAdi,
  " isimli öğrenci",
  yaş,
  " ındadır.Kendisi geleceğin başarılı",
  meslek,
  "'ıdır.",
  "<br/>"
);

document.write(
  `${kullaniciAdi} isimli öğrenci ${yaş}ındadır.Kendisi geleceğin başarılı ${meslek}'ıdır. <br/><br/> `
);

// * Javascript Arrow Functions

// Javascript'de fonksiyon tanımlarken function anahtar kelimesini kullanırız.Bu durum bazen uzun ve karmaşık bir yapı oluşturabilir.Bu durumu çözmek için Javascript Arrow Functions kullanabiliriz.Arrow Functions ile fonksiyon tanımlarken daha kısa ve okunabilir bir yapı oluşturabiliriz.

// Bir arrow function  let veya const anahtar kelimelerinden biri seçildikten sonra fonksiyona bir isim verilir.Verilen bu isimden sonra sırasıyla "=()=>{}" yapısı oluşturulur.Buradaki {} içerisinde fonksiyonun yapması istenen işlem kodlanır.

const selamla = () => {
  document.write("Udemig akademiden selamlar.", "<br/>");
};

selamla();

const topla = (a, b) => {
  const toplam = a + b;

  return toplam;
};

const topla1 = (a, b) => a + b;

document.write(`Toplam: ${topla(12, 54)} <br/> `);

document.write(`Toplam: ${topla1(12, 55)} <br/> `);

console.log("---------------------------------------");

const öğrenciTablosu = [
  { id: 1, isim: "Ahmet", yaş: 30, meslek: "Developer", puan: 430 },
  { id: 2, isim: "Zeynep", yaş: 25, meslek: "Designer", puan: 390 },
  { id: 3, isim: "Mehmet", yaş: 28, meslek: "Project Manager", puan: 450 },
  { id: 4, isim: "Elif", yaş: 32, meslek: "QA Tester", puan: 410 },
  { id: 5, isim: "Burak", yaş: 27, meslek: "DevOps Engineer", puan: 370 },
  { id: 6, isim: "Ayşe", yaş: 26, meslek: "Frontend Developer", puan: 420 },
  { id: 7, isim: "Can", yaş: 31, meslek: "Backend Developer", puan: 460 },
  { id: 8, isim: "Deniz", yaş: 29, meslek: "UI/UX Designer", puan: 400 },
  { id: 9, isim: "Emre", yaş: 33, meslek: "Scrum Master", puan: 440 },
  { id: 10, isim: "Seda", yaş: 24, meslek: "Mobile Developer", puan: 385 },
];
console.table(öğrenciTablosu);

// todo: öğrenciTablosu dizisi içerisinden yaşı 30'dan küçük olan kullanıcıları filtreleyiniz.

// const kişiler1 = öğrenciTablosu.filter(function (a) {
//   return a.yaş < 30;
// });

const kişiler1 = öğrenciTablosu.filter((x) => x.yaş < 30);

console.log(kişiler1);

// todo:öğrenciTablosu dizisi içerisinden mesleği Project Manager olan kullanıcıyı bulunuz.

const yönetici = öğrenciTablosu.find((b) => b.meslek == "Project Manager");

console.log(yönetici);

// todo: öğrenciTablosu dizisi içerisinden puanı 400'ün altında olan kullanıcıları filtreleyiniz.

const kişiler2 = öğrenciTablosu.filter((x) => x.puan < 400);

console.log(kişiler2);

// * Javascript Karar Yapıları (If-Else)

// todo: Kullanıcının yaşı 18'den büyükse "Ehliyet alabilir" değilse "Ehliyet alamaz" yazdırınız.

const kullaniciYaş = 17;

if (kullaniciYaş >= 18) {
  document.write(`Kullanıcı Yaşı: ${kullaniciYaş}-- EHLİYET ALABİLİR <br/> `);
} else {
  document.write(`Kullanıcı Yaşı: ${kullaniciYaş}-- EHLİYET ALAMAZ <br/> `);
}

// ? Javascript'de koşullu yapıları if-else ile oluştururuz.Bu yapıları oluştururken kontrol edilecek koşul if(){} kısmındaki () içerisine yazılır.Eğer bu koşul sağlanıyorsa {} içerisinde yazılı olan kod çalışır.Sağlanmıyorsa else{} kısmındaki kod çalışır.

// todo: Öğrencinin sınav notu 50'den küçükse "Kaldınız",50-65 arasında ise "Geçtiniz",65-85 arasındaysa "Teşekkür Belgesi Aldınız",85-100 arasındaysa "Takdir Belgesi Aldınız" yazdırınız.

const karneNotu = 85;

if (karneNotu < 50) {
  document.write(`Not: ${karneNotu}--> KALDINIZ <br/> `);
} else if (karneNotu >= 50 && karneNotu < 65) {
  document.write(`Not: ${karneNotu}--> GEÇTİNİZ <br/> `);
} else if (karneNotu >= 65 && karneNotu < 85) {
  document.write(`Not: ${karneNotu}--> TEŞEKKÜR BELGESİ ALDINIZ <br/> `);
} else {
  document.write(`Not: ${karneNotu}--> TAKDİR BELGESİ ALDINIZ <br/> `);
}

// Eğer birden fazla koşullu yapıyı birarada kullanmak istersek bunu ilk koşul'un dışındakilerin başına else ekleyerek yapabiliriz.Bu durumda ilk koşul sağlanmadığı taktirde diğer koşullar kontrol edilir ve sağlanıyorsa o koşulun içindeki kod çalışır.Sağlanmıyorsa bir sonraki koşula geçilir ve bu şekilde devam eder.Son kısımda eğer tek durum kaldıysa bunu direkt olarak else ile yazabiliriz.

// todo: Kullanıcının kredi notu 50'nin altındaysa "Maalesef kredi alamazsınız",50-60 arasında ise "100.000 TL kredi alabilirsiniz",60-70 arasında ise "150.000 TL kredi alabilirsiniz",70-80 arasında ise "200.000 TL kredi alabilirsiniz",80-90 arasında ise "250.000 TL kredi alabilirsiniz",90-100 arasında ise "300.000 TL kredi alabilirsiniz" yazdıran code-script'i oluşturunuz.

const krediNot = 50;
if (krediNot < 50) {
  document.write(`Kredi Notu: ${krediNot} ----> Maalesef kredi alamazsınız`);
} else if (krediNot >= 50 && krediNot < 60) {
  document.write(
    `Kredi Notu: ${krediNot} ----> 100.000 tl kredi alabilirsiniz <br/>`
  );
} else if (krediNot >= 60 && krediNot < 70) {
  document.write(
    `Kredi Notu: ${krediNot} ----> 150.000 tl kredi alabilirsiniz <br/>`
  );
} else if (krediNot >= 70 && krediNot < 80) {
  document.write(
    `Kredi Notu: ${krediNot} ----> 200.000 tl kredi alabilirsiniz <br/>`
  );
} else if (krediNot >= 80 && krediNot < 90) {
  document.write(
    `Kredi Notu: ${krediNot} ----> 250.000 tl kredi alabilirsiniz <br/>`
  );
} else {
  document.write(
    `Kredi Notu: ${krediNot} ----> 300.000 tl kredi alabilirsiniz <br/>`
  );
}

// todo: Kullanıcıdan kursNo adında bir değer alınız.Eğer kursNo'nun değeri 1 ise "Frontend Kursu",2 ise "Backend Kursu",3 ise "React Native Kursu",4 ise "İngilizce Kursu",5 ise "Swift-Ios Kursu" yazdıran code-script'i oluşturunuz

// const kursNo = parseInt(prompt("Kurs numarasını giriniz (1-5):"));

// if (kursNo === 1) {
//   document.write("Frontend Kursu");
// } else if (kursNo === 2) {
//   document.write("Backend Kursu");
// } else if (kursNo === 3) {
//   document.write("React Native Kursu");
// } else if (kursNo === 4) {
//   document.write("Ingilizce Kursu");
// } else if (kursNo === 5) {
//   document.write("Swift-Ios Kursu");
// } else {
//   document.write("Geçersiz kurs numarası!");
// }

// * Javascript Switch Case

// Switch-case yapısı bir değişkenin alacağı belirli değerlere göre işlem yapmamızı sağlar.

let haftaninGünü = 8;

switch (haftaninGünü) {
  case 1:
    document.write(`Pazartesi <br/>`);
    break;
  case 2:
    document.write(`Salı <br/>`);
    break;

  case 3:
    document.write(`Çarşamba <br/>`);
    break;

  case 4:
    document.write(`Perşembe <br/>`);
    break;

  case 5:
    document.write(`Cuma <br/>`);
    break;

  case 6:
    document.write(`Cumartesi <br/>`);
    break;

  case 7:
    document.write(`Pazar <br/>`);
    break;

  default:
    document.write(`Tanımsız Gün <br/>`);
}

// todo: Kullanıcıdan bir ayNumarası değişkeni alınız.bu ay değişkenin karşılığı olan ay adını switch-case yapısı ile yazdırınız.

// let ay = parseInt(prompt("1 - 12 arasında bir sayı giriniz "));

// switch (ay) {
//   case 1:
//     document.write(`${ay}". Ay: Ocak"`);
//     break;
//   case 2:
//     document.write(`${ay}". Ay: Şubat"`);
//     break;
//   case 3:
//     document.write(`${ay}". Ay: Mart"`);
//     break;
//   case 4:
//     document.write(`${ay}". Ay: Nisan"`);
//     break;
//   case 5:
//     document.write(`${ay}". Ay: Mayıs"`);
//     break;
//   case 6:
//     document.write(`${ay}". Ay: Haziran"`);
//     break;
//   case 7:
//     document.write(`${ay}". Ay: Temmuz"`);
//     break;
//   case 8:
//     document.write(`${ay}". Ay: Ağustos"`);
//     break;
//   case 9:
//     document.write(`${ay}". Ay: Eylül"`);
//     break;
//   case 10:
//     document.write(`${ay}". Ay: Ekim"`);
//     break;
//   case 11:
//     document.write(`${ay}". Ay: Kasım"`);
//     break;
//   case 12:
//     document.write(`${ay}". Ay: Aralık"`);
//     break;

//   default:
//     document.write(`1-12 Arası Değer Girmediniz.`);
// }

// * Javascript Döngüler

// Javascript'de tekrar gerektiren durumları yönetmemizi döngüler ile daha kolay şekilde yaparız.

// ! NOT:

let sayi = 10;

document.write(`Sayı: ${sayi} <br/>`);

// sayi = sayi + 1;
sayi++;

sayi += 2;

document.write(`Sayı: ${sayi} <br/>`);

// sayi = sayi * 5;
sayi *= 5;

document.write(`Sayı: ${sayi} <br/>`);

// sayi = sayi / 13;
sayi /= 13;

document.write(`Sayı: ${sayi} <br/>`);

// sayi = sayi - 2;
sayi -= 2;

document.write(`Sayı: ${sayi} <br/>`);

document.write(`********************* <br/>`);

// document.write(`Merhaba Dünya <br/>`);
// document.write(`Merhaba Dünya <br/>`);
// document.write(`Merhaba Dünya <br/>`);
// document.write(`Merhaba Dünya <br/>`);
// document.write(`Merhaba Dünya <br/>`);

// ! for Döngüsü:
// for döngüsü belirli bir sayıda tekrarlamak için kullanılır.Bu döngü içerisinde başlangıç değeri, koşul ve artış miktarı tanımlanır.Buradaki koşul sağlandıkça dögü çalışır.

let sayaç = 1;

for (sayaç; sayaç <= 5; sayaç++) {
  document.write(`Merhaba Dünya <br/>`);
}

// todo: 1'den 10'a kadar olan sayıları ekrana for döngüsü kullanarak yazdırınız.

for (let sayaç1 = 1; sayaç1 <= 10; sayaç1++) {
  document.write(`${sayaç1} <br/>`);
}

document.write(`-------------------------- <br/>`);

// todo:1'den 30 'a kadar olan tek sayıları ekrana for döngüsü kullanarak yazdırınız.

for (let i = 1; i <= 30; i += 2) {
  document.write(`${i} <br/>`);
}

// * While Döngüsü:
// While döngüsü belirli bir koşul sağlandığı sürece çalışır.Bu döngü içerisinde başlangıç değeri ve koşul tanımlanır.
let sayi2 = 1;

while (sayi2 <= 5) {
  document.write(`Udemig'den selamlar <br/>`);

  sayi2++;
}

document.write(`------------------ <br/>`);

// todo: 1'den 20'ye kadar 1.Kullanıcı,2.Kullanıcı,... şeklinde çıktı veren bir while döngüsü oluşturunuz
let sayi3 = 1;

while (sayi3 <= 20) {
  document.write(`${sayi3}. Kullanıcı <br/>`);

  sayi3++;
}

document.write(`------------------ <br/>`);

// todo: Kullanıcının 1'den 40'a kadar çektiği sınavları 1.şınav,2.şınav,... şeklinde yazdıran bir while döngüsü oluşturunuz.

let sayi1 = 1;
while (sayi1 <= 40) {
  document.write(`${sayi1} . şınav  <br/>`);
  sayi1++;
}

document.write(`------------------ <br/>`);

// * Do While Döngüsü:

// Do while döngüsü en az bir kez çalışır ve koşul sağlandığı sürece çalışmaya devam eder.Bu döngü içerisinde başlangıç değeri ve koşul tanımlanır.While'dan farkı koşul sağlansada sağlanmasada enaz 1 kez çalışır.

let sayi4 = 10;

do {
  document.write(`Sayı: ${sayi4}  <br/>`);

  sayi4++;
} while (sayi4 < 5);

// todo: 1'den 15'e kadar olan sayıları ekrana do while döngüsü kullanarak yazdırınız.

let sayi5 = 1;

do {
  document.write(`Sayı: ${sayi5}  <br/>`);
  sayi5++;
} while (sayi5 <= 15);

// todo:1'den 100'e kadar olan çift sayıları ekrana do while döngüsü kullanarak yazdırınız.

let i = 2;
do {
  document.write(i + "<br>");
  i += 2;
} while (i <= 100);
