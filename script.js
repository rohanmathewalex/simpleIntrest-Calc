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
        document.getElementById("principal").focus();
        
    }else{
      //Simple interest logic
        var intrest = principal * years * rate / 100;
         //Display output result
        document.getElementById("result").innerHTML = "IF you deposit" + "<mark>"+ principal + "</mark>"+ "<br>"+ "at an" + "<mark>"+rate +"%" +"</mark>"+ "<br>"+"you will recive an amount of" +"<mark>"+ intrest +"</mark>"+ "<br>" + "in the year" + "<mark>"+year+"</mark>" ;
        
    }
   
    
}
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}