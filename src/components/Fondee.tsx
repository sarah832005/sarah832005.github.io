import Image from "next/image";

export default function Fondee() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* léger fond pour unifier */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-20 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-200/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-16 grid gap-12 md:grid-cols-2 items-center">
        {/* Image owl - intégrée, sans cadrage dur */}
        <div className="flex justify-center md:justify-start">
          <div className="relative w-full max-w-lg">
            {/* fondu pour éviter "cadre" */}
            <div className="pointer-events-none absolute -inset-6 bg-gradient-to-r from-white via-white/70 to-white opacity-90" />
            <Image
              src="/owl-geometry.png"
              alt="Fondée - Owl Geometry"
              width={700}
              height={900}
              className="relative w-full opacity-100 mix-blend-multiply"
            />
          </div>
        </div>

        {/* Texte */}
        <div>
          {/* Titre + logo */}
          <div className="flex items-center gap-2">
            <span className="relative h-9 w-9 overflow-hidden rounded-lg bg-white ring-1 ring-slate-200">
  <Image
    src="/logo.png"
    alt="Fondée logo"
    fill
    className="object-cover object-center scale-[1.9]"
  />
</span>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
              Fondée.
            </h2>
          </div>

          <p className="mt-3 text-slate-600">
            “Fondée” n’est pas un mot choisi au hasard.
Il reflète ma manière de penser et de travailler :
comprendre en profondeur avant d’agir, pour construire des solutions cohérentes et durables.
          </p>

          {/* 3 cartes */}
          <div className="mt-8 grid gap-4">
            <div className="rounded-2xl border border-slate-200 bg-white/70 p-5 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">Observation</h3>
              <p className="mt-1 text-slate-600">
                Juste comme le hibou, je privilégie une observation approfondie avant toute décision
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white/70 p-5 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">Analyse</h3>
              <p className="mt-1 text-slate-600">
                J’organise les idées en nœuds logiques afin de construire une vision claire
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white/70 p-5 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">Construction</h3>
              <p className="mt-1 text-slate-600">
                Enfin, sur une base solide, l’action s’enchaîne naturellement et sans rupture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
