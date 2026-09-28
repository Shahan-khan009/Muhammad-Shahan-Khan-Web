import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, User, Sparkles, AlertCircle } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ChatbotModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  id: string;
  role: 'assistant' | 'user';
  text: string;
}

const PRESET_QUESTIONS = [
  "Who is Shahan?",
  "What does Shahan do?",
  "What are Shahan's skills?",
  "What is Shahan studying?",
  "What are Shahan's projects?",
  "What is Hidayah Hub?",
  "What is Hadith Hub?",
  "What are Shahan's future goals?",
  "Does Shahan have professional experience?",
  "What services does Shahan provide?",
  "Where can I find Shahan online?"
];

export const ChatbotModal: React.FC<ChatbotModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      text: `Hello! I am Muhammad Shahan Khan's portfolio AI assistant. I can answer questions about Shahan's education, skills, projects, future goals, and services based strictly on verified facts. How can I help you today?`
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  if (!isOpen) return null;

  const sendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || loading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: textToSend.trim(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: textToSend }),
      });

      if (res.ok) {
        const data = await res.json();
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            role: 'assistant',
            text: data.reply || "I don't have that information.",
          },
        ]);
      } else {
        throw new Error('API request failed');
      }
    } catch (err) {
      // Local verified fallback logic
      const fallbackReply = getLocalAnswer(textToSend);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          text: fallbackReply,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const getLocalAnswer = (query: string): string => {
    const q = query.toLowerCase();
    if (q.includes('who is') || q.includes('about') || q.includes('introduce')) {
      return 'Muhammad Shahan Khan (known professionally as M.Shahan) is a 17-year-old Digital Marketer, SEO & Content Strategist, and AI Tech Enthusiast based in Karachi, Pakistan. He is currently an 11th Year Computer Science student aspiring to become a Software Engineer and Business Owner.';
    }
    if (q.includes('do') || q.includes('headline') || q.includes('role') || q.includes('title')) {
      return 'M.Shahan specializes in Digital Marketing, SEO, Meta Ads (Facebook & Instagram), blog/article writing, Canva design, AI tools, and website setups. Software Engineering and Business Ownership are his future aspirations.';
    }
    if (q.includes('skill') || q.includes('python') || q.includes('canva') || q.includes('meta')) {
      return "Shahan's skills include:\n• Digital Marketing: Digital Marketing, Meta Ads, Email Marketing\n• SEO & Content: SEO, Keyword Research, Blog Writing\n• Technology: Python (Basic / Learning), Artificial Intelligence (Learning), AI Tools, Website Setup\n• Design: Canva\n\nHe maintains an honest profile: Python is at a Basic/Learning stage.";
    }
    if (q.includes('study') || q.includes('education') || q.includes('college') || q.includes('matric')) {
      return 'Shahan completed his Matriculation and is currently studying Computer Science in the 11th Year (First Year) at Govt. Degree College Korangi #6, Karachi.';
    }
    if (q.includes('hidayah')) {
      return 'Hidayah Hub is an Islamic learning web project created by Shahan using Python and Streamlit. It provides Quran Surah navigation, Arabic Quran text, translations, and audio. Live at: https://hidayah-hb.streamlit.app';
    }
    if (q.includes('hadith')) {
      return 'Hadith Hub is an Islamic web project built with Python and Streamlit to help users explore Hadith books and chapters in an organized layout. Live at: https://hadith-app-50.streamlit.app/';
    }
    if (q.includes('project')) {
      return 'Shahan has developed two personal learning web projects using Python and Streamlit:\n1. Hidayah Hub (https://hidayah-hb.streamlit.app)\n2. Hadith Hub (https://hadith-app-50.streamlit.app/)\nBoth are personal learning projects demonstrating web development and API integration.';
    }
    if (q.includes('goal') || q.includes('heading') || q.includes('future')) {
      return "Shahan's future goals are to become a Software Engineer, AI/Technology Professional, and Business Owner / Entrepreneur, synthesizing computing skills with digital marketing.";
    }
    if (q.includes('experience') || q.includes('job') || q.includes('company') || q.includes('client') || q.includes('work history')) {
      return 'Shahan has no professional employment experience yet. He is actively developing practical skills through personal projects, digital marketing learning, SEO practice, AI learning, and Python coding.';
    }
    if (q.includes('service') || q.includes('offer')) {
      return 'Shahan offers services in SEO, Keyword Research, Blog Writing, Meta Ads (Facebook & Instagram), Email Marketing, Canva Graphic Design, Website Setup (Domain & Hosting), and Digital Marketing.';
    }
    if (q.includes('certificate') || q.includes('cit')) {
      return 'Shahan has completed CIT and Digital Marketing certificates. His Artificial Intelligence training is currently In Progress.';
    }
    if (q.includes('online') || q.includes('social') || q.includes('contact') || q.includes('find') || q.includes('linkedin') || q.includes('github')) {
      return 'You can connect with M.Shahan online at:\n• LinkedIn: https://www.linkedin.com/in/shahan-khan-6522ba41/\n• GitHub: https://github.com/Shahan-khan009\n• Facebook: https://www.facebook.com/profile.php?id=61574388427205\n• Instagram: https://www.instagram.com/silverkulwatches/\n• X: https://x.com/MShahanKhan666\n• Medium: https://medium.com/@aj623218';
    }
    return "I don't have that information. I can only provide verified facts regarding Shahan's education, skills, projects, and future goals.";
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-xl h-[620px] max-h-[90vh] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        
        {/* Modal Header */}
        <div className="px-5 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center">
              <Bot size={18} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                <span>Ask Shahan AI</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              </h3>
              <p className="text-[11px] text-slate-400">
                Strictly factual responses · No hallucinations
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Preset Question Chips */}
        <div className="px-4 py-2.5 border-b border-slate-800/80 bg-slate-950/40 overflow-x-auto flex gap-1.5 no-scrollbar">
          {PRESET_QUESTIONS.slice(0, 6).map((q) => (
            <button
              key={q}
              onClick={() => sendMessage(q)}
              className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/60 whitespace-nowrap transition-colors"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex items-start gap-2.5 ${
                m.role === 'user' ? 'flex-row-reverse' : 'flex-row'
              }`}
            >
              <div
                className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-xs ${
                  m.role === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-800 text-blue-400 border border-slate-700'
                }`}
              >
                {m.role === 'user' ? <User size={14} /> : <Bot size={14} />}
              </div>

              <div
                className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs sm:text-sm leading-relaxed whitespace-pre-line ${
                  m.role === 'user'
                    ? 'bg-blue-600 text-white rounded-tr-none'
                    : 'bg-slate-800/90 text-slate-200 border border-slate-700/70 rounded-tl-none'
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex items-center gap-2 text-xs text-slate-400 pl-2">
              <Bot size={14} className="text-blue-400 animate-spin" />
              <span>Thinking grounded facts...</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <div className="p-3 border-t border-slate-800 bg-slate-950/60">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage(input);
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything about Shahan's background..."
              className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 text-xs sm:text-sm"
            />
            <button
              type="submit"
              disabled={!input.trim() || loading}
              className="p-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl transition-all disabled:opacity-40"
            >
              <Send size={15} />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};
