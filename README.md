# Abhishek Kumar — Multi-Page Developer Portfolio Website

A complete, high-performance, responsive multi-page developer portfolio website designed for **Abhishek Kumar**, a Computer Science and Engineering student focused on **Software Development**, **Java Programming**, **Data Structures & Algorithms (DSA)**, and **Web Development**.

Built strictly using **HTML5**, **CSS3**, and **Vanilla JavaScript (ES6+)** with zero third-party frameworks or dependencies (no React, Bootstrap, or Tailwind).

---

## 🎨 Design & Aesthetic Highlights

- **Multi-Page Architecture**: Individual dedicated HTML pages with standard browser forward/backward navigation and active link highlighting on both desktop and mobile drawers.
- **Palette**: Deep navy & midnight black background (`#05070f`, `#090d1a`, `#0f172a`), accented by electric blue (`#38bdf8`), vibrant purple (`#8b5cf6`), and vivid rose pink (`#ec4899`).
- **Typography**: Google Fonts pairing — **Space Grotesk** for modern display headings, **DM Sans** for legible body typography, and **JetBrains Mono** for clean code syntax.
- **Glassmorphism**: Refined translucent glass containers with subtle 1px borders, smooth backdrop filters (`backdrop-filter: blur(...)`), and gentle neon glow shadows on hover.
- **Micro-Interactions**:
  - Live typewriter role carousel in the Hero section.
  - Interactive Java code card with one-click copy-to-clipboard functionality and confirmation feedback.
  - Animated student status badge.
  - Interactive project deep-dive modal dialogs with smooth transitions.
  - Category filtering for Technical Skills.
  - Client-side validated contact form with customized toast notification and mailto dispatch fallback.
  - Smooth page-entry animations and back-to-top floating button.

---

## 🗂️ Project Structure

```
abhishek-portfolio/
│
├── index.html                   # Home page (Hero, Pitch, Showcase, Java Code Card)
├── about.html                   # About Me page (Bio, Philosophy, 4 Engineering Pillars)
├── skills.html                  # Technical Skills page (11 approved skills, category filter)
├── education.html               # Education page (B.Tech CSE timeline, coursework tags)
├── projects.html                # Featured Projects page (Lost & Found, DSA, modals)
├── contact.html                 # Contact page (Email, LinkedIn, GitHub, X, validated form)
├── README.md                    # Comprehensive multi-page documentation
│
├── css/
│   └── style.css                # Custom CSS design system, responsive media queries, variables
│
├── js/
│   └── script.js                # Vanilla JavaScript (modal, active nav, drawer, typewriter, form)
│
└── assets/
    ├── icons/                   # Clean vector SVGs
    │   ├── arrow-up.svg
    │   ├── award.svg
    │   ├── book.svg
    │   ├── check-circle.svg
    │   ├── code.svg
    │   ├── cpu.svg
    │   ├── database.svg
    │   ├── external-link.svg
    │   ├── github.svg
    │   ├── graduation-cap.svg   # Graduation cap vector icon for B.Tech CSE
    │   ├── linkedin.svg
    │   ├── mail.svg
    │   ├── map-pin.svg
    │   ├── school.svg           # School building vector icon for Class 12th
    │   ├── sparkles.svg
    │   ├── terminal.svg
    │   └── x.svg                # Twitter / X vector icon
    │
    └── images/                  # Custom SVGs & project showcase illustrations
        ├── avatar.svg           # Stylized developer silhouette with glowing ring
        ├── project-lost-found.svg # Vector UI illustration for Smart Campus Lost & Found
        ├── project-dsa.svg      # Vector visualization for Java DSA Journey (BST, Big-O)
        └── project-placeholder.svg # Vector graphic for upcoming web application
```

---

## 📄 Pages Included

1. **Home (`index.html`)**:
   - Hero section with role badge, dynamic typewriter effect, elevator pitch, quick statistics, and interactive Java code window with copy button.
   - Quick portfolio exploration cards linking directly to About, Skills, Projects, and Contact.
2. **About Me (`about.html`)**:
   - Realistic narrative bio detailing Abhishek Kumar's journey as a Computer Science & Engineering student.
   - Four Learning Pillars: Programming Languages (C, C++, Java, Python), Object-Oriented Programming (Java & Python), Data Structures & Algorithms (Java), and Web Development Basics (HTML, CSS, JS).
   - Custom developer portrait visual (`assets/images/avatar.svg`).
3. **Technical Skills (`skills.html`)**:
   - Interactive category filter navigation (All, Programming Languages, Database, OOP, DSA, Web Development).
   - Showcases **only** the 11 verified student competencies without inflated percentages or expert claims:
     - **Programming Languages**: C, C++, Java, Python
     - **Database**: MySQL
     - **Object-Oriented Programming**: OOP in Java, OOP in Python
     - **Data Structures & Algorithms**: DSA using Java
     - **Web Development**: HTML, CSS, JavaScript
4. **Education (`education.html`)**:
   - Interactive vertical timeline with glassmorphic cards and custom vector icons:
     - **Current Education**: Bachelor of Technology (B.Tech) in Computer Science & Engineering (CSE) at Chandigarh Engineering College, affiliated with I.K. Gujral Punjab Technical University (IKGPTU) (2025–2029, Currently Pursuing).
     - **Higher Secondary Education**: Class 12th (Senior Secondary) at Happy Valley School, CBSE (Passing Year: 2024, Completed).
5. **Featured Projects (`projects.html`)**:
   - **Smart Campus Lost & Found**: Java, Swing GUI, JDBC, MySQL relational database management system. Includes "Architecture Details" interactive modal.
   - **Java DSA Journey**: Pure Java data structures and algorithm implementations with time & space complexity analysis. Includes "Implementation Details" modal.
   - **Full-Stack Web App (In Development)**: Future project slot.
6. **Contact (`contact.html`)**:
   - Direct communication cards with professional icons:
     - **Email**: [abhishekpoddar8409224011@gmail.com](mailto:abhishekpoddar8409224011@gmail.com)
     - **LinkedIn**: [https://www.linkedin.com/in/abhishek-kumar-2b60b3326](https://www.linkedin.com/in/abhishek-kumar-2b60b3326)
     - **GitHub**: [https://github.com/Abhi-Poddar1423](https://github.com/Abhi-Poddar1423)
     - **Twitter / X**: [https://x.com/AbhiPoddar1423](https://x.com/AbhiPoddar1423)
   - Interactive contact form with real-time client-side validation and toast notification.

---

## 🚀 Running the Website

Because this site is built purely with standard HTML5, CSS3, and JavaScript, **no build step, bundler, or Node.js server is required**.

### Option 1: Open directly in your browser
Double-click `index.html` or right-click and choose **Open With > Google Chrome / Firefox / Microsoft Edge**. You can click any navbar link to navigate between pages naturally.

### Option 2: Live Server in VS Code
1. Open the `abhishek-portfolio` folder in VS Code.
2. Click **Go Live** on the bottom status bar (using the Live Server extension).
3. The site will open at `http://127.0.0.1:5500`.

### Option 3: PowerShell / Local Python Server
Run the following in the project root:
```powershell
python -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

---

## ♿ Accessibility & Performance

- **Semantic Tags**: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`.
- **ARIA Attributes**: `aria-expanded`, `aria-controls`, `aria-label`, `role="dialog"`, `role="alert"`.
- **Keyboard Navigation**: Drawer and modal dialogs close on `Escape`; all interactive controls are fully focusable.
- **Zero Heavy Bundles**: No third-party JS libraries; fast load time and instant render across all pages.
