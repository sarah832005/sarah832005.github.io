type ProjectStatus = "En cours" | "Terminé";

type Domain =
  | "Web & Applications"
  | "Systèmes d’information (SI)"
  | "Architecture & Conception"
  | "Bases de données & BI"
  | "Data / Stat / Dataviz"
  | "Maths / Stat / Probabilités"
  | "IA / Machine Learning"
  | "Sécurité"
  | "Business / Marketing / Gestion";

type Project = {
  title: string;
  subtitle: string;
  year: string;
  status: ProjectStatus;
  domain: Domain;

  what: string;
  concepts: string[];
  tools: string[];

  github?: string; // repo code
  demo?: string;   // HTML
  report?: string; // PDF (dans /public)
};

const DOMAINS: Array<Domain | "Tous"> = [
  "Tous",
  "Web & Applications",
  "Systèmes d’information (SI)",
  "Architecture & Conception",
  "Bases de données & BI",
  "Data / Stat / Dataviz",
  "Maths / Stat / Probabilités",
  "IA / Machine Learning",
  "Sécurité",
  "Business / Marketing / Gestion",
];

// ✅ liens RELATIFS => OK en local + GitHub Pages
const PROJECTS: Project[] = [
  {
    title: "Portfolio — Fondée.",
    subtitle: "Site personnel pour candidatures (MIAGE / MIND / SI)",
    year: "2026",
    status: "En cours",
    domain: "Web & Applications",
    what: "Portfolio Next.js déployé sur GitHub Pages pour présenter mon profil, mes compétences et mes projets.",
    concepts: ["UI/UX", "Composants réutilisables", "Navigation one-page", "Accessibilité"],
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/sarah832005/sarah832005.github.io",
    demo: "https://sarah832005.github.io",
  },

  {
    title: "Dataviz — Netflix Titles",
    subtitle: "Analyse exploratoire + visualisations (rapport HTML + PDF)",
    year: "2025",
    status: "Terminé",
    domain: "Data / Stat / Dataviz",
    what: "Exploration du dataset Netflix : nettoyage, statistiques descriptives et visualisations (années, pays, durées, ratings).",
    concepts: [
      "Nettoyage & préparation des données",
      "Statistiques descriptives",
      "Analyses par catégories (pays, année, type)",
      "Visualisations (histogrammes, top, boxplots, corrélations)",
    ],
    tools: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter"],
    github: "https://github.com/sarah832005/dataviz-project/blob/main/notebooks/netflix.ipynb",
    demo: "reports/dashboard_netflix.html",
    report: "reports/rapport_projet_datavisualisation.pdf",
  },

  {
    title: "Dataviz — World Happiness (2015–2019)",
    subtitle: "Analyses multi-années + tendances + corrélations (rapport HTML + PDF)",
    year: "2025",
    status: "Terminé",
    domain: "Data / Stat / Dataviz",
    what: "Analyse des scores de bonheur (2015–2019) : comparaisons par pays, tendances et exploration des facteurs associés.",
    concepts: [
      "Fusion multi-fichiers (2015–2019)",
      "Comparaisons par année/pays",
      "Tendances & évolution",
      "Corrélations & interprétation",
    ],
    tools: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter"],
    github: "https://github.com/sarah832005/dataviz-project/blob/main/notebooks/world_happiness.ipynb",
    demo: "reports/dashboard_world_happiness.html",
    report: "reports/rapport_projet_datavisualisation.pdf",
  },

  {
    title: "Mini SI — Medical Project (Gestion cabinet)",
    subtitle: "Gestion patients + RDV + ordonnances (fichiers texte)",
    year: "2026",
    status: "Terminé",
    domain: "Systèmes d’information (SI)",
    what: "Application CLI Python : gestion des patients, rendez-vous, ordonnances, historique et graphiques (consultations/mois/année).",
    concepts: [
      "CRUD fichiers (TXT)",
      "Validation des entrées (CIN, date, heure)",
      "Historisation (fichiers history_*)",
      "Statistiques + visualisation",
    ],
    tools: ["Python", "File I/O", "Matplotlib", "Jupyter"],
    github: "https://github.com/sarah832005/medical-project/blob/main/medical_project.ipynb",
    report: "reports/medical/rapport_medical_project.pdf",
  },

  {
    title: "Conception UML — Système orienté objet",
    subtitle: "Analyse + diagrammes + implémentation",
    year: "2025",
    status: "Terminé",
    domain: "Architecture & Conception",
    what: "Analyse des besoins, conception UML (use case, classes…) puis traduction en code orienté objet.",
    concepts: ["Use case", "Diagramme de classes", "Encapsulation", "Héritage", "Polymorphisme"],
    tools: ["StarUML", "Java"],
  },
];

function cn(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function Projects() {
  let selected: Domain | "Tous" = "Tous";

  if (typeof window !== "undefined") {
    const params = new URLSearchParams(window.location.search);
    const d = params.get("domain") as Domain | null;
    if (d && (DOMAINS as string[]).includes(d)) selected = d;
  }

  const filtered =
    selected === "Tous" ? PROJECTS : PROJECTS.filter((p) => p.domain === selected);

  return (
    <section id="projects" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Projets</h2>
            <p className="mt-2 text-slate-600">
              Projets organisés par domaines — avec une touche data et une approche “pro” (code + rapports).
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 transition"
          >
            Me demander un repo / une démo
          </a>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {DOMAINS.map((d) => {
            const isActive = d === selected;
            const href = d === "Tous" ? "#projects" : `?domain=${encodeURIComponent(d)}#projects`;

            return (
              <a
                key={d}
                href={href}
                className={cn(
                  "rounded-xl px-4 py-2 text-sm border transition",
                  isActive
                    ? "bg-slate-900 text-white border-slate-900"
                    : "bg-white text-slate-700 border-slate-300 hover:bg-slate-100"
                )}
              >
                {d}
              </a>
            );
          })}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {filtered.map((p) => (
            <article
              key={`${p.title}-${p.year}`}
              className="rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-sm transition"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{p.subtitle}</p>
                  <p className="mt-2 text-xs text-slate-500">
                    Domaine : <span className="font-medium">{p.domain}</span>
                  </p>
                </div>

                <span
                  className={cn(
                    "shrink-0 rounded-full px-3 py-1 text-xs font-medium border",
                    p.status === "Terminé"
                      ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                      : "border-amber-200 bg-amber-50 text-amber-700"
                  )}
                >
                  {p.status}
                </span>
              </div>

              <p className="mt-4 text-slate-700">
                <span className="font-semibold text-slate-900">Sujet :</span> {p.what}
              </p>

              <div className="mt-4">
                <p className="text-sm font-semibold text-slate-900">Concepts / Techniques</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {p.concepts.map((c) => (
                    <span
                      key={c}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4">
                <p className="text-sm font-semibold text-slate-900">Outils / Tech</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {p.tools.map((t) => (
                    <span
                      key={t}
                      className="rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs text-slate-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">
                  {p.year}
                </span>
              </div>

              <div className="mt-6 flex flex-wrap gap-4">
                {p.github ? (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-indigo-700 hover:text-indigo-800"
                  >
                    GitHub →
                  </a>
                ) : (
                  <span className="text-sm text-slate-400">GitHub (optionnel)</span>
                )}

                {p.demo ? (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-indigo-700 hover:text-indigo-800"
                  >
                    Rapport HTML →
                  </a>
                ) : (
                  <span className="text-sm text-slate-400">Rapport HTML (optionnel)</span>
                )}

                {p.report ? (
                  <a
                    href={p.report}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-indigo-700 hover:text-indigo-800"
                  >
                    Rapport PDF →
                  </a>
                ) : (
                  <span className="text-sm text-slate-400">Rapport PDF (optionnel)</span>
                )}
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-sm text-slate-500">
          GitHub Pages : privilégie des liens relatifs comme <span className="font-medium">"reports/..."</span>.
        </p>
      </div>
    </section>
  );
}
