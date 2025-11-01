
import React from 'react';

const socialMedia = [
  { icon: 'fa-spotify', href: 'https://open.spotify.com/playlist/6Oix3oAsYpkcq1hE6HSXoo', label: 'Spotify' },
  { icon: 'fa-youtube', href: 'https://www.youtube.com/@hugolins8872', label: 'YouTube' },
  { icon: 'fa-instagram', href: 'https://www.instagram.com/hugolinsoficial/', label: 'Instagram' },
  { icon: 'fa-tiktok', href: 'https://www.tiktok.com/@hugolinsoficial', label: 'TikTok' },
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
