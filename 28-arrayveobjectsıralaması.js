var langs = [
    "php",
    "asp.net",
    "jsp",
    "node js",
    "javascript",
    "angular js",
    "react js",
    "vue js",
    "html 5",
    "css3"
]

/*
function sortArray(){
    var number = [45,5,60,89,65,75]
number.sort(function(x,y){
    return x-y
})
document.getElementById("result").innerHTML = number[0]

}
*/

function show(par1,par2){
    document.getElementById(par1).innerHTML = par2;
}

var number = [45,5,60,89,65,75]

/*
function sortArray(){
number.sort(function(x,y){
    return x-y
})
show("result2",number)
}
*/

//Max sayı bulma fonksiyonu
function maxArray(take){
    return Math.max.apply(null,take)
}


//Min sayı bulma fonksiyonu
function minArray(take){
    return Math.min.apply(null,take)
}


show("result",maxArray(number))