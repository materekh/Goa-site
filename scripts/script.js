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
localStorage.setItem("tkeshelashvili","tke12345");
if(secreti!=null){
    if(localStorage.getItem("Name")==="tkeshelashvili"){
        secreti.style.display="block";
    }
    bestAcademy.addEventListener("click",function(){
        logininfo.style.display="block";
        setTimeout(function(){
            logininfo.style.display="none";
        }, 500)
    })
}
var isOpen=false;
if(ceoContainer!=null){
    ceoContainer.addEventListener("click",function(){
        if(isOpen==false){
            isOpen=true;
            ceoContainer.style.animation="left 1.5s ease-in-out";
            ceoAbout.style.animation="appear 1.5s ease-in-out";
            ceoAbout.style.opacity="1";
            ceoContainer.style.left="0px";
            let parent=ceoContainer.parentElement;
            ceoContainer.remove();
            parent.appendChild(ceoContainer);
            parent=ceoAbout.parentElement;
            ceoAbout.remove();
            parent.appendChild(ceoAbout);
        }
        else{
            ceoContainer.style.animation="left 1.5s reverse ease-in-out";
            ceoAbout.style.animation="appear 1.5s reverse ease-in-out";
            ceoAbout.style.opacity="0";
            ceoContainer.style.left="30%";    
            isOpen=false;  
            let parent=ceoContainer.parentElement;
            ceoContainer.remove();
            parent.appendChild(ceoContainer); 
            parent=ceoAbout.parentElement;
            ceoAbout.remove();
            parent.appendChild(ceoAbout);
        }
    })
}