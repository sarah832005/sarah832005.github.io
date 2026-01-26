import Image from "next/image";

export default function Navbar() {
  const items = [
    { label: "Home", href: "#home" },
    { label: "À propos", href: "#about" },
    { label: "Formation", href: "#formation" },
    { label: "Compétences", href: "#skills" },
    { label: "Projets", href: "#projects" },
    { label: "Expériences", href: "#experience" },
    { label: "Attestations", href: "#certifications" },
    { label: "Contact", href: "#contact" },
    

    
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <a href="#home" className="flex items-center gap-3">
  <span className="relative h-9 w-9 overflow-hidden rounded-lg bg-white ring-1 ring-slate-200">
    <Image
      src="/logo.png"
      alt="Fondée logo"
      fill
      priority
      className="object-cover object-center scale-[1.9]"
    />
  </span>

  <span className="text-lg font-semibold text-slate-900">
    Fondée.
  </span>
</a>
        {/* Navigation links */}
        <div className="hidden md:flex items-center gap-6">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-700 hover:text-slate-900 transition"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <a
            href="/cv.pdf"
            target="_blank"
            className="hidden sm:inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 transition"
          >
            CV
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition"
          >
            Me contacter
          </a>
        </div>
      </nav>
    </header>
  );
}
