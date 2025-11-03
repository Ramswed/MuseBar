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

function initMenu() {
  generateMenu();
  updateMenuTabs();
}

window.addEventListener('fragmentsLoaded', initMenu);
