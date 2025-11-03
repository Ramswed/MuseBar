function initSlideshow() {
  let currentSlideIndex = 0;
  let autoPlayInterval = null;
  let isUserInteracting = false;
  const slides = document.querySelectorAll(".slide");
  const indicators = document.querySelectorAll(".indicator");

  if (slides.length === 0) return;

  function showSlide(index) {
    if (index < 0 || index >= slides.length) return;

    slides.forEach((slide) => slide.classList.remove("active"));
    indicators.forEach((indicator) => indicator.classList.remove("active"));

    slides[index].classList.add("active");
    if (indicators[index]) {
      indicators[index].classList.add("active");
    }

    currentSlideIndex = index;
  }

  function changeSlide(direction) {
    isUserInteracting = true;
    resetAutoPlay();

    let newIndex = currentSlideIndex + direction;

    if (newIndex >= slides.length) {
      newIndex = 0;
    } else if (newIndex < 0) {
      newIndex = slides.length - 1;
    }

    showSlide(newIndex);
  }

  function goToSlide(index) {
    if (index < 1 || index > slides.length) return;

    isUserInteracting = true;
    resetAutoPlay();

    const slideIndex = index - 1;
    showSlide(slideIndex);
  }

  function startAutoPlay() {
    stopAutoPlay();

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
    setTimeout(() => {
      isUserInteracting = false;
      startAutoPlay();
    }, 5000);
  }

  window.changeSlide = changeSlide;
  window.currentSlide = goToSlide;

  showSlide(0);

  startAutoPlay();

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

window.addEventListener('fragmentsLoaded', initSlideshow);
