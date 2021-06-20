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

var langs1=[
    "python",
    "django"
]

//langs.unshift("python") // ilk sıraya eleman ekler geri kalan aynen devam eder
//bir şeye tanımlarsak yeni array uzunluğunu döndürür
//document.getElementById("result").innerHTML = langs

/*
langs[8] = "c#" // elaman değiştirme
document.getElementById("result").innerHTML = langs 
*/


/*
langs.splice(3,0,"c++") // 3. indeksten sonra elemanı ekledi remove yapmak istemiyorsak ikinci değere 0 verdik.
document.getElementById("result").innerHTML = langs 
*/



/*
langs.splice(0,2) // 0.indeksten itibaren 2 eleman çıkar yani 0 ile 1. elemanları çıkardı
document.getElementById("result").innerHTML = langs 
*/



/*
langs.splice(3,6) // 0,1,2,3 kaldı ondan sonraki tüm elemanları kaldırdı
document.getElementById("result").innerHTML = langs 
*/



/*
x = langs.concat(langs1) // iki arrayi birleştirdik
document.getElementById("result").innerHTML = x
*/

var x = langs.slice(1,5) // iki rakam konulursa iki rakam arası elemanları alır
document.getElementById("result").innerHTML = x

var x = langs.slice(3) // tek rakam konulursa o rakama kadar olanları siler kalanını verir
document.getElementById("result").innerHTML = x