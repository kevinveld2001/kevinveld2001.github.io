console.log("animation")

let lastimg;

function fade (i){
    
    for(a=1;a<=5;a++){
        document.getElementById('header-img-'+a).classList.remove('fade-in-out');
    }
    
    if(document.getElementById('header-img-'+i).style.display != "none" & lastimg != i){
        
        document.getElementById('header-img-'+i).classList.add('fade-in-out');
        lastimg = 1
    }else{
        pickrandom();
    }
}

function pickrandom(){
    fade(Math.floor(Math.random()*5+1))
}
pickrandom();
setInterval(pickrandom,8000);