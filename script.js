const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  body.className = savedTheme;
  darkModeToggle.checked = savedTheme === "dark";
}

darkModeToggle.addEventListener("change", () => {
  if (darkModeToggle.checked) {
    body.className = "dark";
    localStorage.setItem("theme", "dark");
  } else {
    body.className = "light";
    localStorage.setItem("theme", "light");
  }
});
