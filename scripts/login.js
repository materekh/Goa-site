var nameform=document.getElementById("nameform");
var submit=document.getElementById("submit");
submit.addEventListener("click",function(){
    localStorage.setItem("id='Z29hIHNpdGUgYnkgbWF0ZSByZWtodmlhc2h2aWxp' Name",nameform.value);
    localStorage.setItem("id='Z29hIHNpdGUgYnkgbWF0ZSByZWtodmlhc2h2aWxp' Login","Log out");
})