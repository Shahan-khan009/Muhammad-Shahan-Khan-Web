/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Certificates } from './components/Certificates';
import { Services } from './components/Services';
import { FutureGoals } from './components/FutureGoals';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ChatbotModal } from './components/ChatbotModal';
import { CodeExportModal } from './components/CodeExportModal';
import { Bot, Terminal } from 'lucide-react';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);
  const [isCodeOpen, setIsCodeOpen] = useState<boolean>(false);

  // Sync dark class on html root
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [darkMode]);

  // Load saved profile image from localStorage if available
  useEffect(() => {
    const saved = localStorage.getItem('shahan_profile_image');
    if (saved) {
      setProfileImage(saved);
    }
  }, []);

  const handleImageUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      if (dataUrl) {
        setProfileImage(dataUrl);
        try {
          localStorage.setItem('shahan_profile_image', dataUrl);
        } catch {
          // Ignore localStorage quota limits gracefully
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const handleResetImage = () => {
    setProfileImage(null);
    localStorage.removeItem('shahan_profile_image');
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'} selection:bg-blue-500/30 selection:text-blue-200 transition-colors duration-200`}>
      {/* Navigation */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenChat={() => setIsChatOpen(true)}
        onOpenCode={() => setIsCodeOpen(true)}
      />

      {/* Main Content */}
      <main id="home">
        <Hero
          profileImage={profileImage}
          onImageUpload={handleImageUpload}
          onResetImage={handleResetImage}
        />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Certificates />
        <Services />
        <FutureGoals />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-5 right-5 z-30 flex flex-col gap-2.5">
        <button
          onClick={() => setIsCodeOpen(true)}
          className="p-3 bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white rounded-full shadow-lg border border-slate-700/80 backdrop-blur-md transition-all hover:scale-105"
          title="View Streamlit app.py code"
          aria-label="View Streamlit source code"
        >
          <Terminal size={18} className="text-blue-400" />
        </button>

        <button
          onClick={() => setIsChatOpen(true)}
          className="p-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-xl shadow-blue-600/30 transition-all hover:scale-105"
          title="Ask AI about Shahan"
          aria-label="Open AI Chatbot"
        >
          <Bot size={20} />
        </button>
      </div>

      {/* Interactive Modals */}
      <ChatbotModal isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      <CodeExportModal isOpen={isCodeOpen} onClose={() => setIsCodeOpen(false)} />
    </div>
  );
}
