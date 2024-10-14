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
});

async function loadMenuData() {
  try {
    const response = await fetch("/data/DATA.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const text = await response.text();
    try {
      const data = JSON.parse(text);
      return data.restaurants;
    } catch (parseError) {
      console.error("Error parsing JSON:", parseError);
      console.log("Received text:", text);
      throw parseError;
    }
  } catch (error) {
    console.error("Error loading menu data:", error);
    return [];
  }
}

function createMenuItemHTML(restaurant) {
  return `
    <div class="menu-item">
      <img src="${restaurant.pictureId}" alt="${restaurant.name}" />
      <div class="menu-item-content">
        <h3 class="menu-item-title">${restaurant.name}</h3>
        <p class="menu-item-description">${restaurant.description.substring(
          0,
          150
        )}...</p>
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

  const menuHTML = restaurants.map(createMenuItemHTML).join("");
  menuList.innerHTML = menuHTML;
}

document.addEventListener("DOMContentLoaded", renderMenu);
