// Function to find and hide buttons containing "knock"
function removeKnockButtons() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach(btn => {
    // Check if the button's inner text contains "knock" (case insensitive)
    if (btn.innerText && btn.innerText.toLowerCase().includes("knock")) {
      btn.style.display = "none";
      // Optionally, you can completely remove the node:
      //btn.remove();
    }
}

// Run the function initially in case the buttons are already loaded
function removeKnockButtons();

// Set up a MutationObserver to catch dynamically loaded content
const observer = new MutationObserver(() => {
  removeKnockButtons();
});

// Observe changes in the body of the document, including added nodes
observer.observe(document.body, { childList: true, subtree: true });
