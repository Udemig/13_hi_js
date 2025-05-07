// Js Dom Manipülasyonları

// Html'deki body'nin kapladığı alanın javascript'deki karşılığı document'dir.Document içerisinde oluşturulan elemanlara javascript kısmından müdahelelerde bulunabiliriz.Ör:menu butonuna tıklanınca aside kısmı açılsın,kullanıcı kartına tıklanınca detay sayfasına yönlendirsin,...

// Javascript kısmında bir html elemanına müdahelede bulunmak için ilk olarak bu elemanları javascript kısmına çekmemiz gerekir.

// * Html'deki Elemanlara Javascript Dosyasında Erişme

// 1-)document.getElementsByTagName(): Html kısmındaki elemanları tag adına göre javascript kısmına çekmemizi sağlar.Elemanı javascript kısmına çekmek için metod yanındaki () içerisinde "" leri arasında etiket adı yazılır.Erişilen bu elemanı javascript kısmında kullanabiliriz.Bu metot erişilen elemanların birden fazla olma ihtimalinden dolayı bu elemanları bir collection şeklinde döndürür.
const başlık1 = document.getElementsByTagName("h1");

// console.log(başlık1);

// 2-)document.getElementsByClassName(): Html kısmındaki elemanlara class adına göre erişmemizi sağlar.Erişilen elemanları ise bir collection şeklinde döndürür.

const başlık2 = document.getElementsByClassName("title-1");

// console.log(başlık2);

// 3-)document.getElementById(): Html kısmındaki elemanlara id'sine göre erişmemizi sağlar.Bu metod erişilen elemanları getElementsByTagName ve getElementsByClassName metodlarından farklı olarak bir collection şeklinde döndürmez.

const başlık3 = document.getElementById("title-2");

// console.log(başlık3);

// 4-) document.querySelector():Bu metot şimdiye kadar gördüğümüz tüm metotların görevini tek başına yapar.Yani bir elemana tag adı,class adı ve id'sine göre erişmemizi sağlar.Fakat bu metot bir elemana class adı ile erişiliyorsa bu class adının başına ".";id'sine göre erişiliyorsa bu id'nin başına "#" koymamızı ister.Aksi halde ilgili elemanları bulamaz.

const resim = document.querySelector(".image-1");

// console.log(resim);

const yazı = document.querySelector("#text");

// console.log(yazı);

// 5-) document.querySelectorAll(): document.querySelector() metodu ile birden fazla elemana bir anda erişemeyiz.Bunu yapmaya çalıştığımızda ilk bulduğu elemanı alır ama diğerlerini almaz.Bu sorunu document.querySelectorAll() metodu kullanarak çözebiliriz.document.querySelectorAll metodu birden fazla elemanı bir dizi şeklinde geri döndürür.

const eleman = document.querySelectorAll(".wrapper");

// console.log(eleman);

// * Javascript Dosyasında Html Elemanlarına Still Verme

// ? Elemanlara Still Özelliğini Js Dosyasında  Verme

// yazı.style.backgroundColor = "red";
// yazı.style.fontSize = "50px";

// ? Elemanlara Still Özelliklerini Css Dosyasında Verme
// Bir elemana ait html,css ve js kodlarının en kolay şekilde yönetimi her kodun ayrı ayrı dosyalarda yazılmasıdır.Yani html kodunu .html uzantılı dosyada css kodunu .css uzantılı dosyada ve js kodunuysa .js uzantılı dosyada yazmalıyız.

// Bir elemana ait class işlemlerini classList metodu sayesinde yaparız.Class ekleyebilir,class çıkarabilir,class varmı diye kontrol edebiliriz.

// ! Bir elemana javascript dosyasından class ekleme
yazı.classList.add("yazı-1");

const başlık4 = document.querySelector("#title-3");

// ! Bir elemanın classını javascript dosyasından kaldırma
başlık4.classList.remove("new-title");

// * Javascript Elemanların Html İçeriklerini Belirleme

// Html kısmında bulunan elemanların content'ini javascript dosyasında dinamik şekilde belirleyebiliriz.

//? innerText:Bir elemanın yazı içeriğini belirlemek için kullanılır.
başlık4.innerText = "Hello,world !!!";

//? innerHTML:Bir elemanın html içeriğini belirlemek için kullanılır.

yazı.innerHTML = ` <p class='yazı-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem maiores voluptatum molestiae perferendis. Neque distinctio eum nam cupiditate accusamus debitis sapiente! Sequi modi error impedit alias, eum nostrum unde maiores!</p>
 `;

const açıklama = document.querySelector(".desc");

// ? textContent:Bir elemanın yazı içeriğini belirlemek için kullanılır.
açıklama.textContent = "Merhaba,nasılsın?Neredesin?";

// * Olay İzleyicileri (Event Listeners):

// Arayüzdeki tıklanma,sürüklenme,... gibi olaylar neticesinde bir takım işlevleri tetiklemek istersek bunu eventListeners ile yapabiliriz.EventListeners hangi olayın izleneceği ve bu izlenen olay gerçekleşince ne olacağını söylememizi ister.Ör: Kullanıcı profil resmine tıklayınca profil sekmesine yönlendirsin

// Click
const uyarıButonu = document.querySelector("#alert-btn");

uyarıButonu.addEventListener("click", () => {
  alert("Uyarı butonuna tıklandı");
});

const sürüklemeBaşlığı = document.querySelector(".draggable-title");

// Drag
const sürüklemeFonksiyonu = () => {
  console.log("✅ Sürükleme başladı");
};

sürüklemeBaşlığı.addEventListener("dragstart", sürüklemeFonksiyonu);

sürüklemeBaşlığı.addEventListener("drag", () => {
  console.log("📌 Sürükleniyor");
});

const form = document.querySelector("form");

// Submit
form.addEventListener("submit", (event) => {
  // Form'lar default özellik olarak sayfa yeniler.Bu durumu engellemek için tüm addEventListener'ların almış olduğu event parametresi kullanılarak event.preventDefault() metodu kullanılır.
  event.preventDefault();

  // Event parametresi içerisinde yer alan target metodu ile bu olayı tetikleyen elemana erişebiliriz.Bu örnekte bir submit olayı izleniyor.Submit olayını tetikleyen ise form.Bu sebeple event.target dersek ilgili forma erişiriz.Form içerisindeki elemanları bir dizi şeklinde tuttuğundan event.target[0],event.target[1],... şeklinde form içerisindeki elemanlara erişebiliriz.Erişilen elemanın değerine ise event.target[0].value diyerek ulaşabiliriz.
  console.log(event.target[0].value);
  console.log(event.target[1].value);

  // Inputların içerisini sıfırla-1 [Inputların içerisini teker teker boş string'e çekme]
  //   event.target[0].value = "";
  //   event.target[1].value = "";

  // Inputların içerisini sıfırla-2 [Formu event parametresini kullanarak sıfırlama]
  //   event.target.reset();

  // Inputların içerisini sıfırla-3 [Formu sıfırlama]
  form.reset();
});

// todo: Kullanıcı oluştur butonuna tıklayınca arayüze yeni bir div ekleyen örneğin code-script'ini oluşturunuz.

// 1-) Html kısmından buton ve container'a eriş
const createButton = document.querySelector("#create-btn");
const container = document.querySelector(".container");

// 2-) createElement fonksiyonunu oluştur
function createElement() {
  // i-)   Bir html elemanı oluştur
  // ! document.createElementv ile bir html elemanı oluşturulur.Bu metot bizden hangi elemanı oluşturacağımızı söylememizi ister.
  const yeniDiv = document.createElement("div");
  console.log(yeniDiv);

  // ii-)  Oluşturulan eleman'a class ekle
  yeniDiv.classList.add("new-child");
  // iii-) Oluşturulan elemanın yazı içeriğini belirle
  yeniDiv.textContent = "Yeni Div";
  // iv-)  Oluşturulan elemanı container içerisine ekle
  // ! appendChild metodu ile bir elemanı başka bir eleman içerisine ekleyebiliriz.
  container.appendChild(yeniDiv);
}

// 3-) Butona tıklanma olayını izle ve createElement adındaki fonksiyonu tetikle
createButton.addEventListener("click", createElement);

const temaButonu = document.querySelector("#theme-btn");
const example = document.querySelector(".example");

temaButonu.addEventListener("click", () => {
  example.classList.toggle("dark");
  // ! classList.toggle metodu ile bir elemana belirtilen class bu elemanda varsa bunu çıkarır yoksa bunu ekler.
});

// todo: Bir tane tema butonu oluşturun.Bu butona tıklayınca websitesinde dark-light tema geçişi saplansın.

const temaButon = document.querySelector(".tema-btn");

temaButon.addEventListener("click", () => {
  document.body.classList.toggle("dark-thema");
});

// * Javascript Class Yapısı

class Kişi {
  // Class yapısının kurucu metodu
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  isimYazdır() {
    console.log(`Merhaba,kişi adı: ${this.name} `);
  }

  yaşYazdır() {
    console.log(`Merhaba,kişi yaş: ${this.age} `);
  }

  toplamaİşlemi(a, b) {
    console.log(`Toplam: ${a + b}`);
  }
}

const kişi = new Kişi("Furkan", 40);

kişi.isimYazdır();
kişi.yaşYazdır();

kişi.toplamaİşlemi(2, 3);
