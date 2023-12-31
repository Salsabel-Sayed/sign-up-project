var logOutBtn = document.getElementById('logOutBtn');
var nameUser = document.getElementById('nameUser');
var nameInputSign = document.getElementById('nameInputSign');
var arrayListName =localStorage.getItem('userNameLog');

if(arrayListName == null){
    window.location.assign('index.html');
}

function nameU(){
    nameUser.innerHTML = `<h3>${arrayListName}</h3>`
}
nameU()

logOutBtn.addEventListener('click', logOut);
function logOut(){
    localStorage.removeItem('userNameLog')
    window.location.assign('index.html')
}