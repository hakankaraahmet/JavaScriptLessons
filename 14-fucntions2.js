/*
function toCelcius(x) {
    return (5/9)*(x-32); // celciusa çeviren formül
}
document.write(toCelcius(59)); 
*/

/*
function getName(name,surname){
    return name + " " + surname;
}

document.write(getName("hakan","kara"))
*/

function sum(par1,par2){
    return par1+par2;
}

function calculate(data1,data2){
    return sum(data1,data2) * sum(data1,data2)
}

/*
document.write(calculate(4,5))  // önce calculate'e gider oradan sum fonksiyonuna
// gidecek  sum'ın parametrelerini toplayıp vericek
*/

function printScreen(par){
    document.getElementById("result").innerHTML = par;
}

printScreen(calculate(4,5)); // fonksiyonun parametresinin yerine başka bir fonk
//siyon yazdık (calculate(4,5)'i tek bir değer gibi görüyor)