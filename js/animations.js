/**
 * Animations au scroll, parallaxe et effets visuels
 */

document.addEventListener("DOMContentLoaded", function () {
  // Animation d'apparition au scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  // Observer les éléments avec la classe fade-in
  document.querySelectorAll(".fade-in").forEach((el) => {
    observer.observe(el);
  });

  // Ajouter la classe fade-in aux éléments appropriés
  const elementsToAnimate = document.querySelectorAll(
    ".menu-item, .feature, .contact-item, .about-text, .about-image"
  );
  elementsToAnimate.forEach((el) => {
    el.classList.add("fade-in");
    observer.observe(el);
  });

  // Effet de parallaxe léger pour la section hero
  window.addEventListener("scroll", function () {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector(".hero");
    if (hero) {
      const rate = scrolled * -0.5;
      hero.style.transform = `translateY(${rate}px)`;
    }
  });
});
