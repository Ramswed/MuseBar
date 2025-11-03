/**
 * Navigation fluide vers les sections
 */

document.addEventListener("DOMContentLoaded", function () {
  // Navigation fluide vers les sections
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        const navbar = document.querySelector(".navbar");
        const navbarHeight = navbar ? navbar.offsetHeight : 70;

        // Ajuster l'offset selon la section pour un meilleur positionnement
        let offset = 70;

        // Offset spécifique pour la section privatisation
        if (this.getAttribute("href") === "#privatisation") {
          offset = 120; // Plus d'espace pour cette section
        }

        const offsetTop = target.offsetTop - navbarHeight + offset;

        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
});
