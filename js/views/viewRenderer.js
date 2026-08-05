// Master view coordinator & 404 handler

import { renderHome } from "./pages/homeView.js";
import { renderProperties } from "./pages/propertiesView.js";
import { renderAgents } from "./pages/agentsView.js";
import { renderContact } from "./pages/contactView.js";

/**
 * View Renderer Module
 * Generates and injects HTML templates based on route data.
 */
export function renderView(routeKey, siteData) {
  const viewContainer = document.getElementById("dynamic-view");
  const data = siteData[routeKey];

  // If route doesn't exist, display the 404 view
  if (!data) {
    viewContainer.innerHTML = `
            <div class="error-container" style="text-align: center; padding: 3rem 0;">
                <h1 style="font-size: 4rem; color: var(--primary-color); margin-bottom: 0.5rem;">404</h1>
                <h2 style="margin-bottom: 1rem;">Page Not Found</h2>
                <p style="margin-bottom: 2rem;">The page you are looking for doesn't exist or has been moved.</p>
                <a href="#/home" data-route="home" class="btn btn-primary">Back to Home</a>
            </div>
        `;

    // Re-attach listener for the 404 home button
    const homeBtn = viewContainer.querySelector('[data-route="home"]');
    if (homeBtn) {
      homeBtn.addEventListener("click", (e) => {
        e.preventDefault();
        window.location.hash = "#/home";
      });
    }
    return;
  }

  // Switch/Route to respective individual page generator
  switch (routeKey) {
    case "home":
      viewContainer.innerHTML = renderHome(data);
      break;
    case "properties":
      viewContainer.innerHTML = renderProperties(data);
      break;
    case "agents":
      viewContainer.innerHTML = renderAgents(data);
      break;
    case "contact":
      viewContainer.innerHTML = renderContact(data);
      // Example: Add custom interactive behavior for the contact form
      setTimeout(() => {
        const form = document.getElementById("contactForm");
        if (form) {
          form.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Thank you! Your message has been sent successfully.");
            form.reset();
          });
        }
      }, 0);
      break;
    default:
      viewContainer.innerHTML = `<p>Page content loading error.</p>`;
  }
}

/**
 * Update active state classes on navbar links
 */
export function updateActiveNav(routeKey) {
  document.querySelectorAll("[data-route]").forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("data-route") === routeKey) {
      link.classList.add("active");
    }
  });
}
