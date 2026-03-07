"use client";

import { useEffect, useRef, useState } from "react";

const project1Tags = [
  "Python", "FastAPI", "React.js", "RAG", "LLM (Mistral)",
  "ChromaDB", "Sentence Transformers", "PyPDF", "Pandas", "NumPy", "Chart.js", "REST APIs",
];

const project2Tags = [
  "Python", "C#", "Bluetooth", "Capteurs VR (x,y,z)",
  "Pandas", "NumPy", "Régression", "Clustering", "Classification", "Temps réel",
];

const project1Highlights = [
  { label: "Profils détectés", value: "ADHD · Autisme · OCD · Cybersickness" },
  { label: "Scoring validé", value: "SSQ + modèles cognitifs" },
  { label: "Paramètres générés", value: "FOV · Vitesse · Saturation · Luminosité" },
  { label: "Base scientifique", value: "Publications peer-reviewed via RAG" },
];

const project2Highlights = [
  { label: "Données analysées", value: "Flux x, y, z en continu" },
  { label: "Détection", value: "Comportements anormaux en temps réel" },
  { label: "Réponse", value: "Alertes + adaptation dynamique" },
  { label: "Protocole", value: "Seuils physiologiques + ML embarqué" },
];

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

function TagList({ tags }: { tags: string[] }) {
  const [hovered, setHovered] = useState<string | null>(null);
  return (
    <div className="flex flex-wrap gap-1.5">
      {tags.map((tag) => (
        <span
          key={tag}
          onMouseEnter={() => setHovered(tag)}
          onMouseLeave={() => setHovered(null)}
          className="text-[11px] px-2.5 py-1 rounded-full border cursor-default transition-all duration-200"
          style={{
            borderColor: hovered === tag ? "#6366f1" : "#e2e8f0",
            background: hovered === tag ? "#eef2ff" : "#f8fafc",
            color: hovered === tag ? "#4338ca" : "#64748b",
            fontFamily: "'DM Mono', 'Courier New', monospace",
          }}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

interface StatusColor { bg: string; text: string; }

function ProjectCard({
  number, status, statusColor, title, subtitle, description,
  highlights, tags, problem, solution, githubUrl, delay, visible,
}: {
  number: string; status: string; statusColor: StatusColor;
  title: string; subtitle: string; description: string;
  highlights: { label: string; value: string }[];
  tags: string[]; problem: string[]; solution: string[];
  githubUrl?: string; delay: number; visible: boolean;
}) {
  return (
    <div
      className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(36px)",
        transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s, box-shadow 0.3s`,
      }}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-7 py-4 border-b border-slate-100 bg-slate-50">
        <div className="flex items-center gap-3">
          <span
            className="text-[11px] font-bold tracking-[0.2em] uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-400"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            {number}
          </span>
          <span className="text-[11px] uppercase tracking-widest text-slate-400 font-semibold hidden sm:block">
            Recherche personnelle
          </span>
        </div>
        <span
          className="text-[11px] font-semibold px-3 py-1 rounded-full"
          style={{ background: statusColor.bg, color: statusColor.text }}
        >
          {status}
        </span>
      </div>

      <div className="p-7 sm:p-9">
        <h3
          className="text-xl sm:text-2xl font-bold text-slate-900 mb-1 leading-tight"
          style={{ fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif", letterSpacing: "-0.01em" }}
        >
          {title}
        </h3>
        <p
          className="text-xs text-slate-400 mb-5 tracking-wide"
          style={{ fontFamily: "'DM Mono', 'Courier New', monospace" }}
        >
          {subtitle}
        </p>
        <p className="text-sm text-slate-500 leading-relaxed mb-8 max-w-xl">
          {description}
        </p>

        {/* Highlights */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          {highlights.map((h) => (
            <div key={h.label} className="rounded-xl bg-slate-50 border border-slate-100 px-4 py-3">
              <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-1">{h.label}</p>
              <p className="text-xs font-semibold text-slate-700 leading-snug">{h.value}</p>
            </div>
          ))}
        </div>

        {/* Problem / Solution */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-rose-400 mb-3">Problème</p>
            <ul className="space-y-1.5">
              {problem.map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs text-slate-500">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-rose-300 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-indigo-400 mb-3">Solution</p>
            <ul className="space-y-1.5">
              {solution.map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs text-slate-500">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-indigo-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tags */}
        <div className="mb-7">
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">Technologies</p>
          <TagList tags={tags} />
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-5 border-t border-slate-100">
          {githubUrl ? (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 border border-slate-200 bg-white hover:border-indigo-300 hover:text-indigo-600 px-4 py-2 rounded-full transition-all duration-200 shadow-sm hover:shadow"
            >
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" aria-hidden>
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.92.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              Voir sur GitHub
            </a>
          ) : (
            <span className="text-xs text-slate-400 italic">Code disponible prochainement</span>
          )}
          <span
            className="text-[10px] uppercase tracking-widest text-slate-300"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            2024 – 2025
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Research() {
  const { ref, visible } = useInView();

  return (
    <section id="research" ref={ref} className="relative bg-white py-28 px-6 overflow-hidden">

      {/* Subtle dot grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, #cbd5e120 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Soft glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-48 -right-24 w-[700px] h-[700px]"
        style={{
          background: "radial-gradient(circle at 65% 35%, #e0e7ff25 0%, #dbeafe15 45%, transparent 70%)",
          filter: "blur(72px)",
        }}
      />

      <div className="relative mx-auto max-w-6xl">

        {/* Header */}
        <div
          className="mb-16"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(28px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <p
            className="text-[11px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-5"
            style={{ fontFamily: "'DM Mono', 'Courier New', monospace" }}
          >
            Recherche &amp; Innovation
          </p>

          <h2
            className="text-4xl sm:text-5xl font-bold text-slate-900 leading-[1.1] max-w-2xl mb-6"
            style={{ fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif", letterSpacing: "-0.02em" }}
          >
            Quand la réalité virtuelle{" "}
            <span className="relative inline-block">
              devient trop réelle.
              <span
                className="absolute left-0 -bottom-1 h-[2.5px] w-full rounded-full"
                style={{ background: "linear-gradient(90deg, #6366f1, #3b82f6)" }}
              />
            </span>
          </h2>

          <p className="text-sm text-slate-500 max-w-xl leading-relaxed">
            Deux systèmes intelligents conçus de zéro — à l'intersection de l'IA, des neurosciences
            et de la réalité virtuelle — pour rendre l'immersion accessible à tous les profils cognitifs.
          </p>

          <div className="mt-10 flex items-center gap-4">
            <div className="h-px w-12 bg-slate-200" />
            <span
              className="text-[10px] uppercase tracking-[0.25em] text-slate-300"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              Neurosciences × IA × VR
            </span>
            <div className="h-px flex-1 bg-slate-100" />
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ProjectCard
            number="01"
            status="✦ Déployé"
            statusColor={{ bg: "#f0fdf4", text: "#16a34a" }}
            title="Système intelligent de prévention de la cybersickness"
            subtitle="IA · RAG · LLM local · Neurosciences cognitives"
            description="Système complet combinant analyse psychométrique, scoring de vulnérabilité validé (SSQ) et génération automatique de paramètres VR adaptatifs. Un assistant LLM local strictement fondé sur la littérature scientifique peer-reviewed accompagne les développeurs VR."
            highlights={project1Highlights}
            tags={project1Tags}
            problem={[
              "VR non adapté aux profils neurodivergents",
              "Aucun outil clinique pour développeurs",
              "Nausée et surcharge sensorielle non anticipées",
            ]}
            solution={[
              "Questionnaires + scoring SSQ automatisé",
              "Paramètres VR adaptatifs générés par IA",
              "RAG connecté à publications scientifiques",
              "LLM conversationnel spécialisé",
            ]}
            githubUrl="https://github.com/sarah832005/neuro-vr-ai"
            delay={0.2}
            visible={visible}
          />

          <ProjectCard
            number="02"
            status="⟳ En développement"
            statusColor={{ bg: "#fefce8", text: "#ca8a04" }}
            title="Analyse temps réel des mouvements VR"
            subtitle="Python · C# · Capteurs VR · ML embarqué"
            description="Système d'analyse en continu des données de capteurs d'un casque VR (x, y, z) pour détecter les comportements anormaux liés à la cybersickness. Déclenche des alertes et adapte dynamiquement les paramètres immersifs pour sécuriser l'expérience en temps réel."
            highlights={project2Highlights}
            tags={project2Tags}
            problem={[
              "Cybersickness détectée trop tard",
              "Aucun feedback physiologique temps réel",
              "Paramètres VR statiques, non réactifs",
            ]}
            solution={[
              "Seuils physiologiques calibrés par profil",
              "Détection d'anomalies via ML (clustering)",
              "Adaptation dynamique des paramètres VR",
              "Alertes immédiates intégrées au runtime",
            ]}
            delay={0.35}
            visible={visible}
          />
        </div>

        {/* Bottom tagline */}
        <div
          className="mt-16 text-center"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 1s ease 0.8s",
          }}
        >
          <p
            className="text-[10px] uppercase tracking-[0.3em] text-slate-300"
            style={{ fontFamily: "'DM Mono', 'Courier New', monospace" }}
          >
            "L'immersion doit s'adapter à l'utilisateur — pas l'inverse."
          </p>
        </div>

      </div>
    </section>
  );
}