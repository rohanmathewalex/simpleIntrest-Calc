 
function compute() {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var year = new Date().getFullYear()+ parseInt(years);
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