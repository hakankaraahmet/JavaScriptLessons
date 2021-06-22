function show(par1,par2){
    document.getElementById(par1).innerHTML = par2;
}




function noteResult(){
    var midtermNote,finalNote,message,average;
    midtermNote = Number (document.getElementById("midterm").value);
    finalNote = Number (document.getElementById("final").value);
    average = midtermNote * 0.3 + finalNote * 0.7; 
    if(isNaN(midtermNote)){
        message = ("Please enter a numeric midterm note")
    }
    else if(isNaN(finalNote)){
        message = ("Please enter a numeric final note")
    }
    else if (midtermNote <0 || midtermNote > 100){
        message = "invalid note"
    }
    else if (finalNote <0 || finalNote> 100){
        message = "invalid note"
    }
    else {
       if(average<=45){
           
       }
       else if (average >= 45 && average <=60){
        message = `DD Your Note is: ${average}`
       }
       else if (average > 60 && average <=80){
        message = `CC Your Note is: ${average}`
     }
        else if (average > 80 && average <=90){
            message = `BB Your Note is: ${average}`
    }

    else if (average > 90 && average <=100){
        message = `AA Your Note is: ${average}`
    }
    
}
    show("result",message)
}