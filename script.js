// INSTALLER LOGIC
const installBtn = document.getElementById("installBtn");
const installerBox = document.querySelector(".installer-box");
const downloadLinks = document.querySelector(".download-links");

installBtn.addEventListener("click", () => {
  installerBox.classList.add("installed");
  installBtn.style.display = "none";
  downloadLinks.style.display = "flex";
});

// WAVY CODE CHARACTERS BACKGROUND
const canvas = document.getElementById('background');
const ctx = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

const chars = ['#', '*', '1', '0'];
const fontSize = 18;
const columns = Math.floor(width / fontSize);

const waveData = [];
for(let i = 0; i < columns; i++){
  waveData.push(Math.random() * height);
}

let waveOffset = 0;

function drawWaveChars(){
  // fade previous frame for smoothness
  ctx.fillStyle = 'rgba(26,10,42,0.08)';
  ctx.fillRect(0, 0, width, height);

  ctx.fillStyle = '#ff79f0';
  ctx.font = fontSize + "px monospace";

  for(let i = 0; i < columns; i++){
    const char = chars[Math.floor(Math.random()*chars.length)];
    // Use sine + offset for smooth wave motion upward
    const y = waveData[i] - (waveOffset*0.7) + Math.sin((i/2 + waveOffset/50)) * 40;
    ctx.fillText(char, i * fontSize, y % height);
  }

  waveOffset += 1.2; // upward speed
  requestAnimationFrame(drawWaveChars);
}

drawWaveChars();

// RESIZE CANVAS
window.addEventListener('resize', ()=>{
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});
