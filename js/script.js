var emailInput = document.getElementById('email');
var passwordInput = document.getElementById('password');
var btnLogIN = document.getElementById('btnLogIN');
var rules = document.querySelector('.rules');
var success = document.querySelector('.success');
var rules2 = document.querySelector('.rules2');
var success2 = document.querySelector('.success2');

if(localStorage.getItem('userNameLog') != null){
    window.location.assign('home.html');
}

function checkEmailValidation(){
    var email= emailInput.value;
    var regxEmail = /^[a-zA-z]{3,9}@(gmail|yahoo)\.com$/;

    if(regxEmail.test(email)){
        rules.style.display ='none';
        success.style.display='block';
        emailInput.classList.add('is-valid');
        emailInput.classList.remove('is-invalid');
        console.log('valid');
        return true
    }else{
        rules.style.display ='block';
        success.style.display='none';
        emailInput.classList.add('is-invalid');
        emailInput.classList.remove('is-valid');
        console.log('invaild');
        return false
    };
}
// check password
function checkPasswordValidation(){
    var password = passwordInput.value;
    var regxPassword =/^[0-9]{3}$/;
     if( regxPassword.test(password) ){
        passwordInput.classList.add('is-valid');
        passwordInput.classList.remove('is-invalid');
        rules2.style.display ='none';
        success2.style.display='block';
        console.log('vaild pass');
        return true

    }else{
        passwordInput.classList.add('is-invalid');
        passwordInput.classList.remove('is-valid');
        rules2.style.display ='block';
        success2.style.display='none';
        console.log('invaild pass');
        return false
    }
    
}
btnLogIN.addEventListener('click', adding);
arrayList =JSON.parse(localStorage.getItem('inputs'))|| [];
function adding(){
    var inputValue ={
        email: emailInput.value,
        password: passwordInput.value,
    }
    if (checkEmailValidation() && checkPasswordValidation()) {
        var found=false;
        for(var i=0 ; i < arrayList?.length   ; i++ ){
            if(arrayList[i].email === inputValue.email && arrayList[i].password === inputValue.password){
                found=true;
                localStorage.setItem('userNameLog',arrayList[i].name);
            }
        }
        if(found){
            window.location.assign('home.html');
        }else {
            Swal.fire({
                title: "can`t log in?",
                text: "your account is not registered please sign up first .",
                icon: "question",
                footer: '<p>don`t have an account? <a href="signUp.html">signUp</a></p>'
              });
        }
    }else{
        // alert('your email or password are invaild ,please read rules and try again')
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "your email or password are invaild ,please read rules and try again ..",
          });
        
    }
}


