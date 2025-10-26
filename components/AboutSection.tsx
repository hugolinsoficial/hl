import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-brand-blue">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 flex justify-center items-center" data-aos="fade-right">
            <div 
              className="w-[280px] h-[280px] md:w-[360px] md:h-[360px] rounded-full overflow-hidden shadow-2xl border-4 border-brand-orange"
            >
              <img 
                src="https://i.ibb.co/zKwPJ1v/hugoperfilsite.png" 
                alt="Foto do artista Hugo Lins"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:w-1/2 text-center md:text-left" data-aos="fade-left">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Quem é Hugo Lins?
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Cantor e compositor sertanejo com presença marcante e repertório que une tradição e modernidade. Shows personalizados para cada público e evento, garantindo uma experiência única e inesquecível, cheia de energia e emoção.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;