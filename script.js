// GLITCH TEXT ANIMATION
const targetText = "Ink games external";
const glitchChars = ['@','&','{','#','%','*','?','!'];
const glitchTextElement = document.getElementById("glitchText");
let iteration = 0;

function glitchStep(){
  let display = "";
  for(let i=0;i<targetText.length;i++){
    if(i < iteration){
      display += targetText[i];
    } else {
      display += glitchChars[Math.floor(Math.random()*glitchChars.length)];
    }
  }
  glitchTextElement.textContent = display;
  iteration += 1/3; // speed of reveal
  if(iteration <= targetText.length){
    requestAnimationFrame(glitchStep);
  }
}

glitchStep();

// BUTTON LOGIC
const installBtn = document.getElementById("installBtn");
const installerBox = document.querySelector(".installer-box");
const downloadLinks = document.querySelector(".download-links");
const chooseVersionText = document.getElementById("chooseVersion");

installBtn.addEventListener("click", () => {
  // hide first line
  glitchTextElement.style.display = "none";
  // show second line
  chooseVersionText.style.display = "block";
  // hide button
  installBtn.style.display = "none";
  // show download links
  downloadLinks.style.display = "flex";
});

// BACKGROUND WAVY CODE CHARACTERS
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
