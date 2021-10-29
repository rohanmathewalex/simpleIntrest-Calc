 // Onbutton click this fuction is called
function compute() {
    //Principle amount value is store
    var principal = document.getElementById("principal").value;
    //at what rate is amount is cal is stored
    var rate = document.getElementById("rate").value;
    //for how many year value is stored
    var years = document.getElementById("years").value;
    //Future year is calculate 
    var year = new Date().getFullYear()+ parseInt(years);
    //validate the input if the value is less tthat or equal to 0 then it promt an alert box else it display the results!
    if(principal <= 0 ){
        alert("Enter a positive integer")
    }else{
 
        var intrest = principal * years * rate / 100;
        var result = `If you deposit ${principal}  
                       at  an ${rate}%
                       You will recive an amount of ${intrest},
                       in the year ${year} `
        document.getElementById("result").innerHTML = result;
    }
   
    
}
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}