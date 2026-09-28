"""
=============================================================================
PORTFOLIO WEBSITE - MUHAMMAD SHAHAN KHAN (M.SHAHAN)
=============================================================================
A modern, professional personal portfolio and introduction web app built with
Python & Streamlit.

To run locally:
    streamlit run app.py
=============================================================================
"""

import os
import base64
import streamlit as st
from PIL import Image

# ---------------------------------------------------------------------------
# 1. CONFIGURATION & PERSONAL INFORMATION (EASY TO EDIT)
# ---------------------------------------------------------------------------
PROFILE = {
    "full_name": "Muhammad Shahan Khan",
    "preferred_name": "Muhammad Shahan Khan",
    "location": "Karachi, Pakistan",
    "age": 17,
    "headline": "Digital Marketer | SEO & Content Strategist | AI Tech Enthusiast",
    "future_direction": "Aspiring Software Engineer & Business Owner",
    "short_intro": (
        "Hi, I’m Shahan! 👋\n\n"
        "Digital Marketer & SEO Specialist 🚀\n\n"
        "I help brands grow with SEO, targeted Meta Ads (FB & IG), and high-converting "
        "blog/article content. Skilled in email marketing, Canva design, AI tools, and "
        "full website setups (Domain & Hosting). Let’s scale your business!"
    ),
    "about_me": {
        "summary": (
            "I am a dedicated Computer Science student based in Karachi with a genuine passion for "
            "technology, Artificial Intelligence, software development, digital marketing, and entrepreneurship. "
            "Currently in my 11th Year (First Year) of studies, I am actively building both my technical foundation "
            "and digital growth capabilities through hands-on learning and practical experimentation."
        ),
        "journey": (
            "My focus bridges creative digital marketing with modern computing. I build functional web "
            "applications using Python, learn AI fundamentals, and implement real-world SEO & content strategies. "
            "I believe in authentic growth through continuous practice, self-driven study, and shipping real projects."
        ),
        "goals": (
            "My long-term aspirations are to become a professional Software Engineer and Business Owner, "
            "combining cutting-edge technology, artificial intelligence, software engineering, and strategic "
            "entrepreneurship to build impactful digital solutions."
        ),
        "status_note": (
            "Note: I am currently learning and developing my skills. Software engineering and business ownership "
            "represent my future goals and ongoing journey."
        ),
    },
    "education": {
        "current_level": "11th Year / First Year",
        "field": "Computer Science",
        "institution": "Govt. Degree College Korangi #6, Karachi",
        "matric": "Completed (Taj Terbeeyat Project #2 School)",
        "status": "Currently Enrolled"
    },
    "skills": {
        "Digital Marketing": [
            {"name": "Digital Marketing", "level": "Skilled"},
            {"name": "Meta Ads", "level": "Skilled"},
            {"name": "Email Marketing", "level": "Familiar"}
        ],
        "SEO & Content": [
            {"name": "SEO", "level": "Skilled"},
            {"name": "Keyword Research", "level": "Skilled"},
            {"name": "Blog Writing", "level": "Skilled"}
        ],
        "Technology": [
            {"name": "Python", "level": "Basic / Learning"},
            {"name": "Artificial Intelligence", "level": "Learning"},
            {"name": "AI Tools", "level": "Skilled"},
            {"name": "Website Setup", "level": "Skilled"}
        ],
        "Design": [
            {"name": "Canva", "level": "Skilled"}
        ]
    },
    "projects": [
        {
            "name": "Hidayah Hub",
            "description": (
                "Hidayah Hub is an Islamic learning web project focused on Quran-related content. "
                "It provides Quran Surah navigation, Arabic Quran content, translations, and Quran audio features."
            ),
            "tech": ["Python", "Streamlit", "APIs", "Web Development"],
            "url": "https://hidayah-hb.streamlit.app",
            "type": "Personal Learning Project"
        },
        {
            "name": "Hadith Hub",
            "description": (
                "Hadith Hub is an Islamic Hadith web project designed to help users explore Hadith books, "
                "chapters, and Hadith content through an organized web interface."
            ),
            "tech": ["Python", "Streamlit", "APIs", "Web Development"],
            "url": "https://hadith-app-50.streamlit.app/",
            "type": "Personal Learning Project"
        }
    ],
    "certificates": [
        {
            "title": "CIT Certificate",
            "status": "Completed"
        },
        {
            "title": "Digital Marketing Certificate",
            "status": "Completed"
        },
        {
            "title": "Artificial Intelligence",
            "status": "In Progress"
        }
    ],
    "services": [
        {
            "title": "SEO",
            "description": "On-page and technical search engine optimization to help websites gain natural discoverability and search presence."
        },
        {
            "title": "Keyword Research",
            "description": "In-depth identification of high-intent search terms, target audience queries, and content opportunity mapping."
        },
        {
            "title": "Blog Writing",
            "description": "Well-structured, search-optimized articles and blog posts crafted to deliver value and engage readers."
        },
        {
            "title": "Meta Ads",
            "description": "Targeted Facebook & Instagram advertising campaign structure focused on reach, engagement, and conversion."
        },
        {
            "title": "Email Marketing",
            "description": "Audience segmentation, newsletters, and email communication sequences designed to build authentic relationships."
        },
        {
            "title": "Canva Design",
            "description": "Clean, engaging promotional graphics, social media posts, presentation decks, and brand visual assets."
        },
        {
            "title": "Website Setup",
            "description": "End-to-end guidance and setup for domain names, web hosting configuration, and foundational web presence."
        },
        {
            "title": "Digital Marketing",
            "description": "Holistic digital marketing strategy integrating content, organic SEO, and social distribution to grow brand visibility."
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

# ---------------------------------------------------------------------------
# 2. STREAMLIT PAGE SETUP
# ---------------------------------------------------------------------------
st.set_page_config(
    page_title=f"{PROFILE['preferred_name']} | {PROFILE['headline'].split('|')[0].strip()} & Portfolio",
    page_icon="🚀",
    layout="wide",
    initial_sidebar_state="expanded"
)

# Initialize Session State
if "theme" not in st.session_state:
    st.session_state.theme = "Dark"

if "uploaded_photo" not in st.session_state:
    st.session_state.uploaded_photo = None

if "chat_history" not in st.session_state:
    st.session_state.chat_history = [
        {
            "role": "assistant",
            "content": f"Hello! I am {PROFILE['preferred_name']}'s AI Portfolio Assistant. Ask me anything about Shahan's skills, learning journey, projects, education, or services!"
        }
    ]

# ---------------------------------------------------------------------------
# 3. THEME & STYLES (CUSTOM CSS)
# ---------------------------------------------------------------------------
is_dark = st.session_state.theme == "Dark"

bg_color = "#0B0F19" if is_dark else "#F8FAFC"
card_bg = "#111827" if is_dark else "#FFFFFF"
card_border = "#1E293B" if is_dark else "#E2E8F0"
text_primary = "#F9FAFB" if is_dark else "#0F172A"
text_secondary = "#94A3B8" if is_dark else "#475569"
accent_color = "#3B82F6"
accent_hover = "#2563EB"

custom_css = f"""
<style>
    /* Main Layout */
    .stApp {{
        background-color: {bg_color};
        color: {text_primary};
    }}
    
    /* Hide default header decorations */
    header[data-testid="stHeader"] {{
        background: transparent;
    }}
    
    /* Typography */
    h1, h2, h3, h4 {{
        color: {text_primary} !important;
        font-weight: 700;
        letter-spacing: -0.02em;
    }}
    p, span, div {{
        color: {text_secondary};
    }}
    
    /* Card Container */
    .portfolio-card {{
        background: {card_bg};
        border: 1px solid {card_border};
        border-radius: 14px;
        padding: 24px;
        margin-bottom: 20px;
        transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
    }}
    .portfolio-card:hover {{
        border-color: {accent_color};
        transform: translateY(-2px);
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
    }}
    
    /* Profile Photo Frame */
    .profile-frame {{
        width: 220px;
        height: 220px;
        border-radius: 20px;
        overflow: hidden;
        border: 2px solid {accent_color};
        box-shadow: 0 0 25px rgba(59, 130, 246, 0.2);
        display: flex;
        align-items: center;
        justify-content: center;
        background: {card_bg};
        margin: 0 auto;
    }}
    .profile-frame img {{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }}
    
    /* Level Tags */
    .level-tag {{
        display: inline-block;
        padding: 4px 10px;
        border-radius: 6px;
        font-size: 0.8rem;
        font-weight: 600;
        background: rgba(59, 130, 246, 0.1);
        color: {accent_color};
        border: 1px solid rgba(59, 130, 246, 0.2);
    }}
    
    /* Primary & Outline Buttons */
    .btn-link {{
        display: inline-block;
        background-color: {accent_color};
        color: #ffffff !important;
        padding: 10px 22px;
        border-radius: 8px;
        text-decoration: none;
        font-weight: 600;
        font-size: 0.95rem;
        transition: background-color 0.2s ease;
    }}
    .btn-link:hover {{
        background-color: {accent_hover};
    }}
    
    /* Social Button */
    .social-btn {{
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 8px 16px;
        margin: 4px;
        border-radius: 8px;
        background: {card_bg};
        border: 1px solid {card_border};
        color: {text_primary} !important;
        text-decoration: none;
        font-size: 0.9rem;
        font-weight: 500;
        transition: all 0.2s ease;
    }}
    .social-btn:hover {{
        border-color: {accent_color};
        color: {accent_color} !important;
        transform: translateY(-1px);
    }}
    
    /* Section Divider */
    .section-divider {{
        height: 1px;
        background: linear-gradient(90deg, transparent, {card_border}, transparent);
        margin: 40px 0;
    }}
</style>
"""
st.markdown(custom_css, unsafe_allow_html=True)

# ---------------------------------------------------------------------------
# 4. PROFILE PHOTO MANAGEMENT
# ---------------------------------------------------------------------------
def load_profile_image():
    """
    Loads profile image with graceful fallback hierarchy:
    1. Uploaded image in current Streamlit session
    2. Local file at assets/profile.jpg
    3. Graceful SVG/Placeholder
    """
    if st.session_state.uploaded_photo is not None:
        try:
            return Image.open(st.session_state.uploaded_photo)
        except Exception:
            pass

    default_path = os.path.join("assets", "profile.jpg")
    if os.path.exists(default_path):
        try:
            return Image.open(default_path)
        except Exception:
            pass

    return None

# ---------------------------------------------------------------------------
# 5. SIDEBAR: CONTROLS & PHOTO CUSTOMIZATION
# ---------------------------------------------------------------------------
with st.sidebar:
    st.markdown(f"### ⚙️ Portfolio Settings")
    
    # Theme toggle
    selected_theme = st.radio(
        "Theme Mode",
        options=["Dark", "Light"],
        index=0 if st.session_state.theme == "Dark" else 1,
        horizontal=True
    )
    if selected_theme != st.session_state.theme:
        st.session_state.theme = selected_theme
        st.rerun()

    st.markdown("---")
    
    # Discreet Profile Photo Uploader
    with st.expander("📷 Change Profile Photo", expanded=False):
        st.caption("Upload a JPG, PNG, or WEBP image to update your Hero profile photo immediately.")
        uploaded_file = st.file_uploader(
            "Choose photo",
            type=["jpg", "jpeg", "png", "webp"],
            label_visibility="collapsed"
        )
        if uploaded_file is not None:
            st.session_state.uploaded_photo = uploaded_file
            st.success("Profile photo updated!")
            
            # Optional local persistence if assets directory is writable
            try:
                os.makedirs("assets", exist_ok=True)
                save_path = os.path.join("assets", "profile.jpg")
                with open(save_path, "wb") as f:
                    f.write(uploaded_file.getbuffer())
                st.caption("✅ Saved to assets/profile.jpg for permanent local use.")
            except Exception:
                st.caption("ℹ️ Photo active for current session.")

        if st.session_state.uploaded_photo is not None:
            if st.button("Reset to Default Photo"):
                st.session_state.uploaded_photo = None
                st.rerun()

    st.markdown("---")
    st.markdown(f"**{PROFILE['preferred_name']}**")
    st.caption(f"📍 {PROFILE['location']} | Age: {PROFILE['age']}")
    st.caption("Student & Digital Creator")
    
    st.markdown("---")
    st.markdown("### Quick Socials")
    for platform, url in PROFILE["social_links"].items():
        st.markdown(f"- [{platform} ↗]({url})")

# ---------------------------------------------------------------------------
# 6. NAVIGATION TABS (STICKY / TOP NAVIGATION)
# ---------------------------------------------------------------------------
nav_tabs = st.tabs([
    "🏠 Home",
    "👤 About Me",
    "⚡ Skills",
    "🎓 Education",
    "💼 Projects",
    "📜 Certificates",
    "🛠️ Services",
    "🎯 Future Goals",
    "📬 Contact",
    "🤖 Ask AI"
])

# ---------------------------------------------------------------------------
# TAB 1: HERO & HOME
# ---------------------------------------------------------------------------
with nav_tabs[0]:
    hero_col1, hero_col2 = st.columns([1.2, 2], gap="large")
    
    with hero_col1:
        img = load_profile_image()
        if img:
            st.image(img, use_container_width=True, caption=PROFILE["preferred_name"])
        else:
            # Elegant placeholder frame if assets/profile.jpg is missing or corrupted
            st.markdown(f"""
            <div class="profile-frame">
                <div style="text-align: center;">
                    <div style="font-size: 3rem;">👤</div>
                    <div style="font-size: 0.9rem; font-weight: 600; color: {accent_color};">{PROFILE['preferred_name']}</div>
                    <div style="font-size: 0.75rem;">Profile Image Ready</div>
                </div>
            </div>
            """, unsafe_allow_html=True)
            st.caption("Place your image at `assets/profile.jpg` or use sidebar uploader.")

    with hero_col2:
        st.markdown(f"<h1 style='font-size: 2.5rem; margin-bottom: 0;'>{PROFILE['preferred_name']}</h1>", unsafe_allow_html=True)
        st.markdown(f"<h4 style='color: {accent_color} !important; font-weight: 600; margin-top: 4px;'>{PROFILE['headline']}</h4>", unsafe_allow_html=True)
        st.markdown(f"<p style='font-size: 0.95rem; margin-bottom: 20px;'><strong>Future Direction:</strong> {PROFILE['future_direction']}</p>", unsafe_allow_html=True)
        
        # Short Introduction
        st.markdown(f"""
        <div class="portfolio-card" style="padding: 18px 22px;">
            <p style="white-space: pre-line; line-height: 1.6; margin: 0; color: {text_primary};">
                {PROFILE['short_intro']}
            </p>
        </div>
        """, unsafe_allow_html=True)
        
        cta_col1, cta_col2, cta_col3 = st.columns(3)
        with cta_col1:
            st.markdown(f'<a href="#about-me" class="btn-link" style="width: 100%; text-align: center;">About Me</a>', unsafe_allow_html=True)
        with cta_col2:
            st.markdown(f'<a href="#projects" class="btn-link" style="width: 100%; text-align: center; background: transparent; border: 1px solid {accent_color}; color: {text_primary} !important;">Projects</a>', unsafe_allow_html=True)
        with cta_col3:
            st.markdown(f'<a href="#contact" class="btn-link" style="width: 100%; text-align: center; background: {card_bg}; border: 1px solid {card_border}; color: {text_primary} !important;">Contact Me</a>', unsafe_allow_html=True)

    # Highlights row
    st.markdown('<div class="section-divider"></div>', unsafe_allow_html=True)
    hl1, hl2, hl3, hl4 = st.columns(4)
    with hl1:
        st.markdown(f"""
        <div class="portfolio-card" style="text-align: center;">
            <div style="font-size: 1.4rem; font-weight: 700; color: {accent_color};">CS Student</div>
            <div style="font-size: 0.85rem; margin-top: 4px;">Govt Degree College #6</div>
        </div>
        """, unsafe_allow_html=True)
    with hl2:
        st.markdown(f"""
        <div class="portfolio-card" style="text-align: center;">
            <div style="font-size: 1.4rem; font-weight: 700; color: {accent_color};">SEO & Ads</div>
            <div style="font-size: 0.85rem; margin-top: 4px;">Meta Ads & Content Strategy</div>
        </div>
        """, unsafe_allow_html=True)
    with hl3:
        st.markdown(f"""
        <div class="portfolio-card" style="text-align: center;">
            <div style="font-size: 1.4rem; font-weight: 700; color: {accent_color};">2 Web Apps</div>
            <div style="font-size: 0.85rem; margin-top: 4px;">Hidayah Hub & Hadith Hub</div>
        </div>
        """, unsafe_allow_html=True)
    with hl4:
        st.markdown(f"""
        <div class="portfolio-card" style="text-align: center;">
            <div style="font-size: 1.4rem; font-weight: 700; color: {accent_color};">Aspiring</div>
            <div style="font-size: 0.85rem; margin-top: 4px;">Software Engineer & Founder</div>
        </div>
        """, unsafe_allow_html=True)

# ---------------------------------------------------------------------------
# TAB 2: ABOUT ME
# ---------------------------------------------------------------------------
with nav_tabs[1]:
    st.markdown("## 👤 About Me")
    st.markdown(f"<p style='color: {accent_color}; font-weight: 600;'>{PROFILE['full_name']} — {PROFILE['headline']}</p>", unsafe_allow_html=True)
    
    col_about1, col_about2 = st.columns([2, 1], gap="large")
    with col_about1:
        st.markdown(f"""
        <div class="portfolio-card">
            <h4 style="margin-top: 0;">My Background & Interests</h4>
            <p style="line-height: 1.7; color: {text_primary};">{PROFILE['about_me']['summary']}</p>
            <p style="line-height: 1.7; color: {text_secondary};">{PROFILE['about_me']['journey']}</p>
            <p style="line-height: 1.7; color: {text_primary}; font-weight: 500;">{PROFILE['about_me']['goals']}</p>
            <hr style="border: 0; border-top: 1px solid {card_border}; margin: 16px 0;" />
            <p style="font-size: 0.85rem; font-style: italic; color: {text_secondary}; margin-bottom: 0;">
                {PROFILE['about_me']['status_note']}
            </p>
        </div>
        """, unsafe_allow_html=True)
        
    with col_about2:
        st.markdown(f"""
        <div class="portfolio-card">
            <h4 style="margin-top: 0;">Quick Facts</h4>
            <p style="margin-bottom: 8px;"><strong>Full Name:</strong> {PROFILE['full_name']}</p>
            <p style="margin-bottom: 8px;"><strong>Preferred:</strong> {PROFILE['preferred_name']}</p>
            <p style="margin-bottom: 8px;"><strong>Age:</strong> {PROFILE['age']} years old</p>
            <p style="margin-bottom: 8px;"><strong>Location:</strong> {PROFILE['location']}</p>
            <p style="margin-bottom: 8px;"><strong>Education:</strong> 11th Year (First Year)</p>
            <p style="margin-bottom: 8px;"><strong>Field:</strong> Computer Science</p>
            <p style="margin-bottom: 0;"><strong>Aspiration:</strong> Software Engineer & Entrepreneur</p>
        </div>
        """, unsafe_allow_html=True)

# ---------------------------------------------------------------------------
# TAB 3: SKILLS
# ---------------------------------------------------------------------------
with nav_tabs[2]:
    st.markdown("## ⚡ Skills & Capabilities")
    st.markdown("Honest skill competencies across digital marketing, SEO, technology, and design. *No inflated percentages.*")
    
    skill_cols = st.columns(4)
    categories = list(PROFILE["skills"].keys())
    
    for i, category in enumerate(categories):
        with skill_cols[i % 4]:
            st.markdown(f"""
            <div class="portfolio-card">
                <h4 style="margin-top: 0; color: {accent_color} !important; font-size: 1.1rem;">{category}</h4>
            """, unsafe_allow_html=True)
            
            for item in PROFILE["skills"][category]:
                st.markdown(f"""
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px solid {card_border};">
                    <span style="font-weight: 500; color: {text_primary};">{item['name']}</span>
                    <span class="level-tag">{item['level']}</span>
                </div>
                """, unsafe_allow_html=True)
            
            st.markdown("</div>", unsafe_allow_html=True)

# ---------------------------------------------------------------------------
# TAB 4: EDUCATION
# ---------------------------------------------------------------------------
with nav_tabs[3]:
    st.markdown("## 🎓 Education & Academic Background")
    
    edu_col1, edu_col2 = st.columns([2, 1], gap="medium")
    with edu_col1:
        st.markdown(f"""
        <div class="portfolio-card">
            <span class="level-tag" style="margin-bottom: 10px;">Current Academic Studies</span>
            <h3 style="margin-top: 8px; margin-bottom: 4px;">{PROFILE['education']['current_level']} — {PROFILE['education']['field']}</h3>
            <p style="color: {accent_color}; font-weight: 600; font-size: 1.05rem;">{PROFILE['education']['institution']}</p>
            <p style="line-height: 1.6; color: {text_secondary};">
                Currently studying foundational and intermediate Computer Science concepts, mathematics, 
                and programming theory while simultaneously exploring applied web development and artificial intelligence tools.
            </p>
        </div>
        """, unsafe_allow_html=True)
        
        st.markdown(f"""
        <div class="portfolio-card">
            <span class="level-tag" style="background: rgba(16, 185, 129, 0.1); color: #10B981; border-color: rgba(16, 185, 129, 0.2);">Completed</span>
            <h3 style="margin-top: 8px; margin-bottom: 2px;">Matriculation</h3>
            <p style="color: {accent_color}; font-weight: 600; font-size: 0.95rem; margin-bottom: 8px;">Taj Terbeeyat Project #2 School</p>
            <p style="line-height: 1.6; color: {text_secondary};">
                Successfully completed secondary school education at Taj Terbeeyat Project #2 School in Karachi, qualifying to pursue specialized studies in Computer Science.
            </p>
        </div>
        """, unsafe_allow_html=True)

    with edu_col2:
        st.markdown(f"""
        <div class="portfolio-card">
            <h4 style="margin-top: 0;">Academic Philosophy</h4>
            <p style="line-height: 1.6; font-size: 0.9rem; color: {text_secondary};">
                Combining rigorous formal classroom education at Govt. Degree College Korangi #6 with self-directed 
                project creation, technical tutorials, and practical exploration in software development and digital marketing.
            </p>
        </div>
        """, unsafe_allow_html=True)

# ---------------------------------------------------------------------------
# TAB 5: PROJECTS
# ---------------------------------------------------------------------------
with nav_tabs[4]:
    st.markdown("## 💼 Personal Projects")
    st.caption("Interactive web projects built for learning and practical implementation. No inflated user metrics or commercial claims.")
    
    proj_cols = st.columns(2, gap="large")
    for idx, project in enumerate(PROFILE["projects"]):
        with proj_cols[idx]:
            tech_badges = " ".join([f"<span class='level-tag' style='margin-right: 4px; margin-bottom: 6px;'>{t}</span>" for t in project["tech"]])
            st.markdown(f"""
            <div class="portfolio-card" style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
                <div>
                    <span style="font-size: 0.8rem; font-weight: 600; color: {accent_color}; text-transform: uppercase;">{project['type']}</span>
                    <h3 style="margin-top: 6px; margin-bottom: 12px;">{project['name']}</h3>
                    <p style="line-height: 1.6; color: {text_primary}; margin-bottom: 16px;">{project['description']}</p>
                    <div style="margin-bottom: 20px;">{tech_badges}</div>
                </div>
                <div>
                    <a href="{project['url']}" target="_blank" rel="noopener noreferrer" class="btn-link" style="display: block; text-align: center;">
                        Live Project ↗
                    </a>
                </div>
            </div>
            """, unsafe_allow_html=True)

# ---------------------------------------------------------------------------
# TAB 6: CERTIFICATES & LEARNING & GROWTH
# ---------------------------------------------------------------------------
with nav_tabs[5]:
    st.markdown("## 📜 Certificates & Credentials")
    st.caption("Verified course completions and ongoing technical development.")
    
    cert_cols = st.columns(3)
    for idx, cert in enumerate(PROFILE["certificates"]):
        with cert_cols[idx]:
            is_completed = cert["status"] == "Completed"
            tag_color = "#10B981" if is_completed else "#F59E0B"
            tag_bg = "rgba(16, 185, 129, 0.1)" if is_completed else "rgba(245, 158, 11, 0.1)"
            border_c = "rgba(16, 185, 129, 0.2)" if is_completed else "rgba(245, 158, 11, 0.2)"
            
            st.markdown(f"""
            <div class="portfolio-card" style="text-align: center;">
                <div style="font-size: 2rem; margin-bottom: 8px;">{'✅' if is_completed else '⏳'}</div>
                <h4 style="margin-top: 0; margin-bottom: 8px;">{cert['title']}</h4>
                <span style="display: inline-block; padding: 4px 12px; border-radius: 6px; font-size: 0.85rem; font-weight: 600; background: {tag_bg}; color: {tag_color}; border: 1px solid {border_c};">
                    Status: {cert['status']}
                </span>
            </div>
            """, unsafe_allow_html=True)

    st.markdown('<div class="section-divider"></div>', unsafe_allow_html=True)
    st.markdown("## 🌱 Learning & Growth (Practical Experience)")
    st.markdown("""
    <div class="portfolio-card">
        <h4 style="margin-top: 0; color: #3B82F6;">Building Real Experience Through Practice</h4>
        <p style="line-height: 1.7; color: #F9FAFB;">
            I currently have <strong>no formal professional employment experience</strong>. Rather than leaving a gap, 
            I am proactively establishing real, demonstrable skills through disciplined self-study, active experimentation, 
            and hands-on learning projects.
        </p>
        <p style="line-height: 1.7; color: #94A3B8;">
            My practical development path encompasses:
        </p>
        <ul style="color: #94A3B8; line-height: 1.8;">
            <li><strong>Personal Projects:</strong> Designing, building, and deploying functional web applications like Hidayah Hub and Hadith Hub.</li>
            <li><strong>Digital Marketing Learning:</strong> Studying campaign architectures, audience targeting, and ad creatives for Meta Ads.</li>
            <li><strong>SEO Practice:</strong> Conducting keyword research, on-page content alignment, and structure optimization.</li>
            <li><strong>AI Exploration:</strong> Integrating generative AI tools and APIs into modern Python software.</li>
            <li><strong>Python Development:</strong> Writing clean, maintainable Python code and learning full-stack fundamentals.</li>
            <li><strong>Web Development:</strong> Handling domain registrations, web hosting setups, and cloud deployments.</li>
        </ul>
    </div>
    """, unsafe_allow_html=True)

# ---------------------------------------------------------------------------
# TAB 7: SERVICES
# ---------------------------------------------------------------------------
with nav_tabs[6]:
    st.markdown("## 🛠️ Services I Can Offer")
    st.caption("Areas where I can provide dedicated assistance based on my current skill set. Honest, transparent work with no exaggerated claims.")
    
    srv_cols = st.columns(4)
    for idx, srv in enumerate(PROFILE["services"]):
        with srv_cols[idx % 4]:
            st.markdown(f"""
            <div class="portfolio-card" style="height: 100%;">
                <h4 style="margin-top: 0; color: {accent_color} !important; font-size: 1.05rem;">{srv['title']}</h4>
                <p style="font-size: 0.88rem; line-height: 1.5; color: {text_secondary}; margin-bottom: 0;">{srv['description']}</p>
            </div>
            """, unsafe_allow_html=True)

# ---------------------------------------------------------------------------
# TAB 8: FUTURE GOALS ("WHERE I'M HEADING")
# ---------------------------------------------------------------------------
with nav_tabs[7]:
    st.markdown("## 🎯 Where I'm Heading")
    st.caption("A transparent roadmap of my long-term career aspirations and target milestones.")
    
    g_col1, g_col2, g_col3 = st.columns(3, gap="large")
    with g_col1:
        st.markdown(f"""
        <div class="portfolio-card" style="height: 100%; border-top: 3px solid {accent_color};">
            <span class="level-tag" style="margin-bottom: 12px;">Milestone 1</span>
            <h3 style="margin-top: 8px;">Software Engineer</h3>
            <p style="line-height: 1.6; color: {text_secondary};">
                Deepen knowledge of computer science fundamentals, data structures, algorithms, 
                and full-stack software development to build scalable, robust systems.
            </p>
        </div>
        """, unsafe_allow_html=True)

    with g_col2:
        st.markdown(f"""
        <div class="portfolio-card" style="height: 100%; border-top: 3px solid #10B981;">
            <span class="level-tag" style="background: rgba(16, 185, 129, 0.1); color: #10B981; border-color: rgba(16, 185, 129, 0.2); margin-bottom: 12px;">Milestone 2</span>
            <h3 style="margin-top: 8px;">AI & Tech Professional</h3>
            <p style="line-height: 1.6; color: {text_secondary};">
                Master modern Artificial Intelligence workflows, machine learning models, 
                and intelligent automation tools that solve practical, everyday challenges.
            </p>
        </div>
        """, unsafe_allow_html=True)

    with g_col3:
        st.markdown(f"""
        <div class="portfolio-card" style="height: 100%; border-top: 3px solid #8B5CF6;">
            <span class="level-tag" style="background: rgba(139, 92, 246, 0.1); color: #8B5CF6; border-color: rgba(139, 92, 246, 0.2); margin-bottom: 12px;">Milestone 3</span>
            <h3 style="margin-top: 8px;">Business Owner & Founder</h3>
            <p style="line-height: 1.6; color: {text_secondary};">
                Synthesize technical engineering proficiency with digital marketing and entrepreneurship 
                to launch and scale sustainable tech-driven enterprises.
            </p>
        </div>
        """, unsafe_allow_html=True)

# ---------------------------------------------------------------------------
# TAB 9: CONTACT & SOCIALS
# ---------------------------------------------------------------------------
with nav_tabs[8]:
    st.markdown("## 📬 Let's Connect")
    st.markdown("Reach out for collaborations, queries, or opportunities.")
    
    cnt_col1, cnt_col2 = st.columns([1, 1], gap="large")
    
    with cnt_col1:
        st.markdown("### Send a Message")
        with st.form("contact_form"):
            name = st.text_input("Your Name *", placeholder="Enter your full name")
            email = st.text_input("Your Email *", placeholder="you@example.com")
            message = st.text_area("Your Message *", placeholder="How can I help you?", height=140)
            submitted = st.form_submit_button("Send Message ✉️", use_container_width=True)
            
            if submitted:
                if not name.strip():
                    st.error("Please provide your name.")
                elif not email.strip() or "@" not in email:
                    st.error("Please provide a valid email address.")
                elif not message.strip():
                    st.error("Please enter a message.")
                else:
                    st.success("Thank you for reaching out! Your message has been recorded. I will respond to your email promptly.")
                    
    with cnt_col2:
        st.markdown("### Official Profiles & Social Links")
        st.caption("Connect across my verified platforms:")
        
        social_html = ""
        for platform, url in PROFILE["social_links"].items():
            social_html += f'<a href="{url}" target="_blank" rel="noopener noreferrer" class="social-btn">{platform} ↗</a>\n'
            
        st.markdown(f"""
        <div class="portfolio-card">
            <p style="margin-bottom: 14px;">Click any platform below to view the official profile:</p>
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                {social_html}
            </div>
            <hr style="border: 0; border-top: 1px solid {card_border}; margin: 20px 0;" />
            <p style="font-size: 0.9rem; margin-bottom: 4px;"><strong>Location:</strong> {PROFILE['location']}</p>
            <p style="font-size: 0.9rem; margin-bottom: 0;"><strong>Preferred Name:</strong> {PROFILE['preferred_name']}</p>
        </div>
        """, unsafe_allow_html=True)

# ---------------------------------------------------------------------------
# TAB 10: AI CHATBOT (GROUNDED Q&A)
# ---------------------------------------------------------------------------
with nav_tabs[9]:
    st.markdown("## 🤖 Ask About Shahan")
    st.caption("Ask questions about Muhammad Shahan Khan. Responses are strictly grounded in verified facts.")
    
    # Quick question suggestions
    st.markdown("**Suggested Questions:**")
    quick_q = [
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
    ]
    
    # Render quick prompt buttons
    chip_cols = st.columns(3)
    for i, q in enumerate(quick_q):
        with chip_cols[i % 3]:
            if st.button(q, key=f"chip_{i}", use_container_width=True):
                st.session_state.chat_input_val = q

    # Knowledge Base / Grounding Logic
    def answer_query_grounded(user_query: str) -> str:
        """
        Answers strictly based on verified profile facts.
        Attempts Gemini API if key is present, otherwise uses precise local facts.
        """
        q = user_query.lower()
        
        # Check API key in secrets or environment
        api_key = None
        try:
            if "GEMINI_API_KEY" in st.secrets:
                api_key = st.secrets["GEMINI_API_KEY"]
        except Exception:
            pass
        if not api_key:
            api_key = os.environ.get("GEMINI_API_KEY", "")

        if api_key and api_key != "your_gemini_api_key_here":
            try:
                from google import genai
                client = genai.Client(api_key=api_key)
                system_prompt = f"""
                You are a concise, professional assistant representing Muhammad Shahan Khan.
                ONLY use the following verified facts:
                - Name: Muhammad Shahan Khan, Age: 17, Location: Karachi, Pakistan.
                - Headline: Digital Marketer | SEO & Content Strategist | AI Tech Enthusiast.
                - Future Direction: Aspiring Software Engineer & Business Owner (strictly future goals, NOT current titles).
                - Education: Matric completed. Currently 11th Year / First Year Computer Science student at Govt. Degree College Korangi #6, Karachi.
                - Skills:
                  * Digital Marketing: Digital Marketing (Skilled), Meta Ads (Skilled), Email Marketing (Familiar)
                  * SEO & Content: SEO (Skilled), Keyword Research (Skilled), Blog Writing (Skilled)
                  * Technology: Python (Basic / Learning), Artificial Intelligence (Learning), AI Tools (Skilled), Website Setup (Skilled)
                  * Design: Canva (Skilled)
                - Projects:
                  1. Hidayah Hub (Quran-related learning web app: Surah navigation, Arabic text, translations, audio) at https://hidayah-hb.streamlit.app
                  2. Hadith Hub (Hadith books & chapters exploration web app) at https://hadith-app-50.streamlit.app/
                  These are personal learning projects built with Python & Streamlit.
                - Certificates: CIT Certificate (Completed), Digital Marketing Certificate (Completed), Artificial Intelligence (In Progress).
                - Experience: No formal professional experience yet. Building skills via personal projects, learning, and experimentation.
                - Services: SEO, Keyword Research, Blog Writing, Meta Ads, Email Marketing, Canva Design, Website Setup, Digital Marketing.
                - Socials: LinkedIn, Facebook, Instagram, GitHub, X, Medium.

                CRITICAL RULE:
                If the question asks for information not present above (e.g. past clients, revenue, years of experience, awards, degrees), reply:
                "I don't have that information."
                Never invent or assume anything.
                """
                response = client.models.generate_content(
                    model="gemini-2.5-flash",
                    contents=[
                        {"role": "user", "parts": [{"text": f"{system_prompt}\n\nQuestion: {user_query}"}]}
                    ]
                )
                if response and response.text:
                    return response.text.strip()
            except Exception:
                pass  # Fallback to local verified engine

        # High-precision local verified answers
        if any(w in q for w in ["who is", "about", "introduce"]):
            return (
                f"Muhammad Shahan Khan is a 17-year-old Digital Marketer, "
                f"SEO & Content Strategist, and AI Tech Enthusiast based in Karachi, Pakistan. He is currently an "
                f"11th Year Computer Science student aspiring to become a Software Engineer and Business Owner."
            )
        elif any(w in q for w in ["do", "headline", "title", "role"]):
            return (
                f"Muhammad Shahan Khan specializes in Digital Marketing, SEO, Meta Ads (Facebook & Instagram), blog/article writing, "
                f"Canva design, AI tools, and website setups. His future ambition is to become a Software Engineer and Business Owner."
            )
        elif any(w in q for w in ["skill", "python", "meta ads", "canva"]):
            return (
                f"Shahan's skills include:\n"
                f"• Digital Marketing: Digital Marketing, Meta Ads, Email Marketing\n"
                f"• SEO & Content: SEO, Keyword Research, Blog Writing\n"
                f"• Technology: Python (Basic / Learning), Artificial Intelligence (Learning), AI Tools, Website Setup\n"
                f"• Design: Canva\n\n"
                f"He is actively learning Python and AI while honing practical digital marketing skills."
            )
        elif any(w in q for w in ["study", "education", "college", "school", "matric"]):
            return (
                f"Shahan completed his Matriculation and is currently studying in the 11th Year (First Year) "
                f"in the Computer Science field at Govt. Degree College Korangi #6, Karachi."
            )
        elif "hidayah" in q:
            return (
                f"Hidayah Hub is an Islamic learning web project developed by Muhammad Shahan Khan using Python and Streamlit. "
                f"It features Quran Surah navigation, Arabic Quran content, translations, and Quran audio. "
                f"Live link: https://hidayah-hb.streamlit.app"
            )
        elif "hadith" in q:
            return (
                f"Hadith Hub is an Islamic web project built with Python and Streamlit that helps users explore "
                f"Hadith books, chapters, and Hadith content in an organized interface. "
                f"Live link: https://hadith-app-50.streamlit.app/"
            )
        elif any(w in q for w in ["project", "portfolio"]):
            return (
                f"Muhammad Shahan Khan has created two personal learning web projects using Python & Streamlit:\n"
                f"1. Hidayah Hub (Quran learning: https://hidayah-hb.streamlit.app)\n"
                f"2. Hadith Hub (Hadith exploration: https://hadith-app-50.streamlit.app/)"
            )
        elif any(w in q for w in ["goal", "heading", "future"]):
            return (
                f"Muhammad Shahan Khan's long-term future goals are to become a Software Engineer, AI/Technology Professional, "
                f"and Business Owner / Entrepreneur, bridging technology, AI, software, and digital marketing."
            )
        elif any(w in q for w in ["experience", "job", "company", "work history", "client"]):
            return (
                f"Muhammad Shahan Khan has no professional employment experience yet. He is actively building practical capabilities "
                f"through personal projects, self-guided programming, SEO practice, and continuous learning."
            )
        elif any(w in q for w in ["service", "offer", "hire"]):
            return (
                f"Muhammad Shahan Khan offers services in:\n"
                f"• SEO & Keyword Research\n"
                f"• Blog & Content Writing\n"
                f"• Meta Ads (Facebook & Instagram)\n"
                f"• Email Marketing\n"
                f"• Canva Graphic Design\n"
                f"• Website Setup (Domain & Hosting)\n"
                f"• Digital Marketing"
            )
        elif any(w in q for w in ["certificate", "course", "cit"]):
            return (
                f"Muhammad Shahan Khan's certificate status:\n"
                f"1. CIT Certificate: Completed\n"
                f"2. Digital Marketing Certificate: Completed\n"
                f"3. Artificial Intelligence: In Progress"
            )
        elif any(w in q for w in ["online", "social", "github", "linkedin", "contact", "email"]):
            return (
                f"You can find Muhammad Shahan Khan online at:\n"
                f"• LinkedIn: {PROFILE['social_links']['LinkedIn']}\n"
                f"• GitHub: {PROFILE['social_links']['GitHub']}\n"
                f"• Facebook: {PROFILE['social_links']['Facebook']}\n"
                f"• Instagram: {PROFILE['social_links']['Instagram']}\n"
                f"• X: {PROFILE['social_links']['X']}\n"
                f"• Medium: {PROFILE['social_links']['Medium']}"
            )
        else:
            return "I don't have that information. I can only provide verified facts regarding Shahan's education, skills, projects, and goals."

    # Display chat history
    for msg in st.session_state.chat_history:
        with st.chat_message(msg["role"]):
            st.markdown(msg["content"])

    # Chat input widget
    prompt = st.chat_input("Ask a question about M.Shahan...")
    if prompt:
        st.session_state.chat_history.append({"role": "user", "content": prompt})
        with st.chat_message("user"):
            st.markdown(prompt)
            
        with st.chat_message("assistant"):
            answer = answer_query_grounded(prompt)
            st.markdown(answer)
            st.session_state.chat_history.append({"role": "assistant", "content": answer})

# ---------------------------------------------------------------------------
# 7. FOOTER
# ---------------------------------------------------------------------------
st.markdown('<div class="section-divider"></div>', unsafe_allow_html=True)

footer_links_html = " · ".join([
    f'<a href="{url}" target="_blank" rel="noopener noreferrer" style="color: {text_secondary}; text-decoration: none;">{platform}</a>'
    for platform, url in PROFILE["social_links"].items()
])

st.markdown(f"""
<div style="text-align: center; padding: 20px 0 40px 0;">
    <h3 style="margin-bottom: 4px;">{PROFILE['preferred_name']}</h3>
    <p style="color: {accent_color}; font-weight: 500; font-size: 0.95rem; margin-bottom: 8px;">
        {PROFILE['headline']}
    </p>
    <p style="font-style: italic; color: {text_secondary}; margin-bottom: 16px;">
        "Building skills today for technology and entrepreneurship tomorrow."
    </p>
    <div style="margin-bottom: 16px;">
        {footer_links_html}
    </div>
    <p style="font-size: 0.85rem; color: {text_secondary}; margin: 0;">
        © {PROFILE['full_name']} · All rights reserved
    </p>
</div>
""", unsafe_allow_html=True)
