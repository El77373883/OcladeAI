// 🔷 OCLADEAI - LOADER ANIMADO v2.0
// Modelo 3D + texto animado al lado del input (no en el chat)

let loaderActive = false;
let animationFrameId = null;
let rotation = 0;
let textIndex = 0;
const texts = [
    "Pensando...",
    "Analizando...",
    "Optimizando...",
    "Corrigiendo...",
    "Generando respuesta...",
    "Verificando lógica...",
    "Buscando patrones...",
    "Ajustando sintaxis..."
];

function showLoader() {
    if (loaderActive) return;
    loaderActive = true;
    document.getElementById('loader-container').style.display = 'flex';

    // Iniciar animación del cubo
    const canvas = document.getElementById('model3d    const ctx = canvas.getContext('2d');
    const size = Math.min(canvas.width, canvas.height);

    function drawCube() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.rotate(rotation);
        
        // Dibujar cara frontal (azul)
        ctx.fillStyle = '#00d9ff';
        ctx.fillRect(-size/3, -size/3, size/1.5, size/1.5);
        
        // Dibujar cara lateral (morada)
        ctx.fillStyle = '#7b2ff7';
        ctx.beginPath();
        ctx.moveTo(0, -size/3);
        ctx.lineTo(size/3, 0);
        ctx.lineTo(size/3, size/1.5);
        ctx.lineTo(0, size/1.5);
        ctx.fill();
        
        // Dibujar cara superior (transparente)
        ctx.fillStyle = 'rgba(255,255,255,0.1)';
        ctx.beginPath();
        ctx.moveTo(-size/3, -size/3);
        ctx.lineTo(0, -size/3);
        ctx.lineTo(size/3, 0);
        ctx.lineTo(0, 0);
        ctx.fill();

        ctx.restore();
        rotation += 0.03;
    }

    function updateText() {
        const textEl = document.getElementById('loader-text');
        textEl.textContent = texts[textIndex];
        textIndex = (textIndex + 1) % texts.length;
    }

    function animate() {
        drawCube();
        updateText();
        animationFrameId = requestAnimationFrame(animate);
    }

    animate();
}

function hideLoader() {
    if (!loaderActive) return;
    loaderActive = false;
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
    }
    document.getElementById('loader-container').style.display = 'none';
}

// Exponer globalmente para que index.html pueda llamarlo
window.showLoader = showLoader;
window.hideLoader = hideLoader;
