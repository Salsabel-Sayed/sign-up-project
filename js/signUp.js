var emailInputSign = document.getElementById('emailSign');
var passwordInputSign = document.getElementById('passwordSign');
var nameInputSign = document.getElementById('nameInputSign');
var btnLogINSign = document.getElementById('btnLogINSign');
var rulesNSign = document.querySelector('.rulesNSign');
var rulesSign = document.querySelector('.rulesSign');
var successNSign = document.querySelector('.successNSign');
var successSign = document.querySelector('.successSign');
var rules2Sign = document.querySelector('.rules2Sign');
var success2Sign = document.querySelector('.success2Sign');
var hiddenBtnSign = document.getElementById('hiddenBtnSign');


// check name

function checkUserNameSignValidation(){
    var nameSign = nameInputSign.value;
    var regxNameSign = /^\w{3,10}$/;
    if(regxNameSign.test(nameSign)){
        rulesNSign.style.display ='none';
        successNSign.style.display='block';
        nameInputSign.classList.add('is-valid');
        nameInputSign.classList.remove('is-invalid');
        console.log('valid');
        return true
    }else{
        rulesNSign.style.display ='block';
        successNSign.style.display='none';
        nameInputSign.classList.add('is-invalid');
        nameInputSign.classList.remove('is-valid');
        console.log('invaild');
        return false
    };
}
// check email
function checkEmailSignValidation(){
    var email= emailInputSign.value;
    var regxEmailSign = /^[a-zA-z]{3,9}@(gmail|yahoo)\.com$/;

    if(regxEmailSign.test(email)){
        rulesSign.style.display ='none';
        successSign.style.display='block';
        emailInputSign.classList.add('is-valid');
        emailInputSign.classList.remove('is-invalid');
        console.log('valid');
        return true
    }else{
        rulesSign.style.display ='block';
        successSign.style.display='none';
        emailInputSign.classList.add('is-invalid');
        emailInputSign.classList.remove('is-valid');
        console.log('invaild');
        return false
    };
   
}
// check password
function checkPasswordSignValidation(){
    var passwordSign = passwordInputSign.value;
    var regxPasswordSign =/^[0-9]{3}$/;
     if( regxPasswordSign.test(passwordSign) ){
        passwordInputSign.classList.add('is-valid');
        passwordInputSign.classList.remove('is-invalid');
        rules2Sign.style.display ='none';
        success2Sign.style.display='block';
        console.log('invaild pass');
        return true

    }else{
        passwordInputSign.classList.add('is-invalid');
        passwordInputSign.classList.remove('is-valid');
        rules2Sign.style.display ='block';
        success2Sign.style.display='none';
        console.log('vaild pass');
        return false
    }
    
}

// adding info
var arrayList =JSON.parse(localStorage.getItem('inputs'))|| [];

btnLogINSign.addEventListener('click', adding)
function adding(){
    var inputValueSign ={
        name:nameInputSign.value,
        email: emailInputSign.value,
        password: passwordInputSign.value,
    }
    if(checkEmailSignValidation() && checkPasswordSignValidation() && checkUserNameSignValidation()){
        if(existing() != false){
            console.log(inputValueSign);
        arrayList.push(inputValueSign);
        localStorage.setItem('inputs',JSON.stringify(arrayList)); 
        window.location.assign('index.html');
        }
        
    }else{
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "your email or password are invaild ,please read rules and try again ..",
          });
    }
    
}

function existing(){
    for( i=0 ; i < arrayList.length ; i++){
        if(emailInputSign.value == arrayList[i].email){
            console.log('email exist');
            alert('email exist')
            return false;
        }
    }
    return true
}

