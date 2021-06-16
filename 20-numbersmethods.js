/*
Show();
function Show(){
    var x = 7;
    var z = 16.785
    var y = x.toString()  // stringe çeviriyor
    var t = x.toExponential() // virgülden sonra iki sayı yazar 7.00e + 0
    var f = z.toFixed(2)  // virgülden sonrakini tamamlar içine yazılan sayı kadar virgülden sonra sayı yazar
    var p = z.toPrecision(6) // toplamda kaç sayı olacağını belirliyoruz
    document.getElementById("result").innerHTML =  p;
}
*/


/*
//VALUE METODU
Show();
function Show(){
     x = 7;
  //  document.getElementById("result").innerHTML =typeof Number(x); // number(x) stringi number'a çevirdi
  //  document.getElementById("result").innerHTML =typeof parseInt(x); // number(x) gibi
      document.getElementById("result").innerHTML = parseInt(true);
}
*/

/*
number(true)   1 verir
number(false)  0 verir
number(new Date()) 1542176446108 verir
number("7")   7 verir
number ("70 ") 70 verir
number (" 50")  50 verir
number("7 60") NaN verir
number("JS")  NaN verir
*/

/*
ParseInt ilk gördüğü integeri alır

ParseInt("7")   7
ParseInt("70 ")  70
ParseInt(" 50") 50
ParseInt("7 60") 7 verir yani ilk çıkan sayıyı aldı
ParseInt("JS")  NaN
ParseInt("7 days") 7 verir yani ilk çıkan sayıyı aldı
ParseInt("days 28") NaN
*/

/*
ParseFloat("3.14")  3.14 diye verir tek farkı bu
*/


/*
function Show(){
    document.getElementById("result").innerHTML =  Number.MAX_VALUE+"<br>"
    +Number.MIN_VALUE+"<br>"
 
}
Show();
*/