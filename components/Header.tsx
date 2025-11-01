import React, { useState, useEffect } from 'react';

const navLinks = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#repertorio', label: 'Repertório' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contato', label: 'Contato' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
      setIsMenuOpen(false);
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? 'bg-brand-blue shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">

        {/* ✅ LOGO AQUI — COLE SUA URL NO src="" */}
        <a href="#home" className="flex items-center" data-aos="fade-down">
          <img 
            src="https://i.postimg.cc/Kv1rMQFW/logo-principal-otimizada.webp" 
            alt="Hugo Lins Logo" 
            className="h-12 w-auto object-contain brightness-110 hover:brightness-125 transition-all"
          />
        </a>

        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white font-medium hover:text-brand-orange transition-colors duration-300"
              data-aos="fade-down"
              data-aos-delay={100 + navLinks.indexOf(link) * 100}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl text-white`}></i>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-brand-blue pb-4" data-aos="fade-down">
          <nav className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="text-white text-lg font-medium hover:text-brand-orange transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
