const speakers = [
  { name: "Ana Silva", role: "CEO, TechNordeste", initials: "AS" },
  { name: "Carlos Mendes", role: "Investidor Anjo", initials: "CM" },
  { name: "Juliana Costa", role: "Fundadora, StartupCE", initials: "JC" },
  { name: "Roberto Lima", role: "Diretor, SEBRAE-CE", initials: "RL" },
];

const Speakers = () => {
  return (
    <section id="palestrantes" className="relative py-14 sm:py-24 px-4 sm:px-6 bg-brand-dark">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-brand-red/10 rounded-full blur-[120px]" />
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-brand-red text-xs sm:text-sm font-bold uppercase tracking-widest">Palestrantes</span>
          <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-bold mt-3 sm:mt-4">
            Quem vai <span className="text-gradient">inspirar você</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {speakers.map((speaker) => (
            <div
              key={speaker.name}
              className="stat-card rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center group cursor-default"
            >
              <div className="w-14 h-14 sm:w-20 sm:h-20 mx-auto rounded-full bg-gradient-to-br from-brand-red to-brand-gold flex items-center justify-center font-heading font-bold text-base sm:text-xl mb-3 sm:mb-4 group-hover:scale-105 transition-transform duration-300">
                {speaker.initials}
              </div>
              <h3 className="font-heading font-bold text-sm sm:text-lg">{speaker.name}</h3>
              <p className="text-white/50 text-xs sm:text-sm mt-1 leading-snug">{speaker.role}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="glass text-white/80 hover:text-white px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:bg-white/10">
            Ver todos os palestrantes →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Speakers;
