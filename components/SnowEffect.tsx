import React, { useEffect, useRef } from 'react';

export const SnowEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    
    // Handle Retina displays
    const dpr = window.devicePixelRatio || 1;
    
    const resize = () => {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        ctx.scale(dpr, dpr);
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
    };
    resize();

    // Snow Configuration
    const particleCount = 250; // Increased density
    const particles: { 
        x: number; 
        y: number; 
        radius: number; 
        speedY: number; 
        speedX: number; 
        opacity: number; 
        angle: number; 
        oscSpeed: number;
        color: string;
    }[] = [];

    for (let i = 0; i < particleCount; i++) {
      const isIce = Math.random() > 0.8; // 20% of particles are "icy" blue
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2.5 + 0.5,
        speedY: Math.random() * 0.8 + 0.3, 
        speedX: Math.random() * 0.4 - 0.2,
        opacity: Math.random() * 0.5 + 0.1,
        angle: Math.random() * Math.PI * 2,
        oscSpeed: Math.random() * 0.02 + 0.005,
        color: isIce ? '200, 240, 255' : '255, 255, 255'
      });
    }

    // Santa Configuration
    // Initialize lastFlyTime such that he flies 10 seconds after load, then every 2 mins
    let santaState = {
        x: width + 300,
        y: 100,
        active: false,
        lastFlyTime: Date.now() - (120000 - 10000), // Trigger in 10s
        speed: 3 // Speed of Santa
    };
    
    const SANTA_INTERVAL = 120000; // 2 minutes

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // --- Draw Snow ---
      particles.forEach((p) => {
        ctx.beginPath();
        
        // Update physics
        p.angle += p.oscSpeed;
        p.y += p.speedY;
        p.x += Math.sin(p.angle) * 0.5 + p.speedX; 
        
        // Wrap around
        if (p.y > height + 5) {
            p.y = -10;
            p.x = Math.random() * width;
        }
        if (p.x > width + 5) p.x = -5;
        if (p.x < -5) p.x = width + 5;

        // Twinkle effect
        const twinkle = Math.abs(Math.sin(p.angle * 2)); // Faster twinkle
        const currentOpacity = Math.max(0.1, Math.min(p.opacity + (twinkle * 0.15), 0.9));

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 2);
        gradient.addColorStop(0, `rgba(${p.color}, ${currentOpacity})`);
        gradient.addColorStop(1, `rgba(${p.color}, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // --- Santa Logic ---
      const now = Date.now();
      if (!santaState.active) {
          if (now - santaState.lastFlyTime > SANTA_INTERVAL) {
              santaState.active = true;
              santaState.x = width + 300; // Start off-screen Right
              santaState.y = Math.random() * (height * 0.2) + 80; // Top 20% of screen
              santaState.lastFlyTime = now;
          }
      } else {
          // Move Left (Reindeer emojis usually face left, so flying Left looks natural)
          santaState.x -= santaState.speed;
          
          // Add bobbing motion
          const bob = Math.sin(now / 150) * 12;

          ctx.save();
          ctx.font = '40px serif';
          // Magic glow for Santa
          ctx.shadowColor = 'rgba(255, 223, 0, 0.6)'; 
          ctx.shadowBlur = 25;
          ctx.fillStyle = '#fff';
          
          // Draw string: 🦌🦌🛷🎅 
          // Since we move Left, the left-most char leads. 
          // Deer face left (<), so drawing Deer-Sleigh-Santa creates proper order.
          ctx.fillText('🦌🦌🛷🎅', santaState.x, santaState.y + bob);
          
          ctx.restore();

          // End condition (Santa has fully left the screen to the left)
          if (santaState.x < -400) {
              santaState.active = false;
          }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
};