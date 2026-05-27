document.addEventListener("DOMContentLoaded", () => {
  // آرایه‌ها را پاک کردیم، مستقیما از فایل‌های متصل شده خوانده می‌شوند.

  // --- 2. Mobile Menu Toggle ---
  const menuBtn = document.getElementById("mobile-menu-btn");
  const navLinks = document.getElementById("nav-links");
  const navItems = document.querySelectorAll(".nav-item");

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      menuBtn.innerHTML = navLinks.classList.contains("active")
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';
    });

    navItems.forEach((item) => {
      item.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
      });
    });
  }

  // --- 3. Initialize AOS ---
  if (typeof AOS !== "undefined") {
    AOS.init({ duration: 800, once: true, offset: 50 });
  }

  // --- 4. Initialize Typed.js ---
  if (document.getElementById("typed-text")) {
    new Typed("#typed-text", {
      strings: [
        "real-time systems",
        "business platforms",
        "scalable web applications",
        "data-driven dashboards",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
    });
  }

  // --- 5. Render Services ---
  const servicesContainer = document.getElementById("services-container");
  if (servicesContainer && typeof services !== "undefined") {
    services.forEach((srv, index) => {
      const serviceHTML = `
                <div class="glass-card service-card" data-aos="fade-up" data-aos-delay="${index * 100}">
                    <div class="service-icon"><i class="fa-solid ${srv.icon}"></i></div>
                    <h3>${srv.title}</h3>
                    <p class="text-muted text-sm mt-2">${srv.description}</p>
                </div>
            `;
      servicesContainer.innerHTML += serviceHTML;
    });
  }

  // --- 6. Render Marquee Skills ---
  const skillsContainer = document.getElementById("skills-track");
  if (skillsContainer && typeof skills !== "undefined") {
    let skillsHTML = "";
    skills.forEach((skill) => {
      skillsHTML += `<div class="skill-item"><i class="fa-solid fa-check"></i> ${skill}</div>`;
    });
    skillsContainer.innerHTML = skillsHTML + skillsHTML;
  }

  // --- 7. Render Projects (Tags Removed) ---
  const projectsContainer = document.getElementById("projects-container");
  if (projectsContainer && typeof projects !== "undefined") {
    projects.forEach((project, index) => {
      const cardHTML = `
                <div class="glass-card project-card" data-aos="fade-up" data-aos-delay="${index * 100}">
                    <div class="project-image">
                        <!-- <img src="#" alt="${project.title}"> -->
                    </div>
                    <div class="project-content">
                        <h3 class="project-title">${project.title}</h3>
                        <p class="project-desc" style="margin-top: 10px;">${project.description}</p>
                        <a href="${project.liveLink}" target="_blank" class="btn btn-primary" style="width: 100%;">
                            View Project <i class="fa-solid fa-arrow-right" style="margin-left: 5px;"></i>
                        </a>
                    </div>
                </div>
            `;
      projectsContainer.innerHTML += cardHTML;
    });
  }

  // --- 8. Render Testimonials ---
  const testimonialsContainer = document.getElementById(
    "testimonials-container",
  );
  if (testimonialsContainer && typeof testimonials !== "undefined") {
    testimonials.forEach((test) => {
      // ستاره ها اگر در دیتای شما نبود، پیش فرض 5 در نظر میگیرد
      const starCount = test.stars || 5;
      const starsHTML = Array(starCount)
        .fill('<i class="fa-solid fa-star"></i>')
        .join("");

      const slideHTML = `
                <div class="swiper-slide">
                    <div class="glass-card testimonial-card">
                        <div class="client-avatar">
                            <i class="fa-solid fa-user"></i>
                        </div>
                        <div class="client-stars">
                            ${starsHTML}
                        </div>
                        <p class="testimonial-text">"${test.text}"</p>
                        <div class="client-info">
                            <h4>${test.name}</h4>
                            <p>${test.role}</p>
                        </div>
                    </div>
                </div>
            `;
      testimonialsContainer.innerHTML += slideHTML;
    });

    if (typeof Swiper !== "undefined") {
      new Swiper(".testimonial-swiper", {
        loop: true,
        spaceBetween: 30,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        breakpoints: {
          768: { slidesPerView: 2 },
        },
      });
    }
  }
});
