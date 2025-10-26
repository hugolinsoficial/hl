
import React from 'react';

const socialMedia = [
  { icon: 'fa-spotify', href: '#', label: 'Spotify' },
  { icon: 'fa-youtube', href: '#', label: 'YouTube' },
  { icon: 'fa-instagram', href: '#', label: 'Instagram' },
  { icon: 'fa-tiktok', href: '#', label: 'TikTok' },
];

const SocialLinks: React.FC = () => {
  return (
    <div className="flex justify-center space-x-6">
      {socialMedia.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className="text-2xl text-white hover:text-brand-orange transform hover:scale-125 transition-all duration-300"
        >
          <i className={`fab ${social.icon}`}></i>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
