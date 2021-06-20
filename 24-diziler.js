var langs = ["PHP","Asp.Net","JSP","NodeJS","JavaScript","Angular JS","React JS","Vue JS","HTML5","CSS3"] ;
// langs bir arraydir. tıpkı python'daki listeler gibi

/*
document.getElementById("result").innerHTML = langs; // listeyi bastırdık;
*/

/*
document.getElementById("result").innerHTML =typeof langs; // türü object
*/

/*
document.getElementById("result").innerHTML = langs[4];  // elemana ulaşma için indeksleme
*/

/*
document.getElementById("result").innerHTML = langs.length;  // liste uzunluğunu verir;
*/

/*
text = "<ul>";  // text = ul diyerek ul yaptı

for (i = 0; i <langs.length;i++){   // for ile texte li ler ekledi
    text += "<li>" + langs[i] + "</li>"
}

text += "</ul>"  // en sonda tekrar bir ul ekledi

document.getElementById("result").innerHTML = text;  // sonuçta ul etiketleri arasına lileri yazdırmış oldu
*/

/*
function add(){
    langs.push("Bootstrap4");  // PUSH ELEMAN EKLER
    document.getElementById("result").innerHTML = langs;
}

*/
document.getElementById("result").innerHTML = langs;
function add(){
    langs[langs.length] = "MySQL";  // dizinin indeksine uzunluğunu yazar ve = der bir şey eklersek ekleme yapmış oluruz
    document.getElementById("result").innerHTML = langs;
}