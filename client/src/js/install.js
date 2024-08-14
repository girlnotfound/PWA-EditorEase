// get the install button element
const butInstall = document.getElementById("buttonInstall");
let deferredPrompt;

// show the install button
function showInstallButton() {
  butInstall.style.display = "block";
}

// hide the install button
function hideInstallButton() {
  butInstall.style.display = "none";
}

// logic for installing the PWA
// listen for the event to show the install button
window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredPrompt = event;
  showInstallButton();
});

// handle the click event on the install button
butInstall.addEventListener("click", async () => {
  if (!deferredPrompt) {
    console.log("No install prompt available");
    return;
  }

  // show the install prompt
  const result = await deferredPrompt.prompt();
  console.log(
    `User ${
      result.outcome === "accepted" ? "accepted" : "dismissed"
    } the install prompt`
  );

  deferredPrompt = null; // clear the saved prompt
  hideInstallButton(); // hide the install button
});

// log when the PWA is installed
window.addEventListener("appinstalled", (event) => {
  console.log("PWA was installed", event);
});
