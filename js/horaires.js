function initHoraires() {
  const JOURS_SEMAINE = {
    lundi: "Lundi",
    mardi: "Mardi",
    mercredi: "Mercredi",
    jeudi: "Jeudi",
    vendredi: "Vendredi",
    samedi: "Samedi",
    dimanche: "Dimanche",
  };

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

  afficherHoraires();
}

window.addEventListener('fragmentsLoaded', initHoraires);
