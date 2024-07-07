function makebubble() {
let clutter = "";
for (let i = 1; i <=102; i++) {
    let rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector('#pbtm').innerHTML=clutter;
}
makebubble();

let timer = 30;
function runtimer() {
    var timerint = setInterval(function(){
        if(timer>0){ 
            timer--;
        document.querySelector('#timerval').innerHTML=timer;
        }else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML=`<h1>GAME OVER</h1>`;
        }  
    },1000)
}
runtimer();

let hitrn;
function getNewHit(){
    hitrn =Math.floor(Math.random()*10);
    document.querySelector("#hitval").innerHTML=hitrn;
}
getNewHit();

let score = 0;
function increaseScore(){
    score +=10;
    document.querySelector("#scoreval").innerHTML = score;
}
increaseScore();

document.querySelector("#pbtm").addEventListener("click",function(dets){
    let clickednum = Number(dets.target.innerHTML);
    if(clickednum === hitrn){
        increaseScore();
        makebubble();
        getNewHit();
    }else{
        score--;
    }
});