# 202276880-SarahAlkhalifah-assignment4  
## Assignment 4 – Final Personal Portfolio

This project is an advanced version of my personal portfolio website built using HTML, CSS, and JavaScript.  
It builds on previous assignments by adding API integration, complex logic, state management, and improved user interaction.

---

## Features
- Responsive layout for mobile, tablet, and desktop (Flexbox/Grid)
- About / Projects / Contact sections
- Dark/Light theme toggle (saved with localStorage)
- Greeting message based on time of day
- Visitor name stored using localStorage
- Project sorting (A–Z and by programming language: SQL, C, Java)
- Location-based weather widget using Geolocation API
- API integration (Open-Meteo weather API)
- Smooth scrolling navigation
- Contact form validation (front-end only)
- Hover effects and fade-in animations
- User feedback messages (loading, success, error states)
- Interactive Fun Fact feature (external API)

---

## Folder Structure
- `index.html` (main page)
- `css/styles.css` (styles and animations)
- `js/script.js` (interactivity and logic)
- `assets/images/` (images)
- `docs/ai-usage-report.md` (AI usage)
- `docs/technical-documentation.md` (technical details)
- `demo-video.mp4`

---

## How to Run Locally (IMPORTANT)

This project **must be opened using a local server**, not by double-clicking `index.html`, because some features (like the weather API and geolocation) require `http://localhost`.

### Option 1 (Recommended – VS Code)
1. Open the project in VS Code
2. Install the **Live Server** extension
3. Right-click `index.html`
4. Click **Open with Live Server**

---

### Option 2 (Python)
Run this in your terminal inside the project folder:

```bash
python -m http.server 8000
```
Then open:

http://localhost:8000

## Live Deployment

# This project is deployed using GitHub Pages:

https://SarahAlkhalifah7.github.io/202276880-sarahalkhalifah-assignment4/