"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { historia } from "@/content/historia";

export default function Historia() {
  return (
    <main className="min-h-screen bg-[#060a1e] px-5 py-10">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/universo"
          className="font-serif text-amber-200/60 hover:text-amber-100"
        >
          ← Volver
        </Link>
        <h1 className="mb-2 mt-6 font-serif text-4xl text-amber-50 md:text-5xl">
          Nuestra historia
        </h1>
        <p className="mb-16 font-hand text-2xl text-amber-200/70">
          Todo lo que vivimos, y todo lo que nos falta.
        </p>

        <div className="relative pl-10">
          {/* Línea vertical */}
          <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-amber-200/60 via-amber-200/20 to-transparent" />

          {historia.map((h, i) => (
            <motion.div
              key={h.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="relative mb-14 last:mb-0"
            >
              {/* Punto */}
              <div
                className={`absolute -left-[34px] top-2 flex h-6 w-6 items-center justify-center rounded-full border ${
                  h.destacado
                    ? "border-amber-200 bg-amber-200/20"
                    : "border-amber-200/50 bg-[#060a1e]"
                }`}
              >
                <div
                  className={`h-2 w-2 rounded-full ${
                    h.destacado
                      ? "bg-amber-200 shadow-[0_0_12px_rgba(255,228,154,0.9)]"
                      : "bg-amber-200/70"
                  }`}
                />
              </div>

              <p className="mb-1 font-hand text-xl text-amber-200/70">
                {h.fecha}
              </p>
              <h2
                className={`mb-3 font-serif leading-snug ${
                  h.destacado
                    ? "text-2xl text-amber-100 md:text-3xl"
                    : "text-xl text-amber-50 md:text-2xl"
                }`}
              >
                {h.titulo}
              </h2>
              <p className="font-serif text-base leading-relaxed text-amber-100/75 md:text-lg">
                {h.descripcion}
              </p>
            </motion.div>
          ))}

          {/* Corazón al final */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-10 pl-2 text-3xl"
          >
            ❤️
          </motion.div>
        </div>
      </div>
    </main>
  );
}