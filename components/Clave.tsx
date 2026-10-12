"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { entrada } from "@/content/entrada";

export default function Clave({ onOk }: { onOk: () => void }) {
  const [valor, setValor] = useState("");
  const [error, setError] = useState(false);
  const [apodoIdx, setApodoIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setApodoIdx((i) => (i + 1) % entrada.apodos.length),
      2200
    );
    return () => clearInterval(t);
  }, []);

  const probar = () => {
    const normalizado = valor.trim().toLowerCase();
    const ok =
      normalizado === entrada.respuestaClave ||
      normalizado === "13" ||
      normalizado === "13 de cada mes";

    if (ok) onOk();
    else {
      setError(true);
      setValor("");
      setTimeout(() => setError(false), 900);
    }
  };

  return (
    <div className="relative z-20 flex min-h-screen flex-col items-center justify-center gap-8 px-6 text-center">
      <div className="text-sm uppercase tracking-[0.3em] text-amber-200/60">
        Un lugar hecho para{" "}
        <AnimatePresence mode="wait">
          <motion.span
            key={apodoIdx}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.5 }}
            className="font-hand text-amber-100"
          >
            {entrada.apodos[apodoIdx]}
          </motion.span>
        </AnimatePresence>
      </div>

      <h1 className="max-w-2xl font-serif text-2xl leading-relaxed text-amber-50 md:text-4xl">
        {entrada.preguntaClave}
      </h1>

      <div className="flex w-full max-w-sm flex-col items-center gap-4">
        <input
          autoFocus
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && probar()}
          placeholder="Tu respuesta..."
          className={`w-full rounded-full border bg-transparent px-6 py-3 text-center font-serif text-lg text-amber-50 outline-none transition ${
            error
              ? "border-red-400/70 animate-pulse"
              : "border-amber-200/30 focus:border-amber-200/70"
          }`}
        />
        <button
          onClick={probar}
          className="rounded-full border border-amber-200/40 px-10 py-3 font-serif text-amber-100 transition hover:bg-amber-100/10"
        >
          Entrar
        </button>
        <p className="font-hand text-base text-amber-200/60">
          {entrada.pista}
        </p>
      </div>
    </div>
  );
}