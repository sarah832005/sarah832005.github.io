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

const SOFT_SKILLS = [
  "Esprit analytique", "Esprit critique", "Rigueur & sens du détail",
  "Résolution de problèmes", "Organisation & gestion du temps",
  "Autonomie & apprentissage rapide", "Travail en équipe",
  "Prise de parole en public", "Leadership", "Gestion de situations critiques",
];

const HARD_SKILLS = [
  {
    title: "Langages de programmation",
    items: ["Python avancé", "Java avancé", "JavaScript", "PHP", "SQL / PL/SQL", "C#", "R (RStudio)"],
  },
  {
    title: "Web & Frameworks",
    items: ["HTML / CSS", "React", "Next.js", "Node.js", "Django", "Laravel"],
  },
  {
    title: "Données, BI & Bases de données",
    items: ["Administration BDD", "SQL avancé", "MongoDB", "Power BI", "Excel", "Hadoop", "Datavisualisation", "Structures de données", "Oracle"],
  },
  {
    title: "Data science & IA",
    items: ["Statistiques descriptives", "Statistiques inférentielles", "Probabilités", "Apprentissage supervisé", "Apprentissage non supervisé", "Analyse de données"],
  },
  {
    title: "Mathématiques",
    items: ["Logique mathématique", "Algèbre linéaire", "Analyse mathématique"],
  },
  {
    title: "Conception & modélisation",
    items: ["Algorithmique", "POO (Python / Java)", "UML / StarUML"],
  },
  {
    title: "UI / UX & IHM",
    items: ["Interface Homme-Machine", "Figma", "Pencil"],
  },
  {
    title: "DevOps & Qualité",
    items: ["CI / CD"],
  },
];

const LANGUAGES = [
  { lang: "Arabe", level: "Natif", pct: 100 },
  { lang: "Français", level: "C1", pct: 88 },
  { lang: "Anglais", level: "C1 — Business", pct: 85 },
];

export default function Skills() {
  const { ref, visible } = useInView();
  const [activeTab, setActiveTab] = useState<"soft" | "hard" | "lang">("lang");
  const [hoveredSoft, setHoveredSoft] = useState<string | null>(null);

  return (
    <section id="skills" ref={ref} className="relative bg-slate-50 py-24 px-6 overflow-hidden">
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
            Compétences
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-slate-900 leading-[1.1] max-w-xl mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", letterSpacing: "-0.02em" }}
          >
            Ce que je{" "}
            <span className="relative inline-block">
              maîtrise.
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
              Tech · Data · Soft skills · Langues
            </span>
            <div className="h-px flex-1 bg-slate-100" />
          </div>
        </div>

        {/* Tabs */}
        <div
          className="flex flex-wrap gap-2 mb-10"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.7s ease 0.1s",
          }}
        >
          {(["lang", "soft", "hard"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="text-xs font-semibold px-5 py-2.5 rounded-full border transition-all duration-200"
              style={{
                background: activeTab === tab ? "#0f172a" : "#ffffff",
                color: activeTab === tab ? "#ffffff" : "#64748b",
                borderColor: activeTab === tab ? "#0f172a" : "#e2e8f0",
                fontFamily: "'DM Mono', monospace",
              }}
            >
              {tab === "lang" ? "Langues" : tab === "soft" ? "Soft skills" : "Hard skills"}
            </button>
          ))}
        </div>

        {/* Languages */}
        {activeTab === "lang" && (
          <div
            className="grid gap-4 max-w-xl"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s",
            }}
          >
            {LANGUAGES.map((l) => (
              <div key={l.lang} className="rounded-2xl border border-slate-200 bg-white px-6 py-5">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-semibold text-slate-800">{l.lang}</p>
                  <span
                    className="text-[11px] px-2.5 py-1 rounded-full bg-slate-50 border border-slate-100 text-slate-500"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    {l.level}
                  </span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000"
                    style={{
                      width: visible ? `${l.pct}%` : "0%",
                      background: "linear-gradient(90deg, #6366f1, #3b82f6)",
                      transitionDelay: "0.4s",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Soft skills */}
        {activeTab === "soft" && (
          <div
            className="flex flex-wrap gap-2"
            style={{
              opacity: visible ? 1 : 0,
              transition: "opacity 0.6s ease 0.2s",
            }}
          >
            {SOFT_SKILLS.map((s) => (
              <span
                key={s}
                onMouseEnter={() => setHoveredSoft(s)}
                onMouseLeave={() => setHoveredSoft(null)}
                className="text-xs px-4 py-2 rounded-full border cursor-default transition-all duration-200"
                style={{
                  borderColor: hoveredSoft === s ? "#6366f1" : "#e2e8f0",
                  background: hoveredSoft === s ? "#eef2ff" : "#ffffff",
                  color: hoveredSoft === s ? "#4338ca" : "#64748b",
                  fontFamily: "'DM Mono', monospace",
                }}
              >
                {s}
              </span>
            ))}
          </div>
        )}

        {/* Hard skills */}
        {activeTab === "hard" && (
          <div className="grid gap-4 md:grid-cols-2">
            {HARD_SKILLS.map((cat, i) => (
              <div
                key={cat.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 hover:border-indigo-100 hover:shadow-sm transition-all duration-300"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(16px)",
                  transition: `opacity 0.6s ease ${0.1 + i * 0.07}s, transform 0.6s ease ${0.1 + i * 0.07}s`,
                }}
              >
                <p
                  className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  {cat.title}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="text-[11px] px-2.5 py-1 rounded-full border border-slate-100 bg-slate-50 text-slate-600"
                      style={{ fontFamily: "'DM Mono', monospace" }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}