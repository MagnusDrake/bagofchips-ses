import React, { useEffect, useRef } from 'react';
import { useStudio } from '../context/StudioContext';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  shape: 'chip' | 'wafer' | 'node';
  rotation: number;
  vRot: number;
  opacity: number;
  pulsePhase: number;
}

export const SiliconCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { themeConfig, activeMockupId, selectedPortfolio, isQuickEstimatorOpen } = useStudio();
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({ x: -1000, y: -1000, active: false });
  const isModalOpen = Boolean(activeMockupId || selectedPortfolio || isQuickEstimatorOpen);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || isModalOpen) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let isVisible = true;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    // Track mouse over canvas
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    const handleClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      // Pulse wave impulse
      nodes.forEach((n) => {
        const dx = n.x - clickX;
        const dy = n.y - clickY;
        const dist = Math.hypot(dx, dy);
        if (dist < 250) {
          const force = (250 - dist) / 250;
          n.vx += (dx / (dist || 1)) * force * 3;
          n.vy += (dy / (dist || 1)) * force * 3;
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('click', handleClick);

    // Initialize 36 delicate semiconductor nodes
    const rect = canvas.getBoundingClientRect();
    const width = rect.width || window.innerWidth;
    const height = rect.height || 800;

    const shapes: ('chip' | 'wafer' | 'node')[] = ['chip', 'wafer', 'node'];
    const nodes: Node[] = Array.from({ length: 36 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      size: 4 + Math.random() * 8,
      shape: shapes[Math.floor(Math.random() * shapes.length)],
      rotation: Math.random() * Math.PI * 2,
      vRot: (Math.random() - 0.5) * 0.008,
      opacity: 0.15 + Math.random() * 0.35,
      pulsePhase: Math.random() * Math.PI * 2,
    }));

    // Intersection observer to pause when scrolled out of view
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    observer.observe(canvas);

    let lastTime = performance.now();

    const render = (time: number) => {
      animId = requestAnimationFrame(render);
      if (!isVisible || document.hidden || document.body.style.overflow === 'hidden') return;

      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      const w = canvas.width / dpr;
      const h = canvas.height / dpr;

      ctx.clearRect(0, 0, w, h);

      // Primary color extraction
      const color = themeConfig.primaryColor || '#38bdf8';

      // Draw interactive circuit traces connecting nearby nodes
      ctx.lineWidth = 0.75;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.hypot(dx, dy);

          if (dist < 130) {
            const alpha = (1 - dist / 130) * 0.18;
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.beginPath();
            // Manhattan orthogonal 90-degree circuit traces
            const midX = nodes[i].x + dx * 0.5;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(midX, nodes[i].y);
            ctx.lineTo(midX, nodes[j].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw mouse focal glow and trace connections
      if (mouseRef.current.active) {
        const mx = mouseRef.current.x;
        const my = mouseRef.current.y;

        // Subtle ambient radial glow under cursor
        const grad = ctx.createRadialGradient(mx, my, 0, mx, my, 180);
        grad.addColorStop(0, `${color}15`);
        grad.addColorStop(1, 'transparent');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(mx, my, 180, 0, Math.PI * 2);
        ctx.fill();

        // Connect cursor to closest nodes
        nodes.forEach((n) => {
          const dx = n.x - mx;
          const dy = n.y - my;
          const dist = Math.hypot(dx, dy);
          if (dist < 160) {
            const alpha = (1 - dist / 160) * 0.3;
            ctx.strokeStyle = `${color}${Math.round(alpha * 255).toString(16).padStart(2, '0')}`;
            ctx.beginPath();
            ctx.moveTo(mx, my);
            ctx.lineTo(n.x, n.y);
            ctx.stroke();

            // Gentle repulsion
            const force = (160 - dist) / 160;
            n.vx += (dx / dist) * force * 0.4;
            n.vy += (dy / dist) * force * 0.4;
          }
        });
      }

      // Update and draw each semiconductor node
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        n.rotation += n.vRot;
        n.pulsePhase += dt * 1.5;

        // Drag friction
        n.vx *= 0.98;
        n.vy *= 0.98;

        // Wrap around boundaries
        if (n.x < -20) n.x = w + 20;
        if (n.x > w + 20) n.x = -20;
        if (n.y < -20) n.y = h + 20;
        if (n.y > h + 20) n.y = -20;

        ctx.save();
        ctx.translate(n.x, n.y);
        ctx.rotate(n.rotation);

        const pulse = 0.8 + 0.2 * Math.sin(n.pulsePhase);
        const curOpacity = n.opacity * pulse;

        if (n.shape === 'chip') {
          // Microchip silicon package (square with pin legs)
          const s = n.size;
          ctx.fillStyle = `rgba(15, 23, 42, ${curOpacity * 0.9})`;
          ctx.strokeStyle = `rgba(255, 255, 255, ${curOpacity * 0.4})`;
          ctx.lineWidth = 1;
          ctx.fillRect(-s / 2, -s / 2, s, s);
          ctx.strokeRect(-s / 2, -s / 2, s, s);

          // Golden silicon core dot
          ctx.fillStyle = `${color}${Math.round(curOpacity * 255).toString(16).padStart(2, '0')}`;
          ctx.fillRect(-s / 5, -s / 5, (s * 2) / 5, (s * 2) / 5);

          // Tiny pin tick marks
          ctx.strokeStyle = `rgba(255, 255, 255, ${curOpacity * 0.3})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(-s / 2 - 2, -s / 4);
          ctx.lineTo(-s / 2, -s / 4);
          ctx.moveTo(-s / 2 - 2, s / 4);
          ctx.lineTo(-s / 2, s / 4);
          ctx.moveTo(s / 2, -s / 4);
          ctx.lineTo(s / 2 + 2, -s / 4);
          ctx.moveTo(s / 2, s / 4);
          ctx.lineTo(s / 2 + 2, s / 4);
          ctx.stroke();
        } else if (n.shape === 'wafer') {
          // Circular silicon wafer disc with grid etching
          const r = n.size * 0.8;
          ctx.fillStyle = `rgba(30, 41, 59, ${curOpacity * 0.5})`;
          ctx.strokeStyle = `${color}${Math.round(curOpacity * 180).toString(16).padStart(2, '0')}`;
          ctx.lineWidth = 0.75;
          ctx.beginPath();
          ctx.arc(0, 0, r, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();

          // Wafer grid lines
          ctx.beginPath();
          ctx.moveTo(-r * 0.7, 0);
          ctx.lineTo(r * 0.7, 0);
          ctx.moveTo(0, -r * 0.7);
          ctx.lineTo(0, r * 0.7);
          ctx.stroke();
        } else {
          // Luminous junction node
          const r = n.size * 0.35;
          ctx.fillStyle = `${color}${Math.round(curOpacity * 255).toString(16).padStart(2, '0')}`;
          ctx.beginPath();
          ctx.arc(0, 0, r, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      });
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      canvas.removeEventListener('click', handleClick);
      observer.disconnect();
    };
  }, [themeConfig.primaryColor, isModalOpen]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto opacity-70 transition-opacity duration-1000"
      style={{ zIndex: 1 }}
      aria-hidden="true"
    />
  );
};
