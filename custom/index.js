const canvas = document.getElementById('Matrix');
const context = canvas.getContext('2d');

const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789';
const alphabet = katakana + latin + nums;

const fontSize = 16;
let columns;
let rainDrops = [];

// Dynamic resizing calculation engine
const resizeCanvas = () => {
    // Measures total scrollable document footprint instead of just viewable window screen height
    canvas.width = window.innerWidth;
    canvas.height = Math.max(
        document.body.scrollHeight, 
        document.documentElement.scrollHeight,
        window.innerHeight
    );

    columns = Math.floor(canvas.width / fontSize);
    
    // Preserves existing drops progress mapping during window mutations
    const oldDrops = [...rainDrops];
    rainDrops = [];
    for (let x = 0; x < columns; x++) {
        rainDrops[x] = oldDrops[x] !== undefined ? oldDrops[x] : Math.floor(Math.random() * -20);
    }
};

// Initializes layout metrics context
resizeCanvas();

// Attaches debounce listeners to re-evaluate canvas heights when viewport shapes warp
window.addEventListener('resize', () => {
    clearTimeout(window.resizeTimer);
    window.resizeTimer = setTimeout(resizeCanvas, 150);
});

const draw = () => {
    // Generates the falling fade trailers trace effect
    context.fillStyle = 'rgba(0, 0, 0, 0.05)';
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = '#00ff00'; 
    context.font = `bold ${fontSize}px monospace`;

    for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        
        // Horizontal mapping offset logic
        const xPos = i * fontSize;
        const yPos = rainDrops[i] * fontSize;

        context.fillText(text, xPos, yPos);

        // Resets drip streams back to absolute top randomly once bottom threshold target is passed
        if (yPos > canvas.height && Math.random() > 0.975) {
            rainDrops[i] = 0;
        }
        rainDrops[i]++;
    }
};

// 30ms interval processing pipeline loop
setInterval(draw, 30);
