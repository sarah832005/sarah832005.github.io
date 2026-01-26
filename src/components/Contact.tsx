export default function Contact() {
  return (
    <section id="contact" className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
          Contact
        </h2>
        <p className="mt-3 text-slate-600">
          Tu peux me contacter pour une opportunité, un projet ou une collaboration.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-base font-semibold text-slate-900">Coordonnées</h3>
            <div className="mt-4 space-y-2 text-sm text-slate-700">
              <p>📧 sarahmahmoudi315@gmail.com</p>
              <p>📍 France (actuellement)</p>
              <p className="text-slate-500">LinkedIn/GitHub à ajouter</p>
            </div>
          </div>

          <form className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-base font-semibold text-slate-900">Message</h3>

            <div className="mt-4 grid gap-3">
              <input
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-200"
                placeholder="Ton nom"
              />
              <input
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-200"
                placeholder="Ton email"
              />
              <textarea
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-200"
                placeholder="Ton message"
                rows={5}
              />
              <button
                type="button"
                className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 transition"
              >
                Envoyer (à connecter)
              </button>
              <p className="text-xs text-slate-500">
                (Plus tard : on connecte ce formulaire à un service ou un mailto.)
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
