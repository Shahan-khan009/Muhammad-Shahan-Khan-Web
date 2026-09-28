import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { CheckCircle2, Clock, Code, TrendingUp, Sparkles, BookOpen } from 'lucide-react';

export const Certificates: React.FC = () => {
  return (
    <section id="certificates" className="py-16 md:py-24 border-t border-slate-900 bg-slate-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
            05. Credentials & Practical Experience
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Certificates & Learning
          </h2>
          <p className="text-slate-400 mt-2 max-w-2xl text-sm sm:text-base">
            Verified course progression and self-directed technical growth.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {PORTFOLIO_DATA.certificates.map((cert) => {
            const isCompleted = cert.status === 'Completed';
            return (
              <div
                key={cert.title}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-center flex flex-col justify-between items-center"
              >
                <div className="mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl mx-auto flex items-center justify-center mb-3 ${
                      isCompleted
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                        : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                    }`}
                  >
                    {isCompleted ? <CheckCircle2 size={24} /> : <Clock size={24} />}
                  </div>
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {cert.title}
                  </h3>
                </div>

                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                    isCompleted
                      ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
                      : 'text-amber-400 bg-amber-500/10 border-amber-500/20'
                  }`}
                >
                  Status: {cert.status}
                </span>
              </div>
            );
          })}
        </div>

        {/* Learning & Growth Section (Experience Replacement) */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <TrendingUp size={22} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Learning & Growth
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Practical Experience Building · No Formal Employment History Yet
              </p>
            </div>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed">
            I currently have <strong className="text-white">no professional employment experience yet</strong>. In place of corporate work history, I dedicate deliberate hours toward practical competency building through live personal software projects, active SEO experimentation, digital marketing campaigns, and continuous computer science study.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-1.5">
              <div className="text-xs font-semibold text-blue-400">Personal Projects</div>
              <p className="text-xs text-slate-300">
                Architecting, deploying, and maintaining Islamic learning tools (Hidayah Hub, Hadith Hub).
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-1.5">
              <div className="text-xs font-semibold text-emerald-400">Digital Marketing & SEO</div>
              <p className="text-xs text-slate-300">
                Executing keyword discovery, competitor intent mapping, and Meta advertising campaign setups.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-1.5">
              <div className="text-xs font-semibold text-purple-400">Python & AI Development</div>
              <p className="text-xs text-slate-300">
                Coding functional Python scripts, Streamlit data dashboards, and integrating LLM APIs.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-1.5">
              <div className="text-xs font-semibold text-amber-400">Content & Blog Writing</div>
              <p className="text-xs text-slate-300">
                Structuring search-optimized articles aligned with search algorithms and reader clarity.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-1.5">
              <div className="text-xs font-semibold text-cyan-400">Website Deployment</div>
              <p className="text-xs text-slate-300">
                Configuring domain names, DNS records, hosting servers, and cloud application deployments.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-1.5">
              <div className="text-xs font-semibold text-rose-400">Hands-on Experimentation</div>
              <p className="text-xs text-slate-300">
                Testing new AI tools, Canva design techniques, and modern development frameworks.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
