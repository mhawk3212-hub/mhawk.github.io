// Installer click logic
const installBtn = document.getElementById("installBtn");
const installerBox = document.querySelector(".installer-box");
const downloadLinks = document.querySelector(".download-links");

installBtn.addEventListener("click", () => {
  installerBox.classList.add("installed");
  installBtn.style.display = "none";
  downloadLinks.style.display = "flex";
});

// Background “code rain” effect
const canvas = document.getElementById('background');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const chars = ['#', '*', '1', '0'];
const fontSize = 18;
const columns = Math.floor(canvas.width / fontSize);
const drops = Array(columns).fill(0);

function draw() {
  ctx.fillStyle = 'rgba(26,10,42,0.1)'; // semi-transparent background to fade
  ctx.fillRect(0,0,canvas.width,canvas.height);

  ctx.fillStyle = '#ff79f0';
  ctx.font = fontSize + 'px monospace';

  for(let i=0; i<drops.length; i++){
    const text = chars[Math.floor(Math.random()*chars.length)];
    ctx.fillText(text, i*fontSize, drops[i]*fontSize);

    if(drops[i]*fontSize > canvas.height || Math.random() > 0.975){
      drops[i] = 0;
    }
    drops[i]++;
  }
  requestAnimationFrame(draw);
}
draw();

// Tentacle following mouse
const tentacleCanvas = document.getElementById('tentacle');
const tCtx = tentacleCanvas.getContext('2d');
tentacleCanvas.width = window.innerWidth;
tentacleCanvas.height = window.innerHeight;

let mouseX = canvas.width/2;
let mouseY = canvas.height/2;
let tail = [];

window.addEventListener('mousemove', (e)=>{
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function drawTentacle(){
  tCtx.clearRect(0,0,tentacleCanvas.width,tentacleCanvas.height);
  tail.push({x: mouseX, y: mouseY});
  if(tail.length>20) tail.shift();

  tCtx.strokeStyle = '#ff7eff';
  tCtx.lineWidth = 4;
  tCtx.beginPath();
  for(let i=0;i<tail.length;i++){
    if(i===0) tCtx.moveTo(tail[i].x, tail[i].y);
    else tCtx.lineTo(tail[i].x, tail[i].y);
  }
  tCtx.stroke();

  requestAnimationFrame(drawTentacle);
}
drawTentacle();

// Adjust canvas on resize
window.addEventListener('resize', ()=>{
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  tentacleCanvas.width = window.innerWidth;
  tentacleCanvas.height = window.innerHeight;
});
