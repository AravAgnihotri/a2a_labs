/**
 * SystemsAnimation Component
 * 
 * Design: Infrastructure Minimalism
 * - Black-on-black animation with dots appearing and disappearing
 * - Lines connecting, then breaking
 * - Some signals die, others persist
 * - Represents agent-to-agent system dynamics
 */

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
}

interface Connection {
  from: Particle;
  to: Particle;
  opacity: number;
}

export default function SystemsAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();

    // Create initial particles
    const createParticle = (): Particle => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      life: 0,
      maxLife: Math.random() * 200 + 100,
      size: Math.random() * 1.5 + 0.5,
    });

    // Initialize particles
    particlesRef.current = Array.from({ length: 20 }, () => createParticle());

    // Animation loop
    const animate = () => {
      // Clear canvas with slight fade
      ctx.fillStyle = 'rgba(0, 0, 0, 0.95)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      timeRef.current += 1;

      // Update and draw particles
      particlesRef.current = particlesRef.current.map(p => {
        p.life += 1;
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Calculate opacity based on life
        let opacity = 0;
        if (p.life < 30) {
          opacity = (p.life / 30) * 0.4;
        } else if (p.life < p.maxLife - 30) {
          opacity = 0.4;
        } else {
          opacity = ((p.maxLife - p.life) / 30) * 0.4;
        }

        // Draw particle
        ctx.fillStyle = `rgba(234, 234, 234, ${opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        return p;
      });

      // Remove dead particles and create new ones
      particlesRef.current = particlesRef.current.filter(p => p.life < p.maxLife);
      
      // Spawn new particles occasionally
      if (Math.random() < 0.3) {
        particlesRef.current.push(createParticle());
      }

      // Draw connections between nearby particles
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const p1 = particlesRef.current[i];
          const p2 = particlesRef.current[j];
          const dx = p2.x - p1.x;
          const dy = p2.y - p1.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const opacity1 = Math.max(0, Math.min(p1.life / 30, (p1.maxLife - p1.life) / 30));
            const opacity2 = Math.max(0, Math.min(p2.life / 30, (p2.maxLife - p2.life) / 30));
            const lineOpacity = (opacity1 + opacity2) / 2 * 0.15 * (1 - distance / 150);

            ctx.strokeStyle = `rgba(234, 234, 234, ${lineOpacity})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      // Cleanup
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full rounded-lg border border-border"
      style={{ background: '#000000' }}
    />
  );
}
