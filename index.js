let username = document.getElementById("username");
let password = document.getElementById("password");
let result = 1;


function validateForm(){
    if(username.value == ""){
       document.getElementById("userError").innerHTML = "User Name is Empty"
       result = 0;
       alert("Your form whereever is blanck please check properlly !")
    }else if(username.value.length < 3){
        document.getElementById("userError").innerHTML = "User Name required minumum 3 character"
        alert("Sorry you do not go ahead because you need to put here atleast 3 character to above")
    }else{
        document.getElementById("userError").innerHTML = "";
        result = 1;
        
    }
    if(password.value == ""){
        document.getElementById("passError").innerHTML = "Password is Empty"
        result = 0;
        alert("You need to both of fillup username and password then you can go ahead to submit button")
    }else{
        document.getElementById("passError").innerHTML = "";
        result = 1;
        alert("Your Form is submited sucsessfull !")
    }
    if(result){
        return true;
        
        
    }else{
        return false;
        
    }
}