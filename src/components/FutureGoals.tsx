import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Code, Cpu, Building2, ArrowRight } from 'lucide-react';

export const FutureGoals: React.FC = () => {
  const getGoalIcon = (step: string) => {
    switch (step) {
      case '01':
        return <Code size={22} className="text-blue-400" />;
      case '02':
        return <Cpu size={22} className="text-emerald-400" />;
      case '03':
        return <Building2 size={22} className="text-purple-400" />;
      default:
        return <Code size={22} className="text-blue-400" />;
    }
  };

  return (
    <section className="py-16 md:py-24 border-t border-slate-900 bg-slate-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
            07. Long-Term Roadmap
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Where I'm Heading
          </h2>
          <p className="text-slate-400 mt-2 max-w-2xl text-sm sm:text-base">
            Long-term aspirations guiding my ongoing studies, coding projects, and entrepreneurial skill development.
          </p>
        </div>

        {/* 3 Step Roadmap */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {PORTFOLIO_DATA.futureGoals.map((goal, idx) => (
            <div
              key={goal.title}
              className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between relative group hover:border-slate-700 transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/80 flex items-center justify-center border border-slate-700/60">
                    {getGoalIcon(goal.step)}
                  </div>
                  <span className="text-2xl font-black text-slate-800 group-hover:text-slate-700 transition-colors">
                    {goal.step}
                  </span>
                </div>

                <div>
                  <span className="text-xs font-semibold text-blue-400 uppercase tracking-wide">
                    {goal.timeline}
                  </span>
                  <h3 className="text-xl font-bold text-white tracking-tight mt-1">
                    {goal.title}
                  </h3>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {goal.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center text-xs text-slate-400 gap-1.5 font-medium">
                <span>Aspiration in progress</span>
                <ArrowRight size={13} className="text-blue-400" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
