const SITE_CONTENT = {

  // ── NAV ──────────────────────────────────────────────────────────────────
  nav: {
    logo: "Alireza",
    links: [
      { label: "About",    href: "#about"    },
      { label: "Services", href: "#services" },
      { label: "Work",     href: "#projects" },
      { label: "Contact",  href: "#contact"  }
    ]
  },

  // ── HERO ─────────────────────────────────────────────────────────────────
  hero: {
    eyebrow: "Full-Stack Developer · AI Automation ",
    titleLine1: "I build web apps",
    titleLine2: "from interface to backend",  
    subtitle: "Five years building production Angular front-ends — real-time dashboards, fleet trackers, multi-role clinical platforms — and now working across the full stack with Node.js, Express, and NestJS, plus AI automation to cut out the repetitive work.",
    primaryButton:   { label: "See the work →", href: "#projects" },
    secondaryButton: { label: "About me",        href: "#about"    },
    badge: { number: "5", suffix: "+", label: "Years\nprofessional" },
    stats: [
      { number: "15",  suffix: "+", label: "Projects\nshipped" },
      { number: "Full", suffix: "", label: "Stack &\nAI automation" }
    ]
  },

  // ── MARQUEE ────────────────────────────────────────────────────────────────
  marquee: [
    "Angular", "TypeScript", "RxJS", "Angular Signals",
    "Node.js", "Express.js", "NestJS", "REST APIs",
    "AI Automation", "WebSockets", "SignalR", "PrimeNG",
    "OpenStreetMap", "SCSS"
  ],

  // ── ABOUT ME ──────────────────────────────────────────────────────────────
  about: {
    label: "About me",
    title: "Strong on the front end, growing across the full stack — and automating the boring parts with AI",
    paragraphs: [
      "I've spent the last four years building Angular front-ends for projects that genuinely had to work — a GPS fleet tracker, a multi-role clinical dashboard, a dashcam monitoring platform, a meeting tool with live video built in. Different domains, but a lot of the same hard questions about state, real-time data, and what happens when a few hundred things update at once. That front-end depth is still the core of what I do.",
      "These days I'm deliberately working across the whole stack. On the backend I build APIs and services with Node.js, Express, and NestJS, so I can take a product from interface to data layer instead of stopping at the edge of the frontend. I also work with AI automation — wiring up LLMs and automation tools to remove repetitive, manual steps from real workflows. Earlier on I built an irrigation/sensor system at Shahid Chamran University (my first real taste of WebSockets and live data) and spent two semesters as a teaching assistant helping students with React and Next.js. I hold a CS degree and a couple of Harvard CS50 certificates."
    ],
    skills: [
      "Angular",
      "TypeScript",
      "RxJS",
      "Express.js",
      "NestJS",
      "REST API design",
      "AI Automation (LLMs & workflows)",
      "WebSockets & SignalR",
      "Responsive UI"
    ],
    photo: "./images/other/Alireza Jaberi.jpeg",
    photoFallbackInitials: "AJ",
    button: { label: "Get in touch →", href: "mailto:alirezajaberi.programming@gmail.com" }
  },

  // ── SERVICES ───────────────────────────────────────────────────────────────
  services: {
    label: "What I do",
    title: "Where I'm actually useful",
    intro: "Front-end is my foundation, but I work end to end now — Angular interfaces, Node/Express/NestJS backends, and AI automation to take the repetitive work off people's plates.",
    items: [
      {
        icon: "zap",
        title: "Angular apps, front to back",
        description: "Feature modules, lazy loading, routing, Signals-based state — the full picture. Four years in, I know which architectural decisions come back to bite you later and which ones matter less than they seem."
      },
      {
        icon: "layers",
        title: "Backend with Express & NestJS",
        description: "I build the APIs and services behind the interface — REST endpoints, structured NestJS modules, auth, and data access — so a project can go from frontend to backend without handing off at the edge."
      },
      {
        icon: "rocket",
        title: "AI automation",
        description: "Wiring LLMs and automation tools into real workflows: pulling data, generating content, routing tasks, and removing the manual, repetitive steps that slow teams down. Practical automation, not demos."
      },
      {
        icon: "bar-chart-3",
        title: "Real-time interfaces",
        description: "WebSockets, SignalR, live GPS feeds, video streams — dashboards that handle a lot of things updating at once without falling apart. Fleet trackers, dashcam platforms, clinical vitals. The tricky part is usually the rendering, not the data."
      },
      {
        icon: "link-2",
        title: "Multi-role systems & integration",
        description: "Several dashboards in one codebase, each user type seeing exactly what they need — Admins, Secretaries, Doctors, Specialists from a single app. Plus clean integration with whatever the backend, maps, or video service is doing."
      },
      {
        icon: "wrench",
        title: "Code review & teaching",
        description: "Two semesters as a teaching assistant helping students with React and Next.js, plus mentoring junior developers at work. I try to give feedback that's actually useful — specific and honest, not just 'this is wrong.'"
      }
    ]
  },

  // ── PORTFOLIO SECTION META ─────────────────────────────────────────────────
  projectsSection: {
    label: "Portfolio",
    title: "Things I've built",
    ctaButton: { label: "Start a project →", href: "#contact" }
  },

  // ── TESTIMONIALS ────────────────────────────────────────────────────────────
  testimonials: {
    label: "Feedback",
    title: "What people say",
    items: [
      {
        quote: "He picks up what you're trying to do quickly, and doesn't build something technically correct that misses the point. The fleet platform has been running in production for over a year without major issues.",
        name: "Project Lead",
        role: "Fleet Management Platform",
        initials: "PL"
      },
      {
        quote: "The clinical dashboard he delivered was the first time our staff actually preferred the software to the workarounds they'd built around the old system. That's not common.",
        name: "Operations Manager",
        role: "Healthcare Platform",
        initials: "OM"
      },
      {
        quote: "His feedback during the course was specific and honest. He didn't soften things unnecessarily, but he also wasn't harsh — just useful. Exactly what you want from a code reviewer.",
        name: "Former Student",
        role: "Front-End Programme",
        initials: "FS"
      }
    ]
  },

  // ── CONTACT ──────────────────────────────────────────────────────────────────
  contact: {
    label: "Contact",
    title: "Got something in mind?",
    subtitle: "Whether it's an Angular front-end, a Node/NestJS backend, or an AI automation that takes the repetitive work off your team — new project, stuck project, or one that needs someone to take it over — I'm happy to hear about it. No obligation.",
    availability: "Open to new projects",
    primaryButton: { label: "Call me →", href: "tel:+989224864605" },
    email:        "alirezajaberi.programming@gmail.com",
    phoneDisplay: "+98 922 486 4605",
    phoneHref:    "+989224864605",
    whatsappHref: "https://wa.me/989224864605"
  },

  // ── FOOTER ───────────────────────────────────────────────────────────────
  footer: {
    logo:      "Alireza.",
    tagline:   "Full-stack developer & AI automation.",
    copyright: "© 2026 Alireza Jaberi.",
    social: {
      github:   "https://github.com/alireezajb",
      linkedin: "https://www.linkedin.com/in/alireza-jaberi/"
    }
  }
};
