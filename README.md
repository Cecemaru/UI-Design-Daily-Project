# UI-Design-Daily-Project

- ilk basta projenin ihtiyaclarini ve neler kullanilicaksa kucuk notlar alinarak belirlendi scss yapisi ile responsive bir yapi belirlendi.Dosya duzeni ve projenin buyuklugune gore bir plan yapildi html css ve js dosyalari birbirleri ile haberlesmesi kontrol edilip setup kuruldu.
- github icin resim ve gorseller tekrar tekrar yuklenilmesi statik dosyalarinin gereksiz yuklenmeleri engellenmesi icin bos dosya bile olsa .gitignore dosyasi olusturuldu.
- dosyalar olusturulduktan sonra baslangic olarak plana uygun bir sekilde sayfa sablonu ve base ozellikler hazirlanmaya baslandi

## Header

- headerda ilk basta kullanilan display flex yapisiyla button yerleri mobilde bozuldugu icin float right kullandim
- sitelerde bulunan logo yazi ile beraber geliyordu ama font boyutu eslesmedigi icin logo ve resim ayrildi font awesomeden mobile icin close butuna alinacak
- yeni bir header duzeni bakilabilirse bakilicak!!!!!!!!!!========!!!!!!!!!!!!

## Form Section - Search

- sayfa yapisi ile component kisminda form section olarak css e ulasilabilir display flex ozellikleri ile kullanilacakti
- arama icin main jsde calismak uzere tekrardan kontrol edilicek
- arama kisminin responsive olmasi icin width degeri tumu kullanildi sayfada belli bir genislikten sonra max-width ayarlandi
- farkli tarayicilar icin select optionstaki arrow degisicek !!!!!!!!!!!=========!!!!!!!!!

## Postlisting and Active Sowtfare Icon

- postlarin bulundugu yer grid yapisi ile olusturuldu responsive verilmeden repeat ile mobile uyumlu yapildi eger daha fazla post eklenicekse veya height degeri farkli postlar gelicekse responsive guncellenir
- author infoda imageler gelen dataya gore degisiklik gostericegi gibi kucuk ayarlarla revize yapilabilir
- latest popular filter ozelligi checkbox halinde verildi eger farkli bir istek olursa button halinda database gonderme acisindan ikincil bir buton tasarimi zaman kalirsa yapilicak !!!!!
  -main js de tag aramalari tamamlandi ama iconlar icin ayni funtion kullanilmak icin tekrardan bakilacak!!!!!!!!!===

### Revizeler

- header bolumu icin tekrardan bir yapi hazirlanmak icin baslaniyor float degil grid veya flex kullanilarak bakilacak
