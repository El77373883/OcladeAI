// 🔷 OCLADEAI - ANIMATIONS v2.0
// Efectos profesionales al enviar mensaje | 100% JS puro

class OcladeAnimations {
    constructor() {
        this.canvas = null;
        this.ctx = null;
        this.particles = [];
        this.isAnimating = false;
        this.initCanvas();
    }

    initCanvas() {
        // Crear canvas oculto para efectos
        this.canvas = document.createElement('canvas');
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.zIndex = '9999';
        this.canvas.style.pointerEvents = 'none';
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');
        this.resize();
        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    // 🌊 Efecto de onda al enviar mensaje (desde el botón)
    efectoOnda(x, y) {
        if (this.isAnimating) return;
        this.isAnimating = true;

        const radius = 0;
        const maxRadius = Math.max(window.innerWidth, window.innerHeight) * 0.8;
        const speed = 3;
        const color = '#00d9ff';

        const animate = () => {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            
            // Dibujar onda
            this.ctx.strokeStyle = `rgba(0, 217, 255, ${0.6 - radius / maxRadius})`;
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.arc(x, y, radius, 0, Math.PI * 2);
            this.ctx.stroke();

            // Partículas de luz
            for (let i = 0; i < 8; i++) {
                const angle = (i / 8) * Math.PI * 2;
                const dist = radius * 0.7;
                const px = x + Math.cos(angle) * dist;
                const py = y + Math.sin(angle) * dist;
                
                this.ctx.fillStyle = `rgba(123, 47, 247, ${0.8 - radius / maxRadius})`;
                this.ctx.beginPath();
                this.ctx.arc(px, py, 3 + (radius / 50), 0, Math.PI * 2);
                this.ctx.fill();
            }

            if (radius < maxRadius) {
                requestAnimationFrame(animate);
                this.ctx.globalAlpha = 0.9;
                this.ctx.font = 'bold 14px sans-serif';
                this.ctx.textAlign = 'center';
                this.ctx.fillStyle = 'rgba(0, 217, 255, 0.7)';
                this.ctx.fillText('✨', x, y - radius * 0.3);
            } else {
                this.isAnimating = false;
                this.canvas.style.display = 'none';
            }

            this.ctx.globalAlpha = 1;
            this.ctx.beginPath();
            this.ctx.arc(x, y, radius, 0, Math.PI * 2);
            this.ctx.strokeStyle = `rgba(0, 217, 255, ${0.3})`;
            this.ctx.lineWidth = 1;
            this.ctx.stroke();

            radius += speed;
        };

        this.canvas.style.display = 'block';
        animate();
    }

    // 🌀 Animar mensaje entrante (usuario o IA)
    animarMensaje(elemento, tipo = 'user') {
        elemento.style.opacity = '0';
        elemento.style.transform = tipo === 'user' ? 'translateX(30px) scale(0.9)' : 'translateX(-30px) scale(0.9)';

        setTimeout(() => {
            elemento.style.transition = 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            elemento.style.opacity = '1';
            elemento.style.transform = 'translateX(0) scale(1)';
        }, 50);
    }

    // 💥 Explosión de partículas al enviar (opcional, muy épico)
    explosión(x, y) {
        if (this.isAnimating) return;
        this.isAnimating = true;

        const particlesCount = 25;
        this.particles = [];

        for (let i = 0; i < particlesCount; i++) {
            this.particles.push({
                x,
                y,
                vx: (Math.random() - 0.5) * 10,
                vy: (Math.random() - 0.5) * 10,
                life: 1,
                maxLife: 1,
                size: Math.random() * 4 + 2,
                color: Math.random() > 0.5 ? '#00d9ff' : '#7b2ff7'
            });
        }

        const animate = () => {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

            for (let i = this.particles.length - 1; i >= 0; i--) {
                const p = this.particles[i];
                p.x += p.vx;
                p.y += p.vy;
                p.life -= 0.02;

                const alpha = p.life / p.maxLife;
                this.ctx.fillStyle = `rgba(${p.color === '#00d9ff' ? '0,217,255' : '123,47,247'}, ${alpha})`;
                this.ctx.beginPath();
                this.ctx.arc(p.x, p.y, p.size * alpha, 0, Math.PI * 2);
                this.ctx.fill();

                if (p.life <= 0) {
                    this.particles.splice(i, 1);
                }
            }

            if (this.particles.length > 0) {
                requestAnimationFrame(animate);
            } else {
                this.isAnimating = false;
            }
        };

        this.canvas.style.display = 'block';
        animate();
    }

    // 🎯 Método público para usar desde app.js
    enviarMensaje(x, y) {
        this.efectoOnda(x, y);
        // this.explosión(x, y); // descomenta para efecto aún más épico
    }

    // Limpiar canvas al salir
    cleanup() {
        if (this.canvas) {
            this.canvas.remove();
        }
    }
}

// Inicializar globalmente
document.addEventListener('DOMContentLoaded', () => {
    window.ocAnimations = new OcladeAnimations();
});
