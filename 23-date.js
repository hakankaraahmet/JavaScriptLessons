/*
var d = new Date()
document.write(d)  // greenwiche göre tarih verdi
*/

/*
var d = new Date("April 21 1990 19:20:25")  // örnek bir date verdik
document.write(d)
*/

/*
var d = new Date(90,5,15,16,15,12)  // yıl ay gün  saat dakika saniye
document.write(d)                   // ay'ı ay-1 yaz
*/

/*
var d = new Date(90,5,15,16,15,12)  // yıl ay gün  saat dakika saniye
document.write(d.toUTCString()) //  greenwiche göre veriyor
*/

/*
var d = new Date("2021-06-18T11:12:20Z")  // günler sonrasında T Saniyeler sonrası Z kullandık ayı aynı aldık ve 05 önemli
document.write(d)                           // saatten 3 saat öncesini  yazmamız gerekiyor
*/


//GET METODLARI

/*
var d = new Date()  
document.write(d.getDate())  //günü aldık 
*/

/*
var d = new Date()  
document.write(d.getDay()) // day 0-6 arası verir ilk gün pazardır
*/

/*
var d = new Date()  
document.write(d.getMinutes()) // dakikayı verir
*/

/*
var d = new Date()  
document.write(d.getSeconds())  // saniyeleri verir
*/

/*
var d = new Date()  
document.write(d.getMonth())  // ayı verir 0-11 arası
*/
/*
var d = new Date()
var days = ["pazar","pazartesi","salı","çarşamba","perşembe","cuma","cumartesi"]

document.getElementById("result").innerHTML = days[d.getDay()]
*/

//SET METODLARI

/*
var d = new Date()
d.setDate("23") // günü değiştirdik
d.setHours("5") // saati değiştirdik
d.setMinutes("31") // dakikayı değiştirdik 
document.getElementById("result").innerHTML = d;
*/