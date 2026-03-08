"use client";

import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.05) {
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

type ProjectStatus = "En cours" | "Terminé";
type Domain =
  | "Web & Applications" | "Systèmes d'information (SI)" | "Architecture & Conception"
  | "Bases de données & BI" | "Data / Stat / Dataviz" | "Maths / Stat / Probabilités"
  | "IA / Machine Learning" | "Sécurité" | "Business / Marketing / Gestion";

type Project = {
  title: string; subtitle: string; year: string; status: ProjectStatus;
  domain: Domain; what: string; concepts: string[]; tools: string[];
  github?: string; demo?: string; report?: string; doc?: string; notebook?: string; pbix?: string;
};

const DOMAINS: Array<Domain | "Tous"> = [
  "Tous", "Web & Applications", "Systèmes d'information (SI)", "Architecture & Conception",
  "Bases de données & BI", "Data / Stat / Dataviz", "Maths / Stat / Probabilités",
  "IA / Machine Learning", "Sécurité", "Business / Marketing / Gestion",
];

const PROJECTS: Project[] = [
  {
    title: "Portfolio — Fondée.",
    subtitle: "Site personnel pour candidatures (MIAGE / MIND / SI)",
    year: "2026", status: "En cours", domain: "Web & Applications",
    what: "Portfolio Next.js déployé sur GitHub Pages pour présenter mon profil, mes compétences et mes projets.",
    concepts: ["UI/UX", "Composants réutilisables", "Navigation one-page", "Accessibilité"],
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/sarah832005/sarah832005.github.io",
    demo: "https://sarah832005.github.io",
  },
  {
    title: "Dataviz — Netflix Titles",
    subtitle: "Analyse exploratoire + visualisations (rapport HTML + PDF)",
    year: "2025", status: "Terminé", domain: "Data / Stat / Dataviz",
    what: "Exploration du dataset Netflix : nettoyage, statistiques descriptives et visualisations.",
    concepts: ["Nettoyage & préparation des données", "Statistiques descriptives", "Analyses par catégories", "Visualisations"],
    tools: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter"],
    github: "https://github.com/sarah832005/dataviz-project/blob/main/notebooks/netflix.ipynb",
    demo: "reports/dashboard_netflix.html",
    report: "reports/rapport_projet_datavisualisation.pdf",
  },
  {
    title: "Dataviz — World Happiness (2015–2019)",
    subtitle: "Analyses multi-années + tendances + corrélations",
    year: "2025", status: "Terminé", domain: "Data / Stat / Dataviz",
    what: "Analyse des scores de bonheur (2015–2019) : comparaisons par pays, tendances et exploration des facteurs associés.",
    concepts: ["Fusion multi-fichiers", "Comparaisons par année/pays", "Tendances & évolution", "Corrélations"],
    tools: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter"],
    github: "https://github.com/sarah832005/dataviz-project/blob/main/notebooks/world_happiness.ipynb",
    demo: "reports/dashboard_world_happiness.html",
    report: "reports/rapport_projet_datavisualisation.pdf",
  },
  {
    title: "Mini SI — Medical Project",
    subtitle: "Gestion patients + RDV + ordonnances (fichiers texte)",
    year: "2026", status: "Terminé", domain: "Systèmes d'information (SI)",
    what: "Application CLI Python : gestion des patients, rendez-vous, ordonnances, historique et graphiques.",
    concepts: ["CRUD fichiers (TXT)", "Validation des entrées", "Historisation", "Statistiques + visualisation"],
    tools: ["Python", "File I/O", "Matplotlib", "Jupyter"],
    github: "https://github.com/sarah832005/medical-project/blob/main/medical_project.ipynb",
    report: "reports/medical/rapport_medical_project.pdf",
  },
  {
    title: "Base de données E-commerce — shopdb",
    subtitle: "SQL avancé : schéma complet + vues + procédures + triggers",
    year: "2025", status: "Terminé", domain: "Bases de données & BI",
    what: "Conception et implémentation d'une base e-commerce complète : comptes, catalogue, commandes, paiements, livraison, stock.",
    concepts: ["Modélisation relationnelle", "Rôles & utilisateurs", "Vues SQL", "Procédures stockées", "Triggers", "Indexation"],
    tools: ["SQL (MySQL/MariaDB)", "StarUML", "Views", "Stored Procedures", "Triggers", "Index"],
    github: "https://github.com/sarah832005/shopdb-ecommerce",
    report: "reports/sql/rapport_shopdb.pdf",
  },
  {
    title: "Prédiction Cybersickness — ML Supervisé & Non Supervisé",
    subtitle: "Classification · Régression · PCA · K-Means · 300 participants VR",
    year: "2025", status: "Terminé", domain: "IA / Machine Learning",
    what: "Pipeline ML complet pour prédire le niveau de cybersickness à partir de données terrain réelles (100+ participants en session VR). Classification supervisée (96.7% accuracy), régression SSQ, PCA et clustering K-Means — 4 profils utilisateurs identifiés.",
    concepts: ["Classification supervisée", "Régression", "PCA", "K-Means Clustering", "Feature Importance", "Cross-validation", "EDA"],
    tools: ["Python", "scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter"],
    github: "https://github.com/sarah832005/vr-cybersickness-ml",
    notebook: "https://github.com/sarah832005/vr-cybersickness-ml/blob/main/notebooks/",
    doc: "https://sarah832005.github.io/docs/vr_ml_documentation.html",
  },
  {
    title: "Sustainable Development Index — Analyse SDI 2015–2019",
    subtitle: "IEV · IE · IR · ID · IIE · 104 pays · Limites planétaires",
    year: "2025", status: "Terminé", domain: "Data / Stat / Dataviz",
    what: "Calcul et analyse du SDI (Hickel 2020) sur 104 pays de 2015 à 2019. Pipeline complet : calcul de 6 KPIs (IEV, IE, IR, ID, IIE, SDI), analyse du dépassement des limites planétaires CO2/empreinte matérielle, évolution temporelle et classement mondial. Visualisations Power BI incluses.",
    concepts: ["Calcul d'indices composites", "Limites planétaires", "Analyse temporelle", "Dataviz", "Développement durable", "KPIs SDG"],
    tools: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI", "Jupyter"],
    github: "https://github.com/sarah832005/sdi-analysis",
    notebook: "https://github.com/sarah832005/sdi-analysis/blob/main/sdi_analysis.py",
    pbix: "https://sarah832005.github.io/docs/stream_4_pi.pbix",
  },
  {
    title: "Conception UML — Système orienté objet",
    subtitle: "Analyse + diagrammes + implémentation",
    year: "2025", status: "Terminé", domain: "Architecture & Conception",
    what: "Analyse des besoins, conception UML (use case, classes…) puis traduction en code orienté objet.",
    concepts: ["Use case", "Diagramme de classes", "Encapsulation", "Héritage", "Polymorphisme"],
    tools: ["StarUML", "Java"],
  },
];

function LinkButton({ href, label, icon }: { href: string; label: string; icon: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-3 py-1.5 rounded-full border border-slate-200 bg-white hover:border-indigo-300 hover:text-indigo-600 text-slate-600 transition-all duration-200"
      style={{ fontFamily: "'DM Mono', monospace" }}
    >
      <span>{icon}</span>
      {label}
    </a>
  );
}

export default function Projects() {
  const { ref, visible } = useInView();
  const [selected, setSelected] = useState<Domain | "Tous">("Tous");

  const filtered = selected === "Tous" ? PROJECTS : PROJECTS.filter((p) => p.domain === selected);

  return (
    <section id="projects" ref={ref} className="relative bg-white py-24 px-6 overflow-hidden">
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
            Projets
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-slate-900 leading-[1.1] max-w-xl mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", letterSpacing: "-0.02em" }}
          >
            Ce que j'ai{" "}
            <span className="relative inline-block">
              construit.
              <span
                className="absolute left-0 -bottom-1 h-[2.5px] w-full rounded-full"
                style={{ background: "linear-gradient(90deg, #6366f1, #3b82f6)" }}
              />
            </span>
          </h2>
          <p className="text-sm text-slate-500 max-w-lg leading-relaxed">
            Projets organisés par domaines — code, rapports et démos disponibles.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <div className="h-px w-8 bg-slate-200" />
            <span
              className="text-[10px] uppercase tracking-[0.25em] text-slate-300"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              Data · Web · SI · IA · Conception
            </span>
            <div className="h-px flex-1 bg-slate-100" />
          </div>
        </div>

        {/* Domain filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {DOMAINS.map((d) => (
            <button
              key={d}
              onClick={() => setSelected(d)}
              className="text-[11px] font-semibold px-4 py-2 rounded-full border transition-all duration-200"
              style={{
                background: selected === d ? "#0f172a" : "#ffffff",
                color: selected === d ? "#ffffff" : "#64748b",
                borderColor: selected === d ? "#0f172a" : "#e2e8f0",
                fontFamily: "'DM Mono', monospace",
              }}
            >
              {d}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid gap-5 md:grid-cols-2">
          {filtered.map((p, i) => (
            <article
              key={`${p.title}-${p.year}`}
              className="rounded-2xl border border-slate-200 bg-white p-7 hover:shadow-md hover:border-slate-300 transition-all duration-300"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.6s ease ${0.1 + i * 0.07}s, transform 0.6s ease ${0.1 + i * 0.07}s`,
              }}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <div>
                  <h3
                    className="text-base font-bold text-slate-900 leading-tight mb-1"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-xs text-slate-500">{p.subtitle}</p>
                </div>
                <span
                  className="shrink-0 text-[10px] font-semibold px-2.5 py-1 rounded-full border"
                  style={{
                    background: p.status === "Terminé" ? "#f0fdf4" : "#fefce8",
                    color: p.status === "Terminé" ? "#16a34a" : "#ca8a04",
                    borderColor: p.status === "Terminé" ? "#bbf7d0" : "#fde68a",
                    fontFamily: "'DM Mono', monospace",
                  }}
                >
                  {p.status === "Terminé" ? "✦ Terminé" : "⟳ En cours"}
                </span>
              </div>

              {/* Domain + year */}
              <div className="flex items-center gap-2 mb-4">
                <span
                  className="text-[10px] px-2.5 py-1 rounded-full bg-slate-50 border border-slate-100 text-slate-400"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  {p.domain}
                </span>
                <span
                  className="text-[10px] text-slate-300"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  {p.year}
                </span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed mb-5">{p.what}</p>

              {/* Concepts */}
              <div className="mb-4">
                <p
                  className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  Concepts
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {p.concepts.map((c) => (
                    <span
                      key={c}
                      className="text-[11px] px-2.5 py-1 rounded-full bg-slate-50 border border-slate-100 text-slate-500"
                      style={{ fontFamily: "'DM Mono', monospace" }}
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div className="mb-6">
                <p
                  className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  Technologies
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tools.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] px-2.5 py-1 rounded-full border border-indigo-100 bg-indigo-50 text-indigo-500"
                      style={{ fontFamily: "'DM Mono', monospace" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              {(p.github || p.demo || p.report || p.doc || p.notebook || p.pbix) && (
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                  {p.github && <LinkButton href={p.github} label="GitHub" icon="⌥" />}
                  {p.notebook && <LinkButton href={p.notebook} label="Code Python" icon="⌨" />}
                  {p.doc && <LinkButton href={p.doc} label="Documentation" icon="⊡" />}
                  {p.demo && <LinkButton href={p.demo} label="Rapport HTML" icon="⊞" />}
                  {p.report && <LinkButton href={p.report} label="PDF" icon="↓" />}
                  {p.pbix && <LinkButton href={p.pbix} label="Power BI Dashboard" icon="📊" />}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}