import { qaProjects } from "./data/qaProjects.js";
import { devProjects } from "./data/devProjects.js";

document.addEventListener("DOMContentLoaded", () => {

  // Year
  const year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const testingTrack = document.querySelector(".testing-track");
  const projectsTrack = document.querySelector(".projects-track");
  const projectsGrid = document.querySelector(".center-banner");

  // Render QA track (if enabled)
  if (testingTrack) {
    testingTrack.innerHTML = qaProjects.map(proj => `
      <div class="banner-slide">
        <a href="${proj.link}">
          <img class="auto-slide" src="${proj.image}" alt="${proj.title}" />
          <div class="slider-headlines">
            <h1 class="slider-title">${proj.title}</h1>
            <p class="slider-par">${proj.subtitle}</p>
          </div>
        </a>
      </div>
    `).join('');
  }

  // Render Development Projects Track (Top Hero Carousel)
  if (projectsTrack) {
    projectsTrack.innerHTML = devProjects.map(proj => `
      <div class="banner-slide" data-project-id="${proj.id}">
        <a href="#${proj.id}" class="project-card-trigger" data-project-id="${proj.id}">
          <img class="auto-slide" src="${proj.image}" alt="${proj.title}" />
          <div class="slider-headlines">
            <h1 class="slider-title">${proj.title}</h1>
            <p class="slider-par">${proj.subtitle}</p>
          </div>
        </a>
      </div>
    `).join('');
  }

  // Render Development Projects Grid Below
  if (projectsGrid) {
    projectsGrid.innerHTML = devProjects.map(proj => `
      <a href="#${proj.id}" class="center-section project-card-trigger" data-project-id="${proj.id}">
        <div class="center-img">
          <img class="center-section-img" src="${proj.image}" alt="${proj.title}">
        </div>
        <h2 class="dek">${proj.title}</h2>
      </a>
    `).join('');
  }

  // Auto carousel cycling for tracks
  function initCarousels() {
    const carousels = document.querySelectorAll('.auto-track');
    
    carousels.forEach(track => {
      let index = 0;
      const slides = track.querySelectorAll('.banner-slide');
      if (!slides.length) return;
      
      // Initialize first slide
      slides.forEach(s => s.style.display = "none");
      slides[0].style.display = "block";
      
      setInterval(() => {
        slides.forEach(s => s.style.display = "none");
        index++;
        if (index >= slides.length) index = 0;
        slides[index].style.display = "block";
      }, 9000);
    });
  }
  initCarousels();

  // Science Section Toggle
  const scienceHeader = document.querySelector(".science-header");
  const scienceContent = document.getElementById("science-content");
  const arrowIcon = document.querySelector(".arrow-icon");

  if (scienceHeader && scienceContent && arrowIcon) {
    scienceHeader.addEventListener("click", function() {
      scienceContent.classList.toggle("collapsed");
      arrowIcon.classList.toggle("rotated");
    });
  }

  // Expand Stories section when clicking Stories quick link
  const storiesQuickLinks = document.querySelectorAll('a[href="#stories"]');
  function expandStoriesSection() {
    if (scienceContent && scienceContent.classList.contains("collapsed")) {
      scienceContent.classList.remove("collapsed");
      if (arrowIcon) {
        arrowIcon.classList.remove("rotated");
      }
    }
  }

  storiesQuickLinks.forEach((link) => {
    link.addEventListener("click", expandStoriesSection);
  });

  // Hamburger Menu / Overlay
  const openBtn = document.getElementById("mobile-menu-button");
  const openDesktopBtn = document.getElementById("desktop-menu-button");
  const overlay = document.getElementById("nav-overlay");
  const closeBtn = overlay ? overlay.querySelector(".overlay-close") : null;
  const overlaySlot = document.getElementById("overlay-nav-slot");
  const sourceList = document.querySelector(".nav-list");

  function buildOverlayMenuOnce() {
    if (!overlaySlot || overlaySlot.childElementCount > 0 || !sourceList) return;
    const clonedList = sourceList.cloneNode(true);
    clonedList.removeAttribute("id");
    overlaySlot.appendChild(clonedList);
  }

  function openMenu() {
    if (!overlay) return;
    buildOverlayMenuOnce();
    overlay.classList.add("is-open");
    overlay.setAttribute("aria-hidden", "false");
    if (openBtn) openBtn.setAttribute("aria-expanded", "true");
    if (openDesktopBtn) openDesktopBtn.setAttribute("aria-expanded", "true");
    document.body.classList.add("menu-open");
    if (closeBtn) closeBtn.focus();
  }

  function closeMenu() {
    if (!overlay) return;
    overlay.classList.remove("is-open");
    overlay.setAttribute("aria-hidden", "true");
    if (openBtn) openBtn.setAttribute("aria-expanded", "false");
    if (openDesktopBtn) openDesktopBtn.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
    if (openBtn) openBtn.focus();
  }

  if (openBtn) openBtn.addEventListener("click", openMenu);
  if (openDesktopBtn) openDesktopBtn.addEventListener("click", openMenu);
  if (closeBtn) closeBtn.addEventListener("click", closeMenu);

  if (overlay) {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeMenu();
    });
  }

  if (overlaySlot) {
    overlaySlot.addEventListener("click", (e) => {
      if (e.target.tagName === "A") {
        closeMenu();
      }
    });
  }

  // Ads Box Close Button
  const adsBox = document.getElementById("riverAds");
  if (adsBox) {
    const adsBannerCloseBtn = adsBox.querySelector(".banner-close");
    const banner = adsBox.querySelector(".banner");
    const DELAY_MS = 3000;
    setTimeout(() => {
      adsBox.classList.add("is-visible");
      adsBox.classList.remove("is-delayed");
    }, DELAY_MS);

    if (adsBannerCloseBtn) {
      adsBannerCloseBtn.addEventListener("click", () => {
        if (banner) banner.classList.remove("is-pulsing");
        adsBox.style.display = "none";
      });
    }
  }

  // ==========================================
  // PROJECT DETAIL POP-UP / OVERLAY SYSTEM
  // ==========================================
  
  let currentProjectIndex = 0;
  let currentPhotoIndex = 0;
  let modalBackdrop = document.getElementById("project-modal");

  // Helper for technology logos
  function getTechLogo(name) {
    const n = name.toLowerCase();
    if (n.includes("net") || n.includes("asp.net")) return "https://cdn.simpleicons.org/dotnet/white";
    if (n.includes("c#")) return "https://cdn.simpleicons.org/csharp/white";
    if (n.includes("entity framework")) return "https://cdn.simpleicons.org/nuget/white";
    if (n.includes("azure")) return "https://cdn.simpleicons.org/microsoftazure/white";
    if (n.includes("sqlite")) return "https://cdn.simpleicons.org/sqlite/white";
    if (n.includes("github") || n.includes("actions")) return "https://cdn.simpleicons.org/githubactions/white";
    if (n.includes("paypal")) return "https://cdn.simpleicons.org/paypal/white";
    if (n.includes("brevo")) return "https://cdn.simpleicons.org/brevo/white";
    if (n.includes("recaptcha") || n.includes("google")) return "https://cdn.simpleicons.org/google/white";
    if (n.includes("oidc") || n.includes("openid") || n.includes("identity")) return "https://cdn.simpleicons.org/openid/white";
    if (n.includes("linux")) return "https://cdn.simpleicons.org/linux/white";
    if (n.includes("react")) return "https://cdn.simpleicons.org/react/white";
    if (n.includes("next")) return "https://cdn.simpleicons.org/nextdotjs/white";
    if (n.includes("node")) return "https://cdn.simpleicons.org/nodedotjs/white";
    if (n.includes("aws") || n.includes("lambda") || n.includes("s3") || n.includes("cloudfront") || n.includes("cognito") || n.includes("api gateway")) return "https://cdn.simpleicons.org/amazonwebservices/white";
    if (n.includes("javascript") || n.includes("es6")) return "https://cdn.simpleicons.org/javascript/white";
    if (n.includes("html")) return "https://cdn.simpleicons.org/html5/white";
    if (n.includes("tailwind")) return "https://cdn.simpleicons.org/tailwindcss/white";
    if (n.includes("sass") || n.includes("css")) return "https://cdn.simpleicons.org/sass/white";
    if (n.includes("sql") || n.includes("mysql") || n.includes("database")) return "https://cdn.simpleicons.org/mysql/white";
    if (n.includes("figma")) return "https://cdn.simpleicons.org/figma/white";
    if (n.includes("git")) return "https://cdn.simpleicons.org/git/white";
    if (n.includes("postman")) return "https://cdn.simpleicons.org/postman/white";
    if (n.includes("vercel")) return "https://cdn.simpleicons.org/vercel/white";
    return null;
  }

  // Create Modal DOM dynamically if not in HTML
  if (!modalBackdrop) {
    modalBackdrop = document.createElement("div");
    modalBackdrop.id = "project-modal";
    modalBackdrop.className = "project-modal-backdrop";
    modalBackdrop.setAttribute("role", "dialog");
    modalBackdrop.setAttribute("aria-modal", "true");
    modalBackdrop.setAttribute("aria-hidden", "true");
    document.body.appendChild(modalBackdrop);
  }

  function renderModalContent(projectIndex, photoIndex = 0) {
    const project = devProjects[projectIndex];
    if (!project) return;

    currentProjectIndex = projectIndex;
    currentPhotoIndex = photoIndex;

    const images = project.images && project.images.length > 0
      ? project.images
      : [{ src: project.image, caption: project.title, alt: project.title }];

    const safePhotoIndex = Math.min(Math.max(0, photoIndex), images.length - 1);
    currentPhotoIndex = safePhotoIndex;
    const currentPhoto = images[safePhotoIndex];

    const prevIndex = (projectIndex - 1 + devProjects.length) % devProjects.length;
    const nextIndex = (projectIndex + 1) % devProjects.length;
    const prevProject = devProjects[prevIndex];
    const nextProject = devProjects[nextIndex];

    const hasMultiplePhotos = images.length > 1;

    modalBackdrop.innerHTML = `
      <div class="project-modal-dialog">
        <!-- Sticky Header Bar -->
        <header class="project-modal-header">
          <div class="modal-header-left">
            <span class="modal-category-badge">${project.category || "Featured Project"}</span>
            <h2 class="modal-title">${project.title}</h2>
          </div>
          <div class="modal-header-actions">
            ${project.links?.github ? `
              <a href="${project.links.github}" target="_blank" rel="noopener noreferrer" class="modal-action-link github">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                GitHub
              </a>
            ` : ''}
            ${project.links?.live ? `
              <a href="${project.links.live}" target="_blank" rel="noopener noreferrer" class="modal-action-link live">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                View Live
              </a>
            ` : ''}
            <button class="modal-close-btn" id="modal-close-action" aria-label="Close Project Modal">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>
        </header>

        <!-- Scrollable Modal Body -->
        <div class="project-modal-body">
          
          <!-- Demo Credentials Banner (if available) -->
          ${project.demoCredentials ? `
            <div class="demo-credentials-banner">
              <div class="demo-banner-header">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                <span>Live Demo Account Access (${project.demoCredentials.role || 'Counsellor'})</span>
              </div>
              <div class="demo-banner-credentials">
                <div class="demo-field">
                  <span class="field-label">Email:</span>
                  <code class="field-value">${project.demoCredentials.email}</code>
                </div>
                <div class="demo-field">
                  <span class="field-label">Password:</span>
                  <code class="field-value">${project.demoCredentials.password}</code>
                </div>
              </div>
            </div>
          ` : ''}

          <!-- Interactive Photo Gallery Showcase -->
          <div class="project-gallery-showcase">
            <div class="gallery-main-view">
              <img id="gallery-active-img" src="${currentPhoto.src}" alt="${currentPhoto.alt || project.title}" />
              
              ${hasMultiplePhotos ? `
                <button class="gallery-nav-btn prev" id="gallery-prev-btn" aria-label="Previous Photo">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                </button>
                <button class="gallery-nav-btn next" id="gallery-next-btn" aria-label="Next Photo">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>
                <span class="gallery-counter-badge" id="gallery-counter">
                  ${safePhotoIndex + 1} / ${images.length}
                </span>
              ` : ''}
            </div>

            <div class="gallery-caption-bar">
              <svg class="caption-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
              <span class="caption-text" id="gallery-caption-text">${currentPhoto.caption || project.title}</span>
            </div>

            ${hasMultiplePhotos ? `
              <div class="gallery-thumbnails-strip">
                ${images.map((img, idx) => `
                  <button class="gallery-thumb-btn ${idx === safePhotoIndex ? 'is-active' : ''}" data-thumb-index="${idx}" aria-label="View photo ${idx + 1}">
                    <img src="${img.src}" alt="${img.alt || 'Thumbnail ' + (idx + 1)}" />
                  </button>
                `).join('')}
              </div>
            ` : ''}
          </div>

          <!-- Project Overview -->
          <div class="modal-section-block">
            <h3 class="modal-block-title">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
              Project Overview
            </h3>
            <p class="modal-overview-text">${project.overview || project.subtitle}</p>
          </div>

          <!-- Grouped Tech Stack -->
          ${project.techStackGroups && project.techStackGroups.length > 0 ? `
            <div class="modal-section-block">
              <h3 class="modal-block-title">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                Tech Stack
              </h3>
              <div class="tech-stack-groups-container">
                ${project.techStackGroups.map(group => `
                  <div class="tech-group-card">
                    <div class="tech-group-label">${group.category}</div>
                    <div class="tech-group-items">
                      ${group.items.map(item => {
                        const logoUrl = getTechLogo(item);
                        return `
                          <span class="modal-tech-pill">
                            ${logoUrl ? `<img src="${logoUrl}" class="tech-pill-icon" alt="" />` : ''}
                            <span>${item}</span>
                          </span>
                        `;
                      }).join('')}
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : (project.techStack && project.techStack.length > 0 ? `
            <div class="modal-section-block">
              <h3 class="modal-block-title">Tech Stack</h3>
              <div class="modal-tech-tags">
                ${project.techStack.map(tech => `
                  <span class="modal-tech-pill">${tech}</span>
                `).join('')}
              </div>
            </div>
          ` : '')}

          <!-- Key Features (Feature-Focused) -->
          ${project.keyFeatures && project.keyFeatures.length > 0 ? `
            <div class="modal-section-block">
              <h3 class="modal-block-title">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                Key Features
              </h3>
              <div class="modal-features-list">
                ${project.keyFeatures.map(feat => `
                  <div class="modal-feature-item">
                    <svg class="feature-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <div>${typeof feat === 'string' ? feat : `<strong>${feat.title}:</strong> ${feat.desc}`}</div>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}

          <!-- Architecture & CI/CD Deployment Flow -->
          ${project.deployment ? `
            <div class="modal-section-block">
              <h3 class="modal-block-title">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
                Architecture & Deployment
              </h3>
              <div class="deployment-flow-wrapper">
                <div class="deployment-pipeline">
                  ${project.deployment.flow.map((step, sIdx) => `
                    <div class="pipeline-step">
                      <span class="step-num">${sIdx + 1}</span>
                      <span class="step-text">${step}</span>
                    </div>
                    ${sIdx < project.deployment.flow.length - 1 ? `
                      <div class="pipeline-arrow">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
                      </div>
                    ` : ''}
                  `).join('')}
                </div>
                ${project.deployment.highlight ? `
                  <div class="deployment-highlight-callout">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                    <div><strong>Security Highlight:</strong> ${project.deployment.highlight}</div>
                  </div>
                ` : ''}
              </div>
            </div>
          ` : ''}

          <!-- My Engineering Contributions -->
          ${project.contributions && project.contributions.length > 0 ? `
            <div class="modal-section-block">
              <h3 class="modal-block-title">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                My Contributions
              </h3>
              <div class="modal-contributions-list">
                ${project.contributions.map(contrib => `
                  <div class="modal-contribution-item">
                    <svg class="feature-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
                    <div>${contrib}</div>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}

          <!-- Technical Highlights -->
          ${project.technicalHighlights && project.technicalHighlights.length > 0 ? `
            <div class="modal-highlight-box">
              <h4 class="highlight-box-title">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
                Technical & QA Highlights
              </h4>
              <div class="highlight-items-group">
                ${project.technicalHighlights.map(hl => `
                  <div class="highlight-row">
                    <svg class="feature-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    <div>${hl}</div>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}

        </div>

        <!-- In-Modal Project Cycling Footer -->
        <footer class="project-modal-footer">
          <button class="modal-nav-proj-btn" id="modal-prev-project-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            <span>Prev: ${prevProject.title}</span>
          </button>
          
          <button class="modal-nav-proj-btn" id="modal-next-project-btn">
            <span>Next: ${nextProject.title}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </button>
        </footer>
      </div>
    `;

    bindModalDynamicEvents();
  }

  function setPhoto(photoIndex) {
    const project = devProjects[currentProjectIndex];
    if (!project || !project.images || !project.images.length) return;

    const total = project.images.length;
    currentPhotoIndex = (photoIndex + total) % total;
    const photo = project.images[currentPhotoIndex];

    const activeImg = document.getElementById("gallery-active-img");
    const captionText = document.getElementById("gallery-caption-text");
    const counterBadge = document.getElementById("gallery-counter");

    if (activeImg) {
      activeImg.style.opacity = "0.4";
      setTimeout(() => {
        activeImg.src = photo.src;
        activeImg.alt = photo.alt || photo.caption || project.title;
        activeImg.style.opacity = "1";
      }, 150);
    }

    if (captionText) {
      captionText.textContent = photo.caption || project.title;
    }

    if (counterBadge) {
      counterBadge.textContent = `${currentPhotoIndex + 1} / ${total}`;
    }

    // Update thumbnail highlights
    const thumbs = modalBackdrop.querySelectorAll(".gallery-thumb-btn");
    thumbs.forEach(btn => {
      const idx = parseInt(btn.getAttribute("data-thumb-index"), 10);
      if (idx === currentPhotoIndex) {
        btn.classList.add("is-active");
        btn.scrollIntoView({ behavior: 'smooth', inline: 'nearest', block: 'nearest' });
      } else {
        btn.classList.remove("is-active");
      }
    });
  }

  function bindModalDynamicEvents() {
    // Close button
    const closeAction = document.getElementById("modal-close-action");
    if (closeAction) {
      closeAction.addEventListener("click", closeProjectModal);
    }

    // Photo gallery controls
    const prevPhotoBtn = document.getElementById("gallery-prev-btn");
    const nextPhotoBtn = document.getElementById("gallery-next-btn");

    if (prevPhotoBtn) {
      prevPhotoBtn.addEventListener("click", () => setPhoto(currentPhotoIndex - 1));
    }
    if (nextPhotoBtn) {
      nextPhotoBtn.addEventListener("click", () => setPhoto(currentPhotoIndex + 1));
    }

    // Thumbnail clicks
    const thumbs = modalBackdrop.querySelectorAll(".gallery-thumb-btn");
    thumbs.forEach(btn => {
      btn.addEventListener("click", () => {
        const idx = parseInt(btn.getAttribute("data-thumb-index"), 10);
        setPhoto(idx);
      });
    });

    // Project cycling buttons
    const prevProjBtn = document.getElementById("modal-prev-project-btn");
    const nextProjBtn = document.getElementById("modal-next-project-btn");

    if (prevProjBtn) {
      prevProjBtn.addEventListener("click", () => {
        const prevIdx = (currentProjectIndex - 1 + devProjects.length) % devProjects.length;
        openProjectModal(prevIdx);
      });
    }

    if (nextProjBtn) {
      nextProjBtn.addEventListener("click", () => {
        const nextIdx = (currentProjectIndex + 1) % devProjects.length;
        openProjectModal(nextIdx);
      });
    }
  }

  function openProjectModal(identifier) {
    let projectIndex = -1;
    if (typeof identifier === 'number') {
      projectIndex = identifier;
    } else {
      projectIndex = devProjects.findIndex(p => p.id === identifier);
    }

    if (projectIndex === -1) return;

    renderModalContent(projectIndex, 0);
    modalBackdrop.classList.add("is-open");
    modalBackdrop.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    document.body.style.overflow = "hidden";

    const project = devProjects[projectIndex];
    if (project && window.location.hash !== `#${project.id}`) {
      history.pushState(null, '', `#${project.id}`);
    }
  }

  function closeProjectModal() {
    if (!modalBackdrop.classList.contains("is-open")) return;

    modalBackdrop.classList.remove("is-open");
    modalBackdrop.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    document.body.style.overflow = "";

    // Clear hash if it matches current project
    const currentHash = window.location.hash.replace('#', '');
    const isProjectHash = devProjects.some(p => p.id === currentHash);
    if (isProjectHash) {
      history.pushState(null, '', window.location.pathname + window.location.search);
    }
  }

  // Backdrop click to dismiss
  modalBackdrop.addEventListener("click", (e) => {
    if (e.target === modalBackdrop) {
      closeProjectModal();
    }
  });

  // Global Keyboard shortcuts
  document.addEventListener("keydown", (e) => {
    if (modalBackdrop.classList.contains("is-open")) {
      if (e.key === "Escape") {
        closeProjectModal();
      } else if (e.key === "ArrowLeft") {
        setPhoto(currentPhotoIndex - 1);
      } else if (e.key === "ArrowRight") {
        setPhoto(currentPhotoIndex + 1);
      }
    } else if (e.key === "Escape" && overlay && overlay.classList.contains("is-open")) {
      closeMenu();
    }
  });

  // Card trigger click listeners
  function attachProjectTriggers() {
    const triggers = document.querySelectorAll(".project-card-trigger, [data-project-id]");
    triggers.forEach(trigger => {
      trigger.addEventListener("click", (e) => {
        const projId = trigger.getAttribute("data-project-id");
        if (projId) {
          e.preventDefault();
          openProjectModal(projId);
        }
      });
    });
  }
  attachProjectTriggers();

  // Hash Navigation Handler
  function handleHashNavigation() {
    const rawHash = window.location.hash.replace('#', '');
    if (!rawHash) {
      closeProjectModal();
      return;
    }

    const matchedIndex = devProjects.findIndex(p => p.id === rawHash);
    if (matchedIndex !== -1) {
      openProjectModal(matchedIndex);
    }
  }

  window.addEventListener("hashchange", handleHashNavigation);

  // Check initial hash on load
  if (window.location.hash) {
    handleHashNavigation();
  }

});