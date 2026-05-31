document.querySelectorAll('.terminal-text').forEach(terminalElement => {

    const rawText = terminalElement.dataset.text;

    if (!rawText) return;

    let index = 0;

    function typeText() {
        if (index < rawText.length) {
            terminalElement.textContent += rawText.charAt(index);
            index++;
            setTimeout(typeText, 50);
        }
    }

    terminalElement.textContent = '';
    typeText();

});