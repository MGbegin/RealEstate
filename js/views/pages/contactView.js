// Contact page layout & form

export function renderContact(data) {
    return `
        <section class="container" style="padding: 3rem 0;">
            <h1 style="margin-bottom: 0.5rem;">${data.title}</h1>
            <p style="color: var(--text-muted); margin-bottom: 2.5rem;">${data.subtitle}</p>
            
            <div class="contact-layout" style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center;">
                <!-- Left Column: Form -->
                <form id="contactForm" style="display: flex; flex-direction: column; gap: 1rem;">
                    <input type="text" placeholder="Your Name" required style="padding: 0.85rem; border-radius: 6px; border: 1px solid var(--border-color); background: var(--card-bg); color: var(--text-color);">
                    <input type="email" placeholder="Your Email" required style="padding: 0.85rem; border-radius: 6px; border: 1px solid var(--border-color); background: var(--card-bg); color: var(--text-color);">
                    <textarea placeholder="Your Message" rows="5" required style="padding: 0.85rem; border-radius: 6px; border: 1px solid var(--border-color); background: var(--card-bg); color: var(--text-color);"></textarea>
                    <button type="submit" class="btn btn-primary">Send Message</button>
                </form>

                <!-- Right Column: Visual Brand Image -->
                <div class="contact-image-wrapper" style="border-radius: 8px; overflow: hidden; height: 350px; box-shadow: var(--shadow);">
                    <img src="${data.bannerImage}" alt="Corporate Office" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
            </div>
        </section>
        
        <style>
            @media (max-width: 768px) {
                .contact-layout {
                    grid-template-columns: 1fr !important;
                }
                .contact-image-wrapper {
                    display: none; /* Hide decorative image on smaller mobile screens for layout flow */
                }
            }
        </style>
    `;
}