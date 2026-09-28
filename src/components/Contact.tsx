import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import {
  Send,
  Linkedin,
  Facebook,
  Instagram,
  Github,
  Twitter,
  BookOpen,
  CheckCircle,
  AlertCircle,
  MapPin,
  Mail,
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (status !== 'idle') setStatus('idle');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setStatus('error');
      setErrorMessage('Please enter your name.');
      return;
    }

    if (!formData.email.trim() || !formData.email.includes('@')) {
      setStatus('error');
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    if (!formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please write a short message.');
      return;
    }

    setStatus('submitting');

    // Simulated responsive form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 600);
  };

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'LinkedIn':
        return <Linkedin size={18} />;
      case 'Facebook':
        return <Facebook size={18} />;
      case 'Instagram':
        return <Instagram size={18} />;
      case 'GitHub':
        return <Github size={18} />;
      case 'X':
        return <Twitter size={18} />;
      case 'Medium':
        return <BookOpen size={18} />;
      default:
        return <Mail size={18} />;
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
            08. Inquiries & Collaboration
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Connect
          </h2>
          <p className="text-slate-400 mt-2 max-w-2xl text-sm sm:text-base">
            Reach out directly for freelance inquiries, marketing strategies, or student collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800">
            <h3 className="text-xl font-bold text-white tracking-tight mb-2">
              Send a Message
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              Fill out the form below and I will respond to your email.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Muhammad Ali"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 text-sm transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Your Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ali@example.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 text-sm transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can I assist with your SEO, content, or Meta Ads?"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 text-sm transition-colors resize-none"
                />
              </div>

              {status === 'error' && (
                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs flex items-center gap-2">
                  <AlertCircle size={15} />
                  <span>{errorMessage}</span>
                </div>
              )}

              {status === 'success' && (
                <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs flex items-center gap-2">
                  <CheckCircle size={15} />
                  <span>Thank you! Your message has been recorded. I'll get back to you shortly.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-3 px-6 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-all text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 disabled:opacity-50"
              >
                <Send size={15} />
                <span>{status === 'submitting' ? 'Sending...' : 'Send Message'}</span>
              </button>
            </form>
          </div>

          {/* Social Profiles & Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-5">
              <h3 className="text-xl font-bold text-white tracking-tight">
                Verified Social Profiles
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Connect directly through my verified social channels:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {PORTFOLIO_DATA.socialLinks.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-blue-500/40 text-slate-300 hover:text-white flex items-center gap-2.5 transition-all text-xs font-semibold group"
                  >
                    <span className="text-blue-400 group-hover:scale-110 transition-transform">
                      {getSocialIcon(social.platform)}
                    </span>
                    <span>{social.platform} ↗</span>
                  </a>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-800/80 space-y-2 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-blue-400" />
                  <span>Karachi, Pakistan</span>
                </div>
                <div className="text-[11px] text-slate-400">
                  Timezone: GMT+5 (Pakistan Standard Time)
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
