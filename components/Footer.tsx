
import React from 'react';
import SocialLinks from './SocialLinks';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-footer text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-4">
          <SocialLinks />
        </div>
        <p className="text-gray-400">
          Hugo Lins © {new Date().getFullYear()} – Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
