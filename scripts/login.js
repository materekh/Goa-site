submitR.addEventListener("click",function(){
    username=usernameformR.value;
    username=username.toLowerCase();
    if(localStorage.getItem(username)==null){
        if(username.length<3){
            if(localStorage.getItem("Lang")=="Ge"){
                errorR.textContent="*მეტსახელი ძალიან მოკლეა! 3 ასო მინიმუმ.";
            }
            else{
                errorR.textContent="*Username too short! minimum 3 letters";
            }  
        }
        else if(passwordFormR.value.length<8){
            if(localStorage.getItem("Lang")=="Ge"){
                errorR.textContent="*პაროლი ძალიან მოკლეა! 8 ასო მინიმუმ.";
            }
            else{
                errorR.textContent="*Password too short! minimum 8 letters";
            }
        }
        else{
            localStorage.setItem(username,passwordFormR.value);
            localStorage.setItem("Name",username);
            localStorage.setItem("Login","Logout");
            location.reload();
        }
    }
    else{
        if(localStorage.getItem("Lang")=="Ge"){
            errorR.textContent="*მეტსახელი უკვე არსებობს.";
        }
        else{
            errorR.textContent="*Username alrady exists!";
        }
    }
})
submitL.addEventListener("click",function(){
    username=usernameformL.value;
    username=username.toLowerCase();
    if(localStorage.getItem(username)!=null){
        if(localStorage.getItem(username)!=passwordFormL.value){
            if(localStorage.getItem("Lang")=="Ge"){
                errorL.textContent="*პაროლი არასწორია!";
            }
            else{
                errorL.textContent="*Wrong password!";
            }
        }
        else{
            localStorage.setItem("Name",username);
            localStorage.setItem("Login","Logout");
            location.reload();
        }
    }
    else{
        if(localStorage.getItem("Lang")=="Ge"){
            errorL.textContent="*მეტსახელი არ არსებობს!";
        }
        else{
            errorL.textContent="*Username does not exist!";
        }
    }
})