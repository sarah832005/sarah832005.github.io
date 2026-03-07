"use client";

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

const highlights = [
  { label: "Spécialité", value: "Systèmes d'information & SI" },
  { label: "Approche", value: "Analyse · Architecture · Données" },
  { label: "Distinction", value: "Major de promotion" },
  { label: "Cap actuel", value: "Systèmes intelligents & IA" },
];

export default function About() {
  const { ref, visible } = useInView();

  return (
    <section id="about" ref={ref} className="relative bg-slate-50 py-24 px-6 overflow-hidden">
      {/* Dot grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, #cbd5e118 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <div
          className="mb-14"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <p
            className="text-[11px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-4"
            style={{ fontFamily: "'DM Mono', 'Courier New', monospace" }}
          >
            À propos
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-slate-900 leading-[1.1] max-w-xl mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", letterSpacing: "-0.02em" }}
          >
            Construire{" "}
            <span className="relative inline-block">
              avec logique.
              <span
                className="absolute left-0 -bottom-1 h-[2.5px] w-full rounded-full"
                style={{ background: "linear-gradient(90deg, #6366f1, #3b82f6)" }}
              />
            </span>
          </h2>
          <div className="mt-6 flex items-center gap-4">
            <div className="h-px w-8 bg-slate-200" />
            <span
              className="text-[10px] uppercase tracking-[0.25em] text-slate-300"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              SI · Données · Intelligence
            </span>
            <div className="h-px flex-1 bg-slate-100" />
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-2 items-start">
          {/* Bio */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(28px)",
              transition: "opacity 0.8s ease 0.15s, transform 0.8s ease 0.15s",
            }}
          >
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm text-slate-600 leading-relaxed mb-5">
                Ce qui m'a toujours attirée, ce sont les <strong className="text-slate-800">systèmes d'information</strong> : leur conception,
                leur architecture technique et la logique interne qui permet à des composants, des réseaux
                et des processus de fonctionner ensemble.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed mb-5">
                En construisant cette vision, j'ai développé une base solide en Business Information Systems,
                où j'ai excellé jusqu'à être <strong className="text-slate-800">major de promotion</strong>, avec une approche naturellement
                tournée vers la structuration et la cohérence des systèmes.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed mb-5">
                Le développement web a été pour moi un socle essentiel pour comprendre concrètement
                comment un système prend forme, communique et évolue.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Aujourd'hui, l'analyse de données vient comme une <em>cherry on top</em>, et mon intérêt
                se porte vers les <strong className="text-slate-800">systèmes intelligents</strong> : automatiser des systèmes d'information,
                orchestrer leurs échanges et exploiter les données qu'ils produisent.
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(28px)",
              transition: "opacity 0.8s ease 0.25s, transform 0.8s ease 0.25s",
            }}
          >
            <div className="grid grid-cols-2 gap-3 mb-4">
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className="rounded-2xl border border-slate-200 bg-white px-5 py-4 hover:border-indigo-200 hover:bg-indigo-50/30 transition-all duration-300"
                >
                  <p
                    className="text-[10px] uppercase tracking-widest text-slate-400 mb-1"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    {h.label}
                  </p>
                  <p className="text-xs font-semibold text-slate-700 leading-snug">{h.value}</p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-slate-100 bg-white p-6">
              <p
                className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                En bref
              </p>
              <ul className="space-y-2">
                {[
                  "Conception des systèmes d'information",
                  "Développement front & back-end",
                  "Analyse et visualisation de données",
                  "Intérêt marqué pour les systèmes intelligents",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-slate-600">
                    <span className="w-1 h-1 rounded-full bg-indigo-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}