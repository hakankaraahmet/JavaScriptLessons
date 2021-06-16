// fonksiyon çağrımak için:
//1- direkt yazma
//2- butona atama

/*
show() // ilk yöntem direkt çağırma
function show(){
    window.alert("kimse beni çağırmadı")
}


function calculate(){  // bu fonksiyonu butona atadık
    var x,y,z;
    x = 2;
    y = 3;
    z = (x*y)*4;
    document.getElementById('result').innerHTML = z;
}

*/

//yukarıdaki statik fonksiyon
// dinamik fonksiyonlar için parametlere koymamız lazım


/*
function sum(par1,par2){ //dinamik bir fonksiyon

document.getElementById("result").innerHTML = par1+par2;
}

sum(5,2) // dinamik fonksiyonu çağırdık
sum(10,15)
*/


/*
function sum(par1,par2){ //dinamik bir fonksiyon
    return par1+par2  // fonksiyon içinde sadece return kullandık
}
document.getElementById("result").innerHTML = sum(3,6)*9;
*/
