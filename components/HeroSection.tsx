import React from 'react';
import SocialLinks from './SocialLinks';

const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-center text-white overflow-hidden"
    >
      {/* 🔹 Camada de vídeo local */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/videos/hero-poster.jpg" // opcional: imagem de pré-carregamento
          className="absolute top-1/2 left-1/2 w-auto min-w-full min-h-full max-w-none transform -translate-x-1/2 -translate-y-1/2 object-cover"
        >
          <source src={`${import.meta.env.BASE_URL}videos/hero.mp4`} type="video/mp4" />
          Seu navegador não suporta a tag de vídeo.
        </video>

        {/* 🔹 Camada de gradiente para melhor legibilidade */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
      </div>

      {/* 🔹 Conteúdo principal da hero */}
      <div className="relative z-10 container mx-auto px-6">
        <h1
          className="text-5xl md:text-7xl font-serif font-bold tracking-tight mb-4"
          data-aos="fade-up"
        >
          Hugo Lins
        </h1>

        <p
          className="text-lg md:text-2xl font-light text-gray-300 mb-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Sertanejo ao vivo para festas, casamentos e eventos corporativos. Shows personalizados com
          repertório moderno e grandes clássicos do sertanejo.
        </p>

        {/* 🔹 Botões de ação */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <a
            href="https://wa.me/5511961148755?text=Olá! Gostaria de fazer um orçamento."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white font-bold py-3 px-6 md:py-4 md:px-8 rounded-xl shadow-[0_4px_15px_rgba(37,211,102,0.3)] hover:brightness-110 transform transition-all duration-300 inline-flex items-center gap-3 text-lg"
          >
            <i className="fab fa-whatsapp text-xl"></i>
            <span>Fale com a gente no WhatsApp</span>
          </a>

          <a
            href="https://open.spotify.com/playlist/6Oix3oAsYpkcq1hE6HSXoo"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-full text-lg hover:bg-brand-orange hover:border-brand-orange transform hover:scale-105 transition-all duration-300"
          >
            Ouça agora no Spotify
          </a>
        </div>

        {/* 🔹 Ícones sociais */}
        <div className="mt-12" data-aos="fade-up" data-aos-delay="600">
          <SocialLinks />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
