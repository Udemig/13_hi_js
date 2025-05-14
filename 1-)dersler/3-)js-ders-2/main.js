// * Javascript Girdi Çıktı

// prompt:Kullanıcıdan açılır bir popup ile değer almak için kullanılır.Alınan değer bir değişkene atanarak program içerisinde kullanılabilir.Bu metotun geriye döndürdüğü response string veri tipindedir.Eğer bu string'i sayıya çevirmek istiyorsak "parseInt" metodunu kullanabiliriz.

// const yaş = prompt("Lütfen yaşınızı giriniz:");

// document.write("Kullanıcı yaş:" + yaş);

// confirm: Kullanıcıdan açılır bir popup ile onay almak için kullanılır.

// Açılan popup'da "ok" seçeneği seçilirse geriye "true" döndürür.Eğer "cancel" seçeneği seçilirse geriye "false" döndürür.

// const yanıt = confirm("Bu işlemi onaylıyormusunuz ?");

// todo: Kullanıcıdan iki adet sayı alınız.Bu sayıların toplamını console'a yazdırınız.

// const sayı1 = parseInt(prompt("Lütfen sayı1 giriniz:"));
// const sayı2 = parseInt(prompt("Lütfen sayı2 giriniz:"));

// console.log("Toplam: ", sayı1 + sayı2);
// console.log(typeof (sayı1 + sayı2));

// todo: Kullanıcıdan 4 adet sayı alınız.Alınan bu 4 adet sayının ortalamasını hesaplayın ve sonucu ekrana yazdırın.

// const sayı1 = parseInt(prompt("Bir Sayı Giriniz:"));

// const sayı2 = parseInt(prompt("Bir Sayı Giriniz:"));

// const sayı3 = parseInt(prompt("Bir Sayı Giriniz:"));

// const sayı4 = parseInt(prompt("Bir Sayı Giriniz:"));

// const ortalama = (sayı1 + sayı2 + sayı3 + sayı4) / 4;

// document.write("Ortalama:", ortalama, "<br/>");

// * Javascript String Metotları:

const strMetin =
  "       Udemig akademide yazılım öğrenmeye devam ediyoruz.Sıradaki konumuz javascript.Javascript'in çok iyi öğrenip dinamik websiteler yapacağız. Udemig Udemig Udemig      ";

document.write("Metin:", strMetin, "<br/>");

// ! length:Bir string ifadenin karakter uzunluğunu belirlemek için kullanılır.

document.write("Metinin karakter uzunluğu:", strMetin.length, "<br/>");

// ! toLocaleUpperCase: String ifadenin tüm harflerinin büyük harf olmasını sağlar.

document.write(
  "Metinin tüm harflri büyük harf:",
  strMetin.toLocaleUpperCase(),
  "<br/>"
);

// ! toLocaleLowerCase: String ifadenin tüm harflerinin küçük harf olmasını sağlar.

document.write(
  "Metinin tüm harflri küçük harf:",
  strMetin.toLocaleLowerCase(),
  "<br/>"
);

// ! indexOf: Bir string ifade içerisinde belirtilen bir kelimenin kaçıncı sırada olduğunu belirler.

document.write(
  "Metinin içerisinde yazılım:",
  strMetin.indexOf("yazılım"),
  "<br/>"
);

// ! lastIndexOf: Bir string ifade içerisinde tekrar eden kelimeler varsa bunlardan sonucusunun sırasını belirlemek için kullanılır.

document.write(
  "Metinin içerisinde Udemig:",
  strMetin.lastIndexOf("Udemig"),
  "<br/>"
);

// ! slice: Bir metin ifade içerisinde belirli bir aralığı almak için kullanılır.Ör: 44-65 arası

// slice metodu belirli bir aralığı almak için bizden iki değer talep eder.Bunlardan ilki başlangıç ikincisi ise bitiş sırasını belirler.Başlangıç değeri zorunludur.Ama bitiş değeri opsiyoneldir.Yani verilmesede olur.Eğer bitiş değeri verilmezse string ifadeyi belirtilen başlangıç değerinden bitiş değerine kadar alıp getirir.

document.write(
  "Metinin içerisindeki 44-65 arası: ",
  strMetin.slice(44, 65),
  "<br/>"
);

// ! concat: Birden fazla string ifadeyi birleştirmek için kullanılır.

const metin1 = "Html,Css,Scss,Js";
const metin2 = "Html,Css,Scss,Js";

document.write(
  "Metinin birleştirme: ",
  strMetin.concat(metin1, metin2, "Selam"),
  "<br/>"
);

// ! replace: Bir string ifade içerisindeki bir kelimeyi başka bir kelime ile değiştirmek için kullanılır.Bu metod bizden iki değer ister.Bunlardan ilki hangi kelimenin değiştirileceği ikincisi ise birinci değerin neyle değiştirileceğidir.

document.write(
  "Metinin yazılım-software değişimi: ",
  strMetin.replace("yazılım", "software"),
  "<br/>"
);

// ! replaceAll:String ifade içerisindeki birden fazla kelimeyi değiştirmek için kullanılır.

document.write(
  "Metinin Udemig-Emaartech değişimi: ",
  strMetin.replaceAll("Udemig", "Emaartech"),
  "<br/>"
);

// ! includes: Bir string ifadenin bir değeri içerip içermediğinin kontrolünü yapmak için kullanılır.

document.write(
  "Metinin içerisinde Javascript: ",
  strMetin.includes("Javascript"),
  "<br/>"
); // true

document.write("Metinin içerisinde Html: ", strMetin.includes("Html"), "<br/>"); // false

// ! trim: Bir string ifadenin başında ve sonundaki boşlukları kaldırmak için kullanılır.

document.write(
  "Metinin içerisindeki boşlukları kaldır: ",
  strMetin.trim().length,
  "<br/>"
);

// ! split: Bir string ifadenin hangi karakterlere göre bölüneceğini belirlemek için kullanılır.

const metin3 = "Selamlar // Nasılsınız // Neler // Yapıyorsunuz";

document.write("Metini böl:", metin3.split("//"), "<br/>");

document.write(
  "-----------------------------------------------------",
  "<br/>"
);

// * Javascript Number Metotları

const ondalıklıSayı = 19.50393030303;

document.write("Sayı:", ondalıklıSayı, "<br/>");

// * toFixed: Ondalıklı bir sayının .'dan sonraki ksımının kaç basamakta oluşacağını belirlemek için kullanılır.

document.write("Sayı:", ondalıklıSayı.toFixed(1), "<br/>");

// * Math.round: Bir ondalıklı sayıyı en yakın tam sayıya göre yuvarlamak için kullanılır.
document.write("Sayı En Yakın Tam Sayı:", Math.round(ondalıklıSayı), "<br/>");

document.write("30.1321 En Yakın Tam Sayı:", Math.round(30.1321), "<br/>");

// * Math.floor: Ondalıklı bir sayıyı en yakın bir alt tam sayıya yuvarlamak için kullanılır.

document.write(
  "Sayı En Yakın Bir Alt Tam Sayı:",
  Math.floor(ondalıklıSayı),
  "<br/>"
);

// * Math.ceil: Ondalıklı bir sayıyı en yakın bir üst tam sayıya yuvarlamak için kullanılır.

document.write(
  "Sayı En Yakın Bir Üst Tam Sayı:",
  Math.ceil(12.000012132),
  "<br/>"
);

// * Math.random: 0-1 arasında rastgele sayılar oluşturur.

document.write("Rastgele Sayı:", Math.random(), "<br/>"); // 0-1

document.write("Rastgele Sayı:", Math.round(Math.random() * 10), "<br/>"); // 0-10

// * parseInt: String bir ifadeyi number'a çevirmek için kullanılır.

const sayı5 = "44";

document.write("Sayı-5:", sayı5, "<br/>");

document.write("Sayı-5'in tipi:", typeof sayı5, "<br/>");
document.write("Sayı-5'in tipi:", typeof parseInt(sayı5), "<br/>");

// * toString: String dışarısındaki bir değeri stirnge çevirmek için kullanılır.

const sayı6 = 44;

document.write("Sayı-6'in tipi:", typeof sayı6, "<br/>");
document.write("Sayı-6'in tipi:", typeof toString(sayı6), "<br/>");

// * Javascript Diziler

// Javascript dizileri birden fazla veriyi bir arada yönetmemizi kolaylaştıran bir yapıdır.Bu yapı hem birden fazla değeri bir arada tutma hemde bu değerleri bazı metotlar ile yönetmemiz sağladığından projelerde çokca kullanılır.

// Dizi Tanımlama

// Dizi tanımlarken let veya const anahtar kelimelerinden biri seçilir.Seçilen bu anahtar kelimeden sonra diziye bir isim verilir.Verilen isimden sonra atama operatörü "=" yazılıp sağına [] konulur.[] içerisinde ise dizinin elemanları yazılır.

// Dizi tanımlama
const kişiler = [
  "Ahmet",
  "Azat",
  "Bahadır Can",
  "Basri",
  "Berfin",
  "Pınar",
  "Nursel",
  "Fatmanur",
];

// Dizinin elemanlarına erişme
document.write("Kişiler: ", kişiler, "<br/>");

// Dizinin belirli sırasındaki elemana erişme
document.write("Kişiler 1.Eleman: ", kişiler[0], "<br/>");

// Dizinin belirli sırasındaki elemana erişme
document.write("Kişiler 7.Eleman: ", kişiler[6], "<br/>");

// ! Bir dizninin belirli sırasındaki elemanına erişmek için diziAdı yaılıp yanına [] koyulur.Buradaki [] içerisinde erişilmek istenen elemanın sırası yazılır.Fakat javascript'deki sayma mantığı ile bizimki bir tık farklı olduğundan (Biz saymaya 1,2,3,... şeklinde başlarken javascript bunu 0,1,2,3,... şeklinde yapar) tam olarak istediğimizi elde edemeyiz.Çözüm olaraksa diziAdının yanındaki [] içerisine erişilmek istenen elemanın sırasının 1 eksiği yazılır.

// todo: Diller adında bir dizi oluşturunuz.Bu dizi içerisine birkaç eleman yazınız.Sonrasında dizinin tüm elemanlarını ve belirli bir sıradaki elemanını ekrana yazdırınız.

const diller = ["ingilizce", "Almanca", "Fransızca", "Korece"];

document.write(diller);
document.write(diller[1], "<br/>");
document.write(diller[2], "<br/>");

document.write("---------------", "<br/>");

// * Javascript Dizi Metotları

let arabalar = ["Bmw", "Mercedes", "Audi", "Tesla"];

document.write("Arabalar:", arabalar, "<br/>");

// ! push: Bir dizinin sonuna eleman eklemek için kullanılır.Eklenecek elemanlar () içerisinde yazılır.

arabalar.push("Ford");

document.write("Arabalar-1:", arabalar, "<br/>");

// ! unshift: Bir dizinin başına eleman eklemek için kullanılır.Eklenecek elemanlar () içerisinde yazılır.

arabalar.unshift("Renault");

document.write("Arabalar-2:", arabalar, "<br/>");

// ! pop: Bir dizinin sonundan eleman kaldırmak için kullanılır.

arabalar.pop();

document.write("Arabalar-3:", arabalar, "<br/>");

// ! shift: Bir dizinin ilk elemanını diziden kaldırmak için kullanılır.

arabalar.shift();

document.write("Arabalar-4:", arabalar, "<br/>");

// ! slice: Bir dizinin belirli bir aralığını almak için kullanılır.Bu metod bizden iki adet değer ister.Bunlardan ilki alınacak aralığın hangi sıradan başlayacağı ikincisi ise hangi karaktere kadar alınacağıdır.Buradaki birinci  değer zorunlu ikinci değer ise opsiyoneldir.

document.write("Arabalar 1-3:", arabalar.slice(0, 3), "<br/>");

const arabalar1 = arabalar.slice(0, 3);

document.write("Arabalar Kesik:", arabalar1, "<br/>");

// ! length: Bir dizinin uzunluğunu ölçmek için kullanılır.

document.write("Arabalar Dizisinin Uzunluğu:", arabalar.length, "<br/>");

// ! indexOf: Bir dizi içerisinde belirtilen elemanın kaçıncı index'te olduğunu belirlemek için kullanılır.

arabalar.push("Mercedes");

document.write("Arabalar-5:", arabalar, "<br/>");

document.write(
  "Arabalar Dizisi İçinde Mercedes:",
  arabalar.indexOf("Mercedes"),
  "<br/>"
);

document.write(
  "Arabalar Dizisi İçinde Mercedes:",
  arabalar.lastIndexOf("Mercedes"),
  "<br/>"
);

// ! concat: Bir diziyi başka bir dizi veya elemanla birleştirmek için kullanılır.

document.write("Arabalar-6:", arabalar.concat("Ferrari", "Honda"), "<br/>");

document.write("Arabalar-6:", arabalar.concat(arabalar1), "<br/>");

const arabalar2 = arabalar.concat(arabalar1);

document.write("Arabalar Yeniiii:", arabalar2, "<br/>");

// ! reverse: Bir diziyi ters çevirmek için kullanılır.

document.write("Arabalar Ters:", arabalar.reverse(), "<br/>");

// ! join: Bir dizinin elemanları belirtilen ayıraç ile bölmek için kullanılır.

document.write("Arabalar Ters:", arabalar.join("// ||"), "<br/>");

// ! splice: Splice metodu dizilerin isceç çakısıdır.Bu metod sayesinde bir diziye eleman ekleyebilir,eleman kaldırabilir ve bir elemanı güncelleyebiliriz.

document.write("Arabalar-7 ⚡️  :", arabalar, "<br/>");

// * splice ile diziden eleman kaldırma

// splice metodu ile diziden eleman kaldırmak için splice metoduna iki adet değer girilir.Bunlardan ilki kaçıncı index'ten itibaren eleman sileceğidir.İkincisi ise kaç tane eleman sileceğidir.

const silinenArabalar = arabalar.splice(2, 2);

document.write("Arabalar Silinen :", silinenArabalar, "<br/>");

document.write("Arabalar-8:", arabalar, "<br/>");

// * splice ile diziye eleman ekleme

// splice metodu ile diziye eleman eklemek için ilk olarak splice metoduna kaçıncı index'ten itibaren eleman ekleneceği söylendikten sonra 0 yazılır.Sonrasında ise eklenecek elemanlar teker teker yazılır.

arabalar.splice(2, 0, "Hyundai", "Chery");

document.write("Arabalar-9:", arabalar, "<br/>");

// * splice ile bir dizinin elemanını güncelleme
// splice ile güncelleme işlemi yapabilmek için splice metoduna birinci değer olarak kaçıncı index'ten itibaren eleman güncelleneceği söylenir.İkinci değer olarak kaç elemanın güncelleneceğini söyler ve bundan sonra güncellenecek elemanların değerleri girilir.

arabalar.splice(1, 3, "Selam", "Merhaba", "Nasılsın");

document.write("Arabalar-10:", arabalar, "<br/>");

/*
 splice metoduna  farklı değerler girerek diziye eleman ekleyebilir,diziden eleman kaldırabilir ve dizideki elemanları güncelleyebiliriz.
 splice metoduna


 * (index,deleteCount) şeklinde değer girilirse belirtilen index'ten itibaren belirtilen sayıda elemanı diziden siler

 * (index,0,items) şeklinde değer girilirse belirtilen index'ten itibaren verilen items'ları diziye ekler


 * (index,updateCount,updateItems) şeklinde değer girilirse belirtilen index'ten itibaren belirtilen sayıda elemanı verilen items'lar ile günceller



*/

// todo: sort // find // filter metotları işlenecek //

// * Javascript Objeler

// Objeler içerisinde key-value (anahtar-değer) çiftleri halinde verileri tutan yapılardır.Objeler içerisinde string,number,boolean,array,function gibi yapılar tanımlanabilir.

// Bir obje let veya const anahtar kelimesi yazılıp objeye bir isim verildikten sonra atama operatörü "=" konulup {} yazılarak oluşturulur.Buradaki {} içerisinde objenin değerleri yer alır.

let kullanıcı = {
  ad: "Hasan",
  soyad: "Koparan",
  yaş: 35,
  öğrenciMi: false,
  hobiler: ["Yazılım", "Yüzme", "Futbol"],
  kullaniciTanitim: function () {
    // Bir obje içerisinde objenin içerisinde yer alan bir değer erişmek istiyorsak bunun obje içerisinde olduğunu belirtmemiz gerekir.Bunuda erişilmek istenen değerin başına "this" koyarak
    document.write(
      "Kullanıcı adı: ",
      this.ad,
      " Kullanıcı soyadı ",
      this.soyad,
      " Kullanıcı yaş: ",
      this.yaş,
      "<br/>"
    );
  },
  adres: {
    ülke: "Türkiye",
    şehir: "Antalya",
    semt: "Kemer",
    postaKodu: 12343,
  },
};

// Objeye erişme
console.log(kullanıcı);

// Objenin içerisindeki değerlere erişme
console.log(kullanıcı.ad);
console.log(kullanıcı.soyad);
console.log(kullanıcı.hobiler);
console.log(kullanıcı.hobiler[0]);
console.log(kullanıcı.adres.semt);

kullanıcı.kullaniciTanitim();

// todo: hayvan adında bir obje oluşturunuz.Bu obje içerisinde en az 1 string,1 number,1 boolean,1 array,1 function ve 1 obje tanımlayınız.Objeye ve obje içerisindeki key'lerer erişiniz obje içerisindeki fonksiyonu çalıştırınız.

document.write(
  "<br/>",
  "<br/>",
  "<br/>",
  "<br/>",
  "<br/>",
  "<br/>",
  "<br/>",
  "<br/>",
  "<br/>",
  "<br/>",
  "<br/>",
  "<br/>"
);
