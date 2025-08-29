console.log("PICEAI Buddy is active on this page!");

const button = document.createElement("button");

button.innerHTML = "";

// Set size and make circle
button.style.width = "80px";
button.style.height = "80px";
button.style.borderRadius = "70%";
button.style.border = "none";
button.style.padding = "0";
button.style.position = "fixed";
button.style.bottom = "40px";
button.style.right = "40px";
button.style.zIndex = "9999";
button.style.background = "#ffffffff";
button.style.cursor = "pointer";
button.style.display = "flex";
button.style.alignItems = "center";
button.style.justifyContent = "center";

// Add and style icon image
const icon = document.createElement("img");
icon.src = chrome.runtime.getURL("icons/icon16.png"); // Use your local icon file path here
icon.alt = "PICEAI Icon";
icon.style.width = "75px";
icon.style.height = "75px";
icon.style.borderRadius = "70%"; // Optional: make icon itself circular



button.appendChild(icon);
let isDragging = false, offsetX = 0, offsetY = 0;

button.addEventListener("mousedown", function(e) {
  isDragging = true;
  offsetX = e.clientX - button.getBoundingClientRect().left;
  offsetY = e.clientY - button.getBoundingClientRect().top;
  button.style.transition = "none";
});
document.addEventListener("mousemove", function(e) {
  if (isDragging) {
    button.style.left = e.clientX - offsetX + "px";
    button.style.top = e.clientY - offsetY + "px";
    button.style.right = "auto";
    button.style.bottom = "auto";
    button.style.position = "fixed";
  }
});
document.addEventListener("mouseup", function() {
  isDragging = false;
  button.style.transition = "";
});

button.style.userSelect = "none";          // Prevent text/image selection
button.style.webkitUserSelect = "none";    // Safari/Chrome
button.style.MozUserSelect = "none";       // Firefox
button.style.msUserSelect = "none";        // IE/Edge
icon.draggable = false;                     // Disable default drag on image

button.onclick = () => {
  alert("Hello, I'm your PICEAI buddy! (Next: I’ll talk to you 🤯)");
};

document.body.appendChild(button);
