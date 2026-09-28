import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-16 md:py-24 border-t border-slate-900 bg-slate-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
            03. Academic Foundations
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education
          </h2>
          <p className="text-slate-400 mt-2 max-w-2xl text-sm sm:text-base">
            Formal academic background supporting technical growth and analytical problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Current: 11th Year CS */}
          <div className="md:col-span-7 p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded text-xs font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20">
                  {PORTFOLIO_DATA.education.current.status}
                </span>
                <span className="text-xs text-slate-400">Karachi, Pakistan</span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {PORTFOLIO_DATA.education.current.year} · {PORTFOLIO_DATA.education.current.field}
                </h3>
                <p className="text-sm font-semibold text-blue-400 mt-1">
                  {PORTFOLIO_DATA.education.current.institution}
                </p>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {PORTFOLIO_DATA.education.current.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-400">
              <BookOpen size={14} className="text-blue-400" />
              <span>Core subjects: Computer Science, Mathematics, Physics, English</span>
            </div>
          </div>

          {/* Completed: Matric */}
          <div className="md:col-span-5 p-6 sm:p-8 rounded-2xl bg-slate-900/40 border border-slate-800/80 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                  {PORTFOLIO_DATA.education.matric.status}
                </span>
                <span className="text-xs text-slate-400">Karachi Board</span>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  Matriculation
                </h3>
                <p className="text-xs text-blue-400 font-medium mt-1">
                  Taj Terbeeyat Project #2 School
                </p>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {PORTFOLIO_DATA.education.matric.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-400">
              <Award size={14} className="text-emerald-400" />
              <span>Pre-requisite completed for Intermediate Computer Science</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
