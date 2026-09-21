(()=>{var H=[{title:"Automated Testing Suite",subtitle:"Cypress \u22C4 Playwright \u22C4 Jest",image:"public/photos/automated_testing_card.png",link:"testing.html#automation"},{title:"Technical Bug Documentation",subtitle:"Jira \u22C4 Postman \u22C4 DevTools",image:"public/photos/bug_documentation_card.png",link:"testing.html#bugs"},{title:"API Validation & Stress Testing",subtitle:"Postman \u22C4 Swagger \u22C4 k6",image:"public/photos/api_performance_card.png",link:"testing.html#performance"},{title:"CI/CD Quality Pipeline",subtitle:"GitHub Actions \u22C4 CircleCI",image:"public/photos/cicd_pipeline_card.png",link:"testing.html#cicd"}];var l=[{id:"care-compass",title:"Care Compass",subtitle:"ASP.NET Core MVC (.NET 8) \u22C4 C# \u22C4 Azure SQL \u22C4 GitHub Actions CI/CD",category:"Full-Stack Healthcare Web App",role:"Full-Stack Developer & QA",image:"public/projects/care-compass-landing-page.png",link:"#care-compass",links:{github:"https://github.com/JuldyzA/care-compass-app",live:"https://carecompass-prod-2026-g0avdbggcacqbbga.canadaeast-01.azurewebsites.net"},demoCredentials:{email:"counsellordemo@test.ca",password:"DemoPassword@2026",role:"Counsellor Role"},images:[{src:"public/projects/care-compass-landing-page.png",caption:"Care Compass Landing Page & Service Discovery",alt:"Care Compass Landing Page"},{src:"public/projects/care-compass.png",caption:"Care Compass Main Application Dashboard",alt:"Care Compass Dashboard"},{src:"public/projects/carecompass-counsellor1.png",caption:"Counselor Directory & Profile Matching View",alt:"Counselor Directory"},{src:"public/projects/carecompass-counsellor2.png",caption:"Session Scheduling & Consultation Flow",alt:"Consultation Scheduling"},{src:"public/projects/carecompass-counsellor3.png",caption:"Custom Treatment Plans & Discount Logic Interface",alt:"Treatment Plans & Pricing"}],overview:"CareCompass helps counsellors and clients manage appointments, subscriptions, and profiles in one platform, with role-based dashboards for admins, managers, counsellors, and visitors. The system follows ASP.NET Core MVC architecture with Entity Framework Core and REST APIs for efficient healthcare data delivery, plan management, and tiered discount calculations.",techStackGroups:[{category:"Backend",items:["ASP.NET Core MVC (.NET 8)","C#","Entity Framework Core","ASP.NET Identity (Role-based Auth)"]},{category:"Database",items:["Azure SQL Database (Production)","SQLite (Local Dev)"]},{category:"Cloud / Infra",items:["Azure App Service (Linux)","Azure Blob Storage","Azure Managed Identity with OIDC"]},{category:"CI / CD",items:["GitHub Actions (Automated build, test & deploy pipeline to Azure)"]},{category:"Integrations",items:["PayPal (Payments)","Brevo (Email)","Google reCAPTCHA"]},{category:"Auth & Security",items:["Passwordless federated deployment auth via Azure Workload Identity Federation (no long-lived secrets in CI)"]}],techStack:["ASP.NET MVC","C#","Entity Framework","Azure SQL","Azure App Service","GitHub Actions","PayPal API","REST APIs","Figma","Git"],keyFeatures:["Role-based dashboards (Admin, Manager, Paid/Free Counsellor, Registered Visitor)","Subscription lifecycle management with automated expiry via a background worker","Profile picture uploads via Azure Blob Storage","Secure payment processing via PayPal integration","Plan and discount logic implementation for custom pricing calculations","Responsive UI crafted directly from Figma design systems"],deployment:{flow:["Local Dev","git push","GitHub Actions (build + test)","OIDC auth to Azure (no stored secrets)","Deploy to Azure App Service"],highlight:"Uses GitHub Actions OIDC federation instead of long-lived service principal secrets \u2014 a security best practice for CI/CD pipelines."},contributions:["Developed and maintained Razor Views within ASP.NET MVC with dynamic JavaScript interactivity.","Integrated REST APIs and handled data flow between frontend presentation and backend services.","Implemented responsive layouts using HTML, CSS, and JavaScript based on Figma designs.","Built functionality related to plans and discount logic in controllers and Razor views.","Worked with data models and schema structures using Entity Framework Code-First approach.","Translated Figma designs into functional, production-ready healthcare management UI.","Leveraged QA background to test and validate application behavior across critical user booking paths."],technicalHighlights:["Applied MVC architecture for clear separation of concerns between models, views, and controllers.","Used Entity Framework for efficient data modeling, relational mapping, and optimized querying.","Implemented clean, maintainable C# code in controllers, services, and background workers.","Ensured pixel-perfect consistency between Figma design specs and live responsive implementation.","Leveraged QA methodology to test application logic, boundary inputs, and security permissions."]},{id:"cloud-budget",title:"Cloud Budget App",subtitle:"AWS \u22C4 Serverless \u22C4 Lambda \u22C4 Budget Tracking",category:"Cloud-Native Serverless Application",role:"Cloud & Frontend Engineer",image:"public/projects/budget-tracking-app.png",link:"#cloud-budget",links:{github:"https://github.com/JuldyzA",live:""},images:[{src:"public/projects/cloud-budget.png",caption:"Cloud Budget Analytics & Category Breakdown Dashboard",alt:"Cloud Budget Dashboard"},{src:"public/projects/budget-tracking-app.png",caption:"Expense Logging & Monthly Transaction Overview",alt:"Expense Tracking View"},{src:"public/projects/aws-weather-architecture.png",caption:"AWS Serverless Cloud Architecture Diagram",alt:"AWS Serverless Cloud Architecture"}],overview:"Cloud Budget App is a serverless web application designed to help users track and manage their budgets efficiently. The frontend is built with React and hosted on Amazon S3 with CloudFront CDN for global content delivery, backed by AWS Lambda and API Gateway serverless endpoints with Cognito authentication.",techStackGroups:[{category:"Frontend",items:["React","JavaScript (ES6+)","Tailwind CSS","Chart Analytics"]},{category:"Serverless Backend",items:["AWS Lambda (Node.js)","Amazon API Gateway","REST APIs"]},{category:"Cloud Hosting & CDN",items:["Amazon S3 (Static Hosting)","Amazon CloudFront (CDN Edge)"]},{category:"Auth & Security",items:["Amazon Cognito (User Pools & JWT Verification)"]}],techStack:["AWS S3","CloudFront","AWS Lambda","API Gateway","Cognito","React","REST APIs"],keyFeatures:["Serverless architecture using AWS Lambda and API Gateway with zero idle server cost","Static frontend hosting with S3 and CloudFront CDN for sub-millisecond global delivery","User authentication and secure session management via AWS Cognito","Integration with secure budget management APIs and real-time expense calculations","Scalable, highly available cloud-native deployment"],deployment:{flow:["Local React Dev","npm run build","S3 Bucket Sync","CloudFront CDN Invalidation","Global Edge Delivery"],highlight:"Static React build distributed globally via S3 + CloudFront with serverless backend APIs on AWS Lambda."},contributions:["Deployed React frontend to AWS S3 with CloudFront distribution and SSL certificate.","Configured API Gateway and Lambda functions for backend budget calculations.","Integrated budget calculation endpoints and handled asynchronous data flow in React.","Implemented authentication and secure session management using AWS Cognito.","Managed environment configuration, secret handling, and cloud deployment workflow.","Ensured application performance, cross-device responsiveness, and low latency."],technicalHighlights:["Hands-on experience with serverless architecture (AWS Lambda + API Gateway).","Cloud deployment and CDN optimization using Amazon S3 and CloudFront.","Secure authentication and user management with Amazon Cognito.","Integration of frontend with cloud-based serverless microservices.","Applied best practices for scalable and cost-effective cloud-native applications."]},{id:"tool-village",title:"ToolVillage Marketplace",subtitle:"Next.js \u22C4 React \u22C4 Node.js \u22C4 REST APIs",category:"Full-Stack Marketplace Platform",role:"Full-Stack Engineer (Team Project)",image:"public/projects/toolvillage-main.png",link:"#tool-village",links:{github:"https://github.com/JuldyzA",live:""},images:[{src:"public/projects/toolvillage-main.png",caption:"ToolVillage Marketplace Homepage & Equipment Catalog",alt:"ToolVillage Marketplace Homepage"},{src:"public/projects/toolvillage-details.png",caption:"Equipment Rental Details & Live Bidding Engine",alt:"ToolVillage Details & Bidding"}],overview:"ToolVillage is a full stack marketplace application built with Next.js, developed as part of a collaborative team project during the SSD program. The application follows modern full-stack architecture \u2014 server-side rendering with Next.js for SEO and speed, a RESTful API layer for data communication, and a component-based React frontend across buyer, seller, and admin roles.",techStackGroups:[{category:"Framework & Frontend",items:["Next.js (SSR / SSG)","React","JavaScript (ES6+)"]},{category:"Backend & API",items:["Node.js","REST APIs","Postman Testing"]},{category:"Styling & Workflow",items:["CSS3 / SASS","Git / GitHub (Branching & PRs)"]}],techStack:["Next.js","React","Node.js","JavaScript","REST APIs","CSS","Git"],keyFeatures:["Server-side rendering (SSR) for high performance and search engine optimization","Multi-role user portal catering to equipment buyers, sellers, and system admins","Live bidding and equipment reservation booking engine","Modular, reusable UI component architecture"],deployment:{flow:["Feature Branching","PR Review & Testing","Next.js Build","Vercel / Node Server Deployment"],highlight:"Continuous integration workflow with collaborative pull request reviews and automated build checks."},contributions:["Built and maintained frontend components using React and Next.js.","Integrated REST APIs and managed data flow between frontend and backend.","Implemented responsive layouts and UI across multiple user roles.","Applied QA practices throughout development \u2014 testing functionality and validating API responses in Postman.","Collaborated in an agile team environment using Git for version control and code reviews."],technicalHighlights:["Component-based architecture utilizing React and Next.js SSR.","Identified and helped resolve an API race condition in the auction bidding engine.","Clean separation of user permissions across buyer, seller, and admin roles."]},{id:"moviedb-app",title:"MovieDB Application",subtitle:"React \u22C4 JavaScript \u22C4 REST APIs \u22C4 CSS",category:"Interactive Movie Discovery App",role:"Frontend Developer",image:"public/projects/moviedb.png",link:"#moviedb-app",links:{github:"https://github.com/JuldyzA/red-carpet-moviedb",live:"https://red-carpet-moviedb-4czgq9fgo-juldyzas-projects.vercel.app/"},images:[{src:"public/projects/moviedb.png",caption:"Red Carpet MovieDB Live Explorer & Dynamic Search Interface",alt:"MovieDB Application Screenshot"}],overview:"MovieDB is a frontend web application built with React that allows users to explore and discover movies through dynamic data fetched from TMDB external REST APIs. The application focuses on delivering a clean, responsive, and user-friendly interface for browsing movie listings, viewing details, and searching titles.",techStackGroups:[{category:"Frontend",items:["React","JavaScript (ES6+)","CSS3 / Flexbox / Grid"]},{category:"Data & API",items:["TMDB REST APIs","Asynchronous Data Fetching"]},{category:"Hosting",items:["Vercel CI/CD","Git / GitHub"]}],techStack:["React","JavaScript (ES6+)","REST APIs","CSS","Responsive Design","Git"],keyFeatures:["Dynamic movie data rendering via real-time REST API integration","Component-based architecture using React for modularity and maintainability","Responsive, mobile-first UI with smooth micro-interactions","Debounced movie search and genre filtering functionality","Clean and intuitive user interface with zero heavy UI framework overhead"],deployment:{flow:["Local React Dev","git push main","Vercel Automated Build","Live Production Edge Deployment"],highlight:"Automated Git push integration with Vercel for instantaneous zero-config continuous deployment."},contributions:["Developed reusable React components for movie listings and detail views.","Integrated REST APIs and managed asynchronous data fetching with state management.","Implemented responsive layouts using modern CSS techniques (Grid and Flexbox).","Handled state management for dynamic content rendering and search filtering.","Applied QA practices to test functionality and ensure reliability across multiple browsers."],technicalHighlights:["Strong use of React for modular and maintainable frontend architecture.","Efficient API integration and asynchronous data flow handling.","Focus on performance, fast load times, and intuitive user experience.","Clean, scalable code structure following modern web best practices."]},{id:"js-memory-game",title:"JS Memory Game",subtitle:"JavaScript \u22C4 HTML5 \u22C4 CSS3 \u22C4 Responsive",category:"Interactive Browser Game",role:"Frontend Engineer & UI Designer",image:"public/projects/js-memory-game.png",link:"#js-memory-game",links:{github:"https://github.com/JuldyzA/js-memory-game",live:"https://js-memory-game-one.vercel.app/"},images:[{src:"public/projects/js-memory-game.png",caption:"Sherlock Combs Themed Memory Matching Game Board",alt:"JS Memory Game Board"},{src:"public/projects/js-game.png",caption:"3D Card Flip Mechanics & Game Victory Modal",alt:"Memory Game Flip Animation"}],overview:"JS Memory Game is a responsive card-matching game built with vanilla HTML5, CSS3, and JavaScript. Featuring a Sherlock Holmes-themed hair salon ('Sherlock Combs'), the game challenges players to match pairs of styling tools and themed icons under different difficulty levels with 3D card flips and timer tracking.",techStackGroups:[{category:"Web Standards",items:["Vanilla JavaScript (ES6+)","HTML5 Semantic Canvas","CSS3 3D Transforms"]},{category:"Game State Logic",items:["Deterministic State Machine","Fisher-Yates Shuffle Algorithm"]},{category:"Hosting",items:["Vercel","Git / GitHub"]}],techStack:["HTML5","CSS3","JavaScript (ES6+)","Responsive Design","DOM Manipulation","Git"],keyFeatures:["Dynamic grid generation based on selected difficulty (Beginner vs. Advanced)","Custom card flipping animations using hardware-accelerated CSS 3D transforms","Move tracking, match detection, timer, and win state conditions","Themed interactive UI with visual cues and victory celebration modal","Fully responsive layout designed for mobile, tablet, and desktop"],deployment:{flow:["Local Dev","git push","Vercel Edge Host","Live Production"],highlight:"Lightweight implementation with zero external runtime dependencies."},contributions:["Designed and built the game interface using semantic HTML5 and CSS Grid/Flexbox.","Implemented core card matching game logic and state tracking in Vanilla JavaScript.","Created card flip animation effects using CSS keyframes and 3D transforms.","Developed timer logic and dynamic difficulty level grid configuration.","Applied interactive micro-animations and verified cross-device scaling."],technicalHighlights:["Lightweight implementation with zero external framework dependencies.","Efficient state management and event delegation in pure JavaScript.","Clean separation of concerns (HTML structure, CSS style/animation, and JS logic).","Polished visual style featuring micro-animations for card flips and hover actions."]}];document.addEventListener("DOMContentLoaded",()=>{let j=document.getElementById("year");j&&(j.textContent=new Date().getFullYear());let I=document.querySelector(".testing-track"),P=document.querySelector(".projects-track"),L=document.querySelector(".center-banner");I&&(I.innerHTML=H.map(i=>`
      <div class="banner-slide">
        <a href="${i.link}">
          <img class="auto-slide" src="${i.image}" alt="${i.title}" />
          <div class="slider-headlines">
            <h1 class="slider-title">${i.title}</h1>
            <p class="slider-par">${i.subtitle}</p>
          </div>
        </a>
      </div>
    `).join("")),P&&(P.innerHTML=l.map(i=>`
      <div class="banner-slide" data-project-id="${i.id}">
        <a href="#${i.id}" class="project-card-trigger" data-project-id="${i.id}">
          <img class="auto-slide" src="${i.image}" alt="${i.title}" />
          <div class="slider-headlines">
            <h1 class="slider-title">${i.title}</h1>
            <p class="slider-par">${i.subtitle}</p>
          </div>
        </a>
      </div>
    `).join("")),L&&(L.innerHTML=l.map(i=>`
      <a href="#${i.id}" class="center-section project-card-trigger" data-project-id="${i.id}">
        <div class="center-img">
          <img class="center-section-img" src="${i.image}" alt="${i.title}">
        </div>
        <h2 class="dek">${i.title}</h2>
      </a>
    `).join(""));function G(){document.querySelectorAll(".auto-track").forEach(e=>{let t=0,n=e.querySelectorAll(".banner-slide");n.length&&(n.forEach(s=>s.style.display="none"),n[0].style.display="block",setInterval(()=>{n.forEach(s=>s.style.display="none"),t++,t>=n.length&&(t=0),n[t].style.display="block"},9e3))})}G();let B=document.querySelector(".science-header"),y=document.getElementById("science-content"),w=document.querySelector(".arrow-icon");B&&y&&w&&B.addEventListener("click",function(){y.classList.toggle("collapsed"),w.classList.toggle("rotated")});let z=document.querySelectorAll('a[href="#stories"]');function N(){y&&y.classList.contains("collapsed")&&(y.classList.remove("collapsed"),w&&w.classList.remove("rotated"))}z.forEach(i=>{i.addEventListener("click",N)});let g=document.getElementById("mobile-menu-button"),h=document.getElementById("desktop-menu-button"),r=document.getElementById("nav-overlay"),k=r?r.querySelector(".overlay-close"):null,b=document.getElementById("overlay-nav-slot"),D=document.querySelector(".nav-list");function V(){if(!b||b.childElementCount>0||!D)return;let i=D.cloneNode(!0);i.removeAttribute("id"),b.appendChild(i)}function T(){r&&(V(),r.classList.add("is-open"),r.setAttribute("aria-hidden","false"),g&&g.setAttribute("aria-expanded","true"),h&&h.setAttribute("aria-expanded","true"),document.body.classList.add("menu-open"),k&&k.focus())}function S(){r&&(r.classList.remove("is-open"),r.setAttribute("aria-hidden","true"),g&&g.setAttribute("aria-expanded","false"),h&&h.setAttribute("aria-expanded","false"),document.body.classList.remove("menu-open"),g&&g.focus())}g&&g.addEventListener("click",T),h&&h.addEventListener("click",T),k&&k.addEventListener("click",S),r&&r.addEventListener("click",i=>{i.target===r&&S()}),b&&b.addEventListener("click",i=>{i.target.tagName==="A"&&S()});let m=document.getElementById("riverAds");if(m){let i=m.querySelector(".banner-close"),e=m.querySelector(".banner");setTimeout(()=>{m.classList.add("is-visible"),m.classList.remove("is-delayed")},3e3),i&&i.addEventListener("click",()=>{e&&e.classList.remove("is-pulsing"),m.style.display="none"})}let C=0,d=0,o=document.getElementById("project-modal");function q(i){let e=i.toLowerCase();return e.includes("net")||e.includes("asp.net")?"https://cdn.simpleicons.org/dotnet/white":e.includes("c#")?"https://cdn.simpleicons.org/csharp/white":e.includes("entity framework")?"https://cdn.simpleicons.org/nuget/white":e.includes("azure")?"https://cdn.simpleicons.org/microsoftazure/white":e.includes("sqlite")?"https://cdn.simpleicons.org/sqlite/white":e.includes("github")||e.includes("actions")?"https://cdn.simpleicons.org/githubactions/white":e.includes("paypal")?"https://cdn.simpleicons.org/paypal/white":e.includes("brevo")?"https://cdn.simpleicons.org/brevo/white":e.includes("recaptcha")||e.includes("google")?"https://cdn.simpleicons.org/google/white":e.includes("oidc")||e.includes("openid")||e.includes("identity")?"https://cdn.simpleicons.org/openid/white":e.includes("linux")?"https://cdn.simpleicons.org/linux/white":e.includes("react")?"https://cdn.simpleicons.org/react/white":e.includes("next")?"https://cdn.simpleicons.org/nextdotjs/white":e.includes("node")?"https://cdn.simpleicons.org/nodedotjs/white":e.includes("aws")||e.includes("lambda")||e.includes("s3")||e.includes("cloudfront")||e.includes("cognito")||e.includes("api gateway")?"https://cdn.simpleicons.org/amazonwebservices/white":e.includes("javascript")||e.includes("es6")?"https://cdn.simpleicons.org/javascript/white":e.includes("html")?"https://cdn.simpleicons.org/html5/white":e.includes("tailwind")?"https://cdn.simpleicons.org/tailwindcss/white":e.includes("sass")||e.includes("css")?"https://cdn.simpleicons.org/sass/white":e.includes("sql")||e.includes("mysql")||e.includes("database")?"https://cdn.simpleicons.org/mysql/white":e.includes("figma")?"https://cdn.simpleicons.org/figma/white":e.includes("git")?"https://cdn.simpleicons.org/git/white":e.includes("postman")?"https://cdn.simpleicons.org/postman/white":e.includes("vercel")?"https://cdn.simpleicons.org/vercel/white":null}o||(o=document.createElement("div"),o.id="project-modal",o.className="project-modal-backdrop",o.setAttribute("role","dialog"),o.setAttribute("aria-modal","true"),o.setAttribute("aria-hidden","true"),document.body.appendChild(o));function J(i,e=0){let t=l[i];if(!t)return;C=i,d=e;let n=t.images&&t.images.length>0?t.images:[{src:t.image,caption:t.title,alt:t.title}],s=Math.min(Math.max(0,e),n.length-1);d=s;let p=n[s],c=(i-1+l.length)%l.length,E=(i+1)%l.length,v=l[c],$=l[E],F=n.length>1;o.innerHTML=`
      <div class="project-modal-dialog">
        <!-- Sticky Header Bar -->
        <header class="project-modal-header">
          <div class="modal-header-left">
            <span class="modal-category-badge">${t.category||"Featured Project"}</span>
            <h2 class="modal-title">${t.title}</h2>
          </div>
          <div class="modal-header-actions">
            ${t.links?.github?`
              <a href="${t.links.github}" target="_blank" rel="noopener noreferrer" class="modal-action-link github">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                GitHub
              </a>
            `:""}
            ${t.links?.live?`
              <a href="${t.links.live}" target="_blank" rel="noopener noreferrer" class="modal-action-link live">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                View Live
              </a>
            `:""}
            <button class="modal-close-btn" id="modal-close-action" aria-label="Close Project Modal">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>
        </header>

        <!-- Scrollable Modal Body -->
        <div class="project-modal-body">
          
          <!-- Demo Credentials Banner (if available) -->
          ${t.demoCredentials?`
            <div class="demo-credentials-banner">
              <div class="demo-banner-header">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                <span>Live Demo Account Access (${t.demoCredentials.role||"Counsellor"})</span>
              </div>
              <div class="demo-banner-credentials">
                <div class="demo-field">
                  <span class="field-label">Email:</span>
                  <code class="field-value">${t.demoCredentials.email}</code>
                </div>
                <div class="demo-field">
                  <span class="field-label">Password:</span>
                  <code class="field-value">${t.demoCredentials.password}</code>
                </div>
              </div>
            </div>
          `:""}

          <!-- Interactive Photo Gallery Showcase -->
          <div class="project-gallery-showcase">
            <div class="gallery-main-view">
              <img id="gallery-active-img" src="${p.src}" alt="${p.alt||t.title}" />
              
              ${F?`
                <button class="gallery-nav-btn prev" id="gallery-prev-btn" aria-label="Previous Photo">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                </button>
                <button class="gallery-nav-btn next" id="gallery-next-btn" aria-label="Next Photo">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>
                <span class="gallery-counter-badge" id="gallery-counter">
                  ${s+1} / ${n.length}
                </span>
              `:""}
            </div>

            <div class="gallery-caption-bar">
              <svg class="caption-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
              <span class="caption-text" id="gallery-caption-text">${p.caption||t.title}</span>
            </div>

            ${F?`
              <div class="gallery-thumbnails-strip">
                ${n.map((a,u)=>`
                  <button class="gallery-thumb-btn ${u===s?"is-active":""}" data-thumb-index="${u}" aria-label="View photo ${u+1}">
                    <img src="${a.src}" alt="${a.alt||"Thumbnail "+(u+1)}" />
                  </button>
                `).join("")}
              </div>
            `:""}
          </div>

          <!-- Project Overview -->
          <div class="modal-section-block">
            <h3 class="modal-block-title">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
              Project Overview
            </h3>
            <p class="modal-overview-text">${t.overview||t.subtitle}</p>
          </div>

          <!-- Grouped Tech Stack -->
          ${t.techStackGroups&&t.techStackGroups.length>0?`
            <div class="modal-section-block">
              <h3 class="modal-block-title">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                Tech Stack
              </h3>
              <div class="tech-stack-groups-container">
                ${t.techStackGroups.map(a=>`
                  <div class="tech-group-card">
                    <div class="tech-group-label">${a.category}</div>
                    <div class="tech-group-items">
                      ${a.items.map(u=>{let R=q(u);return`
                          <span class="modal-tech-pill">
                            ${R?`<img src="${R}" class="tech-pill-icon" alt="" />`:""}
                            <span>${u}</span>
                          </span>
                        `}).join("")}
                    </div>
                  </div>
                `).join("")}
              </div>
            </div>
          `:t.techStack&&t.techStack.length>0?`
            <div class="modal-section-block">
              <h3 class="modal-block-title">Tech Stack</h3>
              <div class="modal-tech-tags">
                ${t.techStack.map(a=>`
                  <span class="modal-tech-pill">${a}</span>
                `).join("")}
              </div>
            </div>
          `:""}

          <!-- Key Features (Feature-Focused) -->
          ${t.keyFeatures&&t.keyFeatures.length>0?`
            <div class="modal-section-block">
              <h3 class="modal-block-title">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                Key Features
              </h3>
              <div class="modal-features-list">
                ${t.keyFeatures.map(a=>`
                  <div class="modal-feature-item">
                    <svg class="feature-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <div>${typeof a=="string"?a:`<strong>${a.title}:</strong> ${a.desc}`}</div>
                  </div>
                `).join("")}
              </div>
            </div>
          `:""}

          <!-- Architecture & CI/CD Deployment Flow -->
          ${t.deployment?`
            <div class="modal-section-block">
              <h3 class="modal-block-title">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
                Architecture & Deployment
              </h3>
              <div class="deployment-flow-wrapper">
                <div class="deployment-pipeline">
                  ${t.deployment.flow.map((a,u)=>`
                    <div class="pipeline-step">
                      <span class="step-num">${u+1}</span>
                      <span class="step-text">${a}</span>
                    </div>
                    ${u<t.deployment.flow.length-1?`
                      <div class="pipeline-arrow">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
                      </div>
                    `:""}
                  `).join("")}
                </div>
                ${t.deployment.highlight?`
                  <div class="deployment-highlight-callout">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                    <div><strong>Security Highlight:</strong> ${t.deployment.highlight}</div>
                  </div>
                `:""}
              </div>
            </div>
          `:""}

          <!-- My Engineering Contributions -->
          ${t.contributions&&t.contributions.length>0?`
            <div class="modal-section-block">
              <h3 class="modal-block-title">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                My Contributions
              </h3>
              <div class="modal-contributions-list">
                ${t.contributions.map(a=>`
                  <div class="modal-contribution-item">
                    <svg class="feature-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
                    <div>${a}</div>
                  </div>
                `).join("")}
              </div>
            </div>
          `:""}

          <!-- Technical Highlights -->
          ${t.technicalHighlights&&t.technicalHighlights.length>0?`
            <div class="modal-highlight-box">
              <h4 class="highlight-box-title">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
                Technical & QA Highlights
              </h4>
              <div class="highlight-items-group">
                ${t.technicalHighlights.map(a=>`
                  <div class="highlight-row">
                    <svg class="feature-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    <div>${a}</div>
                  </div>
                `).join("")}
              </div>
            </div>
          `:""}

        </div>

        <!-- In-Modal Project Cycling Footer -->
        <footer class="project-modal-footer">
          <button class="modal-nav-proj-btn" id="modal-prev-project-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            <span>Prev: ${v.title}</span>
          </button>
          
          <button class="modal-nav-proj-btn" id="modal-next-project-btn">
            <span>Next: ${$.title}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </button>
        </footer>
      </div>
    `,W()}function f(i){let e=l[C];if(!e||!e.images||!e.images.length)return;let t=e.images.length;d=(i+t)%t;let n=e.images[d],s=document.getElementById("gallery-active-img"),p=document.getElementById("gallery-caption-text"),c=document.getElementById("gallery-counter");s&&(s.style.opacity="0.4",setTimeout(()=>{s.src=n.src,s.alt=n.alt||n.caption||e.title,s.style.opacity="1"},150)),p&&(p.textContent=n.caption||e.title),c&&(c.textContent=`${d+1} / ${t}`),o.querySelectorAll(".gallery-thumb-btn").forEach(v=>{parseInt(v.getAttribute("data-thumb-index"),10)===d?(v.classList.add("is-active"),v.scrollIntoView({behavior:"smooth",inline:"nearest",block:"nearest"})):v.classList.remove("is-active")})}function W(){let i=document.getElementById("modal-close-action");i&&i.addEventListener("click",x);let e=document.getElementById("gallery-prev-btn"),t=document.getElementById("gallery-next-btn");e&&e.addEventListener("click",()=>f(d-1)),t&&t.addEventListener("click",()=>f(d+1)),o.querySelectorAll(".gallery-thumb-btn").forEach(c=>{c.addEventListener("click",()=>{let E=parseInt(c.getAttribute("data-thumb-index"),10);f(E)})});let s=document.getElementById("modal-prev-project-btn"),p=document.getElementById("modal-next-project-btn");s&&s.addEventListener("click",()=>{let c=(C-1+l.length)%l.length;A(c)}),p&&p.addEventListener("click",()=>{let c=(C+1)%l.length;A(c)})}function A(i){let e=-1;if(typeof i=="number"?e=i:e=l.findIndex(n=>n.id===i),e===-1)return;J(e,0),o.classList.add("is-open"),o.setAttribute("aria-hidden","false"),document.body.classList.add("modal-open"),document.body.style.overflow="hidden";let t=l[e];t&&window.location.hash!==`#${t.id}`&&history.pushState(null,"",`#${t.id}`)}function x(){if(!o.classList.contains("is-open"))return;o.classList.remove("is-open"),o.setAttribute("aria-hidden","true"),document.body.classList.remove("modal-open"),document.body.style.overflow="";let i=window.location.hash.replace("#","");l.some(t=>t.id===i)&&history.pushState(null,"",window.location.pathname+window.location.search)}o.addEventListener("click",i=>{i.target===o&&x()}),document.addEventListener("keydown",i=>{o.classList.contains("is-open")?i.key==="Escape"?x():i.key==="ArrowLeft"?f(d-1):i.key==="ArrowRight"&&f(d+1):i.key==="Escape"&&r&&r.classList.contains("is-open")&&S()});function U(){document.querySelectorAll(".project-card-trigger, [data-project-id]").forEach(e=>{e.addEventListener("click",t=>{let n=e.getAttribute("data-project-id");n&&(t.preventDefault(),A(n))})})}U();function M(){let i=window.location.hash.replace("#","");if(!i){x();return}let e=l.findIndex(t=>t.id===i);e!==-1&&A(e)}window.addEventListener("hashchange",M),window.location.hash&&M()});})();
//# sourceMappingURL=main.js.map
