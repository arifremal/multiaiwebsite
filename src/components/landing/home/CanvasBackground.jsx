import { useEffect, useRef } from 'react';

const CanvasBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const config = {
  gridSize: 40,
  gridColor: '#4338ca', // indigo-700
  particleCount: 50,
  particleSpeedMin: 0.5,
  particleSpeedMax: 5,
  particleColors: ['#e0e7ff', '#c7d2fe', '#a5b4fc'], // light indigo shades
  trailLength: 100,
  backgroundColor: '#1e1b4b', // indigo-950
  rippleDuration: 2000,
  rippleMaxRadius: 200
};


    const occupiedLines = { horizontal: new Set(), vertical: new Set() };
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;':,./<>?";

    const createGrid = () => {
      ctx.fillStyle = config.backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(51, 65, 85, 1)');
      gradient.addColorStop(1, 'rgba(51, 65, 85, 0)');
      ctx.strokeStyle = gradient;

      for (let y = 0; y < canvas.height; y += config.gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      for (let x = 0; x < canvas.width; x += config.gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
    };

    class Particle {
      constructor() {
        this.color = config.particleColors[Math.floor(Math.random() * config.particleColors.length)];
        this.speed = Math.random() * (config.particleSpeedMax - config.particleSpeedMin) + config.particleSpeedMin;
        this.reset();
      }

      update() {
        this.trail.push({ x: this.x, y: this.y });
        if (this.trail.length > config.trailLength) this.trail.shift();

        if (this.active) {
          if (this.direction === 'horizontal') {
            this.x += this.speed;
            if (this.x > canvas.width) {
              this.active = false;
              occupiedLines.horizontal.delete(this.y);
            }
          } else {
            this.y += this.speed;
            if (this.y > canvas.height) {
              this.active = false;
              occupiedLines.vertical.delete(this.x);
            }
          }
        } else {
          const allOffScreen = this.trail.every(point =>
            (this.direction === 'horizontal' && point.x > canvas.width) ||
            (this.direction === 'vertical' && point.y > canvas.height)
          );
          if (allOffScreen) this.reset();
        }
      }

      draw() {
        for (let i = 0; i < this.trail.length; i++) {
          const point = this.trail[i];
          const alpha = i / this.trail.length;
          ctx.fillStyle = this.color.replace('1)', `${alpha})`);
          ctx.beginPath();
          ctx.arc(point.x, point.y, 0.4, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      findAvailableLine() {
        const maxAttempts = 100;
        let attempts = 0;
        while (attempts < maxAttempts) {
          if (Math.random() > 0.5) {
            const y = Math.round(Math.random() * canvas.height / config.gridSize) * config.gridSize;
            if (!occupiedLines.horizontal.has(y)) {
              this.direction = 'horizontal';
              this.x = 0;
              this.y = y;
              occupiedLines.horizontal.add(y);
              return true;
            }
          } else {
            const x = Math.round(Math.random() * canvas.width / config.gridSize) * config.gridSize;
            if (!occupiedLines.vertical.has(x)) {
              this.direction = 'vertical';
              this.x = x;
              this.y = 0;
              occupiedLines.vertical.add(x);
              return true;
            }
          }
          attempts++;
        }
        return false;
      }

      reset() {
        if (this.findAvailableLine()) {
          this.trail = [];
          this.active = true;
        } else {
          this.active = false;
          this.trail = [];
        }
      }
    }

    const particles = Array(config.particleCount).fill().map(() => new Particle());

    let ripples = [];
    class Ripple {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = 0;
        this.startTime = Date.now();
      }

      update() {
        const elapsed = Date.now() - this.startTime;
        this.radius = (elapsed / config.rippleDuration) * config.rippleMaxRadius;
      }

      draw() {
        const alpha = 1 - (this.radius / config.rippleMaxRadius);
        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.stroke();

        if (Math.random() < 4.3) {
          ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
          ctx.font = "16px monospace";
          const char = characters[Math.floor(Math.random() * characters.length)];
          ctx.fillText(char, this.x + (Math.random() - 0.5) * this.radius * 2, this.y + (Math.random() - 0.5) * this.radius * 2);
        }
      }

      isComplete() {
        return this.radius >= config.rippleMaxRadius;
      }
    }

    const animate = () => {
      createGrid();
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      ripples = ripples.filter(r => !r.isComplete());
      ripples.forEach(r => {
        r.update();
        r.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const resizeHandler = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      occupiedLines.horizontal.clear();
      occupiedLines.vertical.clear();
      particles.forEach(p => p.reset());
    };

    const clickHandler = e => {
      ripples.push(new Ripple(e.clientX, e.clientY));
    };

    window.addEventListener('resize', resizeHandler);
    canvas.addEventListener('click', clickHandler);
    animate();

    return () => {
      window.removeEventListener('resize', resizeHandler);
      canvas.removeEventListener('click', clickHandler);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full z-0"
    />
  );
};

export default CanvasBackground;
