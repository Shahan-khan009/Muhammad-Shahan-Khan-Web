import React, { useState } from 'react';
import { X, Copy, Check, Download, Terminal, FileCode, FileText } from 'lucide-react';

interface CodeExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CodeExportModal: React.FC<CodeExportModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'app' | 'requirements' | 'readme'>('app');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const appPyCode = `"""
=============================================================================
PORTFOLIO WEBSITE - MUHAMMAD SHAHAN KHAN
=============================================================================
A modern, professional personal portfolio and introduction web app built with
Python & Streamlit.

To run locally:
    streamlit run app.py
=============================================================================
"""

import os
import streamlit as st
from PIL import Image

# 1. CONFIGURATION & PERSONAL INFORMATION (EASY TO EDIT)
PROFILE = {
    "full_name": "Muhammad Shahan Khan",
    "preferred_name": "Muhammad Shahan Khan",
    "location": "Karachi, Pakistan",
    "age": 17,
    "headline": "Digital Marketer | SEO & Content Strategist | AI Tech Enthusiast",
    "future_direction": "Aspiring Software Engineer & Business Owner",
    "short_intro": (
        "Hi, I’m Shahan! 👋\\n\\n"
        "Digital Marketer & SEO Specialist 🚀\\n\\n"
        "I help brands grow with SEO, targeted Meta Ads (FB & IG), and high-converting "
        "blog/article content. Skilled in email marketing, Canva design, AI tools, and "
        "full website setups (Domain & Hosting). Let’s scale your business!"
    ),
    "education": {
        "current_level": "11th Year / First Year",
        "field": "Computer Science",
        "institution": "Govt. Degree College Korangi #6, Karachi",
        "matric": "Completed"
    },
    "projects": [
        {
            "name": "Hidayah Hub",
            "description": "Hidayah Hub is an Islamic learning web project focused on Quran-related content. It provides Quran Surah navigation, Arabic Quran content, translations, and Quran audio features.",
            "tech": ["Python", "Streamlit", "APIs", "Web Development"],
            "url": "https://hidayah-hb.streamlit.app"
        },
        {
            "name": "Hadith Hub",
            "description": "Hadith Hub is an Islamic Hadith web project designed to help users explore Hadith books, chapters, and Hadith content through an organized web interface.",
            "tech": ["Python", "Streamlit", "APIs", "Web Development"],
            "url": "https://hadith-app-50.streamlit.app/"
        }
    ],
    "social_links": {
        "LinkedIn": "https://www.linkedin.com/in/shahan-khan-6522ba41/",
        "Facebook": "https://www.facebook.com/profile.php?id=61574388427205",
        "Instagram": "https://www.instagram.com/silverkulwatches/",
        "GitHub": "https://github.com/Shahan-khan009",
        "X": "https://x.com/MShahanKhan666",
        "Medium": "https://medium.com/@aj623218"
    }
}

# (The complete full code is saved in /app.py in this repository)
`;

  const reqCode = `streamlit>=1.35.0
pillow>=10.2.0
google-genai>=0.1.1
`;

  const readmeCode = `# Quick Start

1. Install dependencies:
   pip install -r requirements.txt

2. Run the Streamlit website:
   streamlit run app.py

3. Add your photo to:
   assets/profile.jpg
`;

  const getCurrentContent = () => {
    switch (activeTab) {
      case 'app':
        return appPyCode;
      case 'requirements':
        return reqCode;
      case 'readme':
        return readmeCode;
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getCurrentContent());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const filename = activeTab === 'app' ? 'app.py' : activeTab === 'requirements' ? 'requirements.txt' : 'README.md';
    const blob = new Blob([getCurrentContent()], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-3xl h-[640px] max-h-[90vh] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="px-5 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center">
              <Terminal size={18} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Streamlit Source Code & Files</h3>
              <p className="text-[11px] text-slate-400">
                Ready to run locally in VS Code with <code className="text-blue-300">streamlit run app.py</code>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center gap-1.5 transition-colors border border-slate-700"
            >
              {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>

            <button
              onClick={handleDownload}
              className="px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white flex items-center gap-1.5 transition-colors"
            >
              <Download size={14} />
              <span>Download</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors ml-1"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* File Tabs */}
        <div className="px-4 py-2 border-b border-slate-800 bg-slate-950/40 flex items-center gap-2 text-xs font-medium">
          <button
            onClick={() => setActiveTab('app')}
            className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors ${
              activeTab === 'app'
                ? 'bg-slate-800 text-white border border-slate-700'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <FileCode size={14} className="text-blue-400" />
            <span>app.py</span>
          </button>

          <button
            onClick={() => setActiveTab('requirements')}
            className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors ${
              activeTab === 'requirements'
                ? 'bg-slate-800 text-white border border-slate-700'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <FileText size={14} className="text-emerald-400" />
            <span>requirements.txt</span>
          </button>

          <button
            onClick={() => setActiveTab('readme')}
            className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors ${
              activeTab === 'readme'
                ? 'bg-slate-800 text-white border border-slate-700'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <FileText size={14} className="text-purple-400" />
            <span>README.md</span>
          </button>
        </div>

        {/* Code Content View */}
        <div className="flex-1 overflow-auto p-4 bg-slate-950 font-mono text-xs text-slate-300">
          <pre className="whitespace-pre-wrap">{getCurrentContent()}</pre>
        </div>

        {/* Footer command prompt tip */}
        <div className="px-5 py-3 border-t border-slate-800 bg-slate-950/80 flex items-center justify-between text-xs text-slate-400">
          <span>The full project is also saved directly in your workspace repository root.</span>
          <code className="text-blue-400 font-semibold">streamlit run app.py</code>
        </div>

      </div>
    </div>
  );
};
