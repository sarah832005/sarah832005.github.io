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
    title: "Baccalauréat — Sciences expérimentales",
    place: "Tunisie",
    date: "2022 – 2023",
    subtitle: null,
    logo: null,
    tags: ["Sciences expérimentales"],
    current: false,
  },
  {
    number: "02",
    title: "Licence 1 & 2 — Business Computing",
    place: "Esprit School of Business (ESB)",
    date: "2023 – 2025",
    subtitle: "Filière : Business Computing / Business Information Systems",
    logo: "/esb.png",
    tags: ["Business Information Systems", "Conception SI", "Développement web", "Données"],
    current: false,
  },
  {
    number: "03",
    title: "Licence 3 — Conception & Développement Web",
    place: "Paris School of Technology & Business (PST&B)",
    date: "2025 — Présent",
    subtitle: "Filière : Conception et Développement Web · Double diplôme ESB–PST&B",
    logo: "/pstb.png",
    tags: ["Double diplôme", "Conception web", "Dev fullstack", "Paris"],
    current: true,
  },
];

export default function Formation() {
  const { ref, visible } = useInView();

  return (
    <section id="formation" ref={ref} className="relative bg-white py-24 px-6 overflow-hidden">
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
            Parcours académique
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-slate-900 leading-[1.1] max-w-xl mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", letterSpacing: "-0.02em" }}
          >
            Formation{" "}
            <span className="relative inline-block">
              & diplômes.
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
              2022 → Présent
            </span>
            <div className="h-px flex-1 bg-slate-100" />
          </div>
        </div>

        {/* Timeline */}
        <div className="relative space-y-6">
          {/* Vertical line */}
          <div
            className="absolute left-[22px] top-0 bottom-0 w-px bg-slate-100"
            aria-hidden
          />

          {items.map((it, i) => (
            <div
              key={it.title}
              className="relative pl-14"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.7s ease ${0.15 + i * 0.12}s, transform 0.7s ease ${0.15 + i * 0.12}s`,
              }}
            >
              {/* Timeline dot */}
              <div
                className="absolute left-0 top-6 w-[44px] flex items-center justify-center"
                aria-hidden
              >
                <div
                  className="w-3 h-3 rounded-full border-2 border-white shadow-sm"
                  style={{ background: it.current ? "#6366f1" : "#cbd5e1" }}
                />
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-7 hover:shadow-md hover:border-slate-300 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    {it.logo && (
                      <div className="h-12 w-12 rounded-xl border border-slate-200 bg-white flex items-center justify-center overflow-hidden shrink-0 shadow-sm">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={it.logo}
                          alt={`Logo ${it.place}`}
                          className="h-full w-full object-contain p-2"
                          loading="lazy"
                        />
                      </div>
                    )}
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className="text-[10px] font-bold text-slate-300"
                          style={{ fontFamily: "'DM Mono', monospace" }}
                        >
                          {it.number}
                        </span>
                        {it.current && (
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-100">
                            En cours
                          </span>
                        )}
                      </div>
                      <h3
                        className="text-lg font-bold text-slate-900 leading-tight"
                        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                      >
                        {it.title}
                      </h3>
                      <p className="text-sm text-slate-500 mt-1">{it.place}</p>
                      {it.subtitle && (
                        <p
                          className="text-xs text-slate-400 mt-1"
                          style={{ fontFamily: "'DM Mono', monospace" }}
                        >
                          {it.subtitle}
                        </p>
                      )}
                    </div>
                  </div>

                  <span
                    className="text-xs text-slate-400 whitespace-nowrap mt-1"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    {it.date}
                  </span>
                </div>

                {it.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-5">
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
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}