"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { flores } from "@/content/flores";

type Estrella = {
  top: number;
  left: number;
  opacity: number;
  duration: number;
  delay: number;
};

export default function Jardin() {
  const [abierta, setAbierta] = useState<string | null>(null);
  const [estrellas, setEstrellas] = useState<Estrella[]>([]);
  const flor = flores.find((f) => f.id === abierta);

  useEffect(() => {
    const generadas: Estrella[] = Array.from({ length: 40 }).map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      opacity: Math.random() * 0.5 + 0.2,
      duration: 2 + Math.random() * 3,
      delay: Math.random() * 2,
    }));
    setEstrellas(generadas);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#060a1e] px-5 py-10">
      {/* Estrellitas de fondo */}
      <div className="pointer-events-none absolute inset-0">
        {estrellas.map((e, i) => (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-amber-200"
            style={{
              top: `${e.top}%`,
              left: `${e.left}%`,
              opacity: e.opacity,
            }}
            animate={{ opacity: [0.2, 0.7, 0.2] }}
            transition={{
              duration: e.duration,
              repeat: Infinity,
              delay: e.delay,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <Link
          href="/universo"
          className="font-serif text-amber-200/60 hover:text-amber-100"
        >
          ← Volver
        </Link>
        <h1 className="mb-2 mt-6 font-serif text-4xl text-amber-50 md:text-5xl">
          El jardín de las cosas que amo de vos
        </h1>
        <p className="mb-14 font-hand text-2xl text-amber-200/70">
          Cada flor guarda un motivo. Tocalas.
        </p>

        {/* Jardín */}
        <div className="grid grid-cols-3 gap-8 px-2 pb-20 md:grid-cols-4 md:gap-12 lg:grid-cols-6">
          {flores.map((f, i) => (
            <motion.button
              key={f.id}
              onClick={() => setAbierta(f.id)}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.08, type: "spring" }}
              className="group flex flex-col items-center gap-2"
            >
              <motion.div
                animate={{
                  y: [0, -6, 0],
                  rotate: [-4, 4, -4],
                }}
                transition={{
                  duration: 4 + (i % 3),
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: (i % 5) * 0.4,
                }}
                className="text-5xl drop-shadow-[0_0_15px_rgba(255,228,154,0.5)] transition group-hover:scale-125 md:text-6xl"
              >
                {f.emoji}
              </motion.div>
              <div
                className="h-1 w-8 rounded-full opacity-0 transition group-hover:opacity-100"
                style={{ backgroundColor: f.color }}
              />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Modal de la flor */}
      <AnimatePresence>
        {flor && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setAbierta(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur"
          >
            <motion.div
              initial={{ scale: 0.85, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.7 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-amber-200/20 bg-gradient-to-br from-[#0f1538] to-[#060a1e] p-8 text-center"
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="mb-4 text-7xl drop-shadow-[0_0_20px_rgba(255,228,154,0.6)]"
              >
                {flor.emoji}
              </motion.div>

              <h2
                className="mb-4 font-serif text-2xl md:text-3xl"
                style={{ color: flor.color }}
              >
                {flor.motivo}
              </h2>

              <div
                className="mx-auto mb-5 h-px w-24"
                style={{
                  background: `linear-gradient(90deg, transparent, ${flor.color}, transparent)`,
                }}
              />

              <p className="font-serif text-base leading-relaxed text-amber-100/90 md:text-lg">
                {flor.detalle}
              </p>

              <button
                onClick={() => setAbierta(null)}
                className="absolute right-4 top-4 rounded-full bg-black/40 px-3 py-1 text-sm text-amber-100 transition hover:bg-black/70"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}