function clearDisplay() {
    document.getElementById('calc-display').textContent = '0';
}

function deleteLast() {
    const display = document.getElementById('calc-display');
    display.textContent = display.textContent.slice(0, -1) || '0';
}

function appendToDisplay(value) {
    const display = document.getElementById('calc-display');
    if (display.textContent === '0') {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
}

function calculateResult() {
    const display = document.getElementById('calc-display');
    try {
        display.textContent = eval(display.textContent.replace(/x/g, '*'));
        display.textContent = parseFloat(display.textContent).toFixed(3);
    } catch {
        display.textContent = 'Error';
    }
}
