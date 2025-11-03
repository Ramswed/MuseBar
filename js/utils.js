document.addEventListener("DOMContentLoaded", function () {
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

  initialiserLogos();

  document.querySelectorAll("img").forEach((img) => {
    img.addEventListener("error", function () {
      this.style.display = "none";
      console.warn(`Image non trouvée: ${this.src}`);
    });
  });

  document.querySelectorAll(".btn, .tab-btn, .hamburger").forEach((element) => {
    element.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        this.click();
      }
    });
  });

  function initAddressCopy() {
    const addressClickable = document.querySelector(".address-clickable");
    const copyFeedback = document.querySelector(".copy-feedback");
    
    if (addressClickable && copyFeedback) {
      addressClickable.style.cursor = "pointer";
      
      addressClickable.addEventListener("click", async function() {
        const address = this.getAttribute("data-address");
        
        try {
          await navigator.clipboard.writeText(address);
          
          copyFeedback.classList.add("show");
          
          setTimeout(() => {
            copyFeedback.classList.remove("show");
            }, 2000);
        } catch (err) {
          const textArea = document.createElement("textarea");
          textArea.value = address;
          textArea.style.position = "fixed";
          textArea.style.opacity = "0";
          document.body.appendChild(textArea);
          textArea.select();
          
          try {
            document.execCommand("copy");
            copyFeedback.classList.add("show");
            setTimeout(() => {
              copyFeedback.classList.remove("show");
            }, 2000);
          } catch (fallbackErr) {
            console.error("Impossible de copier l'adresse:", fallbackErr);
          }
          
          document.body.removeChild(textArea);
        }
      });
    }
  }

  initAddressCopy();

  window.addEventListener('fragmentsLoaded', initAddressCopy);
});
