
var nameU=document.getElementById('name');
var emailU =document.getElementById('email');
var passwordU=document.getElementById('password');
var submit=document.getElementById('submit');
var nameRegix=/^\w{3,}$/i;
var emailRegix=/^[a-zA-Z0-9]{3,}\@{1}[a-z]{3,5}\.(com)$/;
var passRegix=/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
var userList=[];
var errS=document.getElementById("errS");
submit.addEventListener("click",function(){

    if(nameU.classList.contains("is-valid")&&emailU.classList.contains("is-valid")&&passwordU.classList.contains("is-valid")){
        var user={
            nameU:nameU.value,
            emailU:emailU.value,
            passwordU:passwordU.value,
    
        }
        userList.push(user);
        console.log(userList);
        localStorage.setItem("users",JSON.stringify(userList));
      errS.innerHTML="sucssess"

    }
    clearUser()
   nameU.classList.remove("is-valid");
   emailU.classList.remove("is-valid");
   passwordU.classList.remove("is-valid");
})

function clearUser(){
    nameU.value='';
    emailU.value='';
    passwordU.value='';

}
    
    
    nameU.addEventListener("input",function(){
        validate(nameU,nameRegix);
    });
    emailU.addEventListener("input",function(){
        validate(emailU,emailRegix);
    
    });
    passwordU.addEventListener("input",function(){
        validate(passwordU,passRegix);
    
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
    var nameError=document.getElementById('nameError');
    for(var i=0;i<userList.length;i++){
        if(userList[i].nameU.length==0){
            nameError.innerHTML='the fild is requird';}
            if(!userList[i].nameU==nameRegix){
                nameError.innerHTML='the fild is  should contan grater';
            }


   }
    
   



