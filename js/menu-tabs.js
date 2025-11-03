/**
 * Système d'onglets pour le menu
 */

document.addEventListener("DOMContentLoaded", function () {
  // Système d'onglets pour le menu (délégation d'événements)
  // Utiliser la délégation d'événements directement sur le document
  // pour gérer les boutons créés dynamiquement
  document.addEventListener("click", function (e) {
    // Vérifier si le clic est sur un bouton tab-btn
    const clickedButton = e.target.closest(".tab-btn");
    if (!clickedButton) return;

    // Vérifier que le bouton est bien dans le conteneur menu-tabs
    const menuTabsContainer = clickedButton.closest(".menu-tabs");
    if (!menuTabsContainer) return;

    e.preventDefault();
    e.stopPropagation();

    // Récupérer tous les boutons et catégories
    const tabButtons = document.querySelectorAll(".tab-btn");
    const menuCategories = document.querySelectorAll(".menu-category");

    // Désactiver tous les boutons et catégories
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    menuCategories.forEach((category) => category.classList.remove("active"));

    // Activer le bouton cliqué
    clickedButton.classList.add("active");

    // Activer la catégorie correspondante
    const targetCategory = document.getElementById(clickedButton.dataset.tab);
    if (targetCategory) {
      targetCategory.classList.add("active");
    }
  });
});
