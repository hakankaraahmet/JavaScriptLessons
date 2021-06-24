function show(par1,par2){
    document.getElementById(par1).innerHTML = par2;
}




/*
function start(){
    var i,text="";
    for(i=1;i<10;i++){  //i'ye bakar ilk i çalıştıktan sonra i++ çalışır
        text += i + "<br>"  // for her halükarda 3 parametre almak zorundadır
    }
    show("result",text)
}
*/




/*
function start(){
    var i;
    
    var langs = [
        "php",
        "asp.net",
        "jsp",
        "coldFusion",
        "nodejs",
        "java",
        "c#",
        "JavaScript",
        "angular",
        "react",
        "vuejs",
        "jquery",
        "mssql",
        "mysql"
    ]
    for(i=0,text = "";i < langs.length;i++){  // ilk parametrenin içinde tanımlama yapabilirsin ama tavsiye edilmez
        text += langs[i] + "<br>"  
    }
    show("result",text)
}
*/


function start(){
    var d,text="";
    for(d=10;d>0;d--){  //azalan fonksiyon
        text += d + "<br>"  
    }
    show("result",text)
}
