
import React, { useEffect } from 'react';
import AOS from 'aos';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import RepertoireSection from './components/RepertoireSection';
import GallerySection from './components/GallerySection';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <div className="bg-brand-blue">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <RepertoireSection />
        <GallerySection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <a 
        href="https://wa.me/5511961148755?text=Olá! Quero falar sobre um show do Hugo Lins."
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Fale com a gente no WhatsApp"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 z-50">
        <i className="fab fa-whatsapp text-3xl"></i>
      </a>
    </div>
  );
};

export default App;
