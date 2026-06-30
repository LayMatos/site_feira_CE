import Navbar from "./Navbar";
import Countdown from "./Countdown";

const stats = [
  { value: "+60k", label: "Inscritos" },
  { value: "+200", label: "Palestrantes" },
  { value: "+160", label: "Expositores" },
  { value: "+300", label: "Startups" },
];

const partners = ["SEBRAE", "GOVERNO CE", "FORTALEZA"];

const Hero = () => {
  return (
    <section className="relative flex flex-col overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-brand-dark" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "url('/background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-navy/90 to-brand-dark" />
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Glow orbs — menores no mobile */}
      <div className="absolute top-1/4 -left-20 w-48 h-48 sm:w-96 sm:h-96 bg-brand-red/20 rounded-full blur-[80px] sm:blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-20 w-40 h-40 sm:w-80 sm:h-80 bg-brand-gold/10 rounded-full blur-[60px] sm:blur-[100px] animate-pulse-glow" style={{ animationDelay: "2s" }} />

      <Navbar />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 pt-20 sm:pt-28 pb-10 sm:pb-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 glass rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-medium text-white/80 mb-5 sm:mb-8">
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-brand-red animate-pulse shrink-0" />
          <span className="hidden sm:inline">Evento Gratuito · 8 a 10 de Outubro 2026</span>
          <span className="sm:hidden">Gratuito · 8–10 Out 2026</span>
        </div>

        {/* Title */}
        <h1 className="font-heading text-[1.5rem] leading-[1.25] sm:text-4xl md:text-5xl lg:text-6xl font-bold max-w-3xl tracking-normal">
          O MAIOR MOVIMENTO DE{" "}
          <span className="text-gradient">EMPREENDEDORISMO E INOVAÇÃO</span> DO CEARÁ
        </h1>

        {/* Partners */}
        <div className="flex gap-2 sm:gap-3 mt-5 sm:mt-8 items-center justify-center flex-wrap">
          {partners.map((name) => (
            <div
              key={name}
              className="glass rounded-lg sm:rounded-xl px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-sm font-bold tracking-wider sm:tracking-widest text-white/70 uppercase"
            >
              {name}
            </div>
          ))}
        </div>

        {/* Location */}
        <p className="mt-4 sm:mt-8 text-sm sm:text-xl text-white/70 font-light leading-relaxed">
          Centro de Eventos do Ceará
          <span className="hidden sm:inline"> · </span>
          <br className="sm:hidden" />
          Fortaleza, CE
        </p>

        {/* Countdown */}
        <div className="mt-6 sm:mt-10 w-full flex justify-center">
          <Countdown />
        </div>

        {/* CTA */}
        <div className="mt-6 sm:mt-10 flex flex-col w-full max-w-sm sm:max-w-none sm:flex-row gap-3 sm:gap-4 sm:w-auto">
          <button className="btn-primary text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-bold tracking-wide w-full sm:w-auto">
            INSCREVA-SE GRÁTIS
          </button>
          <button className="glass text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-semibold hover:bg-white/10 transition-all duration-300 w-full sm:w-auto">
            Saiba Mais
          </button>
        </div>

        {/* Tagline */}
        <p className="mt-6 sm:mt-10 text-sm sm:text-xl font-medium text-white/80 leading-relaxed px-2">
          Em <span className="text-white font-bold">2025</span>, fizemos história.{" "}
          Em <span className="text-gradient font-bold">2026</span>, vamos além!
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-6 mt-8 sm:mt-14 w-full max-w-3xl">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card rounded-xl sm:rounded-2xl px-3 py-3.5 sm:px-6 sm:py-6">
              <div className="font-heading text-xl sm:text-3xl font-bold text-gradient">
                {stat.value}
              </div>
              <div className="text-xs sm:text-base text-white/60 mt-0.5 sm:mt-1 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator — só desktop */}
      <div className="relative z-10 hidden sm:flex justify-center pb-8">
        <a href="#sobre" className="flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
