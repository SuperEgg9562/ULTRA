/**
 * Decypher The Universe Layout Engine
 * Core Terminal Text Modules & Full-bleed Dynamic Matrix Rain Canvas Handler
 */

document.addEventListener("DOMContentLoaded", () => {
    
    /*--- 1. Terminal Text Typing Engine ---*/
    const terminalElement = document.getElementById("terminal-text");
    if (terminalElement) {
        const rawText = terminalElement.getAttribute("data-text").replace(/\s+/g, ' ').trim();
        let textIndex = 0;

        function typeEngine() {
            if (textIndex < rawText.length) {
                terminalElement.textContent += rawText.charAt(textIndex);
                textIndex++;
                setTimeout(typeEngine, 25); 
            }
        }
        typeEngine();
    }

    /*--- 2. Matrix Digital Rain Animation Component Engine ---*/
    const canvas = document.getElementById('Matrix');
    if (!canvas) return; 

    const context = canvas.getContext('2d');

    const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums = '0123456789';
    const alphabet = katakana + latin + nums;

    const fontSize = 16;
    let columns;
    let rainDrops = [];

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        
        canvas.height = Math.max(
            document.body.scrollHeight, 
            document.documentElement.scrollHeight,
            window.innerHeight
        );

        columns = Math.floor(canvas.width / fontSize);
        const oldDrops = [...rainDrops];
        rainDrops = [];
        for (let x = 0; x < columns; x++) {
            rainDrops[x] = oldDrops[x] !== undefined ? oldDrops[x] : Math.floor(Math.random() * -20);
        }
    }

    // Initialize layout dimensions
    resizeCanvas();

    // Context execution resizing listener triggers
    window.addEventListener('resize', () => {
        clearTimeout(window.resizeTimer);
        window.resizeTimer = setTimeout(resizeCanvas, 150);
    });

    const draw = () => {
        context.fillStyle = 'rgba(0, 0, 0, 0.05)';
        context.fillRect(0, 0, canvas.width, canvas.height);

        context.fillStyle = '#00ff00';
        context.font = `bold ${fontSize}px monospace`;

        for (let i = 0; i < rainDrops.length; i++) {
            const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
            const xPos = i * fontSize;
            const yPos = rainDrops[i] * fontSize;

            context.fillText(text, xPos, yPos);

            if (yPos > canvas.height && Math.random() > 0.975) {
                rainDrops[i] = 0;
            }
            rainDrops[i]++;
        }
    };

    // Loops animation cycles at ~33 FPS cleanly
    setInterval(draw, 30);
});
