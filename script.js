let cookies = 0;
let cursors = 0;
const cursorCost = 10;
const clickValue = 1;

const cookieCountEl = document.getElementById("cookie-count");
const cursorCountEl = document.getElementById("cursor-count");
const cookieButton = document.getElementById("cookie-button");
const buyCursorButton = document.getElementById("buy-cursor");

cookieButton.addEventListener("click", () => {
  cookies += clickValue;
  updateDisplay();
});

buyCursorButton.addEventListener("click", () => {
  if (cookies >= cursorCost) {
    cookies -= cursorCost;
    cursors += 1;
    updateDisplay();
  }
});

function updateDisplay() {
  cookieCountEl.textContent = cookies;
  cursorCountEl.textContent = cursors;
}

// Auto-generate cookies
setInterval(() => {
  cookies += cursors;
  updateDisplay();
}, 1000); // Every second
