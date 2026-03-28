# Technical Documentation 

## Overview
This is a responsive personal portfolio website built with:
- HTML for structure
- CSS for styling and responsive layout
- JavaScript for interactivity and dynamic content

This version extends Assignment 1 by adding dynamic features, API data handling, animations, and improved user feedback.

---

## Sections
- **Hero**: Intro text, greeting, call-to-action buttons, profile card/image.
- **About**: Short bio + cards (skills, strengths, goals).
- **Projects**: 3 project cards with descriptions, tags, and placeholder images.
- **Quote/API Section**: Loads dynamic content from a public API when the user clicks a button.
- **Contact**: Form fields (Name, Email, Message) with client-side validation.

---

## Responsive Design
- Desktop: multi-column layout using CSS Grid:
  - Hero uses 2 columns
  - About uses 3 columns
  - Projects uses 2 columns
  - Contact uses 2 columns
- Mobile/tablet (<= 900px):
  - Layout becomes single-column
  - Navigation collapses into a toggle menu

---

## JavaScript Features
1. **Time-based greeting**
   - Uses `Date().getHours()` to display “Good morning/afternoon/evening”.

2. **Theme toggle**
   - Toggles `data-theme` attribute on `<body>`
   - Saves theme preference in `localStorage`

3. **Smooth scrolling**
   - Uses `scrollIntoView({ behavior: "smooth" })`

4. **Contact form validation**
   - Checks:
     - Name ≥ 2 characters
     - Valid email format
     - Message ≥ 10 characters
   - Displays error messages and success feedback

5. **Project search (Dynamic Content)**
   - Filters projects in real time based on user input
   - Displays only matching projects
   - Shows message if no results are found

6. **API Data Handling**
   - Fetches content from a public API using `fetch()`
   - Displays dynamic content when the user clicks a button
   - Handles invalid or missing data safely

---

## Animations and Transitions
- Hover effects on buttons and project cards
- Smooth transitions for interactive elements
- Fade-in animation for sections on page load

---

## Error Handling and User Feedback
The application provides clear feedback to the user:

- Form validation shows error messages for invalid or empty inputs
- A success message is shown when the form is valid
- API section displays:
  - Loading message while fetching data
  - Error message if the request fails
- Project search displays:
  - “No projects found” when there are no matching results

These features help guide the user and improve usability.

---

## Accessibility Notes
- Skip link for keyboard users
- Form uses labels and error messages
- Navigation toggle uses `aria` attributes

---

## Known Limitations / Future Improvements
- No backend form submission (front-end only)
- Replace placeholder images with real project visuals
- Add real GitHub project links
- Improve UI design and animations further
- Add more interactive features