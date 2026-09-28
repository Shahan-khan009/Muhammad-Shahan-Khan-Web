import { SkillCategory, ProjectItem, CertificateItem, ServiceItem, SocialLink } from '../types/portfolio';

export const PORTFOLIO_DATA = {
  fullName: "Muhammad Shahan Khan",
  preferredName: "Muhammad Shahan Khan",
  location: "Karachi, Pakistan",
  age: 17,
  headline: "Digital Marketer | SEO & Content Strategist | AI Tech Enthusiast",
  futureDirection: "Aspiring Software Engineer & Business Owner",
  shortIntro:
    "Hi, I’m Shahan! 👋\n\nDigital Marketer & SEO Specialist 🚀\n\nI help brands grow with SEO, targeted Meta Ads (FB & IG), and high-converting blog/article content. Skilled in email marketing, Canva design, AI tools, and full website setups (Domain & Hosting). Let’s scale your business!",
  about: {
    lead: "I am a dedicated Computer Science student based in Karachi with a keen focus on technology, Artificial Intelligence, software development, digital marketing, and entrepreneurship.",
    body: "Currently enrolled in my 11th Year (First Year) of studies, I am actively developing both my technical and digital skills. I believe in learning by building — coding web applications using Python & Streamlit, experimenting with AI workflows, and applying strategic SEO and digital marketing practices.",
    goals: "My long-term aspirations are to become a Software Engineer and Business Owner. I am driven by the intersection where robust software engineering, artificial intelligence, and strategic marketing converge to create meaningful digital ventures.",
    honestyNote: "Note: I am currently learning and developing my skills. Software engineering and business ownership are my future goals, not my current titles.",
  },
  education: {
    current: {
      year: "11th Year / First Year",
      field: "Computer Science",
      institution: "Govt. Degree College Korangi #6, Karachi",
      status: "Currently Studying",
      description: "Focused on computing foundations, programming logic, mathematics, and hands-on technological exploration."
    },
    matric: {
      status: "Completed",
      school: "Taj Terbeeyat Project #2 School",
      description: "Successfully completed secondary school education in Karachi at Taj Terbeeyat Project #2 School with a science foundation."
    }
  },
  skillCategories: [
    {
      category: "Digital Marketing",
      items: [
        { name: "Digital Marketing", level: "Skilled" },
        { name: "Meta Ads", level: "Skilled" },
        { name: "Email Marketing", level: "Familiar" }
      ]
    },
    {
      category: "SEO & Content",
      items: [
        { name: "SEO", level: "Skilled" },
        { name: "Keyword Research", level: "Skilled" },
        { name: "Blog Writing", level: "Skilled" }
      ]
    },
    {
      category: "Technology",
      items: [
        { name: "Python", level: "Basic / Learning" },
        { name: "Artificial Intelligence", level: "Learning" },
        { name: "AI Tools", level: "Skilled" },
        { name: "Website Setup", level: "Skilled" }
      ]
    },
    {
      category: "Design",
      items: [
        { name: "Canva", level: "Skilled" }
      ]
    }
  ] as SkillCategory[],
  projects: [
    {
      id: "hidayah-hub",
      name: "Hidayah Hub",
      description: "Hidayah Hub is an Islamic learning web project focused on Quran-related content. It provides Quran Surah navigation, Arabic Quran content, translations, and Quran audio features.",
      tech: ["Python", "Streamlit", "APIs", "Web Development"],
      url: "https://hidayah-hb.streamlit.app",
      type: "Personal Learning Project"
    },
    {
      id: "hadith-hub",
      name: "Hadith Hub",
      description: "Hadith Hub is an Islamic Hadith web project designed to help users explore Hadith books, chapters, and Hadith content through an organized web interface.",
      tech: ["Python", "Streamlit", "APIs", "Web Development"],
      url: "https://hadith-app-50.streamlit.app/",
      type: "Personal Learning Project"
    }
  ] as ProjectItem[],
  certificates: [
    { title: "CIT Certificate", status: "Completed" },
    { title: "Digital Marketing Certificate", status: "Completed" },
    { title: "Artificial Intelligence", status: "In Progress" }
  ] as CertificateItem[],
  services: [
    {
      title: "SEO",
      description: "On-page search optimization, structural improvements, and meta configurations to enhance search visibility."
    },
    {
      title: "Keyword Research",
      description: "Pinpointing target queries, search intent, and content gaps to connect with your target audience."
    },
    {
      title: "Blog Writing",
      description: "Well-researched, high-converting articles and blog posts written to provide clear answers and drive engagement."
    },
    {
      title: "Meta Ads",
      description: "Strategic campaign setup and targeting across Facebook and Instagram to reach interested prospects."
    },
    {
      title: "Email Marketing",
      description: "Clean email campaign layouts and subscriber messaging to foster direct, authentic communication."
    },
    {
      title: "Canva Design",
      description: "Polished promotional graphics, presentation materials, social media creatives, and visual assets."
    },
    {
      title: "Website Setup",
      description: "Guidance and configuration for domain registration, web hosting environments, and foundational setups."
    },
    {
      title: "Digital Marketing",
      description: "Cohesive multi-channel digital marketing approach connecting content, organic reach, and targeted distribution."
    }
  ] as ServiceItem[],
  futureGoals: [
    {
      step: "01",
      title: "Software Engineer",
      timeline: "Target Milestone 1",
      description: "Master computer science theory, full-stack architecture, algorithms, and scalable web engineering."
    },
    {
      step: "02",
      title: "AI & Tech Professional",
      timeline: "Target Milestone 2",
      description: "Develop deep expertise in applied machine learning, generative AI systems, and automated tech pipelines."
    },
    {
      step: "03",
      title: "Business Owner / Entrepreneur",
      timeline: "Target Milestone 3",
      description: "Combine software development, AI innovation, and digital marketing to build and lead high-impact tech ventures."
    }
  ],
  socialLinks: [
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/shahan-khan-6522ba41/",
      username: "shahan-khan-6522ba41"
    },
    {
      platform: "Facebook",
      url: "https://www.facebook.com/profile.php?id=61574388427205",
      username: "Muhammad Shahan"
    },
    {
      platform: "Instagram",
      url: "https://www.instagram.com/silverkulwatches/",
      username: "@silverkulwatches"
    },
    {
      platform: "GitHub",
      url: "https://github.com/Shahan-khan009",
      username: "Shahan-khan009"
    },
    {
      platform: "X",
      url: "https://x.com/MShahanKhan666",
      username: "@MShahanKhan666"
    },
    {
      platform: "Medium",
      url: "https://medium.com/@aj623218",
      username: "@aj623218"
    }
  ] as SocialLink[]
};
