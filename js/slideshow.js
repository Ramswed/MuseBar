/**
 * Gestion du diaporama dans la section "Notre Histoire"
 */

function initSlideshow() {
  // Diaporama
  let currentSlideIndex = 0;
  let autoPlayInterval = null;
  let isUserInteracting = false;
  const slides = document.querySelectorAll(".slide");
  const indicators = document.querySelectorAll(".indicator");

  // Vérifier que les éléments existent
  if (slides.length === 0) return;

  function showSlide(index) {
    // S'assurer que l'index est valide
    if (index < 0 || index >= slides.length) return;

    // Retirer les classes actives
    slides.forEach((slide) => slide.classList.remove("active"));
    indicators.forEach((indicator) => indicator.classList.remove("active"));

    // Ajouter les classes actives
    slides[index].classList.add("active");
    if (indicators[index]) {
      indicators[index].classList.add("active");
    }

    // Mettre à jour l'index actuel
    currentSlideIndex = index;
  }

  function changeSlide(direction) {
    isUserInteracting = true;
    resetAutoPlay();

    let newIndex = currentSlideIndex + direction;

    // Gérer le débordement circulaire
    if (newIndex >= slides.length) {
      newIndex = 0;
    } else if (newIndex < 0) {
      newIndex = slides.length - 1;
    }

    showSlide(newIndex);
  }

  function goToSlide(index) {
    // index est entre 1 et slides.length (depuis le HTML)
    if (index < 1 || index > slides.length) return;

    isUserInteracting = true;
    resetAutoPlay();

    const slideIndex = index - 1; // Convertir en index 0-based
    showSlide(slideIndex);
  }

  function startAutoPlay() {
    // Arrêter l'auto-play existant s'il y en a un
    stopAutoPlay();

    // Démarrer l'auto-play seulement si l'utilisateur n'interagit pas
    if (!isUserInteracting && slides.length > 0) {
      autoPlayInterval = setInterval(() => {
        if (!isUserInteracting) {
          let nextIndex = currentSlideIndex + 1;
          if (nextIndex >= slides.length) {
            nextIndex = 0;
          }
          showSlide(nextIndex);
        }
      }, 5000);
    }
  }

  function stopAutoPlay() {
    if (autoPlayInterval) {
      clearInterval(autoPlayInterval);
      autoPlayInterval = null;
    }
  }

  function resetAutoPlay() {
    stopAutoPlay();
    // Réinitialiser le flag après 5 secondes pour reprendre l'auto-play
    setTimeout(() => {
      isUserInteracting = false;
      startAutoPlay();
    }, 5000);
  }

  // Rendre les fonctions accessibles globalement pour les onclick du HTML
  window.changeSlide = changeSlide;
  window.currentSlide = goToSlide;

  // Initialiser avec la première slide
  showSlide(0);

  // Démarrer l'auto-play
  startAutoPlay();

  // Arrêter l'auto-play quand l'utilisateur survole le carrousel
  const slideshowContainer = document.querySelector('.slideshow-container');
  if (slideshowContainer) {
    slideshowContainer.addEventListener('mouseenter', () => {
      stopAutoPlay();
    });

    slideshowContainer.addEventListener('mouseleave', () => {
      if (!isUserInteracting) {
        startAutoPlay();
      }
    });
  }
}

// Attendre que les fragments HTML soient chargés
window.addEventListener('fragmentsLoaded', initSlideshow);
