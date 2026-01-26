import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50"
    >
      {/* Halo de fond doux */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-24 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-200/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28 grid gap-14 md:grid-cols-2 items-center">
        
        {/* Avatar */}
        <div className="flex justify-center md:justify-start">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-slate-300/40 blur-3xl" />
            <Image
              src="/avatar-sarah.jpg"
              alt="Sarah Mahmoudi"
              width={260}
              height={260}
              priority
              className="relative rounded-full object-cover border border-slate-200 bg-white"
            />
          </div>
        </div>

        {/* Texte */}
        <div className="text-center md:text-left">
          
          {/* Signature Fondée */}
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="relative h-9 w-9 overflow-hidden rounded-lg bg-white ring-1 ring-slate-200">
  <Image
    src="/logo.png"
    alt="Fondée logo"
    fill
    className="object-cover object-center scale-[1.9]"
  />
</span>
            <span className="text-sm font-medium tracking-wide text-slate-600">
              Fondée.
            </span>
          </div>

          <h1 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight text-slate-900">
            Sarah Mahmoudi
          </h1>

          <p className="mt-5 text-lg md:text-xl text-slate-700">
            Conception et développement des systèmes d’information
          </p>

          <p className="mt-2 max-w-xl mx-auto md:mx-0 text-slate-600">
            Approche orientée vers l’analyse de données et les systèmes intelligents
          </p>

          {/* CTA */}
          <div className="mt-9 flex flex-col sm:flex-row gap-4 sm:justify-center md:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-7 py-3 text-sm font-medium text-white hover:bg-indigo-700 transition"
            >
              Voir mes projets
            </a>

            <a
              href="/cv.pdf"
              target="_blank"
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-7 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100 transition"
            >
              Télécharger mon CV
            </a>
          </div>

          {/* Manifeste */}
          <p className="mt-7 text-sm text-slate-500 tracking-wide">
            Observer • Comprendre • Construire
          </p>
        </div>
      </div>
    </section>
  );
}
