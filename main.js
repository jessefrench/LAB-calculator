const display = document.querySelector(".display");

function appendToDisplay(input) {
  display.textContent += input;
}

function back() {
  display.textContent = display.textContent.slice(0, display.textContent.length - 1);
}

function clearDisplay() {
  display.textContent = "";
}

function calculate() {
  display.textContent = eval(display.textContent);
}
