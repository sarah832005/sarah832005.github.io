"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, visible };
}

const pillars = [
  {
    number: "01",
    title: "Observation",
    desc: "Comme le hibou, je privilégie une observation approfondie avant toute décision — voir avant d'agir.",
  },
  {
    number: "02",
    title: "Analyse",
    desc: "J'organise les idées en nœuds logiques afin de construire une vision claire et cohérente.",
  },
  {
    number: "03",
    title: "Construction",
    desc: "Sur une base solide, l'action s'enchaîne naturellement, sans rupture ni improvisation.",
  },
];

export default function Fondee() {
  const { ref, visible } = useInView();

  return (
    <section ref={ref} className="relative bg-white py-24 px-6 overflow-hidden">
      {/* Dot grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, #cbd5e118 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px]"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, #e0e7ff20 0%, transparent 70%)",
          filter: "blur(48px)",
        }}
      />

      <div className="relative mx-auto max-w-6xl grid gap-16 md:grid-cols-2 items-center">

        {/* Image */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(-28px)",
            transition: "opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s",
          }}
          className="flex justify-center md:justify-start"
        >
          <div className="relative w-full max-w-sm">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white via-white/60 to-transparent z-10" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10" />
            <Image
              src="/owl-geometry.png"
              alt="Fondée - Owl Geometry"
              width={600}
              height={700}
              className="relative w-full opacity-90 mix-blend-multiply"
            />
          </div>
        </div>

        {/* Text */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(28px)",
            transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
          }}
        >
          <p
            className="text-[11px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-5"
            style={{ fontFamily: "'DM Mono', 'Courier New', monospace" }}
          >
            Philosophie
          </p>

          <div className="flex items-center gap-3 mb-4">
            <span className="relative h-8 w-8 overflow-hidden rounded-lg bg-white ring-1 ring-slate-200 shadow-sm">
              <Image src="/logo.png" alt="Fondée logo" fill className="object-cover object-center scale-[1.9]" />
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-slate-900"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", letterSpacing: "-0.02em" }}
            >
              Fondée.
            </h2>
          </div>

          <p className="text-sm text-slate-500 leading-relaxed mb-10 max-w-md">
            "Fondée" n'est pas un mot choisi au hasard. Il reflète ma manière de penser et de travailler :
            comprendre en profondeur avant d'agir, pour construire des solutions cohérentes et durables.
          </p>

          <div className="space-y-4">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className="flex gap-5 rounded-2xl border border-slate-100 bg-slate-50 px-6 py-5 hover:border-indigo-100 hover:bg-indigo-50/30 transition-all duration-300"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(16px)",
                  transition: `opacity 0.6s ease ${0.3 + i * 0.1}s, transform 0.6s ease ${0.3 + i * 0.1}s, background 0.3s, border 0.3s`,
                }}
              >
                <span
                  className="text-[11px] font-bold text-slate-300 mt-0.5 shrink-0"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  {p.number}
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-800 mb-1">{p.title}</p>
                  <p className="text-xs text-slate-500 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-center gap-4">
            <div className="h-px w-8 bg-slate-200" />
            <span
              className="text-[10px] uppercase tracking-[0.25em] text-slate-300"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              Observer · Analyser · Construire
            </span>
            <div className="h-px flex-1 bg-slate-100" />
          </div>
        </div>
      </div>
    </section>
  );
}