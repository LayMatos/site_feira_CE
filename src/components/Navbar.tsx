import { useState } from "react";

const links = [
  { href: "#sobre", label: "Sobre o Evento" },
  { href: "#palestrantes", label: "Palestrantes" },
  { href: "#patrocinadores", label: "Patrocinadores" },
  { href: "#expositor", label: "Seja Expositor" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-strong safe-top">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
        <a href="#" className="font-heading font-bold text-lg sm:text-xl tracking-normal">
          FEIRA<span className="text-brand-red">CE</span>
        </a>

        <div className="hidden md:flex gap-8 text-sm font-medium text-white/80">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-white transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-red transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </div>

        <button className="hidden md:block btn-primary text-white px-5 py-2.5 rounded-full text-sm font-bold tracking-wide">
          QUERO PARTICIPAR!
        </button>

        <button
          className="md:hidden text-white p-2 -mr-1"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          aria-expanded={open}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden glass border-t border-white/10 px-4 py-4 flex flex-col gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-white transition-colors py-3 text-base border-b border-white/5 last:border-0"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button className="btn-primary text-white px-5 py-3.5 rounded-full text-sm font-bold w-full mt-2">
            QUERO PARTICIPAR!
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
