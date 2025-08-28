const installBtn = document.getElementById("installBtn");
const statusText = document.getElementById("statusText");
const downloadLinks = document.querySelector(".download-links");

// Top animated messages
const messages = ["Initializing...", "Checking system...", "Preparing files...", "Almost ready..."];
let msgIndex = 0;

setInterval(() => {
  statusText.textContent = messages[msgIndex];
  msgIndex = (msgIndex + 1) % messages.length;
}, 2000);

// Install button
installBtn.addEventListener("click", () => {
  installBtn.disabled = true;
  statusText.textContent = "Installing...";

  setTimeout(() => {
    statusText.textContent = "✅ Installation complete!";
    downloadLinks.style.display = "flex";
  }, 3000);
});
