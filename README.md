# Project Srushti ❤️
### A personal, deeply romantic love website dedicated to Srushti, created with love by Chaitanya.

---

## 🌸 Overview
This website is crafted specifically for **Srushti** as a personal, romantic, and thoughtful gift from **Chaitanya**. It features a gentle blush-cream aesthetic, heartwarming words, an interactive memory gallery, a handwritten-style letter with typing animation, interactive cards, a relationship timeline, a cozy interactive hug moment, and a peaceful starry night-sky ending with ambient music.

---

## ✨ Features & Sections
1. **Welcome Screen**:
   - Marathi greeting: *“Ek choti si website… fakt tuzyasathi.”*
   - Smooth unlock animation with **“Open Your Little World 💌”**.
2. **Cinematic Hero Section**:
   - Emotional quote: *“Some people become a part of your heart… and stay there.”*
   - Framed portrait of Srushti with smooth hover depth and subtle animated glowing heart.
3. **Our Memories (Photo Gallery)**:
   - Fullscreen lightbox photo viewer with keyboard navigation (`Esc`, `ArrowLeft`, `ArrowRight`).
   - Handwritten-style captions.
   - Built-in graceful fallbacks if photos are still being uploaded.
4. **A Letter From Chaitanya**:
   - Elegant parchment paper texture with delicate floral motifs.
   - Gentle typing reveal with support for `prefers-reduced-motion`.
   - Controls to read full letter instantly or replay the animation.
5. **Reasons You Are Special**:
   - 6 interactive cards revealing heartfelt personal thoughts upon tap/click.
6. **Our Story Timeline**:
   - Desktop horizontal milestone track and responsive mobile vertical timeline.
   - Easily editable in a single data file.
7. **A Little Interactive Moment**:
   - **“A Little Hug for You 🤗”**: Triggers a floating heart burst and warm message.
   - **“Read One More Note 💌”**: Cycles through sweet, comforting notes.
   - 100% pressure-free, sincere, and respectful.
8. **A Beautiful Ending**:
   - Moonlit night sky with softly twinkling stars.
   - Parting message and smooth scroll buttons.
9. **Sound & Accessibility**:
   - Ambient romantic music player (toggle button, clearly labeled, **no autoplay**).
   - High accessibility contrast, touch-friendly tap targets, zero horizontal scroll.

---

## 📸 How to Add Real Photos of Srushti

All photos are organized in the `/public/images/` folder. Simply copy your actual photographs into `/public/images/` with the following filenames:

- **`hero-srushti.jpg`** — Main portrait shown in the Hero Section.
- **`srushti-1.jpg`** — Photo 1 (Gallery & Timeline Chapter 1)
- **`srushti-2.jpg`** — Photo 2 (Gallery & Timeline Chapter 2)
- **`srushti-3.jpg`** — Photo 3 (Gallery & Timeline Chapter 3)
- **`srushti-4.jpg`** — Photo 4 (Gallery & Timeline Chapter 4)
- **`srushti-5.jpg`** — Photo 5 (Gallery & Timeline Chapter 5)
- **`srushti-6.jpg`** — Photo 6 (Gallery Photo 6)

> **Note**: You can also change the filenames, captions, or add more photos by editing **`src/data/content.js`**.

---

## 💋 How to Add Srushti's Kiss Video

To add the video where Srushti sends a sweet kiss:
1. Copy your video clip into the **`/public/videos/`** folder.
2. Name the file:
   **`srushti-kiss.mp4`** *(or `.mov` / `.webm`)*.
3. The video section will automatically play with custom controls (play/pause, mute/unmute, and fullscreen), with a "Catch The Kiss 💋" interactive reaction button!

---

## 🎵 How to Add Custom Background Music (Optional)

If you'd like to use a specific romantic song or piano piece:
1. Place your MP3 file into `/public/audio/romantic-melody.mp3`.
2. When Srushti clicks the music toggle button in the bottom right corner, your song will play!
3. (If no MP3 is added, the site automatically generates soothing ambient piano chords so it never fails or remains silent!)

---

## 🛠️ Local Development

### 1. Install dependencies
```bash
npm install
```

### 2. Start local development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production
```bash
npm run build
npm run start
```

---

## 🚀 Deploy to Vercel (Public HTTPS URL)

This project is fully optimized for **Vercel**:

### Option A: Using GitHub & Vercel Dashboard (Recommended)
1. Initialize a git repository and push your project to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Project Srushti"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/project-srushti.git
   git push -u origin main
   ```
2. Go to [https://vercel.com](https://vercel.com) and log in.
3. Click **"Add New Project"** and import the `project-srushti` repository.
4. Vercel automatically detects Next.js. Click **Deploy**.
5. Within 1 minute, you will receive a public HTTPS link (e.g. `https://srushti-love.vercel.app`) to send to Srushti!

### Option B: Using Vercel CLI
```bash
npm i -g vercel
vercel
```

---

## 📝 Editing Text and Content

All texts, quotes, letters, reasons, and timeline milestones are centralized in:
📂 **`src/data/content.js`**

Open that file to update or customize any words easily without touching React components!
