// INSTALLER LOGIC
const installBtn = document.getElementById("installBtn");
const installerBox = document.querySelector(".installer-box");
const downloadLinks = document.querySelector(".download-links");

installBtn.addEventListener("click", () => {
  installerBox.classList.add("installed");
  installBtn.style.display = "none";
  downloadLinks.style.display = "flex";
});

// BACKGROUND WAVES
const canvas = document.getElementById('background');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let waveOffset = 0;

function drawWave(){
  ctx.clearRect(0,0,canvas.width, canvas.height);

  const gradient = ctx.createLinearGradient(0,0,canvas.width,canvas.height);
  gradient.addColorStop(0, 'rgba(255,0,200,0.3)');
  gradient.addColorStop(0.5, 'rgba(200,0,255,0.3)');
  gradient.addColorStop(1, 'rgba(255,127,255,0.3)');
  ctx.fillStyle = gradient;

  ctx.beginPath();
  ctx.moveTo(0, canvas.height/2);

  for(let x=0; x<=canvas.width; x+=20){
    const y = canvas.height/2 + Math.sin((x+waveOffset)/100)*60;
    ctx.lineTo(x, y);
  }

  ctx.lineTo(canvas.width, canvas.height);
  ctx.lineTo(0, canvas.height);
  ctx.closePath();
  ctx.fill();

  waveOffset += 2; // speed of wave
  requestAnimationFrame(drawWave);
}

drawWave();

// RESIZE CANVAS
window.addEventListener('resize', ()=>{
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
