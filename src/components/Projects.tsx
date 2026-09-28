import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowUpRight, BookOpen, Layers, Terminal } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 md:py-24 border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
              04. Practical Engineering
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Web Projects
            </h2>
            <p className="text-slate-400 mt-2 max-w-2xl text-sm sm:text-base">
              Personal learning applications developed with Python & Streamlit, integrating external APIs and clean UI architectures.
            </p>
          </div>

          <div className="text-xs text-slate-400 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800 self-start md:self-auto">
            Personal Learning & Development
          </div>
        </div>

        {/* 2 Featured Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PORTFOLIO_DATA.projects.map((project, idx) => (
            <div
              key={project.id}
              className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-blue-500/40 transition-all flex flex-col justify-between group shadow-lg"
            >
              <div className="space-y-4">
                {/* Meta header */}
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="font-semibold text-blue-400 uppercase tracking-wide">
                    {project.type}
                  </span>
                  <span>0{idx + 1} / 02</span>
                </div>

                {/* Project Title */}
                <div>
                  <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-sm text-slate-300 mt-2.5 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs text-slate-400 flex items-center gap-1.5">
                  <Terminal size={13} className="text-blue-400" />
                  Deployed on Streamlit Cloud
                </span>
                
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow hover:shadow-blue-500/20"
                >
                  <span>Live Project</span>
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Development Context Note */}
        <div className="mt-8 p-4 rounded-xl bg-slate-900/40 border border-slate-800/70 text-xs text-slate-400 flex items-start gap-2.5">
          <BookOpen size={16} className="text-blue-400 shrink-0 mt-0.5" />
          <span>
            <strong>Authentic Projects Disclosure:</strong> These projects were created for personal education, coding practice, and spiritual benefit. No commercial metrics, company sponsorship, or inflated user numbers are associated with these repositories.
          </span>
        </div>

      </div>
    </section>
  );
};
