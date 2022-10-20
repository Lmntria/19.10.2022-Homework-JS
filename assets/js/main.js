let saveBtn = document.querySelector("#save");
let resetBtn = document.querySelector("#reset");
let boxX = document.getElementById("boxWidth"); 
let boxY = document.getElementById("boxHeight")
let boxColor = document.getElementById('boxColor')
let ballXY = document.getElementById("ballWidthAndHeight");
let ballColor = document.getElementById('ballColor')
let ball = document.querySelector('.ball');
let box = document.querySelector('.box');
let step = document.getElementById("step").value;
resetBall();
saveBtn.addEventListener('click', function(){
  box.style.width=boxX.value + "px"
  box.style.height=boxY.value + "px"
  box.style.backgroundColor=boxColor.value
  ball.style.width=ballXY.value + "px"
  ball.style.height=ballXY.value + "px"
  ball.style.backgroundColor=ballColor.value

})
function resetBall(){
    ball.style.left = (box.clientWidth - ball.clientWidth) / 2 +'px'
    ball.style.top = (box.clientHeight - ball.clientHeight) / 2 +'px'
}
document.body.addEventListener('keydown',e=>{
    if (e.key == 'ArrowUp') {
      ball.style.top = parseInt(ball.style.top) - Number(step) +'px';
    }else if(e.key == 'ArrowLeft'){
      ball.style.left = parseInt(ball.style.left)- Number(step) +'px';
    }else if(e.key == 'ArrowRight'){
      if (parseInt(ball.style.left) < box.clientWidth - ball.clientWidth) {
        ball.style.left = parseInt(ball.style.left) + Number(step) +'px';
      }
    }else if(e.key == 'ArrowDown'){
      if (parseInt(ball.style.top) < box.clientHeight - ball.clientHeight) {
        ball.style.top = parseInt(ball.style.top) + Number(step) +'px';
      }
    }
})





