const curtain1=document.getElementById("curtain_01");
const curtain2=document.getElementById("curtain_02");
let updateCoordinate=false;
window.addEventListener('mousemove', (e) => {
  let mouseX = e.clientX;
  let mouseY = e.clientY;
  if (updateCoordinate) {
    changeCurtains(mouseX,mouseY)
    updateCoordinate = false;
  }
});
timer = window.setInterval(function(){
    updateCoordinate = true;
}, 500);
function changeCurtains(X,Y,e){
  const x = ((window.innerWidth- X)/window.innerWidth/5)+1;
  const y = (window.innerHeight-Y) /40;
  curtain1.style.transform = `scale(${x},1) translateY(${y}px)`;  
  curtain2.style.transform = `scale(${x},1) translateY(-${y}px)`;  
}