window.addEventListener("scroll", () => {
  document.querySelector("nav")
    .classList.toggle("shadow", window.scrollY > 50);
});
