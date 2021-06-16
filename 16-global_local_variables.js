scope = "react js"  // bu bir global değişken
    function Scope(){
        var name = "node js"  // bu bir yerel değişken
    }
    
    function test(){
        var name = "angular js"
        scope = "react js" // global değişkani fonskyion içinde yazdık
        document.write(scope)
    }


document.getElementById("result").innerHTML = scope; // global değişkeni rahatça çağırdık

test() // lokal değişkeni çağırdık

Scope()


function örnek(){
 genel = "python"; // var ile tanımlamazsak global değişken olur
}
 örnek()
document.getElementById("result").innerHTML = genel;