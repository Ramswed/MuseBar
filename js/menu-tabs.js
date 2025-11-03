document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("click", function (e) {
    const clickedButton = e.target.closest(".tab-btn");
    if (!clickedButton) return;

    const menuTabsContainer = clickedButton.closest(".menu-tabs");
    if (!menuTabsContainer) return;

    e.preventDefault();
    e.stopPropagation();

    const tabButtons = document.querySelectorAll(".tab-btn");
    const menuCategories = document.querySelectorAll(".menu-category");

    tabButtons.forEach((btn) => btn.classList.remove("active"));
    menuCategories.forEach((category) => category.classList.remove("active"));

    clickedButton.classList.add("active");

    const targetCategory = document.getElementById(clickedButton.dataset.tab);
    if (targetCategory) {
      targetCategory.classList.add("active");
    }
  });
});
