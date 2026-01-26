"use client";

import { useMemo, useState } from "react";

type Attestation = {
  title: string;
  org: string;
  desc: string;          // brève idée
  logo?: string;         // ex: "/logos/openclassrooms.svg"
  file?: string;         // ex: "/attestations/public-speaking.pdf"
};

const VIE_ASSOCIATIVE: Attestation[] = [
  {
    title: "Attestation de membre actif",
    org: "Vie associative",
    desc: "Engagement régulier, participation active et contribution aux activités.",
    logo: "/association.png",
    file: "", // à remplir plus tard
  },
  {
    title: "Contribution au comité d’organisation",
    org: "ESB / Organisation",
    desc: "Participation à la coordination, logistique et préparation d’événements.",
    logo: "/esb.png",
    file: "/attestations/com org.pdf",
  },
  {
    title: "Prise de parole en public",
    org: "Activités associatives",
    desc: "Interventions en public, structuration d’idées et aisance orale.",
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
    desc: "Méthodes d’apprentissage, autonomie, organisation et progression.",
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

function Card({ item }: { item: Attestation }) {
  const isReady = Boolean(item.file && item.file.trim().length > 0);

  // Si pas encore de PDF, on désactive le clic
  const Wrapper: any = isReady ? "a" : "div";
  const wrapperProps = isReady
    ? {
        href: item.file,
        target: "_blank",
        rel: "noreferrer",
        download: true,
      }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className={`group block rounded-2xl border p-5 transition ${
        isReady
          ? "border-slate-200 bg-slate-50 hover:bg-white hover:shadow-sm"
          : "border-slate-200 bg-slate-50 opacity-70 cursor-not-allowed"
      }`}
    >
      <div className="flex items-start gap-4">
        {/* Logo */}
        <div className="h-12 w-12 rounded-xl border border-slate-200 bg-white flex items-center justify-center overflow-hidden shrink-0">
          {item.logo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={item.logo}
              alt={`Logo ${item.org}`}
              className="h-full w-full object-contain p-2"
              loading="lazy"
            />
          ) : (
            <span className="text-xs text-slate-400">Logo</span>
          )}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="font-semibold text-slate-900 truncate">
                {item.title}
              </p>
              <p className="mt-1 text-sm text-slate-600">{item.org}</p>
            </div>

            {/* Badge */}
            <span
              className={`shrink-0 rounded-full px-3 py-1 text-xs border ${
                isReady
                  ? "border-slate-900 text-slate-900 bg-white"
                  : "border-slate-200 text-slate-400 bg-white"
              }`}
            >
              {isReady ? "Télécharger" : "À ajouter"}
            </span>
          </div>

          {/* Description */}
          <p className="mt-3 text-sm text-slate-600">{item.desc}</p>

          {/* Hint */}
          <p className="mt-3 text-xs text-slate-500">
            {isReady
              ? "Cliquez pour ouvrir/télécharger la preuve."
              : "À ajouter : PDF ou lien (vous pourrez le rendre cliquable)."}
          </p>
        </div>
      </div>
    </Wrapper>
  );
}

export default function Certifications() {
  const [activeTab, setActiveTab] = useState<"asso" | "acad">("asso");

  const data = useMemo(
    () => (activeTab === "asso" ? VIE_ASSOCIATIVE : ACADEMIQUE_PRO),
    [activeTab]
  );

  return (
    <section id="certifications" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
          Attestations
        </h2>

       

        {/* Tabs */}
        <div className="mt-8 flex gap-3">
          <button
            onClick={() => setActiveTab("asso")}
            className={`rounded-xl px-5 py-2 text-sm font-medium border transition ${
              activeTab === "asso"
                ? "bg-slate-900 text-white border-slate-900"
                : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
            }`}
          >
            Vie associative
          </button>

          <button
            onClick={() => setActiveTab("acad")}
            className={`rounded-xl px-5 py-2 text-sm font-medium border transition ${
              activeTab === "acad"
                ? "bg-slate-900 text-white border-slate-900"
                : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
            }`}
          >
            Académique & professionnel
          </button>
        </div>

        {/* Grid */}
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {data.map((item) => (
            <Card key={`${item.title}-${item.org}`} item={item} />
          ))}
        </div>

        {/* Petit rappel */}
        
      </div>
    </section>
  );
}
