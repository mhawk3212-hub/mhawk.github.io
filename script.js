const installBtn = document.getElementById("installBtn");
const statusText = document.getElementById("status");
const linksDiv = document.querySelector(".links");

installBtn.addEventListener("click", () => {
  statusText.textContent = "Installing...";
  installBtn.disabled = true;

  // Simulate install delay
  setTimeout(() => {
    statusText.textContent = "✅ Installation complete!";
    
    // Show clickable "links" after installation
    linksDiv.innerHTML = `
      <a href="https://example.com/download1" target="_blank">Download 1</a>
      <a href="https://example.com/download2" target="_blank">Download 2</a>
    `;
  }, 3000);
});
