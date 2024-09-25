const navbar = document.querySelector("#navbar");
const lio = document.querySelector("#lio");
window.addEventListener("scroll", (event) => {
  if (window.scrollY > 200) {
    lio.classList.add("text-change");
    // navbar.classList.remove("nav-transparent1");
    navbar.style.backgroundColor = "#000";
  } else {
    // navbar.classList.add("nav-transparent1");
    lio.classList.remove("text-change");
    navbar.style.backgroundColor = "#14213D";
  }
});
