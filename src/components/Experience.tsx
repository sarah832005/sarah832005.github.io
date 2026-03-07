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

const items = [
  {
    number: "01",
    title: "Projets académiques & techniques",
    date: "2024 – 2026",
    tags: ["Web", "UML", "Data / BI", "Python", "Java"],
    desc: "Développement web, conception (UML), projets data/BI, projets Python/Java — avec une approche rigoureuse et orientée rendu professionnel.",
    highlights: [
      "Projets fullstack (React, Next.js, Django, Laravel)",
      "Conception UML & architecture système",
      "Analyse de données & dataviz (Python, Power BI)",
      "Bases de données avancées (SQL, MongoDB, Oracle)",
    ],
  },
  {
    number: "02",
    title: "Activités associatives & communication",
    date: "2023 – Présent",
    tags: ["Leadership", "Organisation", "Prise de parole", "Équipe"],
    desc: "Organisation d'événements, prise de parole en public, travail en équipe et sens des responsabilités au sein de structures associatives.",
    highlights: [
      "Contribution au comité d'organisation ESB",
      "Interventions en public & débat oratoire",
      "Coordination logistique d'événements",
      "Membre actif — engagement régulier",
    ],
  },
];

export default function Experience() {
  const { ref, visible } = useInView();

  return (
    <section id="experience" ref={ref} className="relative bg-slate-50 py-24 px-6 overflow-hidden">
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
            Expériences
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-slate-900 leading-[1.1] max-w-xl mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", letterSpacing: "-0.02em" }}
          >
            Terrain &{" "}
            <span className="relative inline-block">
              pratique.
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
              Projets · Associations · Engagement
            </span>
            <div className="h-px flex-1 bg-slate-100" />
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {items.map((it, i) => (
            <div
              key={it.title}
              className="rounded-2xl border border-slate-200 bg-white p-8 hover:shadow-md hover:border-slate-300 transition-all duration-300"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(28px)",
                transition: `opacity 0.7s ease ${0.15 + i * 0.12}s, transform 0.7s ease ${0.15 + i * 0.12}s`,
              }}
            >
              {/* Top */}
              <div className="flex items-start justify-between gap-3 mb-5">
                <div>
                  <span
                    className="text-[10px] font-bold text-slate-300 block mb-2"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    {it.number}
                  </span>
                  <h3
                    className="text-lg font-bold text-slate-900 leading-tight"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {it.title}
                  </h3>
                </div>
                <span
                  className="text-[10px] whitespace-nowrap text-slate-400 mt-1"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  {it.date}
                </span>
              </div>

              <p className="text-sm text-slate-500 leading-relaxed mb-5">{it.desc}</p>

              {/* Highlights */}
              <ul className="space-y-1.5 mb-6">
                {it.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-xs text-slate-500">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-indigo-400 shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-5 border-t border-slate-100">
                {it.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-2.5 py-1 rounded-full border border-slate-100 bg-slate-50 text-slate-500"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}