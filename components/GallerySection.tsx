
import React from 'react';

const galleryImages = Array.from({ length: 6 }, (_, i) => `https://picsum.photos/seed/hugolins-gallery${i + 1}/600/400`);

const GallerySection: React.FC = () => {
  return (
    <section id="galeria" className="py-20 bg-brand-blue">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2" data-aos="fade-up">
            Momentos do Show
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((src, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-lg group" data-aos="zoom-in" data-aos-delay={index * 100}>
              <img 
                src={src} 
                alt={`Momento do show ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;