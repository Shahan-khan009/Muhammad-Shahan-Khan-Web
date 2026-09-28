import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import {
  Search,
  KeyRound,
  FileText,
  Share2,
  Mail,
  Palette,
  Globe,
  TrendingUp,
} from 'lucide-react';

export const Services: React.FC = () => {
  const getServiceIcon = (title: string) => {
    switch (title) {
      case 'SEO':
        return <Search size={20} className="text-blue-400" />;
      case 'Keyword Research':
        return <KeyRound size={20} className="text-emerald-400" />;
      case 'Blog Writing':
        return <FileText size={20} className="text-cyan-400" />;
      case 'Meta Ads':
        return <Share2 size={20} className="text-indigo-400" />;
      case 'Email Marketing':
        return <Mail size={20} className="text-purple-400" />;
      case 'Canva Design':
        return <Palette size={20} className="text-pink-400" />;
      case 'Website Setup':
        return <Globe size={20} className="text-amber-400" />;
      case 'Digital Marketing':
        return <TrendingUp size={20} className="text-emerald-400" />;
      default:
        return <Search size={20} className="text-blue-400" />;
    }
  };

  return (
    <section id="services" className="py-16 md:py-24 border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
            06. Offerings & Assistance
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Services & Expertise
          </h2>
          <p className="text-slate-400 mt-2 max-w-2xl text-sm sm:text-base">
            Transparent, dedicated services tailored to help websites, creators, and brands build digital reach.
          </p>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PORTFOLIO_DATA.services.map((service) => (
            <div
              key={service.title}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-slate-700/80 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-slate-800/80 flex items-center justify-center border border-slate-700/60 group-hover:scale-105 transition-transform">
                  {getServiceIcon(service.title)}
                </div>

                <h3 className="text-base font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-800/60 text-[11px] text-slate-400 font-medium">
                Transparent Execution
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
