"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { capsulaConfig, mensajesCapsula } from "@/content/capsula";

type Estado =
  | { tipo: "abierta"; titulo: string; texto: string }
  | { tipo: "espera"; diasFaltan: number; proximaFecha: Date }
  | { tipo: "cargando" };

function formatearFecha(d: Date) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${dd}`;
}

function esDiaDeApertura(d: Date) {
  const dia = d.getDate();
  const mes = d.getMonth() + 1;
  if (dia === capsulaConfig.diaMensual) return true;
  if (
    mes === capsulaConfig.cumpleaños.mes &&
    dia === capsulaConfig.cumpleaños.dia
  )
    return true;
  return false;
}

function proximaApertura(desde: Date): Date {
  const base = new Date(desde);
  base.setHours(0, 0, 0, 0);
  for (let i = 1; i <= 400; i++) {
    const prueba = new Date(base);
    prueba.setDate(base.getDate() + i);
    if (esDiaDeApertura(prueba)) return prueba;
  }
  return base;
}

export default function Capsula() {
  const [estado, setEstado] = useState<Estado>({ tipo: "cargando" });
  const [abierta, setAbierta] = useState(false);

  useEffect(() => {
    const calcular = () => {
      const hoy = new Date();
      const clave = formatearFecha(hoy);
      const mensaje = mensajesCapsula[clave];

      if (esDiaDeApertura(hoy)) {
        if (mensaje) {
          setEstado({
            tipo: "abierta",
            titulo: mensaje.titulo,
            texto: mensaje.texto,
          });
        } else {
          setEstado({
            tipo: "abierta",
            titulo: capsulaConfig.mensajePendiente.titulo,
            texto: capsulaConfig.mensajePendiente.texto,
          });
        }
        return;
      }

      const proxima = proximaApertura(hoy);
      const diff = proxima.getTime() - hoy.getTime();
      const dias = Math.ceil(diff / (1000 * 60 * 60 * 24));
      setEstado({ tipo: "espera", diasFaltan: dias, proximaFecha: proxima });
    };

    calcular();
    const t = setInterval(calcular, 60000);
    return () => clearInterval(t);
  }, []);

  const desbloqueada = estado.tipo === "abierta";

  return (
    <main className="min-h-screen bg-[#060a1e] px-5 py-10">
      <div className="mx-auto max-w-2xl">
        <Link
          href="/universo"
          className="font-serif text-amber-200/60 hover:text-amber-100"
        >
          ← Volver
        </Link>
        <h1 className="mb-2 mt-6 font-serif text-4xl text-amber-50 md:text-5xl">
          Cápsula del tiempo
        </h1>
        <p className="mb-16 font-hand text-2xl text-amber-200/70">
          Se abre el 13 de cada mes, y también el 22 de diciembre.
        </p>

        {estado.tipo === "espera" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-10 text-center"
          >
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-amber-200/60">
              Se abre en
            </p>
            <p className="font-serif text-5xl text-amber-100 md:text-7xl">
              {estado.diasFaltan}
            </p>
            <p className="mt-2 font-hand text-2xl text-amber-200/80">
              {estado.diasFaltan === 1 ? "día" : "días"}
            </p>
            <p className="mt-3 font-serif text-sm text-amber-200/60">
              {estado.proximaFecha.getDate()} de{" "}
              {estado.proximaFecha.toLocaleString("es", { month: "long" })}
            </p>
          </motion.div>
        )}

        {desbloqueada && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8 text-center"
          >
            <p className="font-hand text-3xl text-amber-100">
              Hoy es el día ❤️
            </p>
          </motion.div>
        )}

        <div className="flex justify-center">
          <motion.button
            onClick={() => desbloqueada && setAbierta(true)}
            disabled={!desbloqueada}
            animate={desbloqueada ? { y: [0, -8, 0] } : {}}
            transition={
              desbloqueada
                ? { duration: 3, repeat: Infinity, ease: "easeInOut" }
                : undefined
            }
            className={`group relative flex h-56 w-full max-w-md items-center justify-center overflow-hidden rounded-3xl border-2 transition ${
              desbloqueada
                ? "border-amber-200/60 bg-gradient-to-br from-[#1a1f4a] to-[#0a0f2c] shadow-[0_0_40px_rgba(255,228,154,0.25)] cursor-pointer"
                : "border-amber-200/20 bg-[#0a1030] opacity-70 cursor-not-allowed"
            }`}
          >
            <div
              className={`absolute z-10 flex h-20 w-20 items-center justify-center rounded-full ${
                desbloqueada
                  ? "bg-gradient-to-br from-red-600 to-red-900 shadow-[0_0_25px_rgba(220,38,38,0.6)]"
                  : "bg-gradient-to-br from-red-800 to-red-950"
              }`}
            >
              <span className="text-3xl">{desbloqueada ? "❤️" : "🔒"}</span>
            </div>

            <svg
              className="absolute inset-0 h-full w-full opacity-30"
              viewBox="0 0 400 200"
              preserveAspectRatio="none"
            >
              <path
                d="M0 0 L200 100 L400 0"
                fill="none"
                stroke="#ffe49a"
                strokeWidth="1"
              />
              <path
                d="M0 200 L200 100 L400 200"
                fill="none"
                stroke="#ffe49a"
                strokeWidth="1"
              />
            </svg>

            <p className="absolute bottom-5 left-0 right-0 text-center font-hand text-xl text-amber-200/80">
              {desbloqueada
                ? "Tocá para abrir"
                : estado.tipo === "espera"
                ? `Faltan ${estado.diasFaltan} días`
                : "Cargando..."}
            </p>
          </motion.button>
        </div>
      </div>

      {abierta && estado.tipo === "abierta" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setAbierta(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur"
        >
          <motion.div
            initial={{ scale: 0.9, y: 30 }}
            animate={{ scale: 1, y: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-amber-200/25 bg-[#0f1538] p-8 md:p-10"
          >
            <p className="mb-2 text-xs uppercase tracking-widest text-amber-200/50">
              {new Date().toLocaleDateString("es", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
            <h2 className="mb-6 font-serif text-2xl leading-snug text-amber-50 md:text-3xl">
              {estado.titulo}
            </h2>

            <div className="mb-6 h-px w-full bg-gradient-to-r from-transparent via-amber-200/30 to-transparent" />

            <p className="whitespace-pre-line font-serif text-base leading-relaxed text-amber-100/90 md:text-lg">
              {estado.texto}
            </p>

            <button
              onClick={() => setAbierta(false)}
              className="absolute right-4 top-4 rounded-full bg-black/40 px-3 py-1 text-sm text-amber-100 transition hover:bg-black/70"
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </main>
  );
}