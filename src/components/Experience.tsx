export default function Experience() {
  const items = [
    {
      title: "Projets académiques & techniques",
      date: "2024 – 2026",
      desc: "Développement web, conception (UML), projets data/BI, projets Python/Java.",
    },
    {
      title: "Activités associatives / communication",
      date: "—",
      desc: "Organisation, prise de parole, travail en équipe, sens des responsabilités.",
    },
  ];

  return (
    <section id="experience" className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
          Expériences
        </h2>

        <div className="mt-8 grid gap-4">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <h3 className="text-base font-semibold text-slate-900">{it.title}</h3>
                <span className="text-sm text-slate-500">{it.date}</span>
              </div>
              <p className="mt-3 text-slate-600">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
