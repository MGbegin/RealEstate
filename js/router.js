// Core hash routing logic & navigation listener
/**
 * Router Module
 * Manages hash changes, URL validation, and view switching.
 */
import { fetchSiteData } from './services/dataService.js';
import { renderView, updateActiveNav } from './views/viewRenderer.js';
import { initTheme } from './services/themeService.js'; // Import theme service

let siteData = {};

export async function initRouter() {
    // 1. Initialize Theme Preference
    initTheme();

    // 2. Fetch data through service
    siteData = await fetchSiteData();
    if (!siteData) return;

    setupNavListener();
    setupMobileMenu(); // Added mobile menu controller

    window.addEventListener('hashchange', handleRouteChange);
    handleRouteChange();
}

function setupNavListener() {
    document.querySelectorAll('[data-route]').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const route = link.getAttribute('data-route');
            window.location.hash = `#/${route}`;

            // Close mobile menu automatically upon clicking a link
            const navMenu = document.querySelector('.nav-menu');
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    });
}

/**
 * Handles mobile hamburger dropdown toggle logic
 */
function setupMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');

    if (menuBtn && navMenu) {
        menuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
}

function handleRouteChange() {
    const hash = window.location.hash.replace('#/', '').replace('#', '');
    const currentRoute = hash || 'home';

    renderView(currentRoute, siteData);
    updateActiveNav(currentRoute);
}