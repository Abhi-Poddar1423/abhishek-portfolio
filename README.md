# Abhishek Kumar — Developer Portfolio Website

A complete, high-performance, responsive developer portfolio website designed for **Abhishek Kumar**, a Computer Science and Engineering student focused on **Software Development**, **Java Programming**, **Data Structures & Algorithms (DSA)**, and **Web Development**.

Built strictly using **HTML5**, **CSS3**, and **Vanilla JavaScript (ES6+)** with zero third-party frameworks or dependencies (no React, Bootstrap, or Tailwind).

---

## 🎨 Design & Aesthetic Highlights

- **Palette**: Deep navy & midnight black background (`#05070f`, `#090d1a`, `#0f172a`), accented by electric blue (`#38bdf8`), vibrant purple (`#8b5cf6`), and vivid rose pink (`#ec4899`).
- **Typography**: Google Fonts pairing — **Space Grotesk** for modern display headings, **DM Sans** for legible body typography, and **JetBrains Mono** for clean code syntax.
- **Glassmorphism**: Refined translucent glass containers with subtle 1px borders, smooth backdrop filters (`backdrop-filter: blur(...)`), and gentle neon glow shadows on hover.
- **Micro-Interactions**:
  - Live typewriter role carousel in the Hero section.
  - Interactive Java code card with one-click copy-to-clipboard functionality and confirmation feedback.
  - Animated student status badge.
  - Interactive project deep-dive modal dialogs with smooth transitions.
  - Clean, beginner-friendly Technical Skills showcase with category filters.
  - Client-side validated contact form with customized toast notification and mailto dispatch fallback.
  - Active section navigation tracking via `IntersectionObserver`.
  - Scroll-reveal animations on viewport entry.

---

## 🗂️ Project Structure

```
abhishek-portfolio/
│
├── index.html                   # Semantic HTML5 single-page application structure
├── README.md                    # Comprehensive documentation and customization guide
│
├── css/
│   └── style.css                # Custom CSS design system, responsive media queries, variables
│
├── js/
│   └── script.js                # Vanilla JavaScript (modal, nav, observer, typewriter, form)
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
    │   ├── linkedin.svg
    │   ├── mail.svg
    │   ├── map-pin.svg
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

## 💻 Technical Skills

The portfolio showcases **only** verified student competencies without inflated percentages or expert claims:

- **Programming Languages**: C, C++, Java, Python
- **Database**: MySQL
- **Object-Oriented Programming**: OOP in Java, OOP in Python
- **Data Structures & Algorithms**: DSA using Java
- **Web Development**: HTML, CSS, JavaScript

---

## 📬 Contact Details & Profiles

- **Email**: [abhishekpoddar8409224011@gmail.com](mailto:abhishekpoddar8409224011@gmail.com)
- **LinkedIn**: [https://www.linkedin.com/in/abhishek-kumar-2b60b3326](https://www.linkedin.com/in/abhishek-kumar-2b60b3326)
- **GitHub**: [https://github.com/Abhi-Poddar1423](https://github.com/Abhi-Poddar1423)
- **Twitter / X**: [https://x.com/AbhiPoddar1423](https://x.com/AbhiPoddar1423)

---

## 🧩 Sections Included

1. **Header & Navigation**: Fixed blurred navigation bar with brand logo, smooth scroll links, contact button, and accessible mobile hamburger drawer.
2. **Hero**: Headline featuring **Abhishek Kumar**, dynamic typing role carousel, elevator pitch, CTA buttons, quick academic stats, and interactive Java code window.
3. **About Abhishek Kumar**: Narrative bio detailing Abhishek Kumar's engineering approach and 4 core engineering pillars (Software Development, Java & OOP, DSA, Web & Databases).
4. **Technical Skills**: Focused, beginner-friendly skill cards categorized into Programming Languages, Database, OOP, DSA, and Web Development with interactive filter tabs.
5. **Education**: Interactive vertical timeline covering Bachelor of Technology in CSE and Higher Secondary schooling with relevant coursework tags.
6. **Featured Projects**:
   - **Smart Campus Lost & Found**: Java, Swing GUI, JDBC, MySQL relational database management system. Includes "Architecture Details" interactive modal.
   - **Java DSA Journey**: Pure Java data structures and algorithm implementations with time & space complexity analysis. Includes "Implementation Details" modal.
   - **Full-Stack Web App (In Development)**: Future project slot.
7. **Contact**: Direct communication cards with professional icons for Email, LinkedIn, GitHub, and Twitter / X, plus a client-side validated contact form with feedback toast.
8. **Footer**: Quick site navigation, copyright notice, social links, and smooth back-to-top floating button.

---

## 🚀 Running the Portfolio

Because this site is built purely with standard HTML5, CSS3, and JavaScript, **no build step, bundler, or Node.js server is required**.

### Option 1: Open directly in your browser
Double-click `index.html` or right-click and choose **Open With > Google Chrome / Firefox / Microsoft Edge**.

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
- **Zero Heavy Bundles**: No third-party JS libraries; fast load time and instant render.
