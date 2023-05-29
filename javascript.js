function clearError(){
    errors=document.getElementsByClassName('form-error');
    for(let item of errors){
        item.innerHTML="";
    }    
}
function validate(){
    clearError();
    var name=document.getElementsById("i3").value; 
    var email=document.getElementsById("i5").value;
    var password = document.getElementsById("i7").value;
    var branch = document.getElementsById("op");
    var university_number = document.getElementById("i4").value;
    var mobile = document.getElementsById("i6").value;
    var DOB = document.getElementsById("i8").value;
    if(name == ""){
        document.getElementById("name-error").innerHTML="Please enter your name !!";
        return false;
    }
    let atPos=email.indexOf('@');
    let dotPos=email.indexOf('.');
    if(email == "" || atPos<=0 || dotPos<=0){
        document.getElementById("email-error").innerHTML="Please enter valid email address **";
        return false;
    }
    if(password.length<6 || password.length>15){
        document.getElementById("password-error").innerHTML="Password of 6 to 15 characters **";
        return false;
    }
    if(branch.value == ""){
        document.getElementById("branch-error").innerHTML="Please select a branch";
        return false;
    }
    if(university_number == ""){
        document.getElementById("un-error").innerHTML="University Number can't be blank";
        return false;
    }
    if(mobile.length != 10){
        document.getElementById("mobile-error").innerHTML="** Mobile number should be 10 digit **";
        return false;
    }
    if(DOB == ""){
        document.getElementById("dob-error").innerHTML="Provide Date of Birth";
        return false;
    }
}