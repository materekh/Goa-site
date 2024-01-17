addEventListener("click",function(){
    let audio=new Audio('/images/gallery/Nothing/Nothing/Nothing/mi gora so.mp3');
    audio.play();
    let tkeshel=document.getElementById("tkeshel");
    tkeshel.style.animation="tkeshel 10s linear infinite";
    let click=document.getElementById("click");
    click.style.fontSize=0;
    click.style.display="none";
}, {once : true})