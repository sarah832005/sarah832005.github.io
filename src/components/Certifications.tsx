"use client";

import { useEffect, useMemo, useRef, useState } from "react";

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

type Attestation = {
  title: string;
  org: string;
  desc: string;
  logo?: string;
  file?: string;
};

const VIE_ASSOCIATIVE: Attestation[] = [
  {
    title: "Attestation de membre actif",
    org: "Vie associative",
    desc: "Engagement régulier, participation active et contribution aux activités.",
    logo: "/association.png",
    file: "",
  },
  {
    title: "Contribution au comité d'organisation",
    org: "ESB / Organisation",
    desc: "Participation à la coordination, logistique et préparation d'événements.",
    logo: "/esb.png",
    file: "/attestations/com org.pdf",
  },
  {
    title: "Prise de parole en public",
    org: "Activités associatives",
    desc: "Interventions en public, structuration d'idées et aisance orale.",
    logo: "/openclassrooms.png",
    file: "/attestations/public-speaking.pdf",
  },
  {
    title: "Art & débat oratoire",
    org: "Activité culturelle",
    desc: "Argumentation, esprit critique, écoute et prise de position structurée.",
    logo: "/association.png",
    file: "",
  },
  {
    title: "Apprendre à apprendre",
    org: "Développement personnel",
    desc: "Méthodes d'apprentissage, autonomie, organisation et progression.",
    logo: "/openclassrooms.png",
    file: "/attestations/apprendre.pdf",
  },
];

const ACADEMIQUE_PRO: Attestation[] = [
  {
    title: "Inbound Marketing",
    org: "HubSpot",
    desc: "Bases du marketing inbound : acquisition, conversion et stratégie de contenu.",
    logo: "/hubspot.png",
    file: "/attestations/Inbound marketing",
  },
  {
    title: "Sustainable Development",
    org: "Honoris",
    desc: "Compréhension des enjeux durables et intégration dans une vision globale.",
    logo: "/honoris.png",
    file: "/attestations/dev dur",
  },
  {
    title: "Découvrir les métiers des Ressources Humaines",
    org: "OpenClassrooms",
    desc: "Introduction aux fonctions RH : recrutement, compétences, organisation.",
    logo: "/openclassrooms.png",
    file: "/attestations/rh.pdf",
  },
  {
    title: "Bal de Projets",
    org: "ESB / Projets intégrés",
    desc: "Présentation et validation de projets : rigueur, rendu et communication.",
    logo: "/esb.png",
    file: "/attestations/bal.pdf",
  },
];

function Card({ item, index, visible }: { item: Attestation; index: number; visible: boolean }) {
  const isReady = Boolean(item.file && item.file.trim().length > 0);
  const Wrapper = isReady ? "a" : "div";
  const wrapperProps = isReady
    ? { href: item.file, target: "_blank", rel: "noreferrer" as const, download: true }
    : {};

  return (
    <Wrapper
      {...(wrapperProps as any)}
      className={`group block rounded-2xl border p-6 transition-all duration-300 ${
        isReady
          ? "border-slate-200 bg-white hover:border-indigo-200 hover:shadow-md cursor-pointer"
          : "border-slate-100 bg-slate-50 opacity-60 cursor-not-allowed"
      }`}
      style={{
        opacity: visible ? (isReady ? 1 : 0.6) : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.6s ease ${0.1 + index * 0.08}s, transform 0.6s ease ${0.1 + index * 0.08}s, box-shadow 0.3s, border-color 0.3s`,
      }}
    >
      <div className="flex items-start gap-4">
        {/* Logo */}
        <div className="h-11 w-11 rounded-xl border border-slate-100 bg-slate-50 flex items-center justify-center overflow-hidden shrink-0">
          {item.logo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={item.logo} alt={`Logo ${item.org}`} className="h-full w-full object-contain p-2" loading="lazy" />
          ) : (
            <span className="text-[10px] text-slate-300">—</span>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-slate-800 leading-snug">{item.title}</p>
              <p
                className="text-[11px] text-slate-400 mt-0.5"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                {item.org}
              </p>
            </div>
            <span
              className={`shrink-0 text-[10px] font-semibold px-2.5 py-1 rounded-full border transition-all duration-200 ${
                isReady
                  ? "border-slate-200 text-slate-600 bg-white group-hover:border-indigo-200 group-hover:text-indigo-600 group-hover:bg-indigo-50"
                  : "border-slate-100 text-slate-300 bg-white"
              }`}
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              {isReady ? "↓ PDF" : "À venir"}
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-2 leading-relaxed">{item.desc}</p>
        </div>
      </div>
    </Wrapper>
  );
}

export default function Certifications() {
  const { ref, visible } = useInView();
  const [activeTab, setActiveTab] = useState<"asso" | "acad">("asso");
  const data = useMemo(() => (activeTab === "asso" ? VIE_ASSOCIATIVE : ACADEMIQUE_PRO), [activeTab]);

  return (
    <section id="certifications" ref={ref} className="relative bg-white py-24 px-6 overflow-hidden">
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
            Attestations & certifications
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-slate-900 leading-[1.1] max-w-xl mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", letterSpacing: "-0.02em" }}
          >
            Preuves &{" "}
            <span className="relative inline-block">
              engagements.
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
              Académique · Associatif · Personnel
            </span>
            <div className="h-px flex-1 bg-slate-100" />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {(["asso", "acad"] as const).map((tab) => (
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
              {tab === "asso" ? "Vie associative" : "Académique & professionnel"}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid gap-4 md:grid-cols-2">
          {data.map((item, i) => (
            <Card key={`${item.title}-${item.org}`} item={item} index={i} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}