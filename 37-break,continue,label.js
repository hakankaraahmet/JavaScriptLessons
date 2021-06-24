function show(par1, par2) {
    document.getElementById(par1).innerHTML += par2 + "<hr>";
}




/*
function tıkla() {
    var takeValue = document.getElementById("take").value;
    var message = ""
    switch (takeValue) {
        case "JS":
            message = "Tebrikler. BU eğitim setini aldınız";
            break;
        case "Bugün":
            message = "bugün günlerden perşembe ";
            break;
        default:
            message = "girdiğiniz harflerin hiç bir anlamı yok";
    }
    show("result", message)
}
*/




/*
function tıkla() {
    var text = "";
    for(i = 0;i<20;i++){
        if(i == 5){
            break;  // i'ye 5 değeri gelince döngüden çıkacak
        }
        text += "sayı" + i + "<br>"
    }
    
    show("result", text)
}
*/

function tıkla() {
    var text = "";
    for(i = 0;i<20;i++){
        if(i == 5){
           continue;  // i'ye 5 değeri gelince o değeri atlar devam eder
        }
        text += "sayı" + i + "<br>"
    }
    
    show("result", text)
}