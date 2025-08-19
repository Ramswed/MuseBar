// Initialisation du site Muse Bar
document.addEventListener("DOMContentLoaded", function () {
  // Navigation mobile
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const navbar = document.querySelector(".navbar");

  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

    // Empêcher le scroll du body quand le menu est ouvert
    if (navMenu.classList.contains("active")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  });

  // Fermer le menu mobile en cliquant sur un lien
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
      document.body.style.overflow = "";
    });
  });

  // Fermer le menu mobile en cliquant à l'extérieur
  document.addEventListener("click", (e) => {
    if (!navbar.contains(e.target) && navMenu.classList.contains("active")) {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
      document.body.style.overflow = "";
    }
  });

  // Fermer le menu mobile avec la touche Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navMenu.classList.contains("active")) {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
      document.body.style.overflow = "";
    }
  });

  // Effet de scroll sur la navbar
  let lastScrollTop = 0;
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    const currentScrollTop =
      window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollTop > 100) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    if (currentScrollTop > lastScrollTop && currentScrollTop > 200) {
      navbar.style.transform = "translateY(-100%)";
    } else {
      navbar.style.transform = "translateY(0)";
    }

    lastScrollTop = currentScrollTop;
  });

  // Navigation fluide vers les sections
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        const navbarHeight = document.querySelector(".navbar").offsetHeight;
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

  // Système d'onglets pour le menu
  const tabButtons = document.querySelectorAll(".tab-btn");
  const menuCategories = document.querySelectorAll(".menu-category");

  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      menuCategories.forEach((category) => category.classList.remove("active"));

      this.classList.add("active");

      const targetCategory = document.getElementById(this.dataset.tab);
      if (targetCategory) {
        targetCategory.classList.add("active");
      }
    });
  });

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

  // Gestion des erreurs d'images
  document.querySelectorAll("img").forEach((img) => {
    img.addEventListener("error", function () {
      this.style.display = "none";
      console.warn(`Image non trouvée: ${this.src}`);
    });
  });

  // Amélioration de l'accessibilité
  document.querySelectorAll(".btn, .tab-btn, .hamburger").forEach((element) => {
    element.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        this.click();
      }
    });
  });

  // ========================================
  // GESTION DES HORAIRES
  // ========================================

  // Configuration des jours de la semaine
  const JOURS_SEMAINE = {
    lundi: "Lundi",
    mardi: "Mardi",
    mercredi: "Mercredi",
    jeudi: "Jeudi",
    vendredi: "Vendredi",
    samedi: "Samedi",
    dimanche: "Dimanche",
  };

  // Affichage dynamique des horaires
  function afficherHoraires() {
    const horairesDiv = document.querySelector(".horaires-dyn");
    if (!horairesDiv || !SITE_CONFIG?.contact?.hours) return;

    let horairesHTML = "";
    Object.entries(JOURS_SEMAINE).forEach(([jour, label]) => {
      const horaire = SITE_CONFIG.contact.hours[jour];
      if (horaire) {
        horairesHTML += `
          <div class="horaire-ligne">
            <span class="jour">${label}</span>
            <span class="horaire">${horaire}</span>
          </div>
        `;
      }
    });

    horairesDiv.innerHTML = horairesHTML;
  }

  // Initialisation des horaires
  afficherHoraires();

  // ========================================
  // GESTION DES LOGOS
  // ========================================

  function initialiserLogos() {
    const siteLogo = document.querySelector(".nav-logo img");
    if (siteLogo && SITE_CONFIG?.site?.logo) {
      siteLogo.src = SITE_CONFIG.site.logo;
      siteLogo.alt = `${SITE_CONFIG.site.name} Logo`;
    }

    const heroLogo = document.querySelector(".hero-logo img");
    if (heroLogo && SITE_CONFIG?.site?.logo) {
      heroLogo.src = SITE_CONFIG.site.logo;
      heroLogo.alt = `${SITE_CONFIG.site.name} Logo`;
    }
  }

  // Initialisation des logos
  initialiserLogos();

  // Diaporama
  let currentSlideIndex = 0;
  const slides = document.querySelectorAll(".slide");
  const indicators = document.querySelectorAll(".indicator");

  function showSlide(index) {
    slides.forEach((slide) => slide.classList.remove("active"));
    indicators.forEach((indicator) => indicator.classList.remove("active"));

    if (slides[index]) {
      slides[index].classList.add("active");
      indicators[index].classList.add("active");
    }
  }

  function changeSlide(direction) {
    currentSlideIndex += direction;

    if (currentSlideIndex >= slides.length) {
      currentSlideIndex = 0;
    } else if (currentSlideIndex < 0) {
      currentSlideIndex = slides.length - 1;
    }

    showSlide(currentSlideIndex);
  }

  function currentSlide(index) {
    currentSlideIndex = index - 1;
    showSlide(currentSlideIndex);
  }

  // Rendre les fonctions accessibles globalement pour les onclick du HTML
  window.changeSlide = changeSlide;
  window.currentSlide = currentSlide;

  // Auto-play du diaporama
  setInterval(() => {
    changeSlide(1);
  }, 5000);

  // ========================================
  // GESTION DU MENU
  // ========================================

  /**
   * Génère le menu dynamiquement depuis la configuration
   */
  function generateMenu() {
    const menuContent = document.querySelector(".menu-content");
    if (!menuContent || !MENU_CONFIG?.categories) return;

    menuContent.innerHTML = "";

    MENU_CONFIG.categories.forEach((category) => {
      const categoryDiv = document.createElement("div");
      categoryDiv.className = `menu-category ${
        category.id === "grignotages" ? "active" : ""
      }`;
      categoryDiv.id = category.id;

      // Vérifier si la catégorie a des sous-catégories (comme les cocktails)
      if (category.subcategories) {
        const subcategoriesDiv = document.createElement("div");
        subcategoriesDiv.className = "menu-subcategories";

        category.subcategories.forEach((subcategory) => {
          const subcategoryDiv = document.createElement("div");
          subcategoryDiv.className = "subcategory";

          const subcategoryTitle = document.createElement("h3");
          subcategoryTitle.className = "subcategory-title";
          subcategoryTitle.textContent = subcategory.name;
          subcategoryDiv.appendChild(subcategoryTitle);

          const menuGrid = document.createElement("div");
          menuGrid.className = "menu-grid";

          subcategory.items.forEach((item) => {
            const menuItem = document.createElement("div");
            menuItem.className = "menu-item";
            menuItem.innerHTML = `
              <div class="menu-item-header">
                <h3>${item.name}</h3>
                <span class="price">${item.price}</span>
              </div>
              <p>${item.description}</p>
            `;
            menuGrid.appendChild(menuItem);
          });

          subcategoryDiv.appendChild(menuGrid);
          subcategoriesDiv.appendChild(subcategoryDiv);
        });

        categoryDiv.appendChild(subcategoriesDiv);
      } else {
        // Catégorie normale avec items directs
        const menuGrid = document.createElement("div");
        menuGrid.className = "menu-grid";

        category.items.forEach((item) => {
          const menuItem = document.createElement("div");
          menuItem.className = "menu-item";
          menuItem.innerHTML = `
            <div class="menu-item-header">
              <h3>${item.name}</h3>
              <span class="price">${item.price}</span>
            </div>
            <p>${item.description}</p>
          `;
          menuGrid.appendChild(menuItem);
        });

        categoryDiv.appendChild(menuGrid);
      }

      menuContent.appendChild(categoryDiv);
    });
  }

  /**
   * Met à jour les onglets du menu
   */
  function updateMenuTabs() {
    const menuTabs = document.querySelector(".menu-tabs");
    if (!menuTabs || !MENU_CONFIG?.categories) return;

    menuTabs.innerHTML = "";

    MENU_CONFIG.categories.forEach((category, index) => {
      const tabBtn = document.createElement("button");
      tabBtn.className = `tab-btn ${index === 0 ? "active" : ""}`;
      tabBtn.setAttribute("data-tab", category.id);
      tabBtn.textContent = category.name;
      menuTabs.appendChild(tabBtn);
    });
  }

  // Initialisation du menu
  generateMenu();
  updateMenuTabs();

  // Initialisation terminée
  console.log("Site Muse Bar initialisé avec succès !");
});
