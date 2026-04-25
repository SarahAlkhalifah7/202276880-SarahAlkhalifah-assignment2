# Technical Documentation 

## Overview
This is a responsive personal portfolio website built with:
- HTML for structure
- CSS for styling and responsive layout
- JavaScript for interactivity, dynamic content, and advanced functionality

This version extends previous assignments by adding API integration, complex logic, state management, and improved user experience.

---

## Sections
- **Hero**: Intro text, greeting, visitor name, call-to-action buttons, profile card, and weather widget.
- **About**: Short bio + cards (skills, strengths, goals).
- **Projects**: 3 project cards with descriptions, tags, and placeholder images.
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

2. **Visitor Name (State Management)**
   - Uses `localStorage` to store the visitor’s name
   - Displays the name in the greeting message
   - Persists across page reloads

3. **Theme toggle**
   - Toggles `data-theme` attribute on `<body>`
   - Saves theme preference in `localStorage`

4. **Smooth scrolling**
   - Uses `scrollIntoView({ behavior: "smooth" })`

5. **Contact form validation**
   - Checks:
     - Name ≥ 2 characters
     - Valid email format
     - Message ≥ 10 characters
   - Displays error messages and success feedback

6. **Project Search (Dynamic Content)**
   - Filters projects in real time based on user input
   - Displays only matching projects
   - Shows message if no results are found

7. **Project Sorting (Complex Logic)**
   - Sorts projects alphabetically (A–Z)
   - Sorts projects by programming language (SQL, C, Java)
   - Uses conditional logic and dataset attributes

8. **Weather API Integration**
   - Uses the Geolocation API to detect user location
   - Fetches weather data from the Open-Meteo API
   - Displays temperature and wind speed
   - Automatically loads on page start
   
9. **Fun Fact Feature (Interactive API)**
   - Fetches a random fact from a public API when the user clicks a button
   - Displays loading and error messages
   - Enhances interactivity and user engagement
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
- Weather feature displays:
  - “Getting your location...” message
  - Loading message while fetching data
  - Error message if location access is denied
  - Error message if the API request fails
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
- Add more advanced interactive features