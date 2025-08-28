const installBtn = document.getElementById("installBtn");
const installerBox = document.querySelector(".installer-box");
const downloadLinks = document.querySelector(".download-links");

installBtn.addEventListener("click", () => {
  // Animate box to “installed” state
  installerBox.classList.add("installed");

  // Hide install button
  installBtn.style.display = "none";

  // Show download buttons
  downloadLinks.style.display = "flex";
});
