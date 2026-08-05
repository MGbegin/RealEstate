// Properties page layout & listings grid

export function renderProperties(data) {
    const cardsHTML = data.listings.map(item => `
        <div class="property-card" style="background: var(--card-bg); border: 1px solid var(--border-color); border-radius: 8px; overflow: hidden; box-shadow: var(--shadow);">
            <div style="height: 200px; width: 100%; overflow: hidden;">
                <img src="${item.image}" alt="${item.name}" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease;">
            </div>
            <div style="padding: 1.5rem;">
                <h3 style="margin-bottom: 0.3rem; font-size: 1.1rem;">${item.name}</h3>
                <p style="color: var(--primary-color); font-weight: 600; margin-bottom: 0.5rem; font-size: 1.1rem;">${item.price}</p>
                <p style="color: var(--text-muted); font-size: 0.9rem;">📍 ${item.location}</p>
            </div>
        </div>
    `).join('');

    return `
        <section class="container" style="padding: 3rem 0;">
            <h1 style="margin-bottom: 0.5rem;">${data.title}</h1>
            <p style="color: var(--text-muted); margin-bottom: 2rem;">${data.subtitle}</p>
            <div class="property-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem;">
                ${cardsHTML}
            </div>
        </section>
    `;
}