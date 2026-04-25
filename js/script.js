/* ========= Helpers ========= */
function $(selector) {
  return document.querySelector(selector);
}

/* ========= Greeting by time of day ========= */
function setGreeting() {
  const el = document.querySelector("#greeting");
  if (!el) return;

  let name = localStorage.getItem("username");

  // Ask name only once
  if (!name) {
    name = prompt("Enter your name:");
    if (name) {
      localStorage.setItem("username", name);
    }
  }

  const hour = new Date().getHours();
  let text = "Hello";

  if (hour >= 5 && hour < 12) text = "Good morning ☀️";
  else if (hour >= 12 && hour < 18) text = "Good afternoon 🌤️";
  else text = "Good evening 🌙";

  if (name) {
    el.textContent = `${text}, ${name}`;
  } else {
    el.textContent = text;
  }
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


/* ========= Weather ========= */
function initGeoWeather() {
  const status = document.querySelector("#weatherStatus");

  const cityEl = document.querySelector("#weatherCity");
  const tempEl = document.querySelector("#weatherTemp");
  const windEl = document.querySelector("#weatherWind");

  if (!navigator.geolocation) {
    status.textContent = "Geolocation not supported.";
    return;
  }

  status.textContent = "Getting your location...";

  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const { latitude, longitude } = position.coords;

      try {
        status.textContent = "Loading weather...";

        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
        );

        if (!res.ok) throw new Error();

        const data = await res.json();

        cityEl.textContent = "Your Location";
        tempEl.textContent = `${data.current_weather.temperature}°C`;
        windEl.textContent = `${data.current_weather.windspeed} km/h`;
        status.textContent = "Weather loaded.";
      } catch {
        status.textContent = "Could not load weather.";
      }
    },
    () => {
      status.textContent = "Location access denied.";
    }
  );
}

/* ========= Project Sort ========= */
function initProjectSort() {
  const select = document.querySelector("#sortProjects");
  const container = document.querySelector(".projects__grid");

  if (!select || !container) return;

  select.addEventListener("change", () => {
    const projects = Array.from(container.children);

    if (select.value === "az") {
      projects.sort((a, b) =>
        a.innerText.localeCompare(b.innerText)
      );
    }

    if (["sql", "c", "java"].includes(select.value)) {
      const chosen = select.value;

      projects.sort((a, b) => {
        const langA = a.dataset.language;
        const langB = b.dataset.language;

        // Put selected language first
        if (langA === chosen && langB !== chosen) return -1;
        if (langB === chosen && langA !== chosen) return 1;

        return 0;
      });
    }

    container.innerHTML = "";
    projects.forEach(p => container.appendChild(p));
  });
}
  


/* ========= Footer year ========= */
function setYear() {
  const year = $("#year");
  if (year) year.textContent = String(new Date().getFullYear());
}

/* ========= Fun Fact ========= */

console.log("script file loaded");

function initFunFact() {
  console.log("initFunFact started");

  const btn = document.querySelector("#factBtn");
  const text = document.querySelector("#factText");

  console.log(btn, text);

  if (!btn || !text) return;

  btn.addEventListener("click", async () => {
     console.log("CLICK WORKED");
    console.log("Fun fact clicked");
    text.textContent = "Loading...";

    try {
      const res = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random");
      const data = await res.json();
      text.textContent = data.text;
    } catch {
      text.textContent = "Could not load fact. Try again!";
    }
  });
}






/* ========= Init ========= */
setGreeting();
setYear();
initTheme();
initNav();
initSmoothScroll();
initForm();
initQuoteLoader();
initGeoWeather();
initProjectSort();
initFunFact();