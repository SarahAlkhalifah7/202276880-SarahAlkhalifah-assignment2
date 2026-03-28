/* ========= Helpers ========= */
function $(selector) {
  return document.querySelector(selector);
}

/* ========= Greeting by time of day ========= */
function setGreeting() {
  const el = $("#greeting");
  if (!el) return;

  const hour = new Date().getHours();
  let text = "Hello!";
  if (hour >= 5 && hour < 12) text = "Good morning ☀️";
  else if (hour >= 12 && hour < 18) text = "Good afternoon 🌤️";
  else text = "Good evening 🌙";

  el.textContent = text;
}

/* ========= Theme toggle (saved to localStorage) ========= */
function initTheme() {
  const toggle = $("#themeToggle");
  const saved = localStorage.getItem("theme");

  if (saved === "light") document.body.setAttribute("data-theme", "light");
  else document.body.setAttribute("data-theme", "dark");

  updateThemeButton(toggle);

  toggle?.addEventListener("click", () => {
    const isLight = document.body.getAttribute("data-theme") === "light";
    document.body.setAttribute("data-theme", isLight ? "dark" : "light");
    localStorage.setItem("theme", isLight ? "dark" : "light");
    updateThemeButton(toggle);
  });
}

function updateThemeButton(btn) {
  if (!btn) return;
  const isLight = document.body.getAttribute("data-theme") === "light";
  btn.setAttribute("aria-pressed", String(isLight));
  btn.textContent = isLight ? "☀️ Theme" : "🌙 Theme";
}

/* ========= Mobile nav toggle ========= */
function initNav() {
  const btn = $("#navToggle");
  const links = $("#navLinks");

  btn?.addEventListener("click", () => {
    const isOpen = links.classList.toggle("is-open");
    btn.setAttribute("aria-expanded", String(isOpen));
  });

  // Close menu after clicking a link (mobile UX)
  links?.addEventListener("click", (e) => {
    const target = e.target;
    if (target.tagName === "A") {
      links.classList.remove("is-open");
      btn?.setAttribute("aria-expanded", "false");
    }
  });
}

/* ========= Smooth scrolling (JS-enhanced) ========= */
function initSmoothScroll() {
  document.addEventListener("click", (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;

    const id = a.getAttribute("href");
    const target = document.querySelector(id);
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

/* ========= Form validation (no backend) ========= */
function initForm() {
  const form = $("#contactForm");
  const status = $("#formStatus");

  const name = $("#name");
  const email = $("#email");
  const message = $("#message");

  const nameError = $("#nameError");
  const emailError = $("#emailError");
  const messageError = $("#messageError");

  function showError(input, errorEl, msg) {
    if (!errorEl) return;
    errorEl.textContent = msg;
    input?.setAttribute("aria-invalid", msg ? "true" : "false");
  }

  function validateEmail(value) {
    // Simple email check (good enough for front-end validation)
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function validate() {
    let ok = true;

    if (!name.value || name.value.trim().length < 2) {
      showError(name, nameError, "Please enter at least 2 characters.");
      ok = false;
    } else showError(name, nameError, "");

    if (!email.value || !validateEmail(email.value.trim())) {
      showError(email, emailError, "Please enter a valid email address.");
      ok = false;
    } else showError(email, emailError, "");

    if (!message.value || message.value.trim().length < 10) {
      showError(message, messageError, "Message must be at least 10 characters.");
      ok = false;
    } else showError(message, messageError, "");

    return ok;
  }

  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!status) return;

    status.textContent = "";
    const ok = validate();

    if (ok) {
      status.textContent = "✅ Thanks! Your message is validated (no backend to send it yet).";
      form.reset();
    } else {
      status.textContent = "⚠️ Please fix the highlighted fields and try again.";
    }
  });
}
/* ========= Fetch programming quote from API ========= */


  function initQuoteLoader() {
  const button = document.querySelector("#loadQuoteBtn");
  const quoteText = document.querySelector("#quoteText");
  const quoteAuthor = document.querySelector("#quoteAuthor");
  const quoteStatus = document.querySelector("#quoteStatus");

  if (!button || !quoteText || !quoteAuthor || !quoteStatus) return;

  async function loadQuote() {
    quoteStatus.textContent = "Loading...";
    quoteText.textContent = "";
    quoteAuthor.textContent = "";

    try {
      const res = await fetch("https://v2.jokeapi.dev/joke/Programming?type=single&safe-mode");

      if (!res.ok) throw new Error("Request failed");

      const data = await res.json();

      if (data.error || !data.joke) throw new Error("Invalid data");

      quoteText.textContent = data.joke;
      quoteAuthor.textContent = "— Programming Joke API";
      quoteStatus.textContent = "Loaded!";
    } catch {
      quoteStatus.textContent = "Could not load content.";
      quoteText.textContent = "Please try again later.";
      quoteAuthor.textContent = "";
    }
  }

  button.addEventListener("click", loadQuote);
}

  


/* ========= Footer year ========= */
function setYear() {
  const year = $("#year");
  if (year) year.textContent = String(new Date().getFullYear());
}

/* ========= Init ========= */
setGreeting();
setYear();
initTheme();
initNav();
initSmoothScroll();
initForm();
initQuoteLoader();