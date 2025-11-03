/**
 * Affichage dynamique des horaires d'ouverture
 */

function initHoraires() {
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
}

// Attendre que les fragments HTML soient chargés
window.addEventListener('fragmentsLoaded', initHoraires);
