/**
 * AgentNetworkAnimation Component
 * 
 * Design: Infrastructure Minimalism
 * - Abstract nodes and connecting lines representing agent signals
 * - Very low opacity (background computation feel)
 * - Slow, seamless looping animation
 * - No symmetry, no obvious pattern
 * - Feels like agents exchanging signals
 */

import { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  id: number;
  opacity: number;
  flickerSpeed: number;
}

interface Line {
  from: number;
  to: number;
  opacity: number;
  animationDelay: number;
}

export default function AgentNetworkAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const linesRef = useRef<Line[]>([]);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize nodes with random positions
    const initializeNodes = () => {
      nodesRef.current = Array.from({ length: 12 }, (_, i) => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        id: i,
        opacity: Math.random() * 0.4 + 0.1,
        flickerSpeed: Math.random() * 0.5 + 0.3,
      }));

      // Create random connections
      linesRef.current = Array.from({ length: 8 }, (_, i) => ({
        from: Math.floor(Math.random() * nodesRef.current.length),
        to: Math.floor(Math.random() * nodesRef.current.length),
        opacity: Math.random() * 0.15 + 0.05,
        animationDelay: Math.random() * 4,
      })).filter(line => line.from !== line.to);
    };

    initializeNodes();

    // Animation loop
    const animate = () => {
      // Clear canvas
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      timeRef.current += 0.01;

      // Draw lines with slow animation
      linesRef.current.forEach((line, idx) => {
        const fromNode = nodesRef.current[line.from];
        const toNode = nodesRef.current[line.to];

        if (!fromNode || !toNode) return;

        // Animate line opacity in and out
        const cycleTime = (timeRef.current + line.animationDelay) % 8;
        let lineOpacity = 0;

        if (cycleTime < 2) {
          lineOpacity = (cycleTime / 2) * line.opacity;
        } else if (cycleTime < 6) {
          lineOpacity = line.opacity;
        } else {
          lineOpacity = ((8 - cycleTime) / 2) * line.opacity;
        }

        ctx.strokeStyle = `rgba(234, 234, 234, ${lineOpacity})`;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(fromNode.x, fromNode.y);
        ctx.lineTo(toNode.x, toNode.y);
        ctx.stroke();
      });

      // Draw nodes with flickering
      nodesRef.current.forEach((node) => {
        const flicker = Math.sin(timeRef.current * node.flickerSpeed) * 0.5 + 0.5;
        const nodeOpacity = node.opacity * flicker;

        ctx.fillStyle = `rgba(234, 234, 234, ${nodeOpacity})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.3 }}
    />
  );
}
