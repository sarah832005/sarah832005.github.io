type ProjectStatus = "En cours" | "Terminé";

type ProjectTag = "SI" | "Data" | "IA" | "Web";

type Project = {
  title: string;
  subtitle: string;
  description: string;
  status: ProjectStatus;
  tags: ProjectTag[];
  tech: string[];
  github?: string;
  demo?: string;
  year: string;
};

const PROJECTS: Project[] = [
  {
    title: "Portfolio — Fondée.",
    subtitle: "Site personnel pour candidatures (MIAGE / MIND / SI)",
    description:
      "Portfolio structuré autour d’une démarche Observation → Analyse → Construction, avec sections académiques et mise en valeur des projets.",
    status: "En cours",
    tags: ["Web", "SI"],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "", // à compléter
    demo: "", // à compléter
    year: "2026",
  },
  {
    title: "Projet Python (exemple)",
    subtitle: "Application orientée données",
    description:
      "Exemple placeholder : traitement de données + visualisation + logique métier. À remplacer par ton vrai projet.",
    status: "En cours",
    tags: ["Data"],
    tech: ["Python", "Pandas"],
    year: "2025",
  },
  {
    title: "Projet Web (exemple)",
    subtitle: "Conception & développement SI",
    description:
      "Exemple placeholder : pages, auth, base de données, structure SI. À remplacer par ton vrai projet.",
    status: "En cours",
    tags: ["Web", "SI"],
    tech: ["HTML", "CSS", "JavaScript"],
    year: "2025",
  },
];

const ALL_FILTERS: Array<ProjectTag | "Tous"> = ["Tous", "SI", "Data", "IA", "Web"];

function cn(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function Projects() {
  // Filtre simple (sans useState pour rester beginner-friendly)
  // On utilisera le hash URL (#projects?tag=...) plus tard si tu veux.
  let selected: ProjectTag | "Tous" = "Tous";

  // Petit hack simple : lire le filtre depuis l’URL si présent (?tag=Data)
  if (typeof window !== "undefined") {
    const params = new URLSearchParams(window.location.search);
    const tag = params.get("tag") as ProjectTag | null;
    if (tag && (ALL_FILTERS as string[]).includes(tag)) selected = tag;
  }

  const filtered =
    selected === "Tous"
      ? PROJECTS
      : PROJECTS.filter((p) => p.tags.includes(selected as ProjectTag));

  return (
    <section id="projects" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
              Projets
            </h2>
            <p className="mt-2 text-slate-600">
              Une sélection de projets construits de manière progressive — avec une approche
              orientée systèmes d’information, données et systèmes intelligents.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 transition"
          >
            Demander mon GitHub / Démo
          </a>
        </div>

        {/* Filtres (version simple via liens) */}
        <div className="mt-8 flex flex-wrap gap-2">
          {ALL_FILTERS.map((f) => {
            const isActive = f === selected;
            const href = f === "Tous" ? "#projects" : `?tag=${encodeURIComponent(f)}#projects`;

            return (
              <a
                key={f}
                href={href}
                className={cn(
                  "rounded-xl px-4 py-2 text-sm border transition",
                  isActive
                    ? "bg-slate-900 text-white border-slate-900"
                    : "bg-white text-slate-700 border-slate-300 hover:bg-slate-100"
                )}
              >
                {f}
              </a>
            );
          })}
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {filtered.map((p) => (
            <article
              key={p.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-sm transition"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{p.subtitle}</p>
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

              <p className="mt-4 text-slate-600">{p.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700"
                  >
                    {t}
                  </span>
                ))}
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">
                  {p.year}
                </span>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs text-slate-600"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
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
                  <span className="text-sm text-slate-400">GitHub (à ajouter)</span>
                )}

                {p.demo ? (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-indigo-700 hover:text-indigo-800"
                  >
                    Démo →
                  </a>
                ) : (
                  <span className="text-sm text-slate-400">Démo (à ajouter)</span>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Note */}
        <p className="mt-10 text-sm text-slate-500">
          Astuce : tu peux ajouter un projet en dupliquant un bloc dans la constante <span className="font-medium">PROJECTS</span>.
        </p>
      </div>
    </section>
  );
}
