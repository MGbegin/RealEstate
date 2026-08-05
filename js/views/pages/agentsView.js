// Agents page layout & team cards

export function renderAgents(data) {
    const teamHTML = data.team.map(agent => `
        <div class="agent-card" style="background: var(--card-bg); border: 1px solid var(--border-color); padding: 2rem 1.5rem; border-radius: 8px; text-align: center; box-shadow: var(--shadow);">
            <div style="width: 100px; height: 100px; margin: 0 auto 1rem auto; border-radius: 50%; overflow: hidden; border: 2px solid var(--primary-color);">
                <img src="${agent.image}" alt="${agent.name}" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <h3 style="margin-bottom: 0.3rem; font-size: 1.2rem;">${agent.name}</h3>
            <p style="color: var(--text-muted); font-size: 0.9rem;">${agent.role}</p>
        </div>
    `).join('');

    return `
        <section class="container" style="padding: 3rem 0;">
            <h1 style="margin-bottom: 0.5rem;">${data.title}</h1>
            <p style="color: var(--text-muted); margin-bottom: 2rem;">${data.subtitle}</p>
            <div class="agents-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem;">
                ${teamHTML}
            </div>
        </section>
    `;
}