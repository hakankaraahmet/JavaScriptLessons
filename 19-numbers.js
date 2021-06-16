/*
printScreen()
function printScreen(){
    var x = 10;  //number  integer
    var y = 3.14;  // number  float
    var a = 12e5;  // 12 * 10 **5 anlamında
    var b = 12e-5  // 12 * 10 ** -5
    var z = "result" + x+y  
    var c = "10"
    var d = 20  // c ve d toplamı 1020 olur fakat diğer tüm işlemleri yapar
    var s = "hakan"
 //   document.getElementById("result").innerHTML = s.repeat(3);  multiple string için
    document.getElementById("result").innerHTML = isNaN(z) // not a number'mıdır kontrolü yapar true/ false verir
}
*/

// tam sayı maksimum 15 ondalıklı sayı makismum 17  
//  var z = "result" + x+y   bu tarz bir durumda stringle başladığı için hep string gider


/*
printScreen()
function printScreen(){
    var x = 70/0;  // + sonsuz
    var y = -70/0  // - sonsuz
    var t = 128;
    var z = t.toString(16)  // hexadecimal siteme göre yazacak
    document.getElementById("result").innerHTML = z;
}
*/



// to srting içine 16 yazarsak hexadecimal(16lık sistem)
// 8 yazarsak octal(8lik sistem)
// 2 yazasrsak binary(2lik sistem)  e çevirip yazar 