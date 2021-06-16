/*
function printScreen() {
    var text = "Welcome abroad.";
    document.getElementById('result').innerHTML += text + "<br>"; 
    document.getElementById('result').innerHTML += text.length +"<br>";     // string uzunluğu
    document.getElementById('result').innerHTML += typeof text;     // türü
}
printScreen()
*/


/*
function printScreen(){
    var text = "Javascript, Angular js,React js,Vue js,Node js"
  //  document.getElementById("result").innerHTML = text.indexOf("React")  // react kelimesinin geçtiği yerin indeksini verdi
  //  document.getElementById("result").innerHTML = text.lastIndexOf("js")  // js'nin son geçtiği yerin indeksini verir
      document.getElementById("result").innerHTML = text.lastIndexOf("jquery")  // kelimeyi bulamazsa -1 döndürür
}
printScreen()
*/

/*
function printScreen(){
    text = "Javascript, Angular js,React js,Vue js,Node js"
if(text.lastIndexOf("juquery")==-1)
    document.getElementById("result").innerHTML = "aradığınız kelime bulunamadı";
}
printScreen()
*/

/*
function printScreen(){
    var text = "Javascript, Angular js,React js,Vue js,Node js"
   document.getElementById("result").innerHTML = text.indexOf("js",21) // 21. indeksten sonraki ilk karşılaştığı js'yi verecek
}

printScreen()
*/

/*
function printScreen(){
    var text = "Javascript, Angular js,React js,Vue js,Node js"
   document.getElementById("result").innerHTML = text.search("js") // indexof'a benzer sadece tek parametre alır
}

printScreen()
*/

/*
function printScreen(){
    var text = "Javascript Angular js,React js,Vue js,Node js"
   document.getElementById("result").innerHTML = text.slice(10,21) // 10'dan 21'e kadar olan bölümü kes al demiş olduk
}

printScreen()
*/

/*
function printScreen(){
    var text = "Javascript Angular js,React js,Vue js,Node js "
   document.getElementById("result").innerHTML = text.slice(-8,-1) // - ile ters indexleme yapıyoruz
}

printScreen()
*/

/*
function printScreen(){
    var text = "Javascript Angular js,React js,Vue js,Node js"
   document.getElementById("result").innerHTML = text.substring(10,50) // 10'dan 50'ye kadar olan değerleri basacak
}

printScreen()
*/

/*
function printScreen(){
    var text = "Javascript Angular js,React js,Vue js,Node js"
   document.getElementById("result").innerHTML = text.substr(11,8) //11'den başla ve 8 karakter ilerle bas
}
printScreen()
*/

/*
function printScreen(){
    var text = "Javascript Angular js,React js,Vue js,Node js"
   document.getElementById("result").innerHTML = text.replace("Javascript","değişti") //ilk bulduğu javascript yazısı ile
}                                                                                       // ikinci yazıyla değiştirir
printScreen()
*/

/*
function printScreen(){
    var text = "Javascript Angular JS,React JS,Vue JS,Node JS"
   document.getElementById("result").innerHTML = text.replace(/js/gi,"değişti"); // küçük büyük harf farklılığını ortadan kaldırma yöntem
}                                                                               // i yerine g yazarsak hepsinin case olayı kalkar
printScreen()                                                                   // gi yaparsak tüm js leri değiştirir
*/

/*
function printScreen(){
    var text = "Javascript Angular JS,React JS,Vue JS,Node JS"
   document.getElementById("result").innerHTML = text.toLowerCase(); // hepsini küçük harfe çevirir
}                                                                               
printScreen()  
*/

/*
function printScreen(){
    var text = "Javascript Angular JS,React JS,Vue JS,Node JS"
   document.getElementById("result").innerHTML = text.toUpperCase(); // hepsini büyük harfe çevirir
}                                                                               
printScreen()
*/

/*
function printScreen(){
    var text = "Javascript Angular JS,React JS,Vue JS,Node JS";
    var text2 = "Django,Python"
   document.getElementById("result").innerHTML = text.concat(" ",text2) // iki texti birleştirir
}                                                                               
printScreen()
*/

/*
function printScreen(){
    var text = "Javascript Angular JS,React JS,Vue JS,Node JS";
    var text2 = "Django,Python"
   document.getElementById("result").innerHTML = text.charAt(5) // o indeksteki karakteri getirir
}                                                                               
printScreen()
*/

/*
function printScreen(){
    var text = "Javascript Angular JS,React JS,Vue JS,Node JS";
    var text2 = "Django,Python"
   document.getElementById("result").innerHTML = text.charCodeAt(1) // unicod'unu döndürür asci kod gibi
}                                                                               
printScreen()
*/

/*
function printScreen(){
    var text = "Javascript,Angular JS,React JS,Vue JS,Node JS";
    var arrayList =text.split(",")  // text.split bir liste oluşturuyor
   document.getElementById("result").innerHTML = arrayList[0]; // listenin kaçıncı indeksini istersek döndürür
}                                                                               
printScreen()
*/

/*
function printScreen(){
    var text = "13.11.2018";
    var arrayList =text.split(".")  // text.split bir liste oluşturuyor
   document.getElementById("result").innerHTML = arrayList[0]; //
   if(arrayList[1] == 11){
    document.getElementById("result").innerHTML = arrayList[0] + " Kasım " + arrayList[2];
   } 
}                                                                               
printScreen()
*/
