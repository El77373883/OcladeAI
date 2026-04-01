// 🔷 OCLADEAI - CEREBRO DE PROGRAMACIÓN
// 100% JavaScript puro, sin dependencias

// ═══════════════════════════════════════════════════════════════
// 🧠 BASE DE CONOCIMIENTO DE PROGRAMACIÓN
// ═══════════════════════════════════════════════════════════════
const conocimiento = {
    saludos: ["hola", "hey", "buenos", "hi"],
    despedidas: ["adios", "chau", "hasta", "bye"],
    lenguajes: {
        "python": "Python es un lenguaje interpretado, ideal para IA, datos y backend. ¿Qué quieres hacer con Python?",
        "javascript": "JavaScript es el lenguaje de la web. Sirve para frontend, backend (Node.js) y apps móviles. ¿En qué te ayudo?",
        "html": "HTML es el esqueleto de las páginas web. Define la estructura con etiquetas. ¿Necesitas ayuda con alguna etiqueta?",
        "css": "CSS da estilo a tu web. Colores, fuentes, layouts, animaciones. ¿Qué quieres estilizar?",
        "java": "Java es orientado a objetos, usado en Android y enterprise. ¿Qué necesitas?",
        "c++": "C++ es de alto rendimiento, usado en juegos y sistemas. ¿En qué te ayudo?",
        "sql": "SQL maneja bases de datos. Consultas, tablas, relaciones. ¿Qué consulta necesitas?",
        "php": "PHP es para backend web. Dinámico y fácil de desplegar. ¿Qué quieres desarrollar?",
        "react": "React es una librería de JS para interfaces. Componentes, estado, hooks. ¿Qué quieres construir?",
        "node": "Node.js ejecuta JavaScript en el servidor. APIs, servidores, real-time. ¿Qué necesitas?"
    },
    conceptos: {
        "variable": "Una variable es un contenedor para guardar datos. Ej: let nombre = 'OcladeAI';",
        "funcion": "Una función es un bloque de código reutilizable. Ej: function saludar() { return 'Hola'; }",
        "bucle": "Un bucle repite código. for, while, forEach. Ej: for(let i=0; i<5; i++) { console.log(i); }",
        "condicional": "Un condicional toma decisiones. if, else, switch. Ej: if(x > 5) { return true; }",
        "array": "Un array es una lista de valores. Ej: let nums = [1, 2, 3, 4, 5];",
        "objeto": "Un objeto guarda datos en pares clave-valor. Ej: let user = {nombre: 'Oclade', edad: 1};",
        "clase": "Una clase es un molde para crear objetos. Programación orientada a objetos.",
        "api": "Una API permite que dos programas se comuniquen. REST, GraphQL, endpoints.",
        "git": "Git controla versiones de código. Commit, push, pull, branch, merge.",
        "debug": "Debugging es encontrar y corregir errores. Usa console.log, breakpoints, debugger."
    },
    errores: {
        "syntaxerror": "Error de sintaxis: revisa paréntesis, comillas, puntos y comas.",
        "undefined": "Variable no definida: verifica que declaraste la variable antes de usarla.",
        "null": "Valor null: la variable existe pero no tiene valor asignado.",
        "typeerror": "Error de tipo: estás usando un dato incorrecto (ej: sumar string + número).",
        "referenceerror": "Referencia no válida: la variable o función no existe en ese scope.",
        "404": "Error 404: la página o recurso no existe. Verifica la URL.",
        "500": "Error 500: error del servidor. Revisa logs y configuración."
    }
};

// ═══════════════════════════════════════════════════════════════
// 🧠 MOTOR DE ANÁLISIS
// ═══════════════════════════════════════════════════════════════
class OcladeBrain {
    constructor() {
        this.historial = [];
    }

    analizar(mensaje) {
        const m = mensaje.toLowerCase().trim();
        
        // 1. Saludos
        if (conocimiento.saludos.some(p => m.includes(p))) {
            return "¡Hola! 🚀 Soy OcladeAI, tu asistente de programación. ¿En qué lenguaje o tema te ayudo hoy?";
        }

        // 2. Despedidas
        if (conocimiento.despedidas.some(p => m.includes(p))) {
            return "¡Hasta pronto! 🔷 Recuerda: el código es poesía lógica. ¡Vuelve cuando necesites ayuda!";
        }

        // 3. Lenguajes de programación
        for (const [lang, respuesta] of Object.entries(conocimiento.lenguajes)) {
            if (m.includes(lang)) {
                return respuesta;
            }
        }

        // 4. Conceptos de programación
        for (const [concepto, explicacion] of Object.entries(conocimiento.conceptos)) {
            if (m.includes(concepto)) {
                return `📚 **${concepto.toUpperCase()}**\n\n${explicacion}`;
            }
        }

        // 5. Errores comunes
        for (const [error, solucion] of Object.entries(conocimiento.errores)) {
            if (m.includes(error)) {
                return `🐛 **ERROR DETECTADO**\n\n${solucion}`;
            }
        }

        // 6. Detección de código (si contiene caracteres de programación)
        if (/[{};=function\(\)console\.log]/.test(m)) {
            return this.analizarCodigo(m);
        }

        // 7. Respuesta por defecto
        return this.respuestaInteligente(m);
    }

    analizarCodigo(codigo) {
        let analisis = "🔍 **Análisis de Código**\n\n";
        
        if (codigo.includes('function') || codigo.includes('=>')) {
            analisis += "✅ Detecté una función.\n";
        }
        if (codigo.includes('console.log') || codigo.includes('print')) {
            analisis += "✅ Detecté una salida/imprimir.\n";
        }
        if (codigo.includes('for') || codigo.includes('while')) {
            analisis += "✅ Detecté un bucle.\n";
        }
        if (codigo.includes('if') || codigo.includes('else')) {
            analisis += "✅ Detecté un condicional.\n";
        }
        if (codigo.includes('var') || codigo.includes('let') || codigo.includes('const')) {
            analisis += "✅ Detecté declaración de variables.\n";
        }

        analisis += "\n💡 ¿Quieres que optimice, explique o debuggee este código?";
        return analisis;
    }

    respuestaInteligente(m) {
        const respuestas = [
            "🤔 Interesante pregunta. ¿Podrías darme más contexto sobre qué lenguaje o framework estás usando?",
            "💭 Déjame analizar... ¿Esto es para web, móvil, backend o IA?",
            "🔷 Para ayudarte mejor, ¿me compartes un ejemplo de código o el error específico?",
            "📋 Esa es una gran pregunta de programación. ¿Qué estás intentando construir?"
        ];
        return respuestas[Math.floor(Math.random() * respuestas.length)];
    }
}

const brain = new OcladeBrain();

// ═══════════════════════════════════════════════════════════════
// 💬 INTERFAZ DE CHAT
// ═══════════════════════════════════════════════════════════════
const chatArea = document.getElementById('chatArea');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');

function sendMessage() {
    const message = userInput.value.trim();
    if (!message) return;

    // Mensaje del usuario
    const userMsgElement = addMessageToChat(message, 'user-msg');
    if (window.ocAnimations) {
        ocAnimations.efectoOnda(userMsgElement); // 🌊 Onda al enviar
    }
    userInput.value = '';

    // Indicador de pensando ÉPICO 🔥
    if (window.ocAnimations) {
        ocAnimations.mostrarPensando();
    } else {
        showThinking(); // Fallback si no hay animaciones
    }

    // Simular "procesamiento" del bot
    setTimeout(() => {
        if (window.ocAnimations) {
            ocAnimations.ocultarPensando(); // Oculta el pensando
        } else {
            hideThinking(); // Fallback
        }
        const respuesta = brain.analizar(message);
        const aiMsgElement = addMessageToChat(respuesta, 'ai-msg');
        if (window.ocAnimations) {
            ocAnimations.animarMensaje(aiMsgElement); // 🌀 Animación al recibir
        }
    }, 1000 + Math.random() * 1000);
}

function addMessageToChat(text, className) {
    const div = document.createElement('div');
    div.className = `message ${className}`;
    div.innerHTML = formatResponse(text);
    chatArea.appendChild(div);
    chatArea.scrollTop = chatArea.scrollHeight;
    return div; // Devuelve el elemento para animaciones
}

// Fallback para showThinking/hideThinking si no se usa animation.js
function showThinking() {
    const div = document.createElement('div');
    div.className = 'message ai-msg thinking';
    div.id = 'thinking';
    div.innerHTML = '<span></span><span></span><span></span>';
    chatArea.appendChild(div);
    chatArea.scrollTop = chatArea.scrollHeight;
}

function hideThinking() {
    const thinking = document.getElementById('thinking');
    if (thinking) thinking.remove();
}

function formatResponse(text) {
    // Negritas
    text = text.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
    // Saltos de línea
    text = text.replace(/\n/g, '<br>');
    // Bloques de código (detectar por indentación o backticks)
    text = text.replace(/```([\s\S]*?)```/g, '<div class="code-block">$1</div>');
    return text;
}

// Enter para enviar
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});

// ═══════════════════════════════════════════════════════════════
// 🎨 FONDO DE PARTÍCULAS ANIMADAS
// ═══════════════════════════════════════════════════════════════
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.color = Math.random() > 0.5 ? '#00d9ff' : '#7b2ff7';
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if(this.x > canvas.width) this.x = 0;
        if(this.x < 0) this.x = canvas.width;
        if(this.y > canvas.height) this.y = 0;
        if(this.y < 0) this.y = canvas.height;
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

for(let i = 0; i < 100; i++) particles.push(new Particle());

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animate);
}
animate();

// ═══════════════════════════════════════════════════════════════
// 🎯 MENÚ LATERAL
// ═══════════════════════════════════════════════════════════════
function toggleMenu() {
    let sidebar = document.querySelector('.sidebar');
    if (!sidebar) {
        sidebar = document.createElement('div');
        sidebar.className = 'sidebar';
        sidebar.innerHTML = `
            <button class="close-btn" onclick="toggleMenu()">✕</button>
            <h3>🔷 OcladeAI</h3>
            <ul>
                <li onclick="limpiarChat()">🗑️ Limpiar Chat</li>
                <li onclick="mostrarAyuda()">❓ Ayuda</li>
                <li onclick="mostrarLenguajes()">💻 Lenguajes</li>
                <li onclick="mostrarConceptos()">📚 Conceptos</li>
                <li onclick="about()">ℹ️ Acerca de</li>
            </ul>
        `;
        document.body.appendChild(sidebar);
    }
    sidebar.classList.toggle('active');
}

function limpiarChat() {
    chatArea.innerHTML = '<div class="message ai-msg">💬 Chat limpiado. ¿Qué quieres programar?</div>';
    toggleMenu();
}

function mostrarAyuda() {
    const msgElement = addMessageToChat("❓ **AYUDA**\n\n• Escribe el nombre de un lenguaje (Python, JavaScript, etc.)\n• Pregunta sobre conceptos (variable, función, bucle)\n• Comparte errores para debuggear\n• Pega código para analizar", 'ai-msg');
    if (window.ocAnimations) {
        ocAnimations.animarMensaje(msgElement);
    }
    toggleMenu();
}

function mostrarLenguajes() {
    const msgElement = addMessageToChat("💻 **LENGUAJES SOPORTADOS**\n\nPython • JavaScript • HTML • CSS\nJava • C++ • SQL • PHP\nReact • Node.js • Git", 'ai-msg');
    if (window.ocAnimations) {
        ocAnimations.animarMensaje(msgElement);
    }
    toggleMenu();
}

function mostrarConceptos() {
    const msgElement = addMessageToChat("📚 **CONCEPTOS**\n\nVariables • Funciones • Bucles\nCondicionales • Arrays • Objetos\nClases • APIs • Git • Debugging", 'ai-msg');
    if (window.ocAnimations).animarMensaje(msgElement);
    }
    toggleMenu();
}

function about() {
    const msgElement = addMessageToChat("🔷 **OcladeAI v1.0**\n\n✨ Bot de programación\n📱 100% desde iPhone\n🌐 GitHub + Vercel\n🧠 Sin dependencias\n💻 Código 100% propio", 'ai-msg');
    if (window.ocAnimations) {
        ocAnimations.animarMensaje(msgElement);
    }
    toggleMenu();
}

// Resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
