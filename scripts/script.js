Name.textContent=localStorage.getItem("Name");
var log=localStorage.getItem("Login");
var lang=localStorage.getItem("Lang");
if(log==="Logout"){
    login.remove();
}
else{
    logout.remove();
}   
if(localStorage.getItem("Lang")==="Ge"){
    chlang();
}
logout.addEventListener("click",function(){
    localStorage.setItem("Name","");
    localStorage.setItem("Login","Login");
})
ge.addEventListener("click",function(){
    localStorage.setItem("Lang","Ge");
    location.reload();
})
en.addEventListener("click",function(){
    localStorage.setItem("Lang","En");
    location.reload();
})