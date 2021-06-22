function show(par1,par2){
    document.getElementById(par1).innerHTML += par2 +"<hr>"
}




/*

function verify(x, y) {
    var x= 5;
    var y= 6;
    if (x > y) {
        show("result", "Bu fonksiyon doğrudur.")
    } else {
        show("result", "Bunlar eşit değildir.")
    }
}

verify(5, 4);

*/


/*
var x = 7;
var y = "javascript";


function verify(){
    show("result",(x==="7"))  // false verir tür farklı
    show("result",(x=="7"))  // true verir sayı aynı
    show("result",(y==="javascript")) // hem tür hem içerik eşit true verecek
    show("result",(x!=7))  // eşit olduğu için false verir
    show("result",(x!=5))  // eşit değil o nedenle true dönecek
    show("result",(x!=="7")) // sayı aynı ama türü farklı olduğu için eşit değildir true verir
    show("result",(x<5))  // büyük küçük karşılaştırması false verir
}
*/


/*
var note= 59;
var message = "";

function verify(){
    if (note >= 60){
        message = "Dersi geçtin"
    }
    else {
        message = "dersten kaldın"
    }
    show("result",message)
}
*/


/*
var x = 7;
var y = 10;


function verify(){
    show("result",x!=10 && y>5)  // &&'de iki koşulda gerçekleşirse ancak o zaman true verir
}
*/

/*
function verify(){
    show("result",x==10 || y>5)  // ||'da en az bir tanesi true verirse true verir
}
*/




var note = prompt("not giriniz"); // kullanıcıdan aldık
var sonuç;
/*
function verify(){
    if ( note >= 60){
        show("result", "dersi geçtin")
    }
    else {
        show("result", "dersten kaldın")
    }
    sonuç = note >=60 ? "Dersi geçtin" : "Dersten kaldın"

}
*/


// PYTHON'DAKİ LAMBDA FUNCTİON'A BENZİYOR
function verify(){

    sonuç = (note>=60) ? "Dersi geçtin" : "Dersten kaldın"  //? ise anlamı katar doğru ise : öncesi değilse : sonrası çalışır
    show("result",sonuç)

}
