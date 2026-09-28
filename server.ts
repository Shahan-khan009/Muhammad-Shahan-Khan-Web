import express, { Request, Response } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const isProd = process.env.NODE_ENV === 'production';

app.use(express.json());

// Initialize Gemini client if API key is present
const apiKey = process.env.GEMINI_API_KEY;
const ai = apiKey
  ? new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    })
  : null;

// Verified Knowledge Base for fallback & system prompt
const SHAHAN_GROUNDED_FACTS = `
You are the AI representative of Muhammad Shahan Khan.
Strictly answer questions based ONLY on these verified facts:
- Name: Muhammad Shahan Khan
- Age: 17
- Location: Karachi, Pakistan
- Current Headline: Digital Marketer | SEO & Content Strategist | AI Tech Enthusiast
- Future Direction: Aspiring Software Engineer & Business Owner (Note: Software Engineering and Business Ownership are FUTURE goals, NOT current titles. He is currently learning and developing skills).
- Education:
  * Completed Matriculation at Taj Terbeeyat Project #2 School.
  * Currently in 11th Year (First Year), studying Computer Science at Govt. Degree College Korangi #6, Karachi.
- Skills:
  * Digital Marketing: Digital Marketing (Skilled), Meta Ads (Skilled), Email Marketing (Familiar)
  * SEO & Content: SEO (Skilled), Keyword Research (Skilled), Blog Writing (Skilled)
  * Technology: Python (Basic / Learning), Artificial Intelligence (Learning), AI Tools (Skilled), Website Setup (Skilled)
  * Design: Canva (Skilled)
- Projects (Personal learning web projects):
  1. Hidayah Hub: Quran-related learning web project with Surah navigation, Arabic text, translations, and audio. Tech: Python, Streamlit, APIs, Web Development. URL: https://hidayah-hb.streamlit.app
  2. Hadith Hub: Islamic Hadith web project to explore Hadith books and chapters. Tech: Python, Streamlit, APIs, Web Development. URL: https://hadith-app-50.streamlit.app/
- Certificates:
  1. CIT Certificate: Completed
  2. Digital Marketing Certificate: Completed
  3. Artificial Intelligence: In Progress
- Experience:
  * No professional experience yet. Building practical experience through personal projects, digital marketing learning, SEO practice, AI learning, Python development, web development, and personal experimentation.
- Services: SEO, Keyword Research, Blog Writing, Meta Ads, Email Marketing, Canva Design, Website Setup, Digital Marketing.
- Social Links:
  * LinkedIn: https://www.linkedin.com/in/shahan-khan-6522ba41/
  * Facebook: https://www.facebook.com/profile.php?id=61574388427205
  * Instagram: https://www.instagram.com/silverkulwatches/
  * GitHub: https://github.com/Shahan-khan009
  * X: https://x.com/MShahanKhan666
  * Medium: https://medium.com/@aj623218

CRITICAL HONESTY RULES:
1. Never invent or hallucinate any clients, jobs, companies, internships, revenue, awards, degrees, or years of experience.
2. If the user asks for information not present in the facts above, say: "I don't have that information."
3. Keep responses authentic, professional, and concise.
`;

function getLocalVerifiedAnswer(query: string): string {
  const q = query.toLowerCase();

  if (q.includes('who is') || q.includes('about') || q.includes('introduce')) {
    return 'Muhammad Shahan Khan is a 17-year-old Digital Marketer, SEO & Content Strategist, and AI Tech Enthusiast based in Karachi, Pakistan. He is currently an 11th Year Computer Science student aspiring to become a Software Engineer and Business Owner.';
  }
  if (q.includes('do') || q.includes('headline') || q.includes('role') || q.includes('title')) {
    return 'Muhammad Shahan Khan specializes in Digital Marketing, SEO, Meta Ads (Facebook & Instagram), blog/article writing, Canva design, AI tools, and website setups. Software Engineering and Business Ownership are his future aspirations.';
  }
  if (q.includes('skill') || q.includes('python') || q.includes('canva') || q.includes('meta')) {
    return "Shahan's skills include:\n• Digital Marketing: Digital Marketing, Meta Ads, Email Marketing\n• SEO & Content: SEO, Keyword Research, Blog Writing\n• Technology: Python (Basic / Learning), Artificial Intelligence (Learning), AI Tools, Website Setup\n• Design: Canva\n\nHe maintains an honest profile: Python is at a Basic/Learning stage.";
  }
  if (q.includes('study') || q.includes('education') || q.includes('college') || q.includes('matric') || q.includes('school')) {
    return 'Muhammad Shahan Khan completed his Matriculation at Taj Terbeeyat Project #2 School and is currently studying Computer Science in the 11th Year (First Year) at Govt. Degree College Korangi #6, Karachi.';
  }
  if (q.includes('hidayah')) {
    return 'Hidayah Hub is an Islamic learning web project created by Muhammad Shahan Khan using Python and Streamlit. It provides Quran Surah navigation, Arabic Quran text, translations, and audio. Live at: https://hidayah-hb.streamlit.app';
  }
  if (q.includes('hadith')) {
    return 'Hadith Hub is an Islamic web project built with Python and Streamlit to help users explore Hadith books and chapters in an organized layout. Live at: https://hadith-app-50.streamlit.app/';
  }
  if (q.includes('project')) {
    return 'Muhammad Shahan Khan has developed two personal learning web projects using Python and Streamlit:\n1. Hidayah Hub (https://hidayah-hb.streamlit.app)\n2. Hadith Hub (https://hadith-app-50.streamlit.app/)\nBoth are personal learning projects demonstrating web development and API integration.';
  }
  if (q.includes('goal') || q.includes('heading') || q.includes('future')) {
    return "Muhammad Shahan Khan's future goals are to become a Software Engineer, AI/Technology Professional, and Business Owner / Entrepreneur, synthesizing computing skills with digital marketing.";
  }
  if (q.includes('experience') || q.includes('job') || q.includes('company') || q.includes('client') || q.includes('work history')) {
    return 'Muhammad Shahan Khan has no professional employment experience yet. He is actively developing practical skills through personal projects, digital marketing learning, SEO practice, AI learning, and Python coding.';
  }
  if (q.includes('service') || q.includes('offer')) {
    return 'Muhammad Shahan Khan offers services in SEO, Keyword Research, Blog Writing, Meta Ads (Facebook & Instagram), Email Marketing, Canva Graphic Design, Website Setup (Domain & Hosting), and Digital Marketing.';
  }
  if (q.includes('certificate') || q.includes('cit')) {
    return 'Muhammad Shahan Khan has completed CIT and Digital Marketing certificates. His Artificial Intelligence training is currently In Progress.';
  }
  if (q.includes('online') || q.includes('social') || q.includes('contact') || q.includes('find') || q.includes('linkedin') || q.includes('github')) {
    return 'You can connect with Muhammad Shahan Khan online at:\n• LinkedIn: https://www.linkedin.com/in/shahan-khan-6522ba41/\n• GitHub: https://github.com/Shahan-khan009\n• Facebook: https://www.facebook.com/profile.php?id=61574388427205\n• Instagram: https://www.instagram.com/silverkulwatches/\n• X: https://x.com/MShahanKhan666\n• Medium: https://medium.com/@aj623218';
  }

  return "I don't have that information. I can only provide verified facts regarding Shahan's education, skills, projects, and future goals.";
}

// API endpoint for AI Chatbot
app.post('/api/chat', async (req: Request, res: Response) => {
  const { message } = req.body;

  if (!message || typeof message !== 'string') {
    res.status(400).json({ error: 'Message is required' });
    return;
  }

  // Attempt Gemini API if key is present
  if (ai) {
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: [
          {
            role: 'user',
            parts: [{ text: `${SHAHAN_GROUNDED_FACTS}\n\nUser Question: ${message}` }],
          },
        ],
      });

      if (response && response.text) {
        res.json({ reply: response.text.trim() });
        return;
      }
    } catch (err) {
      console.warn('Gemini API call failed, falling back to local grounded knowledge:', err);
    }
  }

  // Instant verified fallback
  const localReply = getLocalVerifiedAnswer(message);
  res.json({ reply: localReply });
});

// Setup Vite middleware in dev or static files in production
async function startServer() {
  if (!isProd) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
