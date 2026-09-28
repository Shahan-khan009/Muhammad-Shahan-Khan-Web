# Muhammad Shahan Khan Portfolio - Personal Introduction & Portfolio Website

Official personal portfolio website for **Muhammad Shahan Khan**, based in Karachi, Pakistan. Built with Python & Streamlit for a fast, responsive, and easy-to-customize experience.

---

## 🚀 Quick Start (Run Locally)

### 1. Prerequisites
- Python 3.9+ installed on your computer.

### 2. Create a Virtual Environment (Recommended)

**On Windows:**
```bash
python -m venv venv
venv\Scripts\activate
```

**On macOS / Linux:**
```bash
python3 -m venv venv
source venv/bin/activate
```

### 3. Install Dependencies
```bash
pip install -r requirements.txt
```

### 4. Run the Streamlit App
```bash
streamlit run app.py
```
The app will automatically open in your default browser at `http://localhost:8501`.

---

## 📁 Project Structure

```
portfolio/
│
├── app.py                     # Main application code (all content & configuration)
├── requirements.txt           # Python dependencies (streamlit, pillow, google-genai)
├── README.md                  # Documentation and customization guide
│
├── assets/
│   └── profile.jpg            # Default local profile photo
│
└── .streamlit/
    ├── config.toml            # Streamlit theme and server configuration
    └── secrets.toml.example   # Example secrets file for API keys
```

---

## 📷 Profile Photo Guide & Upload Feature

### Default Local Profile Image
Place your high-resolution profile photo at:
```
assets/profile.jpg
```
The application checks for this file automatically on startup. If it is missing or corrupted, a sleek, styled placeholder is displayed instead of crashing.

### Changing Profile Photo directly from the Website
You can also change your profile picture directly inside the running Streamlit web app:
1. Open the left sidebar.
2. Expand the **📷 Change Profile Photo** section.
3. Select any image file (`.jpg`, `.jpeg`, `.png`, or `.webp`).
4. The photo will immediately update in the Hero profile area.
5. If the local filesystem is writable, the app will also save the uploaded image to `assets/profile.jpg` for future sessions.

### Persistence Limitations in Cloud Environments
- **Local Machine (VS Code):** Uploaded files saved to `assets/profile.jpg` persist permanently.
- **Ephemeral Cloud Hosts (e.g., Streamlit Community Cloud free tier, containerized platforms):** Container filesystems are ephemeral. Any file written to disk resets when the container restarts or spins down after inactivity. For permanent cloud deployment, commit your image to Git at `assets/profile.jpg`.

---

## 🤖 Configuring the AI Chatbot (Optional)

The built-in AI Chatbot can answer questions about Muhammad Shahan Khan. It is strictly grounded in verified biographical facts and will respond *"I don't have that information"* to any unknown queries.

### Intelligent Fallback (Works with 0 Configuration)
Even if you do **not** configure an API key, the chatbot works immediately using the built-in verified knowledge engine. It handles all common questions with 100% accuracy.

### Connecting Google Gemini API (Optional)
To enable real-time generative language understanding via Gemini:
1. Obtain an API key from Google AI Studio.
2. In the `.streamlit/` folder, copy `secrets.toml.example` to `secrets.toml`:
   ```bash
   cp .streamlit/secrets.toml.example .streamlit/secrets.toml
   ```
3. Edit `.streamlit/secrets.toml`:
   ```toml
   GEMINI_API_KEY = "your_actual_gemini_api_key_here"
   ```
4. Alternatively, set an environment variable:
   ```bash
   export GEMINI_API_KEY="your_actual_gemini_api_key_here"
   ```

---

## ✏️ Customizing Personal Information

All personal details, projects, skills, education, and links are organized inside the `PROFILE` dictionary at the very top of `app.py` (lines 19–185):

- **Name & Headline:** Edit `full_name`, `preferred_name`, and `headline`.
- **Bio & Summary:** Edit `about_me` dictionary fields.
- **Projects:** Add or edit items inside `projects` list (name, tech, URLs).
- **Skills:** Modify skills and proficiency tags (`Basic / Learning`, `Familiar`, `Skilled`) in `skills`.
- **Certificates:** Update certificates list.
- **Social Links:** Update verified URLs inside `social_links`.

---

## 🔗 Official Verified Links

- **Hidayah Hub (Live Project):** [https://hidayah-hb.streamlit.app](https://hidayah-hb.streamlit.app)
- **Hadith Hub (Live Project):** [https://hadith-app-50.streamlit.app/](https://hadith-app-50.streamlit.app/)
- **LinkedIn:** [https://www.linkedin.com/in/shahan-khan-6522ba41/](https://www.linkedin.com/in/shahan-khan-6522ba41/)
- **Facebook:** [https://www.facebook.com/profile.php?id=61574388427205](https://www.facebook.com/profile.php?id=61574388427205)
- **Instagram:** [https://www.instagram.com/silverkulwatches/](https://www.instagram.com/silverkulwatches/)
- **GitHub:** [https://github.com/Shahan-khan009](https://github.com/Shahan-khan009)
- **X (Twitter):** [https://x.com/MShahanKhan666](https://x.com/MShahanKhan666)
- **Medium:** [https://medium.com/@aj623218](https://medium.com/@aj623218)

---

## 🛠️ Troubleshooting

- **ModuleNotFoundError: No module named 'streamlit'**
  - Run `pip install -r requirements.txt` within your active virtual environment.
- **Port 8501 is already in use**
  - Run with a custom port: `streamlit run app.py --server.port 8502`.
- **Image not appearing**
  - Verify that the image is named `profile.jpg` inside the `assets/` folder, or use the in-app sidebar file uploader.

---

© Muhammad Shahan Khan · All rights reserved.
