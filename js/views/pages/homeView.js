export function renderHome(data) {
  const slidesHTML = data.slides
    .map(
      (slide, index) => `
        <div class="hero-slide ${index === 0 ? "active" : ""}" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: ${index === 0 ? "1" : "0"}; transition: opacity 1s ease-in-out;">
            <img src="${slide.image}" alt="${slide.caption}" style="width: 100%; height: 100%; object-fit: cover;">
            <!-- Dark Overlay for text readability -->
            <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.45);"></div>
        </div>
    `,
    )
    .join("");

  const textSlidesHTML = data.slides
    .map(
      (slide, index) => `
        <div class="hero-text-slide ${index === 0 ? "active" : ""}" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: ${index === 0 ? "flex" : "none"}; flex-direction: column; justify-content: center; align-items: center; text-align: center; color: #ffffff; padding: 0 1rem;">
            <h1 style="font-size: 3rem; margin-bottom: 1rem; line-height: 1.2; max-width: 800px; text-shadow: 0 2px 4px rgba(0,0,0,0.5);">${slide.title}</h1>
            <p style="font-size: 1.2rem; margin-bottom: 2rem; max-width: 600px; color: #f3f4f6; text-shadow: 0 1px 2px rgba(0,0,0,0.5);">${slide.subtitle}</p>
            <a href="#/properties" data-route="properties" class="btn btn-primary" style="padding: 0.85rem 2rem; font-size: 1.1rem;">${data.buttonText}</a>
        </div>
    `,
    )
    .join("");

  // Initialize full-width background slider logic after DOM insertion
  setTimeout(() => initFullScreenSlider(), 50);

  return `
        <!-- 1. EXISTING WORK: Full Width Synchronized Hero Slider -->
        <section class="hero-fullscreen" style="position: relative; width: 100%; height: calc(100vh - 80px); min-height: 500px; overflow: hidden;">
            <div class="hero-slides-wrapper" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1;">
                ${slidesHTML}
            </div>
            <div class="hero-texts-wrapper" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 2;">
                ${textSlidesHTML}
            </div>
            <button id="prevSlide" style="position: absolute; top: 50%; left: 30px; transform: translateY(-50%); background: rgba(0,0,0,0.4); color: white; border: none; width: 45px; height: 45px; border-radius: 50%; cursor: pointer; z-index: 10; font-size: 1.2rem; transition: background 0.2s;" onmouseover="this.style.background='rgba(0,0,0,0.7)'" onmouseout="this.style.background='rgba(0,0,0,0.4)'">❮</button>
            <button id="nextSlide" style="position: absolute; top: 50%; right: 30px; transform: translateY(-50%); background: rgba(0,0,0,0.4); color: white; border: none; width: 45px; height: 45px; border-radius: 50%; cursor: pointer; z-index: 10; font-size: 1.2rem; transition: background 0.2s;" onmouseover="this.style.background='rgba(0,0,0,0.7)'" onmouseout="this.style.background='rgba(0,0,0,0.4)'">❯</button>
        </section>

        <!-- 2. NEW ADDITION: Real Estate Quick Search Bar -->
        <section class="container" style="position: relative; z-index: 10; margin-top: -40px; margin-bottom: 4rem;">
            <div style="background: var(--card-bg); border: 1px solid var(--border-color); padding: 1.5rem 2rem; border-radius: 12px; box-shadow: var(--shadow); display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)) 150px; gap: 1rem; align-items: center;">
                <div>
                    <label style="display: block; font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.3rem;">City / Location</label>
                    <select style="width: 100%; padding: 0.75rem; border-radius: 6px; border: 1px solid var(--border-color); background: var(--bg-color); color: var(--text-color);">
                        <option>Mumbai</option>
                        <option>Bengaluru</option>
                        <option>New Delhi</option>
                    </select>
                </div>
                <div>
                    <label style="display: block; font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.3rem;">Property Type</label>
                    <select style="width: 100%; padding: 0.75rem; border-radius: 6px; border: 1px solid var(--border-color); background: var(--bg-color); color: var(--text-color);">
                        <option>Luxury Apartment</option>
                        <option>Gated Villa</option>
                        <option>Builder Floor</option>
                    </select>
                </div>
                <div>
                    <label style="display: block; font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.3rem;">Budget</label>
                    <select style="width: 100%; padding: 0.75rem; border-radius: 6px; border: 1px solid var(--border-color); background: var(--bg-color); color: var(--text-color);">
                        <option>₹2 Cr - ₹5 Cr</option>
                        <option>₹5 Cr - ₹10 Cr</option>
                        <option>₹10 Cr+</option>
                    </select>
                </div>
                <div style="display: flex; align-items: flex-end;">
                    <a href="#/properties" data-route="properties" class="btn btn-primary" style="width: 100%; text-align: center; padding: 0.75rem;">Search</a>
                </div>
            </div>
        </section>

        <!-- 3. NEW ADDITION: Trust & Features Highlights Grid -->
        <section class="container" style="margin-bottom: 5rem;">
            <div style="text-align: center; margin-bottom: 3rem;">
                <h2 style="font-size: 2rem; margin-bottom: 0.5rem;">Why Choose PrimeNest India?</h2>
                <p style="color: var(--text-muted);">We make luxury property hunting transparent, verified, and seamless.</p>
            </div>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem;">
                <div style="background: var(--card-bg); border: 1px solid var(--border-color); padding: 2rem; border-radius: 8px; text-align: center; box-shadow: var(--shadow);">
                    <div style="font-size: 2.5rem; margin-bottom: 1rem;">🛡️</div>
                    <h3 style="margin-bottom: 0.5rem; font-size: 1.2rem;">100% Verified Listings</h3>
                    <p style="color: var(--text-muted); font-size: 0.95rem;">Every property undergoes strict legal title checking and physical site evaluation.</p>
                </div>
                <div style="background: var(--card-bg); border: 1px solid var(--border-color); padding: 2rem; border-radius: 8px; text-align: center; box-shadow: var(--shadow);">
                    <div style="font-size: 2.5rem; margin-bottom: 1rem;">🤝</div>
                    <h3 style="margin-bottom: 0.5rem; font-size: 1.2rem;">Expert Local Advisors</h3>
                    <p style="color: var(--text-muted); font-size: 0.95rem;">Direct assistance from experienced regional consultants across top metro cities.</p>
                </div>
                <div style="background: var(--card-bg); border: 1px solid var(--border-color); padding: 2rem; border-radius: 8px; text-align: center; box-shadow: var(--shadow);">
                    <div style="font-size: 2.5rem; margin-bottom: 1rem;">🔑</div>
                    <h3 style="margin-bottom: 0.5rem; font-size: 1.2rem;">End-to-End Support</h3>
                    <p style="color: var(--text-muted); font-size: 0.95rem;">From booking visits to loan documentation and registration support, we handle it all.</p>
                </div>
            </div>
        </section>

        <!-- 4. NEW ADDITION: Bottom Conversion Callout Banner -->
        <section class="container" style="margin-bottom: 5rem;">
            <div style="background: linear-gradient(135deg, var(--primary-color), var(--primary-hover)); color: #ffffff; padding: 3rem 2rem; border-radius: 12px; text-align: center; box-shadow: var(--shadow);">
                <h2 style="font-size: 2.25rem; margin-bottom: 1rem; color: #ffffff;">Ready to Find Your Next Property?</h2>
                <p style="font-size: 1.1rem; margin-bottom: 2rem; opacity: 0.9; max-width: 600px; margin-left: auto; margin-right: auto;">Connect with our specialist advisors today or browse our hand-picked collection of premium residential assets.</p>
                <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                    <a href="#/properties" data-route="properties" class="btn" style="background: #ffffff; color: var(--text-color); font-weight: 600;">View Properties</a>
                    <a href="#/contact" data-route="contact" class="btn" style="background: transparent; border: 2px solid #ffffff; color: #ffffff;">Contact Us</a>
                </div>
            </div>
        </section>

        <style>
            @media (max-width: 768px) {
                .hero-fullscreen h1 {
                    font-size: 2rem !important;
                }
                .hero-fullscreen p {
                    font-size: 1rem !important;
                }
                #prevSlide, #nextSlide {
                    width: 35px;
                    height: 35px;
                }
            }
        </style>
    `;
}

/**
 * Synchronized Fullscreen Background and Text Slider Logic (Preserved)
 */
function initFullScreenSlider() {
  const imageSlides = document.querySelectorAll(".hero-slide");
  const textSlides = document.querySelectorAll(".hero-text-slide");

  if (imageSlides.length === 0) return;

  let currentIndex = 0;
  let slideInterval;

  function showSlide(index) {
    imageSlides.forEach((slide, i) => {
      slide.style.opacity = i === index ? "1" : "0";
    });

    textSlides.forEach((textSlide, i) => {
      if (i === index) {
        textSlide.style.display = "flex";
        setTimeout(() => {
          textSlide.style.opacity = "1";
        }, 50);
      } else {
        textSlide.style.display = "none";
        textSlide.style.opacity = "0";
      }
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % imageSlides.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + imageSlides.length) % imageSlides.length;
    showSlide(currentIndex);
  }

  const nextBtn = document.getElementById("nextSlide");
  const prevBtn = document.getElementById("prevSlide");

  if (nextBtn && prevBtn) {
    nextBtn.onclick = () => {
      nextSlide();
      resetTimer();
    };
    prevBtn.onclick = () => {
      prevSlide();
      resetTimer();
    };
  }

  function startTimer() {
    slideInterval = setInterval(nextSlide, 5000);
  }

  function resetTimer() {
    clearInterval(slideInterval);
    startTimer();
  }

  startTimer();
}
