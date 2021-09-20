//validation for inputs:



function validation() {

    var mail = document.getElementById("text").value;
    var password = document.getElementById("password").value;

var regx = /^[a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;

// var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;




    if(regx.test(mail)){
        document.getElementById("smsg").innerHTML="correct";
       
    }
    else{
        document.getElementById("smsg").innerHTML="correct";
       
        
        
    }



    
}