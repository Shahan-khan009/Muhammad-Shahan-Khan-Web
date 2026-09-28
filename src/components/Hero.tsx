import React, { useRef } from 'react';
import { Camera, RefreshCw, ArrowUpRight, Code, Sparkles, MapPin } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  profileImage: string | null;
  onImageUpload: (file: File) => void;
  onResetImage: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  profileImage,
  onImageUpload,
  onResetImage,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const validTypes = ['image/jpeg', 'image/png', 'image/webp'];
      if (validTypes.includes(file.type)) {
        onImageUpload(file);
      }
    }
  };

  return (
    <section id="home" className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & Intent */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-medium text-slate-300">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for SEO, Meta Ads & Content Projects</span>
              <span className="text-slate-500">·</span>
              <span className="flex items-center gap-1 text-slate-400">
                <MapPin size={11} /> {PORTFOLIO_DATA.location}
              </span>
            </div>

            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                {PORTFOLIO_DATA.preferredName}
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-blue-400">
                {PORTFOLIO_DATA.headline}
              </p>
              <p className="text-sm font-medium text-slate-400">
                Future Direction:{' '}
                <span className="text-slate-200">{PORTFOLIO_DATA.futureDirection}</span>
              </p>
            </div>

            {/* Introduction Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/70 border border-slate-800/90 backdrop-blur-sm space-y-3">
              <div className="text-base sm:text-lg font-medium text-slate-100">
                Hi, I’m Shahan! 👋
              </div>
              <div className="text-sm font-semibold text-blue-300">
                Digital Marketer & SEO Specialist 🚀
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                I help brands grow with SEO, targeted Meta Ads (FB & IG), and high-converting blog/article content. Skilled in email marketing, Canva design, AI tools, and full website setups (Domain & Hosting). Let’s scale your business!
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#about"
                className="px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-0.5"
              >
                About Me
              </a>
              <a
                href="#projects"
                className="px-5 py-2.5 text-sm font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl transition-all hover:-translate-y-0.5 flex items-center gap-1"
              >
                View Projects
                <ArrowUpRight size={15} />
              </a>
              <a
                href="#contact"
                className="px-5 py-2.5 text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-900/60 rounded-xl transition-all"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right Column: Profile Image Frame (Strictly replaces the old 'MS' placeholder) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative group">
              {/* Outer decorative ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-3xl blur-md opacity-30 group-hover:opacity-60 transition duration-500" />
              
              {/* Profile Image Box */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl bg-slate-900 border-2 border-slate-700/80 overflow-hidden shadow-2xl flex items-center justify-center">
                {profileImage ? (
                  <img
                    src={profileImage}
                    alt={PORTFOLIO_DATA.fullName}
                    className="w-full h-full object-cover object-top transition duration-300 group-hover:scale-105"
                  />
                ) : (
                  /* Tasteful Fallback Portrait Graphic (No 'MS' initials) */
                  <div className="w-full h-full bg-gradient-to-b from-slate-800 to-slate-950 flex flex-col items-center justify-center text-center p-6">
                    <div className="w-24 h-24 rounded-full bg-slate-800/90 border border-slate-700 flex items-center justify-center text-slate-400 mb-3 shadow-inner">
                      <svg
                        className="w-14 h-14 text-slate-400"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                    </div>
                    <div className="text-sm font-semibold text-slate-200">
                      {PORTFOLIO_DATA.preferredName}
                    </div>
                    <div className="text-xs text-slate-400 mt-1">
                      Digital Marketer & Tech Enthusiast
                    </div>
                  </div>
                )}

                {/* Floating quick upload overlay button */}
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="absolute bottom-3 right-3 p-2 bg-slate-950/85 hover:bg-blue-600 text-slate-200 hover:text-white rounded-xl backdrop-blur-md border border-slate-700/80 transition-all shadow-lg text-xs flex items-center gap-1.5"
                  title="Upload / Change Profile Photo"
                >
                  <Camera size={14} />
                  <span className="text-[11px] font-medium pr-1">Photo</span>
                </button>
              </div>

              {/* Hidden file input for photo upload */}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/jpeg,image/png,image/webp"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>

            {/* Photo controls & caption */}
            <div className="mt-4 flex items-center gap-3 text-xs text-slate-400">
              <button
                onClick={() => fileInputRef.current?.click()}
                className="hover:text-blue-400 transition-colors flex items-center gap-1"
              >
                <Camera size={13} />
                <span>Upload New Photo</span>
              </button>

              {profileImage && (
                <>
                  <span className="text-slate-600">·</span>
                  <button
                    onClick={onResetImage}
                    className="hover:text-slate-300 transition-colors flex items-center gap-1"
                  >
                    <RefreshCw size={12} />
                    <span>Reset</span>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Highlight Metrics / Proof Row */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
            <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
              Education
            </div>
            <div className="text-base font-bold text-white mt-1">11th Year CS</div>
            <div className="text-xs text-slate-400 mt-0.5">Govt. Degree College #6</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
            <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
              Marketing
            </div>
            <div className="text-base font-bold text-white mt-1">SEO & Meta Ads</div>
            <div className="text-xs text-slate-400 mt-0.5">Targeted FB & IG campaigns</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
            <div className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">
              Learning Apps
            </div>
            <div className="text-base font-bold text-white mt-1">2 Web Projects</div>
            <div className="text-xs text-slate-400 mt-0.5">Hidayah Hub & Hadith Hub</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
            <div className="text-xs font-semibold text-purple-400 uppercase tracking-wider">
              Target Career
            </div>
            <div className="text-base font-bold text-white mt-1">Software Engineer</div>
            <div className="text-xs text-slate-400 mt-0.5">& Future Business Owner</div>
          </div>
        </div>

      </div>
    </section>
  );
};
