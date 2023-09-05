var score =0;
var checkval=0;

function bubbleform(){
    var clutter ='';
   for(let i=0;i<390;i++){
      let randomval = Math.floor(Math.random()*10);
      clutter+=`<div class="bubble">${randomval}</div>`;
    }
     document.querySelector('#pbtm').innerHTML = clutter;

}
function timer(){
let timer =15;
 var inttimer = setInterval(function(){
    if(timer>0){
        let updateTime =document.querySelector('#countTime');
        updateTime.innerHTML=timer--;
    }
    else{
         alert("😢 Game Over !");
        clearInterval(inttimer);
        document.querySelector('#pbtm').innerHTML=`<div class="finalScoreCard"><h3>Game Over</h3>
        <div> <h4>Your Score is :</h4>${score}.</div>
        <div><h4>Remark : Good</h4></div>
        </div>`;
    }
  },1000)
}
function hitnum(){
let hitnums = document.querySelector('#hittimer');
 checkval = parseInt(hitnums.innerHTML = Math.floor(Math.random()*10));
}
let bubbles = document.querySelector('#pbtm');
bubbles.addEventListener("click",function(e){
   let nums = Number( e.target.textContent);
   if(nums === checkval){
    increaseScore();
    bubbleform();
    hitnum();
   }
})
function increaseScore(){
score+=10;
let scored = document.querySelector('#FinalScore');
scored.innerHTML = `${score}`;
}
/*function remarked (){
if(score<30){
    console.log("Bad Score");
}
else{
    console.log("Congrats ! you haveGood Score");
}
}*/

bubbleform();
timer();
hitnum();