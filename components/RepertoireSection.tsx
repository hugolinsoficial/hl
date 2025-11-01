
import React from 'react';

const songs = [
  "Evidências",
  "Cuida Bem Dela",
  "Tá Escrito",
  "Classificados",
  "Amei Te Ver",
  "Pássaro de Fogo"
];

const RepertoireSection: React.FC = () => {
  return (
    <section id="repertorio" className="py-20 bg-white text-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-orange mb-2" data-aos="fade-up">Repertório</h2>
          <p className="text-lg text-gray-600" data-aos="fade-up" data-aos-delay="100">Um show pensado para emocionar e animar.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div data-aos="fade-right">
            <ul className="space-y-4 mb-8">
              {songs.map((song, index) => (
                <li key={index} className="flex items-center text-xl p-3 bg-gray-100 rounded-lg shadow-sm">
                  <i className="fas fa-music text-brand-orange mr-4"></i>
                  <span>{song}</span>
                </li>
              ))}
            </ul>
            <div className="text-center">
              <a
                href="https://open.spotify.com/playlist/6Oix3oAsYpkcq1hE6HSXoo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-blue text-white font-semibold py-3 px-8 rounded-full text-lg shadow-lg hover:bg-opacity-90 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Ver playlist completa
              </a>
            </div>
          </div>
          <div className="space-y-8" data-aos="fade-left">
             <div className="rounded-xl overflow-hidden shadow-2xl">
              <iframe
                style={{ borderRadius: '12px' }}
                src="https://open.spotify.com/embed/playlist/6Oix3oAsYpkcq1hE6HSXoo?utm_source=generator&theme=0"
                width="100%"
                height="352"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Spotify Playlist"
              ></iframe>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl aspect-video">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RepertoireSection;