// Theme Toggle Logic
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  body.classList.add(currentTheme);
  themeToggle.textContent = currentTheme === "dark-theme" ? "☀" : "☾";
}

themeToggle.addEventListener("click", () => {
  if (body.classList.contains("light-theme")) {
    body.classList.replace("light-theme", "dark-theme");
    localStorage.setItem("theme", "dark-theme");
    themeToggle.textContent = "☀";
  } else {
    body.classList.replace("dark-theme", "light-theme");
    localStorage.setItem("theme", "light-theme");
    themeToggle.textContent = "☾";
  }
});

// Scroll Animations Logic
const fadeInElements = document.querySelectorAll('.fade-in');

const checkVisibility = () => {
  const windowHeight = window.innerHeight;
  fadeInElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    if (elementTop <= windowHeight - 150) {
      element.classList.add('appear');
    }
  });
};

// Trigger visibility check when scrolling
window.addEventListener('scroll', checkVisibility);

// Initial check on page load
document.addEventListener("DOMContentLoaded", checkVisibility);
