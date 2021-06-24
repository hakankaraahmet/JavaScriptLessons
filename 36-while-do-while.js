function show(par1, par2) {
    document.getElementById(par1).innerHTML += par2 + "<hr>";
}

function tıkla(){
    var message = "";
    i = 15;
    /*
    while(i <10){
        message += "number :" + i + "<br>"   // sadece while döngüsü bildiğimiz gibi
        i++
        
    }
    */
    do{
        message += "number :" + i + "<br>";   // do-while döngüsünde içerik do'ya yazılır
        i++;                                    // do-while da şart sağlanmasa da bir kere çalışır
    }
    while(i<10)         // koşul while içine yazılır
    show("result",message)
}