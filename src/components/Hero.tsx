"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white"
    >
      {/* Dot grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, #cbd5e118 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Soft glow top-left */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-32 w-[600px] h-[600px]"
        style={{
          background: "radial-gradient(circle at 40% 40%, #e0e7ff28 0%, #dbeafe12 50%, transparent 75%)",
          filter: "blur(64px)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32 grid gap-16 md:grid-cols-2 items-center">

        {/* Avatar */}
        <div
          className="flex justify-center md:justify-start"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(-24px)",
            transition: "opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s",
          }}
        >
          <div className="relative">
            {/* Decorative ring */}
            <div
              className="absolute -inset-3 rounded-full"
              style={{
                background: "conic-gradient(from 180deg, #e0e7ff, #dbeafe, #f1f5f9, #e0e7ff)",
                opacity: 0.6,
              }}
            />
            <div className="absolute -inset-3 rounded-full bg-white/80 backdrop-blur-sm" />
            <Image
              src="/avatar-sarah.jpg"
              alt="Sarah Mahmoudi"
              width={256}
              height={256}
              priority
              className="relative rounded-full object-cover border border-slate-200 shadow-sm"
            />
            {/* Status dot */}
            <span className="absolute bottom-4 right-4 flex h-4 w-4 items-center justify-center">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
          </div>
        </div>

        {/* Text */}
        <div
          className="text-center md:text-left"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(24px)",
            transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
          }}
        >
          {/* Label */}
          <div className="flex items-center justify-center md:justify-start gap-2 mb-5">
            <span className="relative h-7 w-7 overflow-hidden rounded-md bg-white ring-1 ring-slate-200 shadow-sm">
              <Image
                src="/logo.png"
                alt="Fondée logo"
                fill
                className="object-cover object-center scale-[1.9]"
              />
            </span>
            <span
              className="text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400"
              style={{ fontFamily: "'DM Mono', 'Courier New', monospace" }}
            >
              Fondée.
            </span>
          </div>

          {/* Name */}
          <h1
            className="text-4xl md:text-6xl font-bold text-slate-900 leading-[1.05] mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif", letterSpacing: "-0.02em" }}
          >
            Sarah{" "}
            <span className="relative inline-block">
              Mahmoudi
              <span
                className="absolute left-0 -bottom-1 h-[3px] w-full rounded-full"
                style={{ background: "linear-gradient(90deg, #6366f1, #3b82f6)" }}
              />
            </span>
          </h1>

          {/* Title */}
          <p className="text-base text-slate-600 mb-2 font-medium">
            Conception et développement des systèmes d'information
          </p>
          <p
            className="text-xs text-slate-400 mb-8 tracking-wide"
            style={{ fontFamily: "'DM Mono', 'Courier New', monospace" }}
          >
            Analyse de données · Systèmes intelligents · Recherche
          </p>

          {/* Divider */}
          <div className="flex items-center justify-center md:justify-start gap-4 mb-8">
            <div className="h-px w-8 bg-slate-200" />
            <span
              className="text-[10px] uppercase tracking-[0.25em] text-slate-300"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              Observer · Comprendre · Construire
            </span>
            <div className="h-px w-8 bg-slate-200" />
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-700 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Voir mes projets
            </a>
            <a
              href="#research"
              className="inline-flex items-center justify-center rounded-xl border border-indigo-200 bg-indigo-50 px-6 py-3 text-sm font-semibold text-indigo-700 hover:bg-indigo-100 hover:border-indigo-300 transition-all duration-200"
            >
              Mes recherches
            </a>
            <a
              href="/cv.pdf"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-all duration-200"
            >
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" aria-hidden>
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM12 17l-4-4h2.5v-3h3v3H16l-4 4z"/>
              </svg>
              Télécharger CV
            </a>
          </div>
        </div>
      </div>

      {/* Bottom divider line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
    </section>
  );
}