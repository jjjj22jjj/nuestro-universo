"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import StarHeart from "@/components/StarHeart";
import Clave from "@/components/Clave";
import { entrada } from "@/content/entrada";

type Fase = "pregunta" | "estrellas" | "clave" | "frase";

export default function Home() {
  const [fase, setFase] = useState<Fase>("pregunta");
  const router = useRouter();

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#060a1e]">
      <StarHeart
        active={fase === "estrellas"}
        onComplete={() => setFase("clave")}
      />

      <AnimatePresence mode="wait">
        {fase === "pregunta" && (
          <motion.div
            key="pregunta"
            className="relative z-10 flex min-h-screen flex-col items-center justify-center gap-10 px-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="max-w-3xl font-serif text-3xl leading-tight text-amber-50 md:text-5xl">
              {entrada.pregunta}
            </h1>
            <button
              onClick={() => setFase("estrellas")}
              className="rounded-full border border-amber-200/40 px-10 py-3 font-serif text-lg tracking-wider text-amber-100 transition hover:bg-amber-100/10"
            >
              {entrada.boton}
            </button>
          </motion.div>
        )}

        {fase === "clave" && (
          <motion.div
            key="clave"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            <Clave onOk={() => setFase("frase")} />
          </motion.div>
        )}

        {fase === "frase" && (
          <motion.div
            key="frase"
            className="relative z-10 flex min-h-screen flex-col items-center justify-center gap-8 px-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <p className="max-w-2xl font-serif text-3xl italic leading-relaxed text-amber-50 md:text-5xl">
              {entrada.frase}
            </p>
            <p className="font-hand text-2xl text-amber-200/80">
              {entrada.firma}
            </p>
            <button
              onClick={() => router.push("/universo")}
              className="mt-6 rounded-full border border-amber-200/40 px-8 py-3 font-serif text-amber-100 transition hover:bg-amber-100/10"
            >
              Entrar a nuestro universo
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}