// * Javascript Class Yapısı

// Javascript class yapısı,düzenli bir şekilde metotlar ve özellikler oluşturmak için kullanılır.Bir class tanımlanırken class keyword'ü yazıldıktan sonra class'a bir isim verilir.Verilen isimden sonra {} açılır.Buradaki {} içerisinde class yapısının sahip olması istenen özellikler ve metotlar tanımlanır.Class yapısını kullanırken bilinmesi gereken bazı temel özellikler:

// 1-) constructor: Class örneği alındığında çalışacak metotdur.Class yapısının kurucu metodudur.

// 2-) methods: Class yapısında kullanılacak fonksiyonlardır.Api isteği at,ortalama hesapla,...

// 3-) inheritance: Bir class'ın başka bir class'dan miras alması işlemidir.

// Bir class yapısının kullanılabilmesi için class'ın new keyword'ü ile örneği alınmalıdır.Alınan bu örnek üzerinden class yapısının sahip olduğu metotlar kullanılabilir.

// Class Tanımlama
class Araba {
  // Kurucu metot: Class'ın örneği alındığında otomatik olarak çalışır.
  constructor(marka, model, yıl) {
    this.marka = marka;
    this.model = model;
    this.yıl = yıl;
  }

  // Metot
  çıktıVer() {
    document.write(`Hello,world !! <br/>`);
  }

  // Metot
  ortalamaHesapla(a, b, c) {
    document.write(`Ortalama: ${(a + b + c) / 3} <br/>`);
  }

  // Metot

  arabaTanıtım() {
    document.write(
      `Araba marka: ${this.marka}; Model: ${this.model}; Yıl: ${this.yıl} <br/> `
    );
  }
}

// Class yapısının örneğini alma
// Class örneği alınırken class içerisinde kullanılacak değerlerin ataması () içerisinde yapılmalıdır.
const arabaClassı = new Araba("Audi", "A3", 2020);

document.write(`Marka: ${arabaClassı.marka} <br/>`);
document.write(`Model: ${arabaClassı.model} <br/>`);
document.write(`Yıl: ${arabaClassı.yıl} <br/>`);

arabaClassı.çıktıVer();

arabaClassı.arabaTanıtım();

// Class'larda Miras Alma

// Bir class'ın başka bir class içerisinde bulunan metot ve değerleri miras alması işlemine inheritance denir.Bir miras alma işlemi için class yapısı tanımlanırken class adından sonra "extends" keyword'ü kullanılarak miras alınacak class belirtilir.

class ElektirikliAraba extends Araba {
  // Kurucu metot
  constructor(marka, model, batarya) {
    super(marka, model); // Miras alınan class yapısının constructor'ını kullanabilmek için super metodu kullanılır.Bu metot sayesinde miras alınan class'ın kurucu metodu kullanılır.
    // ! super ile miras alınan class'ın kurucu metodu miras alınır,değerleri değil.
    // ! super ile miras alınan class'ın kurucu metodu içerisinden istenilen değerler alınabilir.Hepsi alınmak zorunda değildir.
    this.batarya = batarya;
  }

  // Metot
  arabaBilgilendirme() {
    document.write(
      `Araba hakkında bilgiler ==>Marka:${this.marka} Model:${this.model}  Batarya:${this.batarya} `
    );
  }
}

const elektirikliAraba = new ElektirikliAraba("Tesla", "Model X", 2024, 1000);

// console.log(elektirikliAraba);

// Miras alınan class içerisindeki metot kullanıldı
elektirikliAraba.arabaBilgilendirme();

// Miras alınan class içerisindeki metot kullanıldı
elektirikliAraba.ortalamaHesapla(34, 34, 34);

// Class'larda get ve set yapısı

// Javascript class'larında get ve set yapısı ile class içerisindeki değerlere özellik kontrolü yapılabilir.

class Kişi {
  // Kurucu metot
  constructor(isim, soyisim) {
    this.isim = isim;
    this.soyisim = soyisim;
  }

  // get ile bir değeri döndüren metot oluştururuz.
  get isimGetir() {
    return `İsim: ${this.isim} Soyisim: ${this.soyisim}`;
  }

  // set ile bir değeri güncelleyen bir metot oluştururuz.
  set isimGetir(isim) {
    this.isim = isim;
  }
}

const kişi = new Kişi("Bahadır Can", "Kardeş");

document.write(`${kişi.isimGetir} <br/>`);

kişi.isimGetir = "Furkan";

// console.log(kişi);

// Class'larda değerlerin erişilebilirliklerini ayarlama

class Adres {
  constructor(şehir, ilçe) {
    this._şehir = şehir; // Bir değeri tanımlarken başına "_" konulursa bu değere class dışarısından erişemeyiz ama class içerisinde dilediğimiz gibi erişebiliriz.
    this.ilçe = ilçe;
  }

  tanıtım() {
    document.write(`Şehir: ${this._şehir} <br/>`);
  }

  değerDöndür() {
    return this._şehir;
  }
}

const adresClassı = new Adres("İstanbul", "Beyoğlu");

console.log(adresClassı.şehir);

adresClassı.tanıtım();

document.write(`Şehir Adı:${adresClassı.değerDöndür()}  <br/> <br/> `);

// ! Javascript class yapısı kodun daha okunur,daha düzenli ve yeniden kullanılabilir olmasını sağlayan bir yapıdır.

// todo: Bir tane kütüphane clası örneği oluşturunuz.

// Class tanımla
class Kütüphane {
  // Kurucu metot
  constructor() {
    this.kitaplar = [];
    this.admin = "Yusuf";
  }

  // Kitap ekleme metodu
  kitapEkle(kitap) {
    // Bu metoda verilen kitabı kitaplar dizisine ekle
    this.kitaplar.push(kitap);
  }

  // Kitap listeleme metodu
  kitapListele() {
    this.kitaplar.forEach((kitap) => {
      document.write(`Kitap adı: ${kitap} <br/>`);
    });
  }
}

// Classın örneğini al
const kütüphaneClassı = new Kütüphane();

kütüphaneClassı.kitapEkle(1984);
kütüphaneClassı.kitapEkle("Zengin Baba Fakir Baba");
kütüphaneClassı.kitapEkle("Atomik Alışkanlıklar");

console.log(kütüphaneClassı.kitaplar);

kütüphaneClassı.kitapListele();

// * Http Metotları

// Client ile server arasındaki haberleşe işlemi sırasında kullanılan protokole HTTP denir.Bu protokolde kullanılan metotlar:

// Get: Server'dan veri çekmek için kullanılır.

// Post: Server'a veri göndermek için kullanılır.

// Put: Server'daki bir veriyi güncellemek için kullanılır.Put ile veri güncellenecekken güncellenecek verinin tamamını server'a göndermek gerekir.

// Patch: Server'daki bir veriyi güncellemek için kullanılır.Patch ile güncelleme yapılacaksa sadece güncellenecek değeri server'a göndeririz.

// Delete: Server'daki bir veriyi silmek için kullanılır.

// * Swagger Dökümantasyonu

// Client'dan server'a istek atılacağı zaman hangi url'e istek atılacak;hangi parametreler kullanılacak bunlar swagger dökümantasyonlarında toplanır.Developer buradaki dökümantasyonu inceleyerek nasıl api isteği atacağı hakkında fikir sahibi olur.

// * Javascript Call,Bind Ve Apply Metotları

// Javascript'de call,bind ve apply metotları ile bir objeye ait özellikleri başka objelerde kullanabiliriz.

// ! call: Bu metot ile bağlam belirterek bir objeye ait özellikleri başka bir obje içerisinde kullanabiliriz.

// ! apply: Bu metot tıpkı call metodu gibi bir objeye ait özellikleri bağlam belirterek başka bir obje'de kullanmamızı sağlar.call metodundan farkıysa apply dışarından verilecek argümanları bir dizi şeklinde ister.

// ! bind:Bu metot tıpkı call ve apply metotları gibi bir objede olmayan özellikleri bağlam belirterek başka bir objede kullanmamızı sağlar.bind metodu farklı olarak kullanılmak istenen özelliği doğrudan değil bir fonksiyona atayarak çalıştırmamızı ister.

const kullanici = {
  isim: "Nermin Ruken",
  soyisim: "Bakır",
  yaş: 30,
  tanitim: function (şehir, semt, plaka) {
    document.write(
      `Kullanıcı adı: ${this.isim} kullanıcı soyadı: ${this.soyisim} kullanıcı şehir:${şehir} kullanıcı semt: ${semt} plaka: ${plaka} <br/>`
    );
  },
};

const kullanici1 = {
  isim: "Musa ",
  soyisim: "Akyıl",
};

kullanici.tanitim.call(kullanici1, "Konya", "Selçuklu", 42); //kullanici1 objesi içerisinde bulunmayan tanitim fonksiyonunu kullanici objesi içerisinde çağırarak kullandık.

const kullanici2 = {
  isim: "Mustafa ",
  soyisim: "Göktaş",
};

kullanici.tanitim.apply(kullanici2, ["Hatay", "Antakya", 31]); // kullanici2 objesi içerisinde bulunmayan tanitim fonksiyonunu kullanici objesi içerisinden çağırarak kullandık.

const kullanici3 = {
  isim: "Furkan ",
  soyisim: "Yılmaz",
};

const tanitimiÇalıştır = kullanici.tanitim.bind(
  kullanici3,
  "İstanbul",
  "Esenyurt",
  34
); // bind ile kullanici3 objesi içerisinde bulunmaya tanitim fonksiyonunu kullanici objesi içerisinde çağırdık ve bunu tanitimiÇalıştır fonksiyonuna atayarak kullandık.

tanitimiÇalıştır();

// ! Özetle: call,bind ve apply metotları ile bir obje içerisinde bulunmayan bir metodu başka bir obje içerisinde çağırarak kullanabiliriz.

// !call ==> metodunÇağırılacağıObjeAdı.call(metodunKullanıcılacağıObjeAdı,dışarıdanVerilecekArgümanlar)

// !apply ==> metodunÇağırılacağıObjeAdı.apply(metodunKullanıcılacağıObjeAdı,[dışarıdanVerilecekArgümanlar])

// !bind ==> birFonksiyon= metodunÇağırılacağıObjeAdı.bind(metodunKullanıcılacağıObjeAdı,dışarıdanVerilecekArgümanlar)
