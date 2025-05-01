const isimler = new Set();

isimler.add("Ahmet");
isimler.add("Mehmet");
isimler.add("Mustafa");
isimler.add("Furkan");
isimler.add("Fatma");

console.log("İsimler Set:", isimler);

// console.log(isimler[0]); Eğer set yapısı içerisindeki bir elemana erişmek istiyorsak bunu direkt olarak yapamayacağımızdan ilk olarak set yapısını diziye çevirmeli sonrasında ise istenilen elemana erişmemiz gerekir.

// ! Set yapısını diziye çevirmek için "Array.from()" metodu kullanılır.

const isimlerDizisi = Array.from(isimler);

console.log("İsimler Dizisi:", isimlerDizisi);
console.log("İsimler Dizisi 0.index:", isimlerDizisi[0]);

console.log("---------------------------------------------");

// ! Bir diziyi set yapısına çevirmek için "new Set()" kullanılır.Buradaki () içerisine dizi yazılır ve set yapısı elde edilir.

const kullanıcılar = [
  "Yusuf",
  "Hakan",
  "Merve",
  "Dilek",
  "Melek",
  "Yusuf",
  "Hakan",
  "Merve",
  "Dilek",
  "Yusuf",
  "Hakan",
  "Merve",
  "Dilek",
  "Yusuf",
  "Hakan",
  "Merve",
  "Dilek",
];

console.log("Kullanıcı Dizisi:", kullanıcılar);

const setKullanıcı = new Set(kullanıcılar);

console.log("Kullanıcı Set:", setKullanıcı);

const güncelKullanıcılar = Array.from(setKullanıcı);

console.log("Kullanıcı Güncel:", güncelKullanıcılar);

// * Map Yapısı:

// Map yapısı içerisinde key-value çiftleri halinde değerler tutan yapılardır.

const yazılımDilleri = new Map();

// Map yapısına eleman eklemek için "set" metodu kullanılır.

yazılımDilleri.set("en", "İngilizce");
yazılımDilleri.set("tr", "Türkçe");

//  Map yapısından eleman kaldırmak için  "delete" metodu kullanılır.

yazılımDilleri.delete("tr");

console.log("Yazılım Dilleri:", yazılımDilleri);

console.log("Yazılım Dilleri:", yazılımDilleri.keys());

const kişi = {
  name: "",
  surname: "",
};

// Map yapısı içerisinde bir key'in karşılığını almak için "get" metodu kullanılır.

console.log(yazılımDilleri.get("en"));

// Map yapısının içerisini temizlemek için "clear" metodu kullanılır.
yazılımDilleri.clear();

// ! Map yapısı kullanıcı giriş çıkış sayılarının takibi,kullanıcı ekran süresinin takibi gibi veri eşleme işlemleri sırasında kullanırız.

// * Javascript Tarih Objesi

// Javascript'de güncel tarih verisine erişmek için Date objesi kullanılır.Bu obje içerisinde getTime,getHour,getMinute,... gibi bulunan metotlar sayesinde gerekli saat,dakika,saniye verilerini alabiliriz.

const tarih = new Date();

document.write(`Tarih:${tarih} <br/> `);

// ! getDate: Date objesi içerisinden gün verisini almak için kullanılır.
document.write(`Gün:${tarih.getDate()} <br/> `);

// ! getMonth: Date objesi içerisinde ay verisini almak için kullanılır.
document.write(`Ay:${tarih.getMonth() + 1} <br/> `);

// ! getFullYear: Date objesi içerisinden yıl verisine erişmek için kullanılır.
document.write(`Yıl:${tarih.getFullYear()} <br/> `);

// ! getDay: Date objesi içerisinden günün o haftanın kaçıncı günü olduğunu bulmak için kullanılır.
document.write(`Gün Haftanın Kaçıncı Günü:${tarih.getDay()} <br/> `);

// ! getHours: Date objesi içerisinden güncel saat verisine erişmek için kullanılır.
document.write(`Saat:${tarih.getHours()} <br/> `);

// ! getMinute: Date objesi içerisinden güncel dakika verisine erişmek için kullanılır.
document.write(`Dakika:${tarih.getMinutes()} <br/> `);

// ! getSeconds: Date objesi içerisinden güncel saniye verisine erişmek için kullanılır.
document.write(`Saniye:${tarih.getSeconds()} <br/> `);

// ! getTime: 1 Ocak 1970'den günümüze milisaniye cinsinden değer döndürür.
document.write(`Milisaniye 1970--:${tarih.getTime()} <br/> `);

// ! toLocaleDateString: Belirtilen konuma göre tarih verisini formatlamak için kullanılır.Bu metod bizden konum string'i ve ayar objesi vermemizi ister.

const formatlıTarih = tarih.toLocaleDateString("tr", {
  day: "2-digit",
  month: "long",
  year: "numeric",
});

document.write(`Formatlı Tarih:${formatlıTarih} <br/> `);

// * Javascript setTimeout && setInterval

// Javascript'de zamana bağlı işlemler yapmak için setTimeout ve setInterval metotları kullanılır.

// ! setTimeout: Belirli bir zaman geçtikten sonra işlem gerçekleştirmek için kullanılır.

// setTimeout(() => {
//   document.write(`⭐️ setTimeout metodu çalıştı. <br/> `);
// }, 1000);

// ! setInterval: Belirli zaman aralığıyla bir işlem gerçekleştirmek için kullanılır.

// setInterval(() => {
//   document.write(`⚡️ setInterval metodu çalıştı. <br/> `);
// }, 2000);

// * Api:

// Web siteleri ve mobil uygulamalarda veriler server adında veri depolamak için özelleştirilmiş makinelerde tutulur.Bu makinelerde tutulan verilere erişmek için "API" kullanılır.Api temelde iki kısımdan oluşur.Birinci kısım baseUrl'dir.Bu kısım api'ın temel kısmıdır.İkinci kısım ise "Endpoint" dir.Bu kısım ise veri tutmak için özelleştirilmiş uç noktadır.

// Api'ile haberleşmek için javascript içerisinde bulunan "fetch" metodu kullanılır.Bu metod kendisine verilen url ile kullanıcının arasındaki iletişimi sağlayan aracıdır.Serverlar kendi arasında 1 ve 0'lar ile haberleşir.Biz ise yazı ile haberleşiriz.Aramızdaki bu farklılığı ortadan kaldırmak içinse "JSON" veri tipi kullanılır.Bu tip javascript'deki objelere çok benzer ama aynı değildir.

// JSON verisini js nesnesine çevirmek için JSON.parse metodu kullanılır.Tam tersini yapmak yani Js nesnesini JSON'a çevirmek içinse JSON.stringfy metodu kullanılır.

// JSON Verisini Js nesnesine çevir:JSON.parse()
const jsonKullanıcıVerisi = `
{
  "ad":"Fatma Nur",
  "soyad":"Çağlar",
  "öğrenciMi":true,
  "yaş":25,
  "hobiler":["Yazılım","Spor","Müzik"]
}`;

console.log("JSON:", jsonKullanıcıVerisi);

const kullanıcıVerisi = JSON.parse(jsonKullanıcıVerisi);

console.log("JS:", kullanıcıVerisi);

// JS nesnesini JSON'a çevir:JSON.stringfy

const jsonKullanıcıVerisi1 = JSON.stringify(kullanıcıVerisi);

console.log("JSON-1:", jsonKullanıcıVerisi1);

// * Javascript Sekron && Asekron Yapı

// * Api'dan Veri Çekme

// 1-) async-await
const ürünleriAl = async () => {
  // Api'dan verilerin alınmasını bekle gelen veriyi response değişkenine aktar
  const response = await fetch("https://fakestoreapi.com/products");

  // Gelen JSON verisini js nesnesine çevir
  const products = await response.json();

  // Gelen verileri console'a yazdır
  console.log(products);
};

// ürünleriAl();
// 2-) promise

// fetch("https://fakestoreapi.com/products")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// todo: Fake store api'dan users verilerini alanınız ve gelen veriyi console'a yazdırınız.

// fetch("https://fakestoreapi.com/users")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// todo: Fake store api'dan tek bir kullanıcı verisini alan bir fonksiyon oluşturunuz.Fakat bu fonksiyon verileri dinamik şekilde alsın.

const kullanıcıAl = async (id) => {
  const response = await fetch(`https://fakestoreapi.com/users/${id}`);

  const kullanici = await response.json();

  console.log(kullanici);
};

// kullanıcıAl(1);
// kullanıcıAl(3);
// kullanıcıAl(5);

const kullanıcıAl1 = async () => {
  const userId = Math.round(Math.random() * 9 + 1);
  const response = await fetch(`https://fakestoreapi.com/users/${userId}`);

  const kullanici = await response.json();

  console.log(kullanici);
};

// kullanıcıAl1();

// todo: Fake store api'dan users verilerini al.Alınan verilerdeki username'i ekrana yazdır

const kullanıcıAdıRenderEt = (users) => {
  console.log(users);

  // Dışarıdan users adında bir parametre al

  // Alınan parametre yani dizideki her elemanı dön herbiri içerisindeki kullanıcı adını ekrana yazdır
  users.forEach((user) => {
    document.write(`Kullanıcı Adı:${user.username} <br/>  `);
  });
};

function getUsers() {
  // Api'dan verileri al
  fetch("https://fakestoreapi.com/users")
    .then((res) => res.json()) // Gelen verileri js nesnesine çevir
    .then((data) => kullanıcıAdıRenderEt(data)); // Gelen veri içerisindeki her kullanıcının kullanıcı adını ekrana render eden fonksiyonu çalıştır
}

// getUsers();

// * Javascript Modüler Dosya Yönetimi

// Javascript'de dinamik işlemlerimizi tek dosya yerine birden fazla dosya oluşturarak daha kolay şekilde yönetebiliriz.

// Bunu yaparken ilk olarak bir ana js dosyası seçmeliyiz.Bu dosyayı Html'e bağlarken type atrribute'ünü module olarak belirtmemiz gerekir.

// Ana js dosyasının yanına yardımcı js dosyaları oluşturulur.Oluşturulan bu dosya içerisinde gerekli yapılar (Bir dizi,bir obje,bir fonksiyon,...) kodlanır.Kodlama yapıldıktan sonra bu yapıların diğer dosyalarda kullanılması için export edilmelidir.Export işlemi "export {} 'dosyaYolu' " şeklinde yapılır.

// Sonrasında kullanılmak istenen dosyada gerekli yapı import edilir.İmport işlemi "import {importEdilecekElemanAdı} from 'dosyaYolu' " şeklinde yapılır.

// ! Export-İmport işleminde {} kullanılmasının sebebi bir dosyadan birden fazla elemanın dosya dışarısına çıkarılabilmesi ve import edilebilmesidir.Ama eğer bir dosyadan sadece bir elemanı dosya dışarısına çıkaracaksak bu noktada export default'u kullanabiliriz.Her dosyanın sadece bir export default hakkı vardır.

import { uyarıVer } from "./helpers.js";

import { users } from "./constants.js"; // Export ile dosya dışarısına çıkarılan elemanın importu

import cars from "./cars.js"; // Export default ile dosya dışarısına çıkarılan elemanın importu
// uyarıVer("İşlem sırasında hata oluştu !!!");

console.log(cars);
