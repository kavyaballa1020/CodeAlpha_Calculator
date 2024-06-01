function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculate() {
  try {
      const display = document.getElementById('display');
      // Evaluate the expression while handling the modulus operator
      const expression = display.value.replace(/%/g, ' % ');
      display.value = eval(expression);
  } catch (error) {
      alert('Invalid Expression');
  }
}

function backspace() {
  const display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
}
