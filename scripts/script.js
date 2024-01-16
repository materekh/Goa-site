Name.textContent=localStorage.getItem("Name");
let log=localStorage.getItem("Login");
let lang=localStorage.getItem("Lang");
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
facebook.addEventListener("click",function(){
    window.open("https://www.facebook.com/nika11keshelava");
})