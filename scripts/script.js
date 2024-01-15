Name.textContent=localStorage.getItem("id='Z29hIHNpdGUgYnkgbWF0ZSByZWtodmlhc2h2aWxp' Name");
var log=localStorage.getItem("id='Z29hIHNpdGUgYnkgbWF0ZSByZWtodmlhc2h2aWxp' Login");
var lang=localStorage.getItem("id='Z29hIHNpdGUgYnkgbWF0ZSByZWtodmlhc2h2aWxp' Lang");
if(log==="Log out"){
    login.remove();
}
else{
    logout.remove();
}   
if(localStorage.getItem("id='Z29hIHNpdGUgYnkgbWF0ZSByZWtodmlhc2h2aWxp' Lang")==="Ge"){
    chlang();
}
logout.addEventListener("click",function(){
    localStorage.setItem("id='Z29hIHNpdGUgYnkgbWF0ZSByZWtodmlhc2h2aWxp' Name","");
    localStorage.setItem("id='Z29hIHNpdGUgYnkgbWF0ZSByZWtodmlhc2h2aWxp' Login","Log in");
})
ge.addEventListener("click",function(){
    localStorage.setItem("id='Z29hIHNpdGUgYnkgbWF0ZSByZWtodmlhc2h2aWxp' Lang","Ge");
    location.reload();
})
en.addEventListener("click",function(){
    localStorage.setItem("id='Z29hIHNpdGUgYnkgbWF0ZSByZWtodmlhc2h2aWxp' Lang","En");
    location.reload();
})