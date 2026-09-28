import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Megaphone, Search, Terminal, Palette } from 'lucide-react';

export const Skills: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Digital Marketing':
        return <Megaphone size={18} className="text-blue-400" />;
      case 'SEO & Content':
        return <Search size={18} className="text-emerald-400" />;
      case 'Technology':
        return <Terminal size={18} className="text-indigo-400" />;
      case 'Design':
        return <Palette size={18} className="text-purple-400" />;
      default:
        return <Terminal size={18} className="text-blue-400" />;
    }
  };

  const getLevelStyle = (level: string) => {
    switch (level) {
      case 'Basic / Learning':
      case 'Learning':
        return 'text-amber-400 bg-amber-400/10 border-amber-400/20';
      case 'Familiar':
        return 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20';
      case 'Skilled':
        return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
      default:
        return 'text-slate-400 bg-slate-800 border-slate-700';
    }
  };

  return (
    <section id="skills" className="py-16 md:py-24 border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
            02. Capabilities & Toolkit
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & Competencies
          </h2>
          <p className="text-slate-400 mt-2 max-w-2xl text-sm sm:text-base">
            Transparent skill assessments across marketing, content, programming, and design. Zero fake percentage meters.
          </p>
        </div>

        {/* 4 Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PORTFOLIO_DATA.skillCategories.map((cat) => (
            <div
              key={cat.category}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-slate-700/80 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-slate-800">
                  {getCategoryIcon(cat.category)}
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {cat.category}
                  </h3>
                </div>

                <div className="space-y-3.5">
                  {cat.items.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between text-xs sm:text-sm"
                    >
                      <span className="font-medium text-slate-200">{skill.name}</span>
                      <span
                        className={`px-2 py-0.5 rounded text-[11px] font-semibold border ${getLevelStyle(
                          skill.level
                        )}`}
                      >
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-800/60 text-[11px] text-slate-400">
                {cat.category === 'Technology'
                  ? 'Python & AI actively practiced in personal apps.'
                  : cat.category === 'Digital Marketing'
                  ? 'Campaign setup, targeting & analytics.'
                  : cat.category === 'SEO & Content'
                  ? 'Keyword research & on-page structure.'
                  : 'Social creatives & presentation assets.'}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
