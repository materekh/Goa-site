Name.textContent=localStorage.getItem("id='Z29hIHNpdGUgYnkgbWF0ZSByZWtodmlhc2h2aWxp' Name");
var log=localStorage.getItem("id='Z29hIHNpdGUgYnkgbWF0ZSByZWtodmlhc2h2aWxp' Login");
if(log==="Log out"){
    login.remove();
}
else{
    logout.remove();
}   
logout.addEventListener("click",function(){
    localStorage.setItem("id='Z29hIHNpdGUgYnkgbWF0ZSByZWtodmlhc2h2aWxp' Name","");
    localStorage.setItem("id='Z29hIHNpdGUgYnkgbWF0ZSByZWtodmlhc2h2aWxp' Login","Log in");
})