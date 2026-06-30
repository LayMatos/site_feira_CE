const features = [
  {
    icon: "🎤",
    title: "Palestras Inspiradoras",
    description: "Mais de 200 especialistas compartilhando conhecimento sobre inovação, tecnologia e negócios.",
  },
  {
    icon: "🚀",
    title: "Startups & Inovação",
    description: "Conheça as startups mais promissoras do Nordeste e conecte-se com investidores.",
  },
  {
    icon: "🤝",
    title: "Networking",
    description: "Milhares de empreendedores, investidores e profissionais em um só lugar.",
  },
  {
    icon: "🏪",
    title: "Feira de Expositores",
    description: "Mais de 160 expositores apresentando produtos, serviços e soluções inovadoras.",
  },
];

const About = () => {
  return (
    <section id="sobre" className="relative py-14 sm:py-24 px-4 sm:px-6 bg-brand-navy">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-brand-red text-xs sm:text-sm font-bold uppercase tracking-widest">Sobre o Evento</span>
          <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-bold mt-3 sm:mt-4 leading-tight px-2">
            Conectando mentes, <span className="text-gradient">transformando o futuro</span>
          </h2>
          <p className="mt-4 sm:mt-6 text-white/60 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed px-2">
            A maior feira de empreendedorismo e inovação do Ceará reúne líderes,
            startups e visionários para três dias de conteúdo, conexões e oportunidades.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="glass rounded-xl sm:rounded-2xl p-5 sm:p-6 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="font-heading font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
