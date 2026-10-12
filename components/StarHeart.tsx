"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  tx: number;
  ty: number;
  vx: number;
  vy: number;
  size: number;
  twinkle: number;
  delay: number;
};

export default function StarHeart({
  active,
  onComplete,
}: {
  active: boolean;
  onComplete?: () => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const completedRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = window.innerWidth;
    let H = window.innerHeight;
    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width = W + "px";
      canvas.style.height = H + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const N = 260;
    const heartPoints = (cx: number, cy: number, scale: number) => {
      const pts: { x: number; y: number }[] = [];
      for (let i = 0; i < N; i++) {
        const t = (i / N) * Math.PI * 2;
        const x = 16 * Math.pow(Math.sin(t), 3);
        const y =
          13 * Math.cos(t) -
          5 * Math.cos(2 * t) -
          2 * Math.cos(3 * t) -
          Math.cos(4 * t);
        pts.push({ x: cx + x * scale, y: cy - y * scale });
      }
      return pts;
    };

    let targets = heartPoints(W / 2, H / 2 - 20, Math.min(W, H) / 55);

    const particles: Particle[] = [];
    for (let i = 0; i < N; i++) {
      particles.push({
        x: Math.random() * W,
        y: Math.random() * H,
        tx: targets[i].x,
        ty: targets[i].y,
        vx: 0,
        vy: 0,
        size: 0.8 + Math.random() * 1.8,
        twinkle: Math.random() * Math.PI * 2,
        delay: Math.random() * 800,
      });
    }

    const drawStar = (p: Particle) => {
      p.twinkle += 0.04;
      const alpha = 0.55 + Math.sin(p.twinkle) * 0.35;

      const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 7);
      grad.addColorStop(0, `rgba(255, 228, 150, ${alpha})`);
      grad.addColorStop(1, "rgba(255, 228, 150, 0)");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size * 7, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = `rgba(255, 248, 210, ${Math.min(alpha + 0.2, 1)})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    };

    let raf = 0;
    const startTime = performance.now();

    const render = (now: number) => {
      ctx.fillStyle = "rgba(6, 10, 30, 0.35)";
      ctx.fillRect(0, 0, W, H);

      let allArrived = true;

      for (const p of particles) {
        const elapsed = now - startTime - p.delay;
        if (elapsed < 0) {
          allArrived = false;
          drawStar(p);
          continue;
        }

        const dx = p.tx - p.x;
        const dy = p.ty - p.y;
        const dist = Math.hypot(dx, dy);
        if (dist > 0.8) allArrived = false;

        p.vx += dx * 0.006;
        p.vy += dy * 0.006;
        p.vx *= 0.93;
        p.vy *= 0.93;
        p.x += p.vx;
        p.y += p.vy;

        drawStar(p);
      }

      if (allArrived && !completedRef.current) {
        completedRef.current = true;
        onComplete?.();
      }

      raf = requestAnimationFrame(render);
    };

    raf = requestAnimationFrame(render);

    const onResize = () => {
      resize();
      targets = heartPoints(W / 2, H / 2 - 20, Math.min(W, H) / 55);
      particles.forEach((p, i) => {
        p.tx = targets[i].x;
        p.ty = targets[i].y;
      });
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, [onComplete]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0"
      style={{ opacity: active ? 1 : 0, transition: "opacity 0.8s ease" }}
    />
  );
}