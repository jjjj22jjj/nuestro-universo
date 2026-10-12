"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { recuerdos } from "@/content/recuerdos";

export default function Museo() {
  const [abierto, setAbierto] = useState<string | null>(null);
  const recuerdo = recuerdos.find((r) => r.id === abierto);

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
          Nuestro museo
        </h1>
        <p className="mb-10 font-hand text-2xl text-amber-200/70">
          Tocá cada foto para leer lo que hay detrás.
        </p>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {recuerdos.map((r, i) => (
            <motion.button
              key={r.id}
              onClick={() => setAbierto(r.id)}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-amber-200/15"
            >
              <Image
                src={r.foto}
                alt={r.titulo}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3 text-left">
                <p className="font-serif text-sm text-amber-50">{r.titulo}</p>
                <p className="text-[11px] text-amber-200/60">{r.fecha}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {recuerdo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setAbierto(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-amber-200/20 bg-[#0a1030]"
            >
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={recuerdo.foto}
                  alt={recuerdo.titulo}
                  fill
                  sizes="500px"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-widest text-amber-200/50">
                  {recuerdo.fecha}
                </p>
                <h2 className="mt-1 font-serif text-2xl text-amber-50">
                  {recuerdo.titulo}
                </h2>
                <p className="mt-3 font-serif text-base leading-relaxed text-amber-100/80">
                  {recuerdo.texto}
                </p>
              </div>
              <button
                onClick={() => setAbierto(null)}
                className="absolute right-4 top-4 rounded-full bg-black/50 px-3 py-1 text-sm text-amber-100"
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