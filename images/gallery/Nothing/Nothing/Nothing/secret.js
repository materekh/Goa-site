function sleep(i){
    let d=new Date();
    let before=d.getTime();
    let after=before;
    while(after-before<i){
        d=new Date();
        after=d.getTime();
    }
}
body.addEventListener("click",function(){
    let tkeshel=document.getElementById("tkeshel");
    let body=document.getElementById("body");
    tkeshel.style.animation="tkeshel1 10s,tkeshel2 10s 10s,tkeshel3 10s 20s,tkeshel4 10s 30s,tkeshel4 5s 40s,tkeshel4 1s 45s infinite";
    let click=document.getElementById("click");
    click.style.fontSize=0;
    click.style.display="none";
    body.style.animation="crazy 10s linear 2,crazy 2s 20s linear 5,crazy 1s 30s linear 10,crazy 0.25s 40s linear infinite";
}, {once : true})
body.addEventListener("click",function(){
    let audio2=new Audio('/images/gallery/Nothing/Nothing/Nothing/programistisbedi.ogg');
    audio2.play();
    setTimeout(function(){
        let audio=new Audio('/images/gallery/Nothing/Nothing/Nothing/mi gora so.mp3');
        audio.volume = 0.3;
        audio.play();
    }, 3000)
    setTimeout(function(){
        let audio3=new Audio('/images/gallery/Nothing/Nothing/Nothing/madloba.ogg');
        audio3.play();  
    }, 20000)
    setTimeout(function(){
        let audio3=new Audio('/images/gallery/Nothing/Nothing/Nothing/kumalala.ogg');
        audio3.play();  
    }, 30000)
}, {once : true})