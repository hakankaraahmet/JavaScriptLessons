function show(){
    var day;
    var d = new Date().getDay();
    switch(d){
        case 0: day = "pazar"; break;
        case 1: day = "pazartesi" ; break;
        case 2: day = "salı" ; break;
        case 3: day = "çarşamba" ; break;
        case 4: day = "perşembe" ; break;
        case 5: day = "cuma" ; break;
        case 6: day = "cumartesi"; break;
        default: day ="böyle bir gün yok"; 
        
    }
    document.getElementById("result").innerHTML = day;
}



/*
swtich case if else yapısı gibidir
switchin içine gelen değeri case'in yanına yazarak eğer o değerse bunu yap dedirtir
default biraz else gibi çalışır.yani verilen caselerden birisi yoksa default çalışır
break koymak şart yoksa tek tek çalıştırır
*/
 