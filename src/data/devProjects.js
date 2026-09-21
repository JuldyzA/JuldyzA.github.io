export const devProjects = [
  {
    id: "care-compass",
    title: "Care Compass",
    subtitle: "ASP.NET Core MVC (.NET 8) ⋄ C# ⋄ Azure SQL ⋄ GitHub Actions CI/CD",
    category: "Full-Stack Healthcare Web App",
    role: "Full-Stack Developer & QA",
    image: "public/projects/care-compass-landing-page.png",
    link: "#care-compass",
    links: {
      github: "https://github.com/JuldyzA/care-compass-app",
      live: "https://carecompass-prod-2026-g0avdbggcacqbbga.canadaeast-01.azurewebsites.net"
    },
    demoCredentials: {
      email: "counsellordemo@test.ca",
      password: "DemoPassword@2026",
      role: "Counsellor Role"
    },
    images: [
      {
        src: "public/projects/care-compass-landing-page.png",
        caption: "Care Compass Landing Page & Service Discovery",
        alt: "Care Compass Landing Page"
      },
      {
        src: "public/projects/carecompass-counsellor1.png",
        caption: "Counselor Directory & Profile Matching View",
        alt: "Counselor Directory"
      },
      {
        src: "public/projects/carecompass-counsellor2.png",
        caption: "Session Scheduling & Consultation Flow",
        alt: "Consultation Scheduling"
      },
      {
        src: "public/projects/carecompass-counsellor3.png",
        caption: "Custom Treatment Plans & Discount Logic Interface",
        alt: "Treatment Plans & Pricing"
      }
    ],
    overview: "CareCompass helps counsellors and clients manage appointments, subscriptions, and profiles in one platform, with role-based dashboards for admins, managers, counsellors, and visitors. The system follows ASP.NET Core MVC architecture with Entity Framework Core and REST APIs for efficient healthcare data delivery, plan management, and tiered discount calculations.",
    techStackGroups: [
      {
        category: "Backend",
        items: [
          "ASP.NET Core MVC (.NET 8)",
          "C#",
          "Entity Framework Core",
          "ASP.NET Identity (Role-based Auth)"
        ]
      },
      {
        category: "Database",
        items: [
          "Azure SQL Database (Production)",
          "SQLite (Local Dev)"
        ]
      },
      {
        category: "Cloud / Infra",
        items: [
          "Azure App Service (Linux)",
          "Azure Blob Storage",
          "Azure Managed Identity with OIDC"
        ]
      },
      {
        category: "CI / CD",
        items: [
          "GitHub Actions (Automated build, test & deploy pipeline to Azure)"
        ]
      },
      {
        category: "Integrations",
        items: [
          "PayPal (Payments)",
          "Brevo (Email)",
          "Google reCAPTCHA"
        ]
      },
      {
        category: "Auth & Security",
        items: [
          "Passwordless federated deployment auth via Azure Workload Identity Federation (no long-lived secrets in CI)"
        ]
      }
    ],
    techStack: [
      "ASP.NET MVC",
      "C#",
      "Entity Framework",
      "Azure SQL",
      "Azure App Service",
      "GitHub Actions",
      "PayPal API",
      "REST APIs",
      "Figma",
      "Git"
    ],
    keyFeatures: [
      "Role-based dashboards (Admin, Manager, Paid/Free Counsellor, Registered Visitor)",
      "Subscription lifecycle management with automated expiry via a background worker",
      "Profile picture uploads via Azure Blob Storage",
      "Secure payment processing via PayPal integration",
      "Plan and discount logic implementation for custom pricing calculations",
      "Responsive UI crafted directly from Figma design systems"
    ],
    deployment: {
      flow: [
        "Local Dev",
        "git push",
        "GitHub Actions (build + test)",
        "OIDC auth to Azure (no stored secrets)",
        "Deploy to Azure App Service"
      ],
      highlight: "Uses GitHub Actions OIDC federation instead of long-lived service principal secrets — a security best practice for CI/CD pipelines."
    },
    contributions: [
      "Developed and maintained Razor Views within ASP.NET MVC with dynamic JavaScript interactivity.",
      "Integrated REST APIs and handled data flow between frontend presentation and backend services.",
      "Implemented responsive layouts using HTML, CSS, and JavaScript based on Figma designs.",
      "Built functionality related to plans and discount logic in controllers and Razor views.",
      "Worked with data models and schema structures using Entity Framework Code-First approach.",
      "Translated Figma designs into functional, production-ready healthcare management UI.",
      "Leveraged QA background to test and validate application behavior across critical user booking paths."
    ],
    technicalHighlights: [
      "Applied MVC architecture for clear separation of concerns between models, views, and controllers.",
      "Used Entity Framework for efficient data modeling, relational mapping, and optimized querying.",
      "Implemented clean, maintainable C# code in controllers, services, and background workers.",
      "Ensured pixel-perfect consistency between Figma design specs and live responsive implementation.",
      "Leveraged QA methodology to test application logic, boundary inputs, and security permissions."
    ]
  },
  {
    id: "cloud-budget",
    title: "Cloud Budget App",
    subtitle: "AWS ⋄ Serverless ⋄ Lambda ⋄ Budget Tracking",
    category: "Cloud-Native Serverless Application",
    role: "Cloud & Frontend Engineer",
    image: "public/projects/budget-tracking-app.png",
    link: "#cloud-budget",
    links: {
      github: "https://github.com/JuldyzA",
      live: ""
    },
    images: [
      // {
      //   src: "public/projects/cloud-budget.png",
      //   caption: "Cloud Budget Analytics & Category Breakdown Dashboard",
      //   alt: "Cloud Budget Dashboard"
      // },
      {
        src: "public/projects/budget-tracking-app.png",
        caption: "Expense Logging & Monthly Transaction Overview",
        alt: "Expense Tracking View"
      },
      // {
      //   src: "public/projects/aws-weather-architecture.png",
      //   caption: "AWS Serverless Cloud Architecture Diagram",
      //   alt: "AWS Serverless Cloud Architecture"
      // }
    ],
    overview: "Cloud Budget App is a serverless web application designed to help users track and manage their budgets efficiently. The frontend is built with React and hosted on Amazon S3 with CloudFront CDN for global content delivery, backed by AWS Lambda and API Gateway serverless endpoints with Cognito authentication.",
    techStackGroups: [
      {
        category: "Frontend",
        items: ["React", "JavaScript (ES6+)", "Tailwind CSS", "Chart Analytics"]
      },
      {
        category: "Serverless Backend",
        items: ["AWS Lambda (Node.js)", "Amazon API Gateway", "REST APIs"]
      },
      {
        category: "Cloud Hosting & CDN",
        items: ["Amazon S3 (Static Hosting)", "Amazon CloudFront (CDN Edge)"]
      },
      {
        category: "Auth & Security",
        items: ["Amazon Cognito (User Pools & JWT Verification)"]
      }
    ],
    techStack: [
      "AWS S3",
      "CloudFront",
      "AWS Lambda",
      "API Gateway",
      "Cognito",
      "React",
      "REST APIs"
    ],
    keyFeatures: [
      "Serverless architecture using AWS Lambda and API Gateway with zero idle server cost",
      "Static frontend hosting with S3 and CloudFront CDN for sub-millisecond global delivery",
      "User authentication and secure session management via AWS Cognito",
      "Integration with secure budget management APIs and real-time expense calculations",
      "Scalable, highly available cloud-native deployment"
    ],
    deployment: {
      flow: [
        "Local React Dev",
        "npm run build",
        "S3 Bucket Sync",
        "CloudFront CDN Invalidation",
        "Global Edge Delivery"
      ],
      highlight: "Static React build distributed globally via S3 + CloudFront with serverless backend APIs on AWS Lambda."
    },
    contributions: [
      "Deployed React frontend to AWS S3 with CloudFront distribution and SSL certificate.",
      "Configured API Gateway and Lambda functions for backend budget calculations.",
      "Integrated budget calculation endpoints and handled asynchronous data flow in React.",
      "Implemented authentication and secure session management using AWS Cognito.",
      "Managed environment configuration, secret handling, and cloud deployment workflow.",
      "Ensured application performance, cross-device responsiveness, and low latency."
    ],
    technicalHighlights: [
      "Hands-on experience with serverless architecture (AWS Lambda + API Gateway).",
      "Cloud deployment and CDN optimization using Amazon S3 and CloudFront.",
      "Secure authentication and user management with Amazon Cognito.",
      "Integration of frontend with cloud-based serverless microservices.",
      "Applied best practices for scalable and cost-effective cloud-native applications."
    ]
  },
  {
    id: "tool-village",
    title: "ToolVillage Marketplace",
    subtitle: "Next.js ⋄ React ⋄ Node.js ⋄ REST APIs",
    category: "Full-Stack Marketplace Platform",
    role: "Full-Stack Engineer (Team Project)",
    image: "public/projects/toolvillage-main.png",
    link: "#tool-village",
    links: {
      github: "https://github.com/JuldyzA",
      live: ""
    },
    images: [
      {
        src: "public/projects/toolvillage-main.png",
        caption: "ToolVillage Marketplace Homepage & Equipment Catalog",
        alt: "ToolVillage Marketplace Homepage"
      },
      {
        src: "public/projects/toolvillage-details.png",
        caption: "Equipment Rental Details & Live Bidding Engine",
        alt: "ToolVillage Details & Bidding"
      }
    ],
    overview: "ToolVillage is a full stack marketplace application built with Next.js, developed as part of a collaborative team project during the SSD program. The application follows modern full-stack architecture — server-side rendering with Next.js for SEO and speed, a RESTful API layer for data communication, and a component-based React frontend across buyer, seller, and admin roles.",
    techStackGroups: [
      {
        category: "Framework & Frontend",
        items: ["Next.js (SSR / SSG)", "React", "JavaScript (ES6+)"]
      },
      {
        category: "Backend & API",
        items: ["Node.js", "REST APIs", "Postman Testing"]
      },
      {
        category: "Styling & Workflow",
        items: ["CSS3 / SASS", "Git / GitHub (Branching & PRs)"]
      }
    ],
    techStack: [
      "Next.js",
      "React",
      "Node.js",
      "JavaScript",
      "REST APIs",
      "CSS",
      "Git"
    ],
    keyFeatures: [
      "Server-side rendering (SSR) for high performance and search engine optimization",
      "Multi-role user portal catering to equipment buyers, sellers, and system admins",
      "Live bidding and equipment reservation booking engine",
      "Modular, reusable UI component architecture"
    ],
    deployment: {
      flow: [
        "Feature Branching",
        "PR Review & Testing",
        "Next.js Build",
        "Vercel / Node Server Deployment"
      ],
      highlight: "Continuous integration workflow with collaborative pull request reviews and automated build checks."
    },
    contributions: [
      "Built and maintained frontend components using React and Next.js.",
      "Integrated REST APIs and managed data flow between frontend and backend.",
      "Implemented responsive layouts and UI across multiple user roles.",
      "Applied QA practices throughout development — testing functionality and validating API responses in Postman.",
      "Collaborated in an agile team environment using Git for version control and code reviews."
    ],
    technicalHighlights: [
      "Component-based architecture utilizing React and Next.js SSR.",
      "Identified and helped resolve an API race condition in the auction bidding engine.",
      "Clean separation of user permissions across buyer, seller, and admin roles."
    ]
  },
  {
    id: "moviedb-app",
    title: "MovieDB Application",
    subtitle: "React ⋄ JavaScript ⋄ REST APIs ⋄ CSS",
    category: "Interactive Movie Discovery App",
    role: "Frontend Developer",
    image: "public/projects/moviedb.png",
    link: "#moviedb-app",
    links: {
      github: "https://github.com/JuldyzA/red-carpet-moviedb",
      live: "https://red-carpet-moviedb-4czgq9fgo-juldyzas-projects.vercel.app/"
    },
    images: [
      {
        src: "public/projects/moviedb.png",
        caption: "Red Carpet MovieDB Live Explorer",
        alt: "Red Carpet MovieDB Live Explorer"
      },
      {
        src: "public/projects/movie-app-details.png",
        caption: "Red Carpet MovieDB Movie Details Page",
        alt: "Red Carpet MovieDB Movie Details Page"
      },
      {
        src: "public/projects/movie-app-favs.png",
        caption: "Red Carpet MovieDB Favorites Section",
        alt: "Red Carpet MovieDB Favorites Section"
      }
    ],
    overview: "MovieDB is a frontend web application built with React that allows users to explore and discover movies through dynamic data fetched from TMDB external REST APIs. The application focuses on delivering a clean, responsive, and user-friendly interface for browsing movie listings, viewing details, and searching titles.",
    techStackGroups: [
      {
        category: "Frontend",
        items: ["React", "JavaScript (ES6+)", "CSS3 / Flexbox / Grid"]
      },
      {
        category: "Data & API",
        items: ["TMDB REST APIs", "Asynchronous Data Fetching"]
      },
      {
        category: "Hosting",
        items: ["Vercel CI/CD", "Git / GitHub"]
      }
    ],
    techStack: [
      "React",
      "JavaScript (ES6+)",
      "REST APIs",
      "CSS",
      "Responsive Design",
      "Git"
    ],
    keyFeatures: [
      "Dynamic movie data rendering via real-time REST API integration",
      "Component-based architecture using React for modularity and maintainability",
      "Responsive, mobile-first UI with smooth micro-interactions",
      "Debounced movie search and genre filtering functionality",
      "Clean and intuitive user interface with zero heavy UI framework overhead"
    ],
    deployment: {
      flow: [
        "Local React Dev",
        "git push main",
        "Vercel Automated Build",
        "Live Production Edge Deployment"
      ],
      highlight: "Automated Git push integration with Vercel for instantaneous zero-config continuous deployment."
    },
    contributions: [
      "Developed reusable React components for movie listings and detail views.",
      "Integrated REST APIs and managed asynchronous data fetching with state management.",
      "Implemented responsive layouts using modern CSS techniques (Grid and Flexbox).",
      "Handled state management for dynamic content rendering and search filtering.",
      "Applied QA practices to test functionality and ensure reliability across multiple browsers."
    ],
    technicalHighlights: [
      "Strong use of React for modular and maintainable frontend architecture.",
      "Efficient API integration and asynchronous data flow handling.",
      "Focus on performance, fast load times, and intuitive user experience.",
      "Clean, scalable code structure following modern web best practices."
    ]
  },
  {
    id: "js-memory-game",
    title: "JS Memory Game",
    subtitle: "JavaScript ⋄ HTML5 ⋄ CSS3 ⋄ Responsive",
    category: "Interactive Browser Game",
    role: "Frontend Engineer & UI Designer",
    image: "public/projects/js-memory-game.png",
    link: "#js-memory-game",
    links: {
      github: "https://github.com/JuldyzA/js-memory-game",
      live: "https://js-memory-game-one.vercel.app/"
    },
    images: [
      {
        src: "public/projects/js-memory-game.png",
        caption: "Sherlock Combs Themed Memory Matching Game Board",
        alt: "JS Memory Game Board"
      },
      {
        src: "public/projects/js-game-main.png",
        caption: "3D Card Flip Mechanics & Game Play Modal",
        alt: "Memory Game Flip Animation"
      }
    ],
    overview: "JS Memory Game is a responsive card-matching game built with vanilla HTML5, CSS3, and JavaScript. Featuring a Sherlock Holmes-themed hair salon ('Sherlock Combs'), the game challenges players to match pairs of styling tools and themed icons under different difficulty levels with 3D card flips and timer tracking.",
    techStackGroups: [
      {
        category: "Web Standards",
        items: ["Vanilla JavaScript (ES6+)", "HTML5 Semantic Canvas", "CSS3 3D Transforms"]
      },
      {
        category: "Game State Logic",
        items: ["Deterministic State Machine", "Fisher-Yates Shuffle Algorithm"]
      },
      {
        category: "Hosting",
        items: ["Vercel", "Git / GitHub"]
      }
    ],
    techStack: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "Responsive Design",
      "DOM Manipulation",
      "Git"
    ],
    keyFeatures: [
      "Dynamic grid generation based on selected difficulty (Beginner vs. Advanced)",
      "Custom card flipping animations using hardware-accelerated CSS 3D transforms",
      "Move tracking, match detection, timer, and win state conditions",
      "Themed interactive UI with visual cues and victory celebration modal",
      "Fully responsive layout designed for mobile, tablet, and desktop"
    ],
    deployment: {
      flow: [
        "Local Dev",
        "git push",
        "Vercel Edge Host",
        "Live Production"
      ],
      highlight: "Lightweight implementation with zero external runtime dependencies."
    },
    contributions: [
      "Designed and built the game interface using semantic HTML5 and CSS Grid/Flexbox.",
      "Implemented core card matching game logic and state tracking in Vanilla JavaScript.",
      "Created card flip animation effects using CSS keyframes and 3D transforms.",
      "Developed timer logic and dynamic difficulty level grid configuration.",
      "Applied interactive micro-animations and verified cross-device scaling."
    ],
    technicalHighlights: [
      "Lightweight implementation with zero external framework dependencies.",
      "Efficient state management and event delegation in pure JavaScript.",
      "Clean separation of concerns (HTML structure, CSS style/animation, and JS logic).",
      "Polished visual style featuring micro-animations for card flips and hover actions."
    ]
  }
];
