// * Javascript Değişkenler (Variables):

// Değişkenler program içerisinde değeri değişebilen ifaderleri yönetmek için kullanılan yapılardır.Bu sayede verilerimizi program içerisinde kolayca yönetebiliriz.

// * Bir program içerisinde değişkenler kullanılırken yapılması gereken 3 adım vardır:

// 1-) Değişkenin tanımlanması

// 2-) Değişkene değer atanması

// 3-) Değişkenin program içerisinde kullanılması

// * Değişken tanımlama

// Javascript'de değişken tanımlamak için var,let ve const anahtar kelimelerinden biri seçilir.Sonrasında oluşturulacak değişkene bir isim verilir.Bu isim verilirken istediğimiz ismi verebiliriz.Fakat javascript içerisinde kullanılan bazı özel isimler hariç[var,let,const,object,array,if-else,string,number,class,...] Bir değişkene verilecek isim rakamla başlayamaz.Değişkenin değeri ne olacaksa bununla ilintili bir isim seçilir.Değişkene verilecek isim birden fazla kelimeden oluşuyorsa bu isimlendirmeyi genelde camelCase(deve-cüce) kuralına uygun şekilde isimlendiririz.

// * Değişkene Değer Atama

// Oluşturulan değişkene değer atarken atama operatörü (=) kullanılır.Bu operatör sağında bulunan değerleri alıp solundakinin içine atar.Değişkenin değeri metin ifade olacaksa bunu "" içerisinde yazmalı eğer değeri sayı olacaksa bunu direkt olarak "" kullanmadan yazmalıyız.

// * Değişkenin Program İçerisinde Kullanılması

// Oluşturulan değişken program içerisinde gerekli yerde çağırılarak kullanılır.

var kullanıcıAdı = "furkanyılmaz";

document.write(kullanıcıAdı, "<br/>");

let ülkeAdı = "Türkiye";

document.write(ülkeAdı, "<br/>");

const şehirNo = 44;

document.write(şehirNo, "<br/>");

// ? Neden 3 adet değişken tanımlama yöntemi var ?

// var ile değişken tanımlama güncel projelerde tercih edilmez.Bunun sebebi var ile tanımlanan bir değişkenin aynı isimle yeniden tanımlanabilmesidir.Bu durum program içerisinde sıkıntılara ve güvenlik açıklarına sebep olur.Bu sebeple güncel projelerde değişken tanımlamak için let ve const kullanılır.

var öğrenciAdi = "Süheyl";

document.write(öğrenciAdi, "<br/>");

var öğrenciAdi = "Atlas";

let arabaMarkasi = "Toyota";

document.write(arabaMarkasi, "<br/>");

// let arabaMarkasi1 = "BMW"; Bu durumda 'arabaMarkasi' has already been declared hatası verir.Yani hali hazırda tanımlı bir değişkeni yeniden tanımlayamazsın diyor.

const kursAdi = "Udemig";

document.write(kursAdi, "<br/>");

// const kursAdi = "Emaartech"; Bu durumda kursAdi' has already been declared hatası verir.Yani hali hazırda tanımlı bir değişkeni yeniden tanımlayamazsın diyor.

// ? let ve const arasındaki fark nedir ?

// let ile tanımlanan bir değişkenin değeri güncellenebilir.Fakat const ile tanımlanan değişken sabittir.Değeri güncellenemez.

let şehirAdi = "İstanbul";

document.write(şehirAdi, "<br/>");

şehirAdi = "Malatya"; // şehirAdi değişkenin değeri güncellendi.Bu satırdan itibaren değeri Malatya olacak.

document.write(şehirAdi, "<br/>");

const ürünFiyati = 100;

document.write(ürünFiyati, "<br/>");

// ürünFiyati = 300;  Bu durumda Assignment to constant variable. hatası verir.Yani sabit bir değişkeni güncelleyemezsin diyor.

let takim;

takim = "Galatasaray";

document.write(takim, "<br/>");

// ! let ve const arasındaki bir diğer fark ise let ile tanımlanan bir değişkenin değeri sonra atanabilir.Fakat bunu const ile tanımlanan bir değişken için yapamayız.

// const öğrenciAdı

/*
! Özetle:

* Javascript'de değişken tanımlamak için 3 yöntem bulunur.Bunlar var,let ve const'dur.

* Fakat güncel projelerde var değişkeni yeniden tanımalamaya izin vermesi sebebiyle oluşturduğu güvenlik açıkları sebebiyle tercih edilmez.Yerini let ve const'a bırakır.


* let ve const güncel projelerde kullanılan değişken tanımlama yöntemidir.Bunlar arasındaki fark ise let ile tanımlanan bir değişkenin değeri güncellenebilir fakat const ile tanımlanan bir değişkenin değeri güncellenemez.Birde let ile tanımlanan değişkenin değeri sonra atanabilir.Fakat bunu const ile tanımlanan bir değişken için yapamayız.

*/

// * Javascript Veri Tipleri

// Javascript'de yer alan tüm yapıların birer veri tipi bulunmaktadır.Bu tipler javascript'deki yapılar ile işlem yapmamız noktasında önemlidir.

// string,number,boolean,object,array,null,undefined,class,....

// ! Stirng:
// Javascript'de bulunan metin ifadelerin veri tipi string'dir.String şeklinde bir değer tanımlanacaksa bu "" içerisinde yapılır.

let mesaj =
  "Udemig akademide javascript derslerine geçiş yaptık.Geleceğin başarılı developer'ları ile javascript'in içinden geçeceğiz.";

// ! Number:
// Javascript'de bulunan sayı ifadelerinin veri tipi number'dır.Number bir değer tanımlanacaksa bunu direkt olarak yazarız.

let yaş = 40;

// ! Boolean:
// Javascript'de true (doğru) veya false (yanlış) değer alan ifadelerin veri tipi boolean'dır.

let öğrenciMi = false;

//  typeof ==> Javascript'de bir değerin veri tipini kontrol etmek için kullanılır.

// console.log(typeof mesaj); -->  string

// console.log(typeof yaş); --> number

// console.log(typeof öğrenciMi); --> boolean

// ? 44 sayısı "" içerisinde tanımlanırsa veri tipi ne olur "" kullanılmazsa veri tipi ne olur

let sayi1 = "44";
let sayi2 = 44;

// console.log(typeof sayi1); --> string
// console.log(typeof sayi2); --> number

// ! undefined:
// İçeriği belirlenmeyen yani herhangi bir atama yapılmayan ifadelerin veri tipidir.

let sayi3; // Şuan undefined

document.write(sayi3, "<br/>");

sayi3 = 456;

document.write(sayi3, "<br/>");

// ! null:
// İçeriği boş olan bir ifadenin veri tipidir.

let numara = null;

// ? null ve undefined arasındaki fark nedir?
// undefined içeriği yok demektir.Null ise genelde developer tarafından başlangıç değeri olarak bilinçli şekilde atanır.

// * Javascript Aritmetik Operatörler
let sayi4 = 87;
let sayi5 = 12;

// Toplama (+):
document.write(sayi4 + sayi5, "<br/>");

// Çıkarma (-):
document.write(sayi4 - sayi5, "<br/>");

// Çarpma (*):
document.write(sayi4 * sayi5, "<br/>");

// Bölme (/):
document.write(sayi4 / sayi5, "<br/>");

// Mod (%): Bir sayının bir sayıya bölümünden kalanı bulma işlemine mod alma denir.
document.write((sayi4 % sayi5) + "<br/>");

document.write("44" + "45", "<br/>");

// Javascript'de "+" işareti iki görev üstlenir:

// i-) Toplama: Eğer sağında solunda bulunan ifadeler aynı cinse ve sayıysa bunları toplar ve bir toplam değeri elde eder.

// ii-) Birleştirme: Eğer sağında ve solundaki ifadeler toplanamayacak ise bunları birleştirir.

document.write("-----------------------------" + "<br/>");

// todo: İki adet sayı değişkeni oluşturunuz.Bunlara birer değer atayınız.Sonrasında bu iki sayıyla toplama,çıkarma,çarpma,bölme ve mod işlemleri yaparak elde ettiğini sonucu ekrana yazdırınız.

let num1 = 56;
let num2 = 23;
document.write(num1 + num2 + "<br/>");
document.write(num1 - num2 + "<br/>");
document.write(num1 * num2 + "<br/>");
document.write(num1 / num2 + "<br/>");
document.write((num1 % num2) + "<br/>");

document.write("-----------------------------" + "<br/>");

// * Javascript Karşılaştırma Operatörleri
let sayi6 = 60;
let sayi7 = 40;

// Küçüktür (<)
document.write("sayi6 sayi7'den küçük mü ?: " + (sayi6 < sayi7) + "<br/>");
document.write("sayi7 sayi6'dan küçük mü ?: " + (sayi7 < sayi6) + "<br/>");

// Küçük Eşittir (<=): Küçük eşittir operatörü iki kontrol yapar.Küçük ve eşit.Ve bu kontrollerden bir tanesinin true dönmesi sonucun true dönmesi için yeterlidir.
document.write(
  "sayi6 sayi7'den küçük eşit mi ?: " + (sayi6 <= sayi7) + "<br/>"
);
document.write("sayi6(60) 60'dan küçük eşit mi ?: " + (sayi6 <= 60) + "<br/>");

// Büyüktür (>)
document.write("sayi6 sayi7'den büyük mü ?: " + (sayi6 > sayi7) + "<br/>");
document.write("sayi7 sayi6'den büyük mü ?: " + (sayi7 > sayi6) + "<br/>");

// Büyük Eşittir (>=):Büyük eşittir operatörü iki kontrol yapar.Büyük ve eşit.Ve bu kontrollerden bir tanesinin true dönmesi sonucun true dönmesi için yeterlidir.
document.write(
  "sayi6 sayi7'den büyük eşit mi ?: " + (sayi6 >= sayi7) + "<br/>"
);
document.write("sayi6 60'dan büyük eşit mi ?: " + (sayi6 >= 60) + "<br/>");
document.write("sayi7 60'dan büyük eşit mi ?: " + (sayi7 >= 60) + "<br/>");

// Eşittir (==)
document.write("sayi6 sayi7'ye eşit mi ?: " + (sayi6 == sayi7) + "<br/>");
document.write("sayi6 60'a eşit mi ?: " + (sayi6 == 60) + "<br/>");

// Denktir (===):İfadelerin denk olması durumunu kontrol eder.Denlik için ifadelerin hem değeri hemde veri tipi ni kontrol eder.Her iki koşulda sağlanıyorsa true sağlanmıyorsa false sonucu döndürür.

let sayi8 = 44;
let sayi9 = "44";

document.write("sayi8 sayi9'a eşit mi ?: " + (sayi8 == sayi9) + "<br/>");
document.write("sayi8 sayi9'a denk mi ?: " + (sayi8 === sayi9) + "<br/>");

document.write("-----------------------------" + "<br/>");

// * Javascript Bağlaçlar

// Ve (&&) => Sağındaki ve solundaki değelerin her ikisi'de true ise true döndürür.

// Veya (||) => Sağındaki ve solundaki değerlerden en az 1 tanesinin true olması durumunda true dönderir.

document.write((true && true) + "<br/>");
document.write((true && false) + "<br/>");
document.write((false && true) + "<br/>");
document.write((false && false) + "<br/>");

document.write("-----------------------------" + "<br/>");

document.write((true || true) + "<br/>");
document.write((true || false) + "<br/>");
document.write((false || true) + "<br/>");
document.write((false || false) + "<br/>");

// * Javascript Fonksiyonlar (Functions)

// Javascript fonksiyonları bir işlev tanımlamak için özelleştirilmiş kod parçacıklarıdır.Bir çıktı vermek için,iki sayıyı toplamak için,... fonksiyonlar oluşturulur.

// * Javascript'de bir fonksiyon ile işlem yapmak için ilk olarak bu fonksiyonu tanımlamalı sonrasında tanımlanan fonksiyonun tanmlı işlemi yapması için bu fonksiyonu çağırmalıyız.

// ! Bir fonksiyon tanımlama:
// Bir fonksiyon function anahtar kelimesi ile tanımlanır.function anahtar kelimesi yazılır.Sonrasında bu fonksiyona bir isim verilir.Bu isimden sonra sırasıyla (){} oluşturulur.{} içerisinde bu fonksiyonun yapması istenen işlem kodlanır.

function çiktiVer() {
  document.write(
    "Udemig akademide frontend kursunda yeni hedef:Javascript" + "<br/>"
  );
}

// ! Bir fonksiyonu çağırma:
çiktiVer();

// todo: Toplama adında bir fonksiyon oluşturunuz.Bu fonksiyon iki adet sayıyı toplasın ve toplamı ekrana yazdırsın.

const sayi10 = 65;
const sayi11 = 28;

function toplama() {
  let toplam = sayi10 + sayi11;

  document.write("Toplam:" + toplam + "<br/>");
}

toplama();
toplama();
toplama();
toplama();

// ? Javascript'in dinamik işlemler yapmamızı sağladığınu konuştuk.Fakat şuana kadar oluşturduğumuz fonksiyonlar hep statik işlemler yaptı.Peki bir fonksiyonun dinamik işlem yapmasını nasıl sağlarız ?

// Bir fonksiyonu dinamik hale getirmek için parametre kullanılır.Bir fonksiyonda parametre kullanmak içinse ilk olarak fonksiyona parametre geçmemiz gerekir.Bir fonksiyona parametre fonksiyon adının yanında yer alan () içerisinde geçilir.Sonrasında bu parametre fonksiyon içerisinde karşılanır ve dinamik işlemler yapılır.

// todo: Bir fonksiyon oluşturunuz.Bu fonksiyon her seferinde kendisine verilen sayıları çarpıp elde edilen sonucu ekrana yazdırsın.

let sayi12 = 4;
let sayi13 = 5;

function çarpmaİşlemi(x, y) {
  let çarpım = x * y;

  document.write("Çarpım:" + çarpım + "<br/>");
}

çarpmaİşlemi(); // Bu durumda fonksiyona parametre geçilmediğinden NaN (Not a number) ==> Sayı değil

çarpmaİşlemi(sayi12, sayi13);
çarpmaİşlemi(44, 10);

// ? Fonksiyonları değer döndürmesi nasıl sağlanır?

// Fonksiyonların bir değeri döndürmesi için return anahtar kelimesi kullanılır.Bu anahtar kelimes sayesinde fonksiyon dışarı bir değer döndürebilir.

// todo: Stok hesapla adında bir fonksiyon oluşturuz.Bu fonksiyon kendisine verilen 3 adet ürün adetini toplayarak bir stok değeri bulsun.Elde edilen bu değeri fonksiyon çağırıldığında geri döndürsün.

function stokHesapla(s1, s2, s3) {
  let toplamStok = s1 + s2 + s3;

  return toplamStok;
}

document.write("Toplam Stok:" + stokHesapla(10, 23, 56) + "<br/>");

// todo: Bir fonksiyon oluşturunuz.Bu fonksiyon kendisine dışarıdan verilen 3 adet sayının ortalamasını hesaplayıp sonucu ekrana yazdırsın.

function ortalamaHesapla(a, b, c) {
  let ortalama = (a + b + c) / 3;

  return ortalama;
}

document.write("Ortalama:" + ortalamaHesapla(45, 78, 90) + "<br/>");
