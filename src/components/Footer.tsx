const Footer = () => {
  return (
    <footer id="expositor" className="relative bg-brand-dark border-t border-white/10">
      {/* CTA Banner */}
      <div className="relative py-12 sm:py-20 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-red/20 via-brand-navy to-brand-gold/10" />
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-bold leading-tight px-2">
            Pronto para fazer parte da{" "}
            <span className="text-gradient">maior feira do Ceará</span>?
          </h2>
          <p className="mt-3 sm:mt-4 text-white/60 text-sm sm:text-lg">
            Inscrições gratuitas. Vagas limitadas.
          </p>
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-sm sm:max-w-none mx-auto">
            <button className="btn-primary text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-bold tracking-wide w-full sm:w-auto">
              QUERO PARTICIPAR!
            </button>
            <button className="glass text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-semibold hover:bg-white/10 transition-all duration-300 w-full sm:w-auto">
              Seja um Expositor
            </button>
          </div>
        </div>
      </div>

      {/* Footer info */}
      <div className="px-4 sm:px-6 py-8 sm:py-10 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-5 sm:gap-6">
          <div className="font-heading font-bold text-lg sm:text-xl">
            FEIRA<span className="text-brand-red">CE</span>
          </div>
          <p className="text-white/40 text-xs sm:text-sm text-center leading-relaxed max-w-xs sm:max-w-none">
            8 a 10 de Outubro 2026 · Centro de Eventos do Ceará · Fortaleza, CE
          </p>
          <div className="flex gap-5 sm:gap-4">
            {["Instagram", "LinkedIn", "YouTube"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-white/40 hover:text-white text-xs sm:text-sm transition-colors duration-200"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
        <p className="text-center text-white/20 text-[10px] sm:text-xs mt-6 sm:mt-8 px-4 leading-relaxed">
          © 2026 Feira de Empreendedorismo e Inovação do Ceará. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
