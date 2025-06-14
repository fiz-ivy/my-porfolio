document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".float-on-scroll");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const el = entry.target;
      const animName = el.dataset.animate;
      const animDelay = el.dataset.delay || "0s";

      if (entry.isIntersecting) {
        el.classList.remove("animate");
        el.style.animation = "none";
        void el.offsetWidth;

        el.style.animation = `${animName} 1s ease-out ${animDelay} forwards`;
        el.classList.add("animate");
      }
    });
  }, {
    threshold: 0.3,
  });

  animatedElements.forEach((el) => observer.observe(el));
});
