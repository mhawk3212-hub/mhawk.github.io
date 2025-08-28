// INSTALLER LOGIC
const installBtn = document.getElementById("installBtn");
const installerBox = document.querySelector(".installer-box");
const downloadLinks = document.querySelector(".download-links");

installBtn.addEventListener("click", () => {
  installerBox.classList.add("installed");
  installBtn.style.display = "none";
  downloadLinks.style.display = "flex";
});

// BACKGROUND CODE RAIN
const bgCanvas = document.getElementById('background');
const ctx = bgCanvas.getContext('2d');
bgCanvas.width = window.innerWidth;
bgCanvas.height = window.innerHeight;

const chars = ['#', '*', '1', '0'];
const fontSize = 18;
const columns = Math.floor(bgCanvas.width / fontSize);
const drops = Array(columns).fill(0);

function drawBackground(){
  ctx.fillStyle = 'rgba(26,10,42,0.1)';
  ctx.fillRect(0,0,bgCanvas.width,bgCanvas.height);

  ctx.fillStyle = '#ff79f0';
  ctx.font = fontSize + 'px monospace';

  for(let i=0; i<drops.length; i++){
    const text = chars[Math.floor(Math.random()*chars.length)];
    ctx.fillText(text, i*fontSize, drops[i]*fontSize);

    if(drops[i]*fontSize > bgCanvas.height || Math.random() > 0.975){
      drops[i] = 0;
    }
    drops[i]++;
  }
  requestAnimationFrame(drawBackground);
}
drawBackground();

// TENTACLE (WAVY LINE) FOLLOWING MOUSE
const tentacleCanvas = document.getElementById('tentacle');
const tCtx = tentacleCanvas.getContext('2d');
tentacleCanvas.width = window.innerWidth;
tentacleCanvas.height = window.innerHeight;

let mouseX = tentacleCanvas.width/2;
let mouseY = tentacleCanvas.height/2;
let points = [];
const maxPoints = 30;
let tentacleEnabled = true;

window.addEventListener('mousemove', (e)=>{
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function drawTentacle(){
  tCtx.clearRect(0,0,tentacleCanvas.width,tentacleCanvas.height);
  if(tentacleEnabled){
    points.push({x: mouseX, y: mouseY});
    if(points.length > maxPoints) points.shift();

    tCtx.strokeStyle = '#ff7eff';
    tCtx.lineWidth = 4;
    tCtx.beginPath();
    for(let i=0;i<points.length;i++){
      const p = points[i];
      // Wavy effect using sine
      const offsetY = Math.sin(i/2 + Date.now()/500) * 8;
      if(i===0) tCtx.moveTo(p.x, p.y + offsetY);
      else tCtx.lineTo(p.x, p.y + offsetY);
    }
    tCtx.stroke();
  }
  requestAnimationFrame(drawTentacle);
}
drawTentacle();

// TOGGLE TENTACLE BUTTON
const toggleBtn = document.getElementById('toggleTentacle');
toggleBtn.addEventListener('click', ()=>{
  tentacleEnabled = !tentacleEnabled;
  if(!tentacleEnabled) tCtx.clearRect(0,0,tentacleCanvas.width,tentacleCanvas.height);
});
  
// RESIZE CANVASES
window.addEventListener('resize', ()=>{
  bgCanvas.width = window.innerWidth;
  bgCanvas.height = window.innerHeight;
  tentacleCanvas.width = window.innerWidth;
  tentacleCanvas.height = window.innerHeight;
});
