(()=>{var h=[{title:"Automated Testing Suite",subtitle:"Cypress \u22C4 Playwright \u22C4 Jest",image:"public/photos/automated_testing_card.png",link:"testing.html#automation"},{title:"Technical Bug Documentation",subtitle:"Jira \u22C4 Postman \u22C4 DevTools",image:"public/photos/bug_documentation_card.png",link:"testing.html#bugs"},{title:"API Validation & Stress Testing",subtitle:"Postman \u22C4 Swagger \u22C4 k6",image:"public/photos/api_performance_card.png",link:"testing.html#performance"},{title:"CI/CD Quality Pipeline",subtitle:"GitHub Actions \u22C4 CircleCI",image:"public/photos/cicd_pipeline_card.png",link:"testing.html#cicd"}];var p=[{title:"Care Compass",subtitle:"ASP.NET MVC \u22C4 C# \u22C4 Entity Framework \u22C4 REST APIs",image:"public/projects/care-compass.png",link:"projects.html#care-compass"},{title:"Cloud Budget App",subtitle:"AWS \u22C4 Serverless \u22C4 Lambda \u22C4 Budget Tracking",image:"public/projects/cloud-budget.png",link:"projects.html#cloud-budget"},{title:"ToolVillage Marketplace",subtitle:"Next.js \u22C4 React \u22C4 Node.js \u22C4 REST APIs",image:"public/projects/toolvillage-main.png",link:"projects.html#tool-village"},{title:"MovieDB Application",subtitle:"React \u22C4 JavaScript \u22C4 REST APIs \u22C4 CSS",image:"public/projects/moviedb.png",link:"projects.html#moviedb-app"},{title:"JS Memory Game",subtitle:"JavaScript \u22C4 HTML5 \u22C4 CSS3 \u22C4 Responsive",image:"public/projects/js-memory-game.png",link:"projects.html#js-memory-game"}];document.addEventListener("DOMContentLoaded",()=>{let k=document.getElementById("year");k.textContent=new Date().getFullYear();let g=document.querySelector(".testing-track"),v=document.querySelector(".projects-track");if(g){let e=h.map(s=>`
    <div class="banner-slide">
      <a href="${s.link}">
        <img class="auto-slide" src="${s.image}" alt="${s.title}" />
        <div class="slider-headlines">
          <h1 class="slider-title">${s.title}</h1>
          <p class="slider-par">${s.subtitle}</p>
        </div>
      </a>
    </div>
  `).join("");g.innerHTML=e}if(v){let e=p.map(t=>`
    <div class="banner-slide">
      <a href="${t.link}">
        <img class="auto-slide" src="${t.image}" alt="${t.title}" />
        <div class="slider-headlines">
          <h1 class="slider-title">${t.title}</h1>
          <p class="slider-par">${t.subtitle}</p>
        </div>
      </a>
    </div>
  `).join("");v.innerHTML=e;let s=document.querySelector(".center-banner");s&&(s.innerHTML=p.map(t=>`
      <a href="${t.link}" class="center-section">
        <div class="center-img">
          <img class="center-section-img" src="${t.image}" alt="${t.title}">
        </div>
        <h2 class="dek">${t.title}</h2>
      </a>
    `).join(""))}function L(){document.querySelectorAll(".auto-track").forEach(s=>{let t=0,l=s.querySelectorAll(".banner-slide");l.length&&(l.forEach(m=>m.style.display="none"),l[0].style.display="block",setInterval(()=>{l.forEach(m=>m.style.display="none"),t++,t>=l.length&&(t=0),l[t].style.display="block"},9e3))})}L();let b=document.querySelector(".science-header"),c=document.getElementById("science-content"),o=document.querySelector(".arrow-icon");b&&c&&o&&b.addEventListener("click",function(){c.classList.toggle("collapsed"),o.classList.toggle("rotated")});let S=document.querySelectorAll('a[href="#stories"]');function E(){c&&c.classList.contains("collapsed")&&(c.classList.remove("collapsed"),o&&o.classList.remove("rotated"))}S.forEach(e=>{e.addEventListener("click",E)});let a=document.getElementById("mobile-menu-button"),d=document.getElementById("desktop-menu-button"),i=document.getElementById("nav-overlay"),y=i.querySelector(".overlay-close"),u=document.getElementById("overlay-nav-slot"),A=document.querySelector(".nav-list");function C(){if(u.childElementCount>0)return;let e=A.cloneNode(!0);e.removeAttribute("id"),u.appendChild(e)}function f(){C(),i.classList.add("is-open"),i.setAttribute("aria-hidden","false"),a.setAttribute("aria-expanded","true"),d.setAttribute("aria-expanded","true"),document.body.classList.add("menu-open"),y.focus()}function r(){i.classList.remove("is-open"),i.setAttribute("aria-hidden","true"),a.setAttribute("aria-expanded","false"),d.setAttribute("aria-expanded","false"),document.body.classList.remove("menu-open"),a.focus()}a.addEventListener("click",f),d.addEventListener("click",f),y.addEventListener("click",r),document.addEventListener("keydown",e=>{e.key==="Escape"&&i.classList.contains("is-open")&&r()}),i.addEventListener("click",e=>{e.target===i&&r()}),u.addEventListener("click",e=>{e.target.tagName==="A"&&r()});let n=document.getElementById("riverAds");if(n){let e=n.querySelector(".banner-close"),s=n.querySelector(".banner");setTimeout(()=>{n.classList.add("is-visible"),n.classList.remove("is-delayed")},3e3),e&&e.addEventListener("click",()=>{s&&s.classList.remove("is-pulsing"),n.style.display="none"})}});})();
//# sourceMappingURL=main.js.map
