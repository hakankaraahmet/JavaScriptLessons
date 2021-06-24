function show(par1,par2){
    document.getElementById(par1).innerHTML += par2 + "<hr>";
}



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
    var text = "";
    len = langs.length
    for(i = 0;i < len;i+=3){   // 3 er 3 er artan fonskiyon
         text += langs[i] + "<br>";
         i++;
    }
    show("result",text)
}
*/

/*
function Evens(){
    var i;
    var text = "";
    
    for(i = 0;i <10;i++){  
        if ((i%2) ==0){   // çift sayıları verir 10 a kadar
         text += i + "<br>";
         i++;
        }
    }
    show("result",text)
}




function Odds(){
    var i;
    var text = "";
    
    for(i = 0;i <10;i++){  
        if ((i%2) !=0){   // tek sayıları verir 10 a kadar
         text += i + "<br>";
         i++;
        }
    }
    show("result",text)
}
*/

/*
function factorial(){
    var take;
    var i ;
    var factor=1;
    take = Number(document.getElementById("takeNumber").value);
    for(i=1;i<=take;i++){
        factor = factor * i;
    }
    show("result",factor)
}
*/