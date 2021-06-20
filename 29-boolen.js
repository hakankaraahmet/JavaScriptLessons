x = true;
y = false;


/*
function verify(){
    document.getElementById("result").innerHTML = x;
}
*/

/*
function verify(){
    document.getElementById("result").innerHTML = Boolean(70<80);  // bu şekilde de kullanılabilir
}
*/
var a;
var b = NaN
function verify(){
    document.getElementById("result").innerHTML = 
    Boolean(700) +"<br>"+                      
    Boolean(3.14) +"<br>"+
    Boolean(-70) +"<br>"+
    Boolean("javaScript") +"<br>"+
    Boolean("false") +"<br>"+
    Boolean("true") +"<br>"+   // bu ve yukarısı true
    Boolean(a) +"<br>"+        // bu ve aşşağısı false
    Boolean(b) +"<br>"+
    Boolean(0) +"<br>"+
    Boolean(-0) +"<br>"+
    Boolean(null) +"<br>"
}