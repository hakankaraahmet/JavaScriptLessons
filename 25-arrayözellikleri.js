var langs = [
    "php",
    "asp.net",
    "jsp",
    "node js",
    "Javascript",
    "angular js",
    "react js",
    "vue js",
    "html 5",
    "css3"
]



// document.getElementById("result").innerHTML = langs[6]

// langs[12] ="MSSQL"  // 9 elemenli bir liste olduğu için  10 ve 11 elemanları undefined yazıcak

/*
var text, i;
text = []
for(i = 0; i<langs.length;i++){
    text.push(langs[i])   //ELEMAN EKLEMEDE EN ÖNEMLİ FONKSİYON PUSH METODU
}
document.getElementById("result").innerHTML =Array.isArray(text)
*/


/*
document.getElementById("result").innerHTML = text;

document.getElementById("result").innerHTML = Array.isArray(langs) ;  // array kontrolü yapar

document.getElementById("result").innerHTML = langs instanceof Array  // bu da array kontrolü yapar
*/

/*
function add(){
    langs[langs.length] = "MySql";
    document.getElementById("result").innerHTML = langs;
}
*/


//document.getElementById("result").innerHTML = langs.join("-")  // - ile ayırmamızı sağlayan bir fonksiyon join()
 // join() asıl amacı diziyi stringe çevirmek   
 
/*
langs.pop() // langsın son elemanını çıkardı eğer bir değişkene atarsak son elemanı verir
document.getElementById("result").innerHTML = langs // yeni langs'da son eleman olmayacak
*/

langs.shift()  // ilk ögeyi kaldırır eğer bir değişkene atarsak ilk elemanı verir
document.getElementById("result").innerHTML = langs




            