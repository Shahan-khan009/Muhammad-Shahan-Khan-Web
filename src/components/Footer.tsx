import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Linkedin, Facebook, Instagram, Github, Twitter, BookOpen } from 'lucide-react';

export const Footer: React.FC = () => {
  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'LinkedIn':
        return <Linkedin size={16} />;
      case 'Facebook':
        return <Facebook size={16} />;
      case 'Instagram':
        return <Instagram size={16} />;
      case 'GitHub':
        return <Github size={16} />;
      case 'X':
        return <Twitter size={16} />;
      case 'Medium':
        return <BookOpen size={16} />;
      default:
        return null;
    }
  };

  return (
    <footer className="border-t border-slate-900 bg-slate-950 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-4">
        
        {/* Name & Headline */}
        <div>
          <h3 className="text-lg font-bold text-white tracking-tight">
            {PORTFOLIO_DATA.preferredName}
          </h3>
          <p className="text-xs sm:text-sm font-medium text-blue-400 mt-0.5">
            {PORTFOLIO_DATA.headline}
          </p>
        </div>

        {/* Motto / Quote */}
        <p className="text-xs sm:text-sm italic text-slate-400 max-w-md">
          "Building skills today for technology and entrepreneurship tomorrow."
        </p>

        {/* Social Icons Row */}
        <div className="flex items-center gap-3 pt-2">
          {PORTFOLIO_DATA.socialLinks.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-blue-400 hover:border-slate-700 transition-colors"
              title={social.platform}
              aria-label={social.platform}
            >
              {getSocialIcon(social.platform)}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="pt-4 border-t border-slate-900 w-full text-center text-xs text-slate-400">
          <p>© {PORTFOLIO_DATA.fullName} · All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};
