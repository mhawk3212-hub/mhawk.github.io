// INSTALLER LOGIC
const installBtn = document.getElementById("installBtn");
const installerBox = document.querySelector(".installer-box");
const downloadLinks = document.querySelector(".download-links");

installBtn.addEventListener("click", () => {
  installerBox.classList.add("installed");
  installBtn.style.display = "none";
  downloadLinks.style.display = "flex";
});

// BACKGROUND WAVY CODE CHARACTERS
const canvas = document.getElementById('background');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const chars = ['#','*','1','0'];
const fontSize = 20;
const columns = Math.floor(canvas.width / fontSize);

const waveData = [];
for(let i=0;i<columns;i++){
  waveData.push(Math.random() * canvas.height);
}

let waveOffset = 0;

function drawWaveChars(){
  ctx.fillStyle = 'rgba(26,10,42,0.15)';
  ctx.fillRect(0,0,canvas.width, canvas.height);

  ctx.fillStyle = '#ff79f0';
  ctx.font = fontSize + "px monospace";

  for(let i=0;i<columns;i++){
    const char = chars[Math.floor(Math.random()*chars.length)];
    const y = canvas.height/2 + Math.sin((i/2 + waveOffset)/10)*50 + waveData[i];
    ctx.fillText(char, i*fontSize, y);
  }

  waveOffset += 0.5;
  requestAnimationFrame(drawWaveChars);
}

drawWaveChars();

// RESIZE CANVAS
window.addEventListener('resize', ()=>{
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
