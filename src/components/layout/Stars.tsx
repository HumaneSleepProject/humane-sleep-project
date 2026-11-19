'use client';

import { useEffect, useRef } from 'react';

type Star = { x: number; y: number; r: number; alpha: number; speed: number; phase: number; depth: number; color: string };
type Shooter = { x: number; y: number; vx: number; vy: number; born: number };

const COLORS = ['#ffffff', '#ffffff', '#cfe0ff', '#ffe9c4'];

// One canvas instead of hundreds of animated divs: twinkling stars, a little scroll parallax,
// and an occasional shooting star. Sits behind everything; holds still if the visitor prefers reduced motion.
export default function Stars() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let w = 0;
    let h = 0;
    let stars: Star[] = [];
    let raf = 0;
    let scrollY = window.scrollY;
    const shooters: Shooter[] = [];
    let nextShot = performance.now() + 3500 + Math.random() * 4000;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round(Math.min(420, (w * h) / 3600));
      stars = Array.from({ length: count }, () => {
        const depth = Math.random();
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          r: 0.4 + depth * 1.4,
          alpha: 0.35 + depth * 0.6,
          speed: 0.6 + Math.random() * 1.8,
          phase: Math.random() * Math.PI * 2,
          depth,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
        };
      });
    };

    const draw = (now: number) => {
      ctx.clearRect(0, 0, w, h);
      const t = now / 1000;
      for (const s of stars) {
        const y = (((s.y - scrollY * (0.02 + s.depth * 0.08)) % h) + h) % h;
        const twinkle = reduce ? 1 : 0.55 + 0.45 * Math.sin(t * s.speed + s.phase);
        ctx.fillStyle = s.color;
        ctx.globalAlpha = s.alpha * twinkle;
        ctx.beginPath();
        ctx.arc(s.x, y, s.r, 0, Math.PI * 2);
        ctx.fill();
        if (s.depth > 0.82) {
          ctx.globalAlpha = s.alpha * twinkle * 0.18;
          ctx.beginPath();
          ctx.arc(s.x, y, s.r * 3.2, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;

      if (!reduce) {
        if (now > nextShot) {
          shooters.push({ x: Math.random() * w * 0.7, y: Math.random() * h * 0.35, vx: 520 + Math.random() * 180, vy: 260 + Math.random() * 120, born: now });
          nextShot = now + 7000 + Math.random() * 8000;
        }
        for (let i = shooters.length - 1; i >= 0; i--) {
          const s = shooters[i];
          const age = (now - s.born) / 1000;
          if (age > 1.1) {
            shooters.splice(i, 1);
            continue;
          }
          const x = s.x + s.vx * age;
          const y = s.y + s.vy * age;
          const mag = Math.hypot(s.vx, s.vy);
          const tx = x - (s.vx / mag) * 140;
          const ty = y - (s.vy / mag) * 140;
          const g = ctx.createLinearGradient(tx, ty, x, y);
          g.addColorStop(0, 'rgba(255,255,255,0)');
          g.addColorStop(1, 'rgba(255,255,255,0.9)');
          ctx.globalAlpha = Math.min(1, (1.1 - age) * 1.4);
          ctx.strokeStyle = g;
          ctx.lineWidth = 1.6;
          ctx.beginPath();
          ctx.moveTo(tx, ty);
          ctx.lineTo(x, y);
          ctx.stroke();
          ctx.globalAlpha = 1;
        }
      }
    };

    const loop = (now: number) => {
      draw(now);
      raf = requestAnimationFrame(loop);
    };

    const onScroll = () => {
      scrollY = window.scrollY;
      if (reduce) draw(0);
    };
    const onResize = () => {
      resize();
      if (reduce) draw(0);
    };

    resize();
    if (reduce) draw(0);
    else raf = requestAnimationFrame(loop);
    window.addEventListener('resize', onResize);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className="sky" aria-hidden="true">
      <div className="aurora aurora-1" />
      <div className="aurora aurora-2" />
      <div className="aurora aurora-3" />
      <canvas ref={ref} />
    </div>
  );
}
