"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cartas } from "@/content/cartas";

export default function Cartas() {
  const [abierta, setAbierta] = useState<string | null>(null);
  const carta = cartas.find((c) => c.id === abierta);

  return (
    <main className="min-h-screen bg-[#060a1e] px-5 py-10">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/universo"
          className="font-serif text-amber-200/60 hover:text-amber-100"
        >
          ← Volver
        </Link>
        <h1 className="mb-2 mt-6 font-serif text-4xl text-amber-50 md:text-5xl">
          Cartas para vos
        </h1>
        <p className="mb-10 font-hand text-2xl text-amber-200/70">
          Tocá el sobre que necesites hoy.
        </p>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {cartas.map((c, i) => (
            <motion.button
              key={c.id}
              onClick={() => setAbierta(c.id)}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-amber-200/20 bg-gradient-to-br from-[#0a1030] to-[#060a1e] p-6 text-left transition hover:border-amber-200/50"
            >
              {/* Sobre decorativo */}
              <div className="absolute right-4 top-4 opacity-30 transition group-hover:opacity-60">
                <svg width="40" height="30" viewBox="0 0 40 30" fill="none">
                  <rect
                    x="1"
                    y="1"
                    width="38"
                    height="28"
                    rx="2"
                    stroke="#ffe49a"
                    strokeWidth="1"
                  />
                  <path d="M1 2 L20 17 L39 2" stroke="#ffe49a" strokeWidth="1" />
                </svg>
              </div>

              <p className="mb-1 text-xs uppercase tracking-widest text-amber-200/50">
                {c.subtitulo}
              </p>
              <h2 className="pr-16 font-serif text-xl leading-snug text-amber-50 md:text-2xl">
                {c.titulo}
              </h2>
              <p className="mt-4 font-hand text-base text-amber-200/60">
                Tocá para abrir →
              </p>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {carta && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setAbierta(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, rotateX: -20 }}
              animate={{ scale: 1, y: 0, rotateX: 0 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", duration: 0.8 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-amber-200/25 bg-[#0f1538] p-8"
              style={{
                backgroundImage:
                  "radial-gradient(circle at top left, rgba(255,228,154,0.06), transparent 60%)",
              }}
            >
              <p className="mb-2 text-xs uppercase tracking-widest text-amber-200/50">
                {carta.subtitulo}
              </p>
              <h2 className="mb-6 font-serif text-2xl leading-snug text-amber-50 md:text-3xl">
                {carta.titulo}
              </h2>

              <div className="mb-6 h-px w-full bg-gradient-to-r from-transparent via-amber-200/30 to-transparent" />

              <p className="whitespace-pre-line font-serif text-base leading-relaxed text-amber-100/90 md:text-lg">
                {carta.texto}
              </p>

              <p className="mt-8 text-right font-hand text-xl text-amber-200/80">
                — Tuyo, siempre.
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