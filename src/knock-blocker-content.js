// Function to find and hide buttons containing "knock"
function removeKnockButtons() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach(btn => {
    // Check if the button's inner text contains "knock" (case insensitive)
    if (btn.innerText && btn.innerText.toLowerCase().includes("knock")) {

      // go up the DOM from the knock button and hide the dropdown "split menu"
      btn.closest('.tw-split-button')?.style.setProperty('display', 'none', 'important')
        && console.log('Blocked Knock Button!');

      // remove the pop-up dialog for Knocking that appears in
      btn.closest('[data-test-selector="chat-private-callout-queue__callout-container"]')?.style.setProperty('display', 'none', 'important')
        && console.log('Blocked Knock Pop-up!');
    }
  });
}

function knockBlock() {
  removeKnockButtons();
}

// Set up a MutationObserver to catch dynamically loaded content
const observer = new MutationObserver(() => {
  knockBlock();
});

// Observe changes in the body of the document, including added nodes
observer.observe(document.body, { childList: true, subtree: true });

// Run the function initially in case the buttons are already loaded
knockBlock();
