// INSTALLER LOGIC
const installBtn = document.getElementById("installBtn");
const installerBox = document.querySelector(".installer-box");
const downloadLinks = document.querySelector(".download-links");

installBtn.addEventListener("click", () => {
  installerBox.classList.add("installed");
  installBtn.style.display = "none";
  downloadLinks.style.display = "flex";
});

// MULTI-LAYER WAVY CODE BACKGROUND
const canvas = document.getElementById('background');
const ctx = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

const chars = ['#', '*', '1', '0'];
const fontSize = 18;
const layers = 3; // number of wave layers
const waveLayers = [];

// Initialize layers
for(let l=0; l<layers; l++){
  const columns = Math.floor(width / fontSize);
  const waveData = [];
  for(let i=0; i<columns; i++){
    waveData.push(Math.random()*height);
  }
  waveLayers.push({
    waveData,
    speed: 0.3 + l*0.2,   // different speed per layer
    amplitude: 30 + l*15, // different amplitude per layer
    color: `rgba(${200+l*30},0,${255-l*20},0.3)` // slightly different neon colors
  });
}

let offset = 0;

function drawWaveChars(){
  // fade previous frame for smooth motion
  ctx.fillStyle = 'rgba(26,10,42,0.08)';
  ctx.fillRect(0,0,width,height);

  waveLayers.forEach(layer => {
    ctx.fillStyle = layer.color;
    ctx.font = fontSize + "px monospace";

    for(let i=0;i<layer.waveData.length;i++){
      const char = chars[Math.floor(Math.random()*chars.length)];
      const y = (layer.waveData[i] - offset*layer.speed + Math.sin((i/2 + offset/50)*2)*layer.amplitude) % height;
      ctx.fillText(char, i*fontSize, y);
    }
  });

  offset += 1;
  requestAnimationFrame(drawWaveChars);
}

drawWaveChars();

// RESIZE CANVAS
window.addEventListener('resize', ()=>{
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});
