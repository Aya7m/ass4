var email=document.getElementById('email');
var password=document.getElementById('password');
var Login=document.getElementById('Login');
var emailRegix=/^[a-zA-Z0-9]{3,}\@{1}[a-z]{3,5}\.(com)$/;
var passRegix=/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
var na=document.getElementById("na");
Login.addEventListener('click',function(){
    if(localStorage.getItem("users").emailRegix==email.value){
        var error=document.getElementById('error');
        error.innerHTML='exist'
    
    
    
    
    }

})

email.addEventListener("input",function(){
    validate(email,emailRegix);

});
password.addEventListener("input",function(){
    validate(password,passRegix);

});
function validate(element,regix){
    var testReg=regix;
    if(testReg.test(element.value)){
        element.classList.add("is-valid");
        element.classList.remove("is-invalid");
    }
    else{
        element.classList.remove("is-valid");
        element.classList.add("is-invalid");

    }

}
