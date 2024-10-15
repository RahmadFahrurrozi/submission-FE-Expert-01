import "regenerator-runtime";
import "../styles/reset.css";
import "../styles/navbar.css";
import "../styles/heroSection.css";
import "../styles/menu-section.css";
import "../styles/footer.css";
import "../styles/about.css";
import "../styles/gallerySection.css";

document.addEventListener("DOMContentLoaded", () => {
  const hamburgerButton = document.getElementById("hamburgerButton");
  const navMenu = document.getElementById("navMenu");
  const nav = document.querySelector("nav");

  hamburgerButton.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });

  document.addEventListener("click", (event) => {
    if (!nav.contains(event.target) && navMenu.classList.contains("active")) {
      navMenu.classList.remove("active");
    }
  });

  renderMenu();
});

async function loadMenuData() {
  try {
    const response = await fetch("./data/DATA.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.restaurants;
  } catch (error) {
    console.error("Error loading menu data:", error);
    return [];
  }
}

function createMenuItemHTML(restaurant) {
  const truncatedDescription =
    restaurant.description.length > 150
      ? `${restaurant.description.substring(0, 150)}...`
      : restaurant.description;

  return `
    <div class="menu-item" tabindex="0">
      <img src="${restaurant.pictureId}" alt="${restaurant.name}" />
      <div class="menu-item-content">
        <h3 class="menu-item-title">${restaurant.name}</h3>
        <p class="menu-item-description">${truncatedDescription}</p>
        <div class="menu-item-details">
          <div class="menu-item-rating">
            <span class="star-icon">★</span>
            <span class="rating-value">${restaurant.rating}</span>
          </div>
        </div>
        <div class="menu-item-location">
          <span class="map-icon">📍</span>
          <span class="city-name">${restaurant.city}</span>
        </div>
      </div>
    </div>
  `;
}

async function renderMenu() {
  const menuList = document.getElementById("menuList");
  const restaurants = await loadMenuData();

  if (restaurants.length === 0) {
    menuList.innerHTML = "<p>Tidak ada data menu restoran yang tersedia.</p>";
    return;
  }

  const menuHTML = restaurants.map(createMenuItemHTML).join("");
  menuList.innerHTML = menuHTML;
}
