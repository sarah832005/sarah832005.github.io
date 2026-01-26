export default function Formation() {
  const items = [
    {
      title: "Baccalauréat – Sciences expérimentales",
      place: "Tunisie",
      date: "2022 – 2023",
      subtitle: null, // pas d'image pour le lycée/bac
      logo: null,
    },
    {
      title: "Licence 1 & 2 – Business Computing",
      place: "Esprit School of Business (ESB)",
      date: "2023 – 2025",
      subtitle: "Filière : Business Computing / Business Information Systems",
      // ✅ placeholder image ESB
      logo: "/esb.png",
    },
    {
      title: "Licence 3 – Conception & Développement Web",
      place: "Paris School of Technology & Business (PST&B)",
      date: "2025 – Présent",
      subtitle: "Filière : Conception et Développement Web (Double diplôme ESB–PST&B)",
      // ✅ placeholder image PSTB
      logo: "/pstb.png",
    },
  ];

  return (
    <section id="formation" className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
          Formation
        </h2>

        <div className="mt-10 space-y-8">
          {items.map((it) => (
            <div
              key={`${it.title}-${it.date}`}
              className="relative rounded-2xl bg-white border border-slate-200 p-6"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3">
                <div className="flex items-start gap-4">
                  {/* ✅ Logo uniquement pour universités */}
                  {it.logo ? (
                    <div className="h-12 w-12 rounded-xl border border-slate-200 bg-white flex items-center justify-center overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={it.logo}
                        alt={`Logo ${it.place}`}
                        className="h-full w-full object-contain p-2"
                        loading="lazy"
                      />
                    </div>
                  ) : null}

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {it.title}
                    </h3>
                    <p className="mt-1 text-slate-600">{it.place}</p>
                    {it.subtitle ? (
                      <p className="mt-1 text-sm text-slate-500">{it.subtitle}</p>
                    ) : null}
                  </div>
                </div>

                <span className="text-sm text-slate-500 md:whitespace-nowrap">
                  {it.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
