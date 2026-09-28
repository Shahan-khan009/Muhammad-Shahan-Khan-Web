import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GraduationCap, Compass, Lightbulb, ShieldCheck } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 border-t border-slate-900 bg-slate-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
            01. Background & Vision
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
          <p className="text-slate-400 mt-2 max-w-2xl text-sm sm:text-base">
            Dedicated student, digital strategist, and technology enthusiast building real-world competencies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Prose Card */}
          <div className="lg:col-span-8 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-5 leading-relaxed text-slate-300">
              <p className="text-base sm:text-lg text-white font-medium">
                {PORTFOLIO_DATA.about.lead}
              </p>
              
              <p className="text-sm sm:text-base">
                {PORTFOLIO_DATA.about.body}
              </p>

              <p className="text-sm sm:text-base">
                {PORTFOLIO_DATA.about.goals}
              </p>

              <div className="pt-4 border-t border-slate-800/80 flex items-start gap-3 text-xs text-slate-400 bg-slate-950/40 p-4 rounded-xl">
                <ShieldCheck size={18} className="text-blue-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Authentic Profile Commitment:</strong> {PORTFOLIO_DATA.about.honestyNote}
                </span>
              </div>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80 space-y-2">
                <GraduationCap className="text-blue-400" size={20} />
                <h3 className="text-sm font-bold text-white">Active Student</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Enrolled in 11th Year Computer Science at Govt. Degree College Korangi #6.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80 space-y-2">
                <Lightbulb className="text-emerald-400" size={20} />
                <h3 className="text-sm font-bold text-white">Digital Marketer</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Executing SEO keyword research, Meta advertising, and content workflows.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80 space-y-2">
                <Compass className="text-purple-400" size={20} />
                <h3 className="text-sm font-bold text-white">Future Goals</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Targeting Software Engineering & tech venture ownership as long-term aspirations.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Info Sidebar Card */}
          <div className="lg:col-span-4 p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-5">
            <h3 className="text-base font-bold text-white tracking-tight pb-3 border-b border-slate-800">
              Personal Snapshot
            </h3>

            <div className="space-y-4 text-xs sm:text-sm">
              <div>
                <span className="text-slate-400 block text-xs">Full Name</span>
                <span className="font-semibold text-slate-200">{PORTFOLIO_DATA.fullName}</span>
              </div>

              <div>
                <span className="text-slate-400 block text-xs">Preferred Name</span>
                <span className="font-semibold text-slate-200">{PORTFOLIO_DATA.preferredName}</span>
              </div>

              <div>
                <span className="text-slate-400 block text-xs">Age & Location</span>
                <span className="font-semibold text-slate-200">
                  {PORTFOLIO_DATA.age} years old · {PORTFOLIO_DATA.location}
                </span>
              </div>

              <div>
                <span className="text-slate-400 block text-xs">Current College</span>
                <span className="font-semibold text-slate-200">
                  {PORTFOLIO_DATA.education.current.institution}
                </span>
              </div>

              <div>
                <span className="text-slate-400 block text-xs">Interests</span>
                <span className="font-semibold text-slate-200">
                  Computer Science, AI, Web Development, SEO, Entrepreneurship
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
