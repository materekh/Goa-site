var ko=document.getElementById("ko");
var link1=document.getElementById("link1");
ko.addEventListener("click",function(){
    localStorage.setItem("name",form1.value);
})
link1.textContent=localStorage.getItem("name");