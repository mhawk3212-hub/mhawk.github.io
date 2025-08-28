const installBtn = document.getElementById("installBtn");
const statusText = document.getElementById("status");

installBtn.addEventListener("click", () => {
  statusText.textContent = "Installing...";
  installBtn.disabled = true;

  setTimeout(() => {
    statusText.textContent = "✅ Installation complete!";
  }, 3000);
});
