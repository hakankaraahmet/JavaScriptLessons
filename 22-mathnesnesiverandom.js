
/*
Show()
function Show(){
    document.getElementById("result").innerHTML = 
    Math.E + "<br>" +
    Math.PI + "<br>" +
    Math.SQRT2 + "<br>" +
    Math.SQRT1_2 + "<br>" +   // tüm bu değerler sabit () içine değer almaz
    Math.LN2 + "<br>" +
    Math.LN10 + "<br>" +
    Math.LOG2E + "<br>" +
    Math.LOG10E + "<br>" 
}*/

/*
function getrandom(){
  //  document.getElementById("result").innerHTML = Math.random() // random her zaman 1'den küçüktür
 // document.getElementById("result").innerHTML = Math.floor(Math.random() * 10)  // math floor olursa tam sayı olur 10 ile çarpılınca 1-10 arası verir
  document.getElementById('result').innerHTML = Math.floor(Math.random() * 100) //0- 100 arası random sayı
}
*/

function getrandom(min,max){   //minimum ve maksimum veren fonksiyon
    return Math.floor(Math.random() * max) +min;
}


function Show(){  // show fonksiyonunu butona yazdık
    document.getElementById("result").innerHTML = getrandom(5,10)  // getrandomu çağıracağız ve divin içine yazcağız
}