/*
var firstName, lastName; 
firstName = "hakan";
lastName = "kara";
document.getElementById("result").innerHTML = firstName + " " + lastName;
*/

// değişkenler case-sensitivedir
// değişkenler anahtar kelime olamazlar ör: for do switch gibi
// değişkene sayı veya string atanabilir
// stringler tek tırnak veya çift tırnak olabilir

/*

var age = 7;
var sum;
age = age + 18;
document.getElementById("result").innerHTML = age; // burada yeni age'i yazdı yani değişkenler değişebilir
document.getElementById("result").innerHTML = sum; // atama yapmadığımız için undefined yazıcak

// doğru kullanım her değişkeni en başta var ile belirterek kullanımdır.
/*

/*
var x,
    y,
    z,
    car,
    sum;
böyle alt alta da tanımlanabilir önemli olan aralarda virgül olması ve ; sonda olması
*/

/*
var x = 7;
var username = 10;
var sum = (x+username)*x  // aritmetik işlemler yapabiliriz
document.getElementById("result").innerHTML = sum;
*/

/*
x = "7" + 6 + 5
document.getElementById("result").innerHTML = x;  // 765 yazar başta string olduğu için
*/

/*
x = 7 + 6 + "5"
document.getElementById("result").innerHTML = x; // 135 yazar çünkü önce int'leri toplar sonra stringi yazar
*/

// stringe bir kere denk gelince kalanı string olarak devam ettiriyor

/*
sum(); // fonksiyonu çalıştırmak için javascript içinde bu şekilde de yazabiliriz
function sum(){
    x = 2
    y = 6
    z = x + y
    document.getElementById("result").innerHTML = z;
}
*/