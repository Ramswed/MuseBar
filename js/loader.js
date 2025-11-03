async function loadHTMLFragment(file, targetSelector) {
  try {
    const response = await fetch(file);
    if (!response.ok) {
      throw new Error(`Failed to load ${file}: ${response.status}`);
    }
    const html = await response.text();
    const targetElement = document.querySelector(targetSelector);
    if (targetElement) {
      targetElement.innerHTML = html;
    } else {
      console.error(`Target element not found: ${targetSelector}`);
    }
  } catch (error) {
    console.error(`Error loading ${file}:`, error);
  }
}

async function loadAllFragments() {
  await loadHTMLFragment('html/navigation.html', '#navigation-container');
  await loadHTMLFragment('html/hero.html', '#hero-container');
  await loadHTMLFragment('html/menu.html', '#menu-container');
  await loadHTMLFragment('html/about.html', '#about-container');
  await loadHTMLFragment('html/privatisation.html', '#privatisation-container');
  await loadHTMLFragment('html/find.html', '#find-container');
  await loadHTMLFragment('html/reviews.html', '#reviews-container');
  await loadHTMLFragment('html/media-banner.html', '#media-banner-container');
  await loadHTMLFragment('html/footer.html', '#footer-container');
  
  window.dispatchEvent(new CustomEvent('fragmentsLoaded'));
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadAllFragments);
} else {
  loadAllFragments();
}

