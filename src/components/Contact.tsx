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

export default function Contact() {
  const { ref, visible } = useInView();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <section id="contact" ref={ref} className="relative bg-slate-50 py-24 px-6 overflow-hidden">
      {/* Dot grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, #cbd5e118 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Glow bottom-left */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 w-[500px] h-[400px]"
        style={{
          background: "radial-gradient(ellipse at 0% 100%, #e0e7ff20 0%, transparent 70%)",
          filter: "blur(48px)",
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
            Contact
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-slate-900 leading-[1.1] max-w-xl mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", letterSpacing: "-0.02em" }}
          >
            Travaillons{" "}
            <span className="relative inline-block">
              ensemble.
              <span
                className="absolute left-0 -bottom-1 h-[2.5px] w-full rounded-full"
                style={{ background: "linear-gradient(90deg, #6366f1, #3b82f6)" }}
              />
            </span>
          </h2>
          <p className="text-sm text-slate-500 max-w-md leading-relaxed">
            Pour une opportunité, un projet ou une collaboration — je suis disponible.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <div className="h-px w-8 bg-slate-200" />
            <span
              className="text-[10px] uppercase tracking-[0.25em] text-slate-300"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              Opportunités · Projets · Collaborations
            </span>
            <div className="h-px flex-1 bg-slate-100" />
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 items-start">

          {/* Coordonnées */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(28px)",
              transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
            }}
          >
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <p
                className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-6"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                Coordonnées
              </p>

              <div className="space-y-4">
                {[
                  { icon: "✉", label: "Email", value: "sarahmahmoudi315@gmail.com", href: "mailto:sarahmahmoudi315@gmail.com" },
                  { icon: "⌖", label: "Localisation", value: "France (actuellement)", href: null },
                  { icon: "⌥", label: "GitHub", value: "github.com/sarah832005", href: "https://github.com/sarah832005" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4 group">
                    <span className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 text-sm shrink-0">
                      {item.icon}
                    </span>
                    <div>
                      <p
                        className="text-[10px] uppercase tracking-widest text-slate-400 mb-0.5"
                        style={{ fontFamily: "'DM Mono', monospace" }}
                      >
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel="noreferrer"
                          className="text-sm text-slate-700 hover:text-indigo-600 transition-colors duration-200"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-slate-700">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <p
                  className="text-[10px] uppercase tracking-widest text-slate-300 mb-3"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  Disponibilité
                </p>
                <div className="flex items-center gap-2">
                  <span className="flex h-2 w-2 items-center justify-center">
                    <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-emerald-400 opacity-50" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </span>
                  <span className="text-xs text-slate-500">Disponible pour opportunités Master</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(28px)",
              transition: "opacity 0.7s ease 0.25s, transform 0.7s ease 0.25s",
            }}
          >
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <p
                className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-6"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                Message direct
              </p>

              <div className="space-y-3">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-indigo-300 focus:bg-white focus:ring-2 focus:ring-indigo-100 transition-all duration-200"
                  placeholder="Votre nom"
                />
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-indigo-300 focus:bg-white focus:ring-2 focus:ring-indigo-100 transition-all duration-200"
                  placeholder="Votre email"
                />
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-indigo-300 focus:bg-white focus:ring-2 focus:ring-indigo-100 transition-all duration-200 resize-none"
                  placeholder="Votre message..."
                  rows={5}
                />
                <a
                  href={`mailto:sarahmahmoudi315@gmail.com?subject=Contact depuis portfolio&body=Nom: ${name}%0AEmail: ${email}%0A%0A${message}`}
                  className="block w-full text-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-700 transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  Envoyer le message →
                </a>
                <p
                  className="text-[10px] text-center text-slate-400"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  Ouvre votre client mail avec le message pré-rempli
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}