"use client";

import { useState } from "react";

type SkillLevel = "Bases" | "Intermédiaire" | "Avancé" | "Notions";

type SkillItem = {
  name: string;
  level?: SkillLevel;
};

type SkillCategory = {
  title: string;
  items: SkillItem[];
};

const SOFT_SKILLS: string[] = [
  "Esprit analytique",
  "Esprit critique",
  "Rigueur & sens du détail",
  "Résolution de problèmes",
  "Organisation & gestion du temps",
  "Autonomie & apprentissage rapide",
  "Travail en équipe",
  "Prise de parole en public",
  "Leadership",
  "gestion de la situation critique",
];

const HARD_SKILLS: SkillCategory[] = [
  {
    title: "Langages de programmation",
    items: [
      { name: "Python avancé" },
      { name: "Java avancé"},
      { name: "JavaScript" },
      { name: "PHP" },
      { name: "SQL / PL/SQL"},
      { name: "C#"},
      { name: "R (RStudio)"},
    ],
  },
  {
    title: "Web & Frameworks",
    items: [
      { name: "HTML / CSS"},
      { name: "React"},
      { name: "Next.js"},
      { name: "Node.js"},
      { name: "Django"},
      { name: "Laravel"},
    ],
  },
  {
    title: "Données, BI & Bases de données",
    items: [
      { name: "Administration de bases de données"},
      { name: "SQL avancé"},
      { name: "MongoDB"},
      { name: "Power BI"},
      { name: "Excel"},
      { name: "Hadoop"},
      { name: "Librairies de Datavisualisation"},
      { name: "Structures de Données"},
      { name: "MangoDB"},
      { name: "Oracle"},

    ],
  },
  {
    title: "Data science & IA",
    items: [
      { name: "Statistiques descriptives" },
      { name: "Statistiques inférentielles" },
      { name: "Probabilités" },
      { name: "Apprentissage supervisé" },
      { name: "Apprentissage non supervisé" },
      { name: "Analyse et interprétation des données" },
    ],
  },
  {
    title: "Mathématiques (fondations)",
    items: [
      { name: "Logique mathématique" },
      { name: "Algèbre linéaire" },
      { name: "Analyse mathématique" },
    ],
  },
  {
    title: "Conception & modélisation",
    items: [
      { name: "Algorithmique" },
      { name: "Programmation Orientée Objet (Python / Java)" },
      { name: "UML / StarUML" },
    ],
  },
  {
    title: "UI / UX & IHM",
    items: [
      { name: "Interface Homme-Machine (IHM)" },
      { name: "Figma"},
      { name: "Pencil"},
    ],
  },
  {
    title: "DevOps & Qualité",
    items: [{ name: "CI / CD" }],
  },
  {
    title: "Business & Organisation (bonus)",
    items: [
      { name: "Ressources humaines"},
      { name: "Marketing digital" },
    ],
  },
];

export default function Skills() {
  const [open, setOpen] = useState<"soft" | "hard" | null>(null);

  return (
    <section id="skills" className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
          Compétences
        </h2>

        {/* Langues */}
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
          <h3 className="text-base font-semibold text-slate-900">Langues</h3>
          <ul className="mt-3 grid gap-2 text-sm text-slate-700">
            <li>Arabe — Natif</li>
            <li>Français — C1</li>
            <li>Anglais — C1 (Business Communication)</li>
          </ul>
        </div>

        {/* Toggles */}
        <div className="mt-10 flex gap-3">
          <button
            onClick={() => setOpen(open === "soft" ? null : "soft")}
            className={`rounded-xl px-5 py-2 text-sm font-medium border transition ${
              open === "soft"
                ? "bg-slate-900 text-white border-slate-900"
                : "bg-white text-slate-700 border-slate-300 hover:bg-slate-100"
            }`}
          >
            Soft skills
          </button>

          <button
            onClick={() => setOpen(open === "hard" ? null : "hard")}
            className={`rounded-xl px-5 py-2 text-sm font-medium border transition ${
              open === "hard"
                ? "bg-slate-900 text-white border-slate-900"
                : "bg-white text-slate-700 border-slate-300 hover:bg-slate-100"
            }`}
          >
            Hard skills
          </button>
        </div>

        {/* Soft skills */}
        {open === "soft" && (
          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
            <div className="flex flex-wrap gap-3">
              {SOFT_SKILLS.map((s) => (
                <span
                  key={s}
                  className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Hard skills */}
        {open === "hard" && (
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {HARD_SKILLS.map((cat) => (
              <div
                key={cat.title}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <h4 className="text-base font-semibold text-slate-900">
                  {cat.title}
                </h4>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {cat.items.map((it) => (
                    <li key={it.name}>
                      {it.name}
                      {it.level ? (
                        <span className="text-slate-500">
                          {" "}
                          — {it.level}
                        </span>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
