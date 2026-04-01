// 🔷 ANIMATION.JS - OcladeAI
// Animaciones profesionales para el chatbot

// ═══════════════════════════════════════════════════════════════
// 🌀 ANIMACIONES DE MENSAJES
// ═══════════════════════════════════════════════════════════════
class MessageAnimations {
    constructor() {
        this.tipos = ['bounce', 'slide-up', 'fade-zoom', 'pulse'];
    }

    // Aplica animación al mensaje entrante
    aplicarAnimacionMensaje(elemento, tipo = null) {
        const anim = tipo || this.tipos[Math.floor(Math.random() * this.tipos.length)];
        
        elemento.style.animation = `${anim} 0.5s ease-out`;
        
        // Agrega clase para efecto hover
        elemento.classList.add('animated-message');
    }

    // Tipos de animaciones CSS personalizadas
    getAnimacionesCSS() {
        return `
            @keyframes bounce {
                0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
                40% {transform: translateY(-10px);}
                60% {transform: translateY(-5px);}
            }
            
            @keyframes slide-up {
                from {opacity: 0; transform: translateY(20px) rotate(2deg);}
                to {opacity: 1; transform: translateY(0) rotate(0);}
            }
            
            @keyframes fade-zoom {
                from {opacity: 0; transform: scale(0.8) rotate(-2deg);}
                to {opacity: 1; transform: scale(1) rotate(0);}
            }
            
            @keyframes pulse {
                0%, 100% {transform: scale(1); box-shadow: 0 0 0 rgba(0,217,255,0.5);}
                50% {transform: scale(1.02); box-shadow: 0 0 20px rgba(0,217,255,0.8);}
            }
            
            @keyframes wave {
                0%, 100% {transform: translateX(0);}
                25% {transform: translateX(-3px);}
                75% {transform: translateX(3px);}
            }
            
            .animated-message {
                cursor: pointer;
                transition: all 0.3s ease;
            }
            
            .animated-message:hover {
                transform: scale(1.03);
                z-index: 10;
            }
        `;
    }
}

// ═══════════════════════════════════════════════════════════════
// 🤖 INDICADOR "PENSANDO" ÉPICO
// ═══════════════════════════════════════════════════════════════
class ThinkingIndicator {
    constructor(containerId = 'chatArea') {
        this.container = document.getElementById(containerId);
        this.element = null;
    }

    // Crea el indicador de pensando con animación épica
    show() {
        // Eliminar previo si existe
        this.hide();

        this.element = document.createElement('div');
        this.element.className = 'thinking-indicator';
        this.element.id = 'oclade-thinking';
        this.element.innerHTML = `
            <div class="thinking-bubbles">
                <div class="bubble bubble-1"></div>
                <div class="bubble bubble-2"></div>
                <div class="bubble bubble-3"></div>
            </div>
            <div class="thinking-text">🔷 OcladeAI está pensando...</div>
        `;
        
        this.container.appendChild(this.element);
        this.container.scrollTop = this.container.scrollHeight;
        
        // Agregar animación de pulsación al contenedor
        this.element.style.animation = 'pulseGlow 2s infinite';
    }

    hide() {
        if (this.element) {
            this.element.remove();
            this.element = null;
        }
    }

    // CSS para el indicador
    getCSS() {
        return `
            .thinking-indicator {
                display: flex;
                align-items: center;
                gap: 15px;
                padding: 15px 20px;
                background: rgba(255,255,255,0.05);
                border: 1px solid rgba(0,217,255,0.3);
                border-radius: 20px;
                backdrop-filter: blur(10px);
                margin: 10px 0;
                align-self: flex-start;
            }

            .thinking-bubbles {
                display: flex;
                gap: 6px;
                align-items: center;
            }

            .bubble {
                width: 10px;
                height: 10px;
                background: #00d9ff;
                border-radius: 50%;
                animation: bubbleFloat 1.4s infinite ease-in-out;
            }

            .bubble-2 { animation-delay: 0.2s; }
            .bubble-3 { animation-delay: 0.4s; }

            @keyframes bubbleFloat {
                0%, 80%, 100% { 
                    transform: translateY(0) scale(0.8);
                    opacity: 0.7;
                }
                40% { 
                    transform: translateY(-10px) scale(1.2);
                    opacity: 1;
                }
            }

            .thinking-text {
                color: #00d9ff;
                font-size: 14px;
                font-weight: 500;
                animation: textGlow 2s infinite alternate;
            }

            @keyframes textGlow {
                from { text-shadow: 0 0 5px #00d9ff; }
                to { text-shadow: 0 0 20px #00d9ff, 0 0 30px #7b2ff7; }
            }

            @keyframes pulseGlow {
                0%, 100% { box-shadow: 0 0 10px rgba(0,217,255,0.3); }
                50% { box-shadow: 0 0 30px rgba(0,217,255,0.6), 0 0 50px rgba(123,47,247,0.4); }
            }
        `;
    }
}

// ═══════════════════════════════════════════════════════════════
// 🌊 EFECTO ONDA AL ENVIAR MENSAJE
// ═══════════════════════════════════════════════════════════════
class WaveEffect {
    constructor() {
        this.container = document.body;
    }

    // Crea una onda de energía al enviar mensaje
    createWave(x, y) {
        const wave = document.createElement('div');
        wave.className = 'message-wave';
        wave.style.left = `${x}px`;
        wave.style.top = `${y}px`;
        
        document.body.appendChild(wave);

        // Remover después de la animación
        setTimeout(() => {
            wave.remove();
        }, 1000);
    }

    getCSS() {
        return `
            .message-wave {
                position: fixed;
                width: 0;
                height: 0;
                border: 2px solid rgba(0,217,255,0.6);
                border-radius: 50%;
                pointer-events: none;
                animation: waveExpand 1s linear infinite;
                z-index: 9999;
            }

            @keyframes waveExpand {
                0% {
                    width: 0;
                    height: 0;
                    opacity: 1;
                    border-width: 2px;
                }
                100% {
                    width: 200px;
                    height: 200px;
                    opacity: 0;
                    border-width: 0;
                }
            }
        `;
    }
}

// ═══════════════════════════════════════════════════════════════
// 🚀 INICIALIZADOR DE ANIMACIONES
// ═══════════════════════════════════════════════════════════════
class OcladeAnimations {
    constructor() {
        this.messageAnim = new MessageAnimations();
        this.thinking = new ThinkingIndicator();
        this.wave = new WaveEffect();
        this.injectCSS();
    }

    // Inyecta CSS necesario
    injectCSS() {
        const style = document.createElement('style');
        style.textContent = [
            this.messageAnim.getAnimacionesCSS(),
            this.thinking.getCSS(),
            this.wave.getCSS()
        ].join('\n');
        document.head.appendChild(style);
    }

    // Anima un mensaje nuevo
    animarMensaje(elemento) {
        this.messageAnim.aplicarAnimacionMensaje(elemento);
    }

    // Muestra pensando épico
    mostrarPensando() {
        this.thinking.show();
    }

    // Oculta pensando
    ocultarPensando() {
        this.thinking.hide();
    }

    // Crea efecto de onda
    efectoOnda(elemento) {
        const rect = elemento.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;
        this.wave.createWave(x, y);
    }
}

// Inicializar cuando se carge el DOM
document.addEventListener('DOMContentLoaded', () => {
    window.ocAnimations = new OcladeAnimations();
});

// Exportar para usar en otros scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { OcladeAnimations, MessageAnimations, ThinkingIndicator };
}
