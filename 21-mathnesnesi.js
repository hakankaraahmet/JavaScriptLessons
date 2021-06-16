/*
show()
function show(){
    x = Math.round(6.7)
    y = 8
    z = -5
 //   document.getElementById("result").innerHTML = Math.PI  // pi sayısını yazar
// document.getElementById("result").innerHTML = x; // round ile ondalıklı sayı sonrasını atar
 //   document.getElementById("result").innerHTML = Math.pow(y,2); // y'nin ikinci kuvveti
 //    document.getElementById("result").innerHTML = Math.sqrt(y); // y'nin karekökünü alır
 // document.getElementById("result").innerHTML = Math.abs(z);  // mutlak değer verir

}
*/




show()
function show(){
    x = -Math.round(6.7) // 7' ye yuvalar
    y = -Math.ceil(9.1) // her halükarda üste yuvarlar
    z = -Math.floor(9.9)  // her halükarda alta yuvarlar

    document.getElementById("result").innerHTML = Math.max(10,16,-5,89);  // max maksimumu min minimumu verir
}

//math.sin(90*Math.Pı/180) 90 derece bir verir *math.pi/180 dereceye çevirmek içindi
// math.cos(90) kosinüs verir