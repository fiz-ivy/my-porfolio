function smoothScrollTo(targetY, duration = 1000) {
  const startY = window.scrollY;
  const distanceY = targetY - startY;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    window.scrollTo(0, startY + distanceY * easeInOutQuad(progress));

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }

  function easeInOutQuad(t) {
    return t < 0.5
      ? 2 * t * t
      : -1 + (4 - 2 * t) * t;
  }

  requestAnimationFrame(animation);
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetID = this.getAttribute('href');
      const target = document.querySelector(targetID);
      if (target) {
        const offset = 80; // chiều cao của navbar hoặc header cố định
        const targetY = target.getBoundingClientRect().top + window.scrollY - offset;
        smoothScrollTo(targetY, 1500); // Thời gian cuộn: 1500ms
      }
    });
  });
});
