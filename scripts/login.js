submitR.addEventListener("click",function(){
    username=usernameformR.value;
    username=username.toLowerCase();
    console.log(username);
    if(localStorage.getItem(username)==null){
        localStorage.setItem(username,passwordFormR.value);
        localStorage.setItem("Name",username);
        localStorage.setItem("Login","Logout");
        location.reload();
    }
    else{
        errorR.textContent="*Username alrady exists!";
    }
})
submitL.addEventListener("click",function(){
    username=usernameformL.value;
    username=username.toLowerCase();
    if(localStorage.getItem(username)!=null){
        if(localStorage.getItem(username)!=passwordFormL.value){
            errorL.textContent="*Wrong password!";
        }
        else{
            localStorage.setItem("Name",username);
            localStorage.setItem("Login","Logout");
            location.reload();
        }
    }
    else{
        errorL.textContent="*Username does not exist!";
    }
})