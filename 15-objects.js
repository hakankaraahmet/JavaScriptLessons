var car;
car = {name:"nissan", //object oluşturduk
model:"400A",           //alt alta yazılması önerilir
color:"black",
start:function(){
    return this.name+ " " + this.model + " çalıştırıldı";  //nesne içinde yazılan fonksiyona metod denir ve this kullanılır
},
drive:function(){
    return this.name+ " " + this.model + " kullanılıyor";  //nesne içinde yazılan fonksiyona metod denir ve this kullanılır
},
brake:function(){
    return this.name+ " " + this.model + " frene basıldı";  //nesne içinde yazılan fonksiyona metod denir ve this kullanılır
},
stop:function(){
    return this.name+ " " + this.model + " durduruldu";  //nesne içinde yazılan fonksiyona metod denir ve this kullanılır
}
}  

/*
document.getElementById("result").innerHTML = car.model; // modelini çektik örneğin

document.getElementById("result").innerHTML = car.start() + "<br>"+ // metodu yani obje içi fonksiyonu çağırdık
car.drive() + "<br>"+
car.brake() + "<br>"+
car.stop() + "<br>";
*/

document.getElementById("result").innerHTML = car["name"]  //nesneyi bu şekilde de çağırabiliriz

var x = new String();  // x = "js" demek de yeterli olurdu 
var y = new String(); // new ile yapmak mantıklı DEĞİLDİR
var z = new String();
