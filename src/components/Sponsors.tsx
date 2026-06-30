const sponsors = [
  { name: "SEBRAE", tier: "Realização" },
  { name: "Governo do Ceará", tier: "Apoio" },
  { name: "Prefeitura de Fortaleza", tier: "Apoio" },
  { name: "FIEC", tier: "Parceiro" },
  { name: "UFC", tier: "Parceiro" },
  { name: "Softex", tier: "Parceiro" },
];

const Sponsors = () => {
  return (
    <section id="patrocinadores" className="relative py-14 sm:py-24 px-4 sm:px-6 bg-brand-navy">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-brand-red text-xs sm:text-sm font-bold uppercase tracking-widest">Patrocinadores</span>
          <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-bold mt-3 sm:mt-4">
            Quem <span className="text-gradient">acredita</span> conosco
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-6">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="glass rounded-xl sm:rounded-2xl p-4 sm:p-8 flex flex-col items-center justify-center text-center hover:bg-white/10 transition-all duration-300 min-h-[90px] sm:min-h-[120px]"
            >
              <div className="font-heading font-bold text-sm sm:text-xl text-white/80 leading-snug">
                {sponsor.name}
              </div>
              <span className="text-xs text-brand-red font-semibold uppercase tracking-widest mt-2">
                {sponsor.tier}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
