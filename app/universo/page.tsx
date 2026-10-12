"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const secciones = [
  {
    slug: "museo",
    n: "02",
    t: "Nuestro museo de recuerdos",
    d: "Fotos, fechas y anécdotas.",
  },
  {
    slug: "cartas",
    n: "03",
    t: "Cartas para distintos momentos",
    d: "Para cuando necesites.",
  },
  {
    slug: "jardin",
    n: "04",
    t: "El jardín de las cosas que amo de vos",
    d: "Cada flor, un motivo.",
  },
  {
    slug: "historia",
    n: "05",
    t: "Nuestra historia",
    d: "Línea de tiempo.",
  },
  {
    slug: "capsula",
    n: "06",
    t: "Una cápsula del tiempo",
    d: "Una carta para el futuro.",
  },
];

export default function Universo() {
  return (
    <main className="relative min-h-screen bg-[#060a1e] px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-2 font-serif text-4xl text-amber-50 md:text-5xl">
          Nuestro pequeño universo
        </h1>
        <p className="mb-12 font-hand text-2xl text-amber-200/70">
          Elegí por dónde empezar.
        </p>

        <div className="flex flex-col gap-4">
          {secciones.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                href={`/universo/${s.slug}`}
                className="group flex items-center gap-5 rounded-2xl border border-amber-200/15 bg-amber-50/[0.02] p-5 transition hover:border-amber-200/40 hover:bg-amber-50/[0.05]"
              >
                <span className="font-serif text-2xl text-amber-200/70">
                  {s.n}
                </span>
                <div className="flex-1">
                  <h2 className="font-serif text-xl text-amber-50">{s.t}</h2>
                  <p className="text-sm text-amber-100/50">{s.d}</p>
                </div>
                <span className="text-amber-200/40 transition group-hover:translate-x-1 group-hover:text-amber-200">
                  →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}