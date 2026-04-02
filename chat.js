<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>🔷 OcladeAI - Bot de Programación</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }

        :root {
            --primary: #00d9ff;
            --secondary: #7b2ff7;
            --dark: #0a0a0f;
            --glass: rgba(255,255,255,0.05);
            --border: rgba(0,217,255,0.3);
            --code-bg: #1a1a2e;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: var(--dark);
            color: #fff;
            overflow: hidden;
            height: 100vh;
            position: relative;
        }

        #particles {
            position: fixed;
            top: 0; left: 0;
            width: 100%; height: 100%;
            z-index: 0;
        }

        .container {
            position: relative;
            z-index: 1;
            height: 100vh;
            display: flex;
            flex-direction: column;
        }

        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 20px;
            background: linear-gradient(180deg, rgba(0,0,0,0.8) transparent 100%);
            backdrop-filter: blur(10px);
            z-index: 10;
        }

        .logo {
            font-size: 24px;
            font-weight: 800;
            background: linear-gradient(90deg, var(--primary), var(--secondary));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: glow 2s ease-in-out infinite;
        }

        @keyframes glow {
            0%, 100% { filter: drop-shadow(0 0 10px var(--primary)); }
            50% { filter: drop-shadow(0 0 20px var(--secondary)); }
        }

        .new-chat-btn {
            background: var(--glass);
            border: 1px solid var(--border);
            border-radius: 12px;
            padding: 10px 15px;
            color: #fff;
            font-size: 14px;
            cursor: pointer;
            transition: all 0.3s;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .new-chat-btn:active {
            background: var(--primary);
            transform: scale(0.95);
        }

        .chat-area {
            flex: 1;
            overflow-y: auto;
            padding: 20px;
            display: flex;
            flex-direction: column;
            gap: 15px;
            position: relative;
        }

        .welcome-center {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            z-index: 5;
            animation: fadeInUp 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .welcome-title {
            font-size: 28px;
            font-weight: 700;
            background: linear-gradient(90deg, var(--primary), var(--secondary));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 12px;
        }

        .welcome-subtitle {
            font-size: 16px;
            color: #aaa;
            max-width: 80%;
            margin: 0 auto;
        }

        @keyframes fadeInUp {
            from { opacity: 0; transform: translate(-50%, 20px); }
            to { opacity: 1; transform: translate(-50%, 0); }
        }

        .message {
            max-width: 85%;
            padding: 15px 20px;
            border-radius: 20px;
            line-height: 1.5;
            transition: all 0.3s ease;
        }

        .user-msg {
            align-self: flex-end;
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            border-bottom-radius: 5px;
            transform: translateX(20px);
            opacity: 0;
            animation: slideInRight 0.5s forwards;
        }

        @keyframes slideInRight {
            from { opacity: 0; transform: translateX(20px) scale(0.95); }
            to { opacity: 1; transform: translateX(0) scale(1); }
        }

        .ai-msg {
            align-self: flex-start;
            background: var(--glass);
            border: 1px solid var(--border);
            border-bottom-left-radius: 5px;
            backdrop-filter: blur(10px);
            transform: translateX(-20px);
            opacity: 0;
            animation: slideInLeft 0.5s forwards;
        }

        @keyframes slideInLeft {
            from { opacity: 0; transform: translateX(-20px) scale(0.95); }
            to { opacity: 1; transform: translateX(0) scale(1); }
        }

        .code-block {
            background: var(--code-bg);
            border: 1px solid var(--border);
            border-radius: 10px;
            padding: 15px;
            margin: 10px 0;
            font-family: 'Courier New', monospace;
            font-size: 14px;
            overflow-x: auto;
            white-space: pre;
        }

        .input-area {
            padding: 20px;
            background: linear-gradient(0deg, rgba(0,0,0,0.9) 0%, transparent 100%);
            backdrop-filter: blur(10px);
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .input-container {
            display: flex;
            gap: 10px;
            background: var(--glass);
            border: 1px solid var(--border);
            border-radius: 25px;
            padding: 5px;
        }

        #userInput {
            flex: 1;
            background: transparent;
            border: none;
            color: #fff;
            padding: 15px 20px;
            font-size: 16px;
            outline: none;
        }

        .input-actions {
            display: flex;
            gap: 10px;
            align-items: center;
        }

        .model-selector {
            position: relative;
            display: inline-block;
        }

        .model-btn {
            background: var(--glass);
            border: 1px solid var(--border);
            border-radius: 12px;
            padding: 10px 15px;
            color: #fff;
            font-size: 14px;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 8px;
            transition: all 0.3s;
        }

        .model-btn:hover {
            background: rgba(0,217,255,0.1);
        }

        .model-dropdown {
            position: absolute;
            bottom: 100%;
            left: 0;
            width: 220px;
            background: var(--glass);
            backdrop-filter: blur(10px);
            border: 1px solid var(--border);
            border-radius: 12px;
            padding: 5px;
            z-index: 100;
            display: none;
            margin-bottom: 10px;
        }

        .model-dropdown.show {
            display: block;
        }

        .model-option {
            padding: 12px 15px;
            color: #fff;
            cursor: pointer;
            border-radius: 8px;
            transition: all 0.2s;
            font-size: 14px;
        }

        .model-option:hover {
            background: rgba(0,217,255,0.2);
        }

        .model-option.selected {
            background: rgba(0,217,255,0.3);
            font-weight: bold;
        }

        .attach-btn {
            background: var(--glass);
            border: 1px solid var(--border);
            border-radius: 50%;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.3s;
        }

        .attach-btn:hover {
            background: var(--primary);
        }

        .send-btn {
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            border: none;
            border-radius: 20px;
            padding: 0 20px;
            color: white;
            font-weight: 700;
            font-size: 14px;
            cursor: pointer;
            transition: all 0.3s;
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .send-btn:active {
            transform: scale(0.95);
        }

        .thinking {
            display: flex;
            gap: 6px;
            padding: 15px 20px;
            align-items: center;
        }

        .thinking span {
            width: 8px;
            height: 8px;
            background: var(--primary);
            border-radius: 50%;
            animation: bounce 1.4s infinite;
        }

        .thinking span:nth-child(2) { animation-delay: 0.2s; }
        .thinking span:nth-child(3) { animation-delay: 0.4s; }

        @keyframes bounce {
            0%, 80%, 100% { transform: scale(0); }
            40% { transform: scale(1); }
        }

        @media (max-width: 768px) {
            .logo { font-size: 20px; }
            .message { max-width: 90%; }
            .welcome-title { font-size: 24px; }
            .input-container {
                flex-direction: column;
            }
            .input-actions {
                order: -1;
                justify-content: space-between;
            }
            .model-dropdown {
                width: 100%;
                left: 0;
            }
        }

        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: var(--primary); border-radius: 3px; }

        .sidebar {
            position: fixed;
            top: 0;
            right: -300px;
            width: 300px;
            height: 100vh;
            background: rgba(10,10,15,0.95);
            backdrop-filter: blur(20px);
            border-left: 1px solid var(--border);
            z-index: 100;
            transition: right 0.3s ease;
            padding: 20px;
        }

        .sidebar.active {
            right: 0;
        }

        .sidebar h3 {
            color: var(--primary);
            margin-bottom: 20px;
        }

        .sidebar ul {
            list-style: none;
        }

        .sidebar li {
            padding: 15px 0;
            border-bottom: 1px solid var(--glass);
            cursor: pointer;
            transition: all 0.3s;
        }

        .sidebar li:hover {
            color: var(--primary);
            padding-left: 10px;
        }

        .close-btn {
            position: absolute;
            top: 20px;
            right: 20px;
            background: var(--glass);
            border: 1px solid var(--border);
            border-radius: 50%;
            width: 40px;
            height: 40px;
            color: #fff;
            cursor: pointer;
        }

        #model3d {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 20;
            width: 80px;
            height: 80px;
            pointer-events: none;
            display: none;
        }
    </style>
</head>
<body>
    <canvas id="particles"></canvas>
    <canvas id="model3d"></canvas>

    <div class="container">
        <div class="header">
            <div class="logo">🔷 OcladeAI</div>
            <button class="new-chat-btn" onclick="limpiarChat()">+ Nuevo Chat</button>
        </div>

        <div class="chat-area" id="chatArea">
            <div class="welcome-center" id="welcomeCenter">
                <div class="welcome-title" id="saludoTitle">Buenos días</div>
                <div class="welcome-subtitle">¿En qué te puedo ayudar hoy?</div>
            </div>
        </div>

        <div class="input-area">
            <div class="input-container">
                <input type="text" id="userInput" placeholder="Escribe tu código o pregunta..." autocomplete="off">
                <div class="input-actions">
                    <div class="model-selector">
                        <button class="model-btn" onclick="toggleModelDropdown()">
                            Oclade Code 1.0
                        </button>
                        <div class="model-dropdown" id="modelDropdown">
                            <div class="model-option selected" onclick="selectModel(this, 'Oclade Code 1.0')">Oclade Code 1.0</div>
                            <div class="model-option" onclick="selectModel(this, 'Oclade Debug Pro')">Oclade Debug Pro</div>
                            <div class="model-option" onclick="selectModel(this, 'Oclade Learn AI')">Oclade Learn AI</div>
                        </div>
                    </div>

                    <button class="attach-btn" title="Adjuntar archivo" onclick="alert('Funcionalidad de adjuntar archivos próximamente.')">
                        <svg width="18" height="18" fill="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z"/>
                        </svg>
                    </button>

                    <button class="send-btn" onclick="sendMessage()">
                        Enviar
                    </button>
                </div>
            </div>
        </div>
    </div>

    <div class="sidebar" id="sidebar">
        <button class="close-btn" onclick="toggleMenu()">✕</button>
        <h3>🔷 OcladeAI</h3>
        <ul>
            <li onclick="limpiarChat(); toggleMenu();">🗑️ Nueva Conversación</li>
            <li onclick="alert('Historial de conversaciones próximamente.'); toggleMenu();">💬 Ver Conversaciones</li>
            <li onclick="mostrarAyuda(); toggleMenu();">❓ Ayuda</li>
            <li onclick="mostrarLenguajes(); toggleMenu();">💻 Lenguajes</li>
            <li onclick="mostrarConceptos(); toggleMenu();">📚 Conceptos</li>
            <li onclick="about(); toggleMenu();">ℹ️ Acerca de</li>
        </ul>
    </div>

    <script>
        // 🎉 SALUDO DINÁMICO
        function actualizarSaludo() {
            const ahora = new Date();
            const hora = ahora.getHours();
            let saludo = "";
            if (hora >= 6 && hora < 12) saludo = "Buenos días";
            else if (hora >= 12 && hora < 18) saludo = "Buenas tardes";
            else saludo = "Buenas noches";

            document.getElementById('saludoTitle').textContent = saludo;
        }

        function eliminarSaludo() {
            const welcome = document.getElementById('welcomeCenter');
            if (welcome) {
                welcome.style.opacity = '0';
                welcome.style.transform = 'translate(-50%, -20px)';
                setTimeout(() => {
                    welcome.remove();
                }, 500);
            }
        }

        document.addEventListener('DOMContentLoaded', () => {
            actualizarSaludo();
        });

        // 🧠 SELECTOR DE MODELO
        let selectedModel = 'Oclade Code 1.0';

        function toggleModelDropdown() {
            const dropdown = document.getElementById('modelDropdown');
            dropdown.classList.toggle('show');
        }

        function selectModel(element, modelName) {
            selectedModel = modelName;
            document.querySelector('.model-btn').textContent = modelName;
            document.querySelectorAll('.model-option').forEach(opt => opt.classList.remove('selected'));
            element.classList.add('selected');
            closeDropdown();
        }

        function closeDropdown() {
            document.getElementById('modelDropdown').classList.remove('show');
        }

        window.onclick = function(e) {
            if (!e.target.matches('.model-btn') && !e.target.closest('.model-selector')) {
                closeDropdown();
            }
        };

        // 📢 FUNCIONES DEL CHAT
        const chatArea = document.getElementById('chatArea');
        const userInput = document.getElementById('userInput');
        const sendBtn = document.querySelector('.send-btn');

        function sendMessage() {
            const message = userInput.value.trim();
            if (!message) return;

            eliminarSaludo();

            const userMsg = document.createElement('div');
            userMsg.className = 'message user-msg';
            userMsg.innerHTML = formatResponse(message);
            chatArea.appendChild(userMsg);
            chatArea.scrollTop = chatArea.scrollHeight;

            userInput.value = '';

            // 🧊 Mostrar animación 3D
            iniciarAnimacion3D();

            showThinking();

            setTimeout(() => {
                hideThinking();
                // 🧊 Ocultar animación 3D
                detenerAnimacion3D();
                const respuesta = brain.analizar(message);
                const aiMsg = document.createElement('div');
                aiMsg.className = 'message ai-msg';
                aiMsg.innerHTML = formatResponse(respuesta);
                chatArea.appendChild(aiMsg);
                chatArea.scrollTop = chatArea.scrollHeight;
            }, 1500 + Math.random() * 1000);
        }

        function showThinking() {
            const div = document.createElement('div');
            div.className = 'message ai-msg thinking';
            div.id = 'thinking';
            div.innerHTML = '<span></span><span></span>';
            chatArea.appendChild(div);
            chatArea.scrollTop = chatArea.scrollHeight;
        }

        function hideThinking() {
            const thinking = document.getElementById('thinking');
            if (thinking) thinking.remove();
        }

        function formatResponse(text) {
            return text
                .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
                .replace(/\n/g, '<br>')
                .replace(/```([\s\S]*?)```/g, '<div class="code-block">$1</div>');
        }

        userInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendMessage();
        });

        // 🎨 FONDO DE PARTÍCULAS
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

        // 🎯 FUNCIONES DEL MENÚ LATERAL
        function limpiarChat() {
            chatArea.innerHTML = `
                <div class="welcome-center" id="welcomeCenter">
                    <div class="welcome-title" id="saludoTitle">${generarSaludo()}</div>
                    <div class="welcome-subtitle">¿En qué te puedo ayudar hoy?</div>
                </div>
            `;
            actualizarSaludo();
        }

        function generarSaludo() {
            const ahora = new Date();
            const hora = ahora.getHours();
            if (hora >= 6 && hora < 12) return "Buenos días";
            if (hora >= 12 && hora < 18) return "Buenas tardes";
            return "Buenas noches";
        }

        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
    </script>

    <!-- 📦 CARGA DE ARCHIVOS EN ORDEN -->
    <script src="programacion.js"></script>
    <script src="chat.js"></script>
    <script src="app.js"></script>
</body>
</html>
