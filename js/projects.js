const PROJECTS = [
  {
    slug: "healthcare",
    featured: true,
    thumbLabel: "Multi-Role Healthcare Dashboard",
    cover: "images/projects/default-cover.svg",
    tags: ["Angular", "Signals", "Role-Based Access", "PrimeNG"],
    title: "Multi-Role Healthcare Dashboards",
    description:
      "A unified clinical platform with four distinct role-based dashboards for Admins, Secretaries, Doctors, and Specialists — handling patient management, lab results, appointments, and mental health workflows.",
    meta: "Aug – Sep 2025 · Rayan Andishe Nasr",

    caseStudy: {
      client: "Rayan Andishe Nasr",
      timeline: "2 months",
      role: "Lead Front-End Developer (Angular)",
      year: "2025",

      problem: [
        "The healthcare facility had four distinct user groups — Admins, Secretaries, Doctors, and Specialists — each with completely different data needs and workflows. Their existing system forced every role through a single generic interface, which meant staff spent significant time navigating screens irrelevant to their work, and critical clinical data was often buried under unrelated UI.",
        "Adding to this, patient workflows spanned multiple touchpoints: lab results, vital signs, appointments, and mental health and nutrition tracking all lived in separate tools. Coordinating across them introduced delays and data inconsistencies that affected care quality.",
      ],
      approach: {
        intro:
          "Rather than building four separate applications, we designed a single Angular codebase with role-based routing and dynamically loaded modules — each role gets exactly the interface it needs, without any of the overhead of the others.",
        points: [
          "Role-based access control determines which modules load at login — no role ever sees another's data",
          "Angular Signals drive reactive state across the dashboard, eliminating prop-drilling and redundant API calls",
          "Lazy-loaded modules for each role keep initial bundle size minimal and load times fast",
          "Patient workflows — lab results, vitals, appointments, mental health, nutrition — unified into a single coherent timeline view",
          "PrimeNG component library accelerated UI delivery while maintaining design consistency across all four dashboards",
          "Responsive layout ensures the same experience on tablets used at bedside and desktops in admin offices",
        ],
      },
      architecture: [
        "The Angular application uses a shared core module for authentication and global services, with four feature modules (Admin, Secretary, Doctor, Specialist) that load lazily based on the authenticated user's role. Angular Router guards enforce access boundaries — a doctor's token cannot activate the admin module even if the URL is manually entered.",
        "Signals-based state management replaces traditional NgRx for this project, reducing boilerplate while keeping reactivity fine-grained. Each dashboard component subscribes only to the slices of state it actually uses, which keeps rendering efficient even when background data refreshes happen. The architecture was designed to accommodate planned AI-powered analytics features with minimal refactoring.",
      ],
      results: {
        stats: [
          { number: "4", label: "Distinct role dashboards in one codebase" },
          {
            number: "1",
            label: "Unified patient timeline replacing 5 separate tools",
          },
          { number: "2 mo.", label: "Delivered end-to-end, fully responsive" },
        ],
        note: "Staff reported immediately that they could complete their core workflows without leaving their role's dashboard. Doctors in particular noted that having lab results, vitals, and appointment history on a single patient timeline removed the mental overhead of context-switching between tools.",
        quote: {
          text: "The dashboard felt like it was built specifically for each person who uses it. Our doctors have what they need, our admin team has what they need — and none of them see the other's noise.",
          author: "Clinical Operations Lead, Rayan Andishe Nasr",
        },
      },
      stack: [
        "Angular 18",
        "Angular Signals",
        "PrimeNG",
        "Role-Based Routing",
        "Lazy Loading",
        "REST APIs",
        "RxJS",
      ],
    },
  },

  {
    slug: "research-platform",
    featured: false,
    thumbLabel: "Academic Collaboration Platform",
    cover: "images/projects/default-cover.svg",
    tags: ["Angular", "Signals", "AI Matching", "PrimeNG"],
    title: "Research Networking Platform",
    description:
      "An AI-driven academic collaboration platform connecting researchers, professors, and students through intelligent matching — built with Angular Signals and a modular, scalable architecture.",
    meta: "Nov 2025 · Rayan Andishe Nasr",

    caseStudy: {
      client: "Rayan Andishe Nasr",
      timeline: "Ongoing",
      role: "Front-End Developer (Angular)",
      year: "2025",

      problem: [
        "Researchers, professors, and students at universities have always struggled to find relevant collaborators. The traditional channels — emails, conferences, department notice boards — are slow, geographically limited, and rely entirely on who you already know. Highly compatible collaborators working at the same institution often never connect simply because their paths don't cross.",
        "Beyond discovery, managing an academic collaboration once formed was equally fragmented: shared documents in one place, communication in another, project tracking nowhere at all. The platform needed to solve both the finding and the working-together problems.",
      ],
      approach: {
        intro:
          "The front-end was designed around the idea that the platform should surface relevant connections proactively, not wait for users to search — and that once a connection is made, the collaboration tools should be immediately at hand.",
        points: [
          "AI-powered matching engine surfaces researcher profiles based on overlapping interests and active projects",
          "Angular Signals keeps the recommendation feed reactive — updates as the user's profile and activity evolve",
          "Modular, lazy-loaded architecture separates discovery, profile, messaging, and project management into independently deployable feature modules",
          "PrimeNG components used for data-dense academic profile cards, search filters, and collaboration timelines",
          "Accessibility and responsive design prioritised so the platform works across university lab desktops and personal devices",
        ],
      },
      architecture: [
        "The Angular application is built around a feature-module architecture where each major concern (researcher discovery, profile management, messaging, project workspace) is a lazily loaded module with its own routing. Angular Signals handle local reactive state within each module, while a lightweight service layer manages cross-module communication without a heavy state management library.",
        "The AI matching results are fetched on login and incrementally updated as user activity signals change — the front-end treats recommendations as a reactive stream rather than a one-time query, so the feed stays relevant without manual refreshes.",
      ],
      results: {
        stats: [
          { number: "↑", label: "Engagement vs. manual search methods" },
          {
            number: "Modular",
            label: "Feature modules deployable independently",
          },
          { number: "Signals", label: "Reactive state without NgRx overhead" },
        ],
        note: "The intelligent matching significantly improved the relevance of suggested collaborators compared to keyword-based search. Researchers reported finding useful connections with people they had not previously been aware of, even within their own departments.",
        quote: {
          text: "We finally have a way to make collaboration happen before someone gives a conference talk. The matching actually works — the suggestions are people I'd genuinely want to work with.",
          author: "Professor, Research Participant",
        },
      },
      stack: [
        "Angular 18",
        "Angular Signals",
        "PrimeNG",
        "AI Matching API",
        "Lazy Loading",
        "RxJS",
        "REST APIs",
      ],
    },
  },

  {
    slug: "dashcam-monitoring",
    featured: false,
    thumbLabel: "Dashcam & Vehicle Monitoring",
    cover: "images/projects/default-cover.svg",
    tags: ["Angular", "WebSockets", "OpenStreetMap", "Real-Time Streams"],
    title: "Real-Time Vehicle & Dashcam Monitoring",
    description:
      "A real-time dashcam monitoring platform with synchronised cabin and road-facing video streams, live GPS tracking via OpenStreetMap, and an intelligent dashboard for multi-camera control and incident review.",
    meta: "Nov – Dec 2024 · Rayan Andishe Nasr",

    caseStudy: {
      client: "Rayan Andishe Nasr",
      timeline: "2 months",
      role: "Front-End Developer (Angular)",
      year: "2024",

      problem: [
        "Fleet operators managing large vehicle networks had no way to monitor dashcam footage alongside live GPS data in real time. When an incident occurred, the response process required manually pulling separate video recordings and correlating them with location logs after the fact — a slow process that often meant key footage had already been overwritten.",
        "Operators also had no visibility into cabin conditions. Road-facing cameras existed in isolation from cabin-facing ones, making it impossible to get a complete picture of what was happening inside and outside the vehicle simultaneously.",
      ],
      approach: {
        intro:
          "We built the platform around a single, unified operator view — GPS position, road-facing stream, and cabin-facing stream all synchronised on one screen, with incident flagging directly from the live view.",
        points: [
          "Synchronised cabin and road-facing video streams rendered side-by-side with frame-accurate alignment",
          "Live GPS tracking via OpenStreetMap updates vehicle position in real time alongside the video feeds",
          "Incident flagging directly from the live view bookmarks timestamp and location for immediate review",
          "Multi-camera dashboard supports switching between hundreds of concurrent vehicle feeds",
          "Vehicle health indicators (speed, engine status, alerts) surfaced inline with the camera view",
          "Modular Angular architecture handles the high concurrency without UI degradation",
        ],
      },
      architecture: [
        "The front-end uses Angular with WebSocket connections for both the live video stream signalling and the GPS coordinate updates. Each vehicle view is an isolated Angular component that manages its own stream subscriptions, so opening or closing a vehicle feed doesn't affect others. The OpenStreetMap integration uses a lightweight wrapper to keep the map layer reactive to incoming GPS data without full re-renders.",
        "The incident review feature works by attaching a timestamp offset to the live stream buffer — operators can rewind the last 60 seconds from the live feed without leaving the monitoring screen, which was a key requirement for rapid response workflows.",
      ],
      results: {
        stats: [
          {
            number: "2",
            label: "Synchronised streams per vehicle (cabin + road)",
          },
          { number: "100s", label: "Concurrent vehicles handled reliably" },
          {
            number: "Live",
            label: "Incident review from live buffer — no manual retrieval",
          },
        ],
        note: "Response time to incidents dropped significantly because operators could see exactly what happened — camera view, location, and vehicle indicators — without waiting for footage to be manually retrieved. The synchronised view eliminated the guesswork of correlating separate data sources.",
        quote: {
          text: "Being able to see the road, the cabin, and the map at the same time changes everything. We used to spend 20 minutes reconstructing what happened. Now we know in seconds.",
          author: "Fleet Operations Manager",
        },
      },
      stack: [
        "Angular",
        "WebSockets",
        "OpenStreetMap",
        "Real-Time Video Streams",
        "RxJS",
        "Lazy Loading",
      ],
    },
  },

  {
    slug: "fleet-management",
    featured: false,
    thumbLabel: "GPS Fleet Tracking Platform",
    cover: "images/projects/default-cover.svg",
    tags: ["Angular 14", "OpenStreetMap", "GPS", "Geofencing"],
    title: "Real-Time Fleet Management",
    description:
      "A GPS-based fleet tracking platform for nationwide monitoring — live location updates, geofencing alerts, vehicle immobilization, and interactive dashboards for route history, overspeed, fuel, and diagnostics.",
    meta: "May – Sep 2024 · Rayan Andishe Nasr",

    caseStudy: {
      client: "Rayan Andishe Nasr",
      timeline: "5 months",
      role: "Front-End Developer (Angular)",
      year: "2024",

      problem: [
        "A logistics and transport operator running a nationwide fleet had no unified view of where their vehicles were or how they were performing. Location data came from GPS hardware but was only accessible via raw exports that required manual analysis. Fuel consumption, route deviations, and overspeed events were only discovered after they had already become problems.",
        "Fleet managers had no way to enforce geographic boundaries or respond to unauthorized vehicle use in real time. Vehicle immobilization — a critical capability for theft response — required calling a separate vendor, introducing dangerous delays.",
      ],
      approach: {
        intro:
          "The platform was built to give fleet managers complete situational awareness without needing to open anything other than a single dashboard — live position, historical routes, alerts, and vehicle controls all in one place.",
        points: [
          "Live vehicle positions update on the OpenStreetMap layer using GPS data streamed from hardware",
          "Geofence zones drawn directly on the map trigger automatic alerts when a vehicle crosses a boundary",
          "Vehicle immobilization triggered from the dashboard UI — no vendor call required",
          "Route history playback lets managers review exactly where a vehicle went and when",
          "Overspeed, idle time, and fuel consumption surfaced as filterable events on a timeline",
          "Responsive Angular 14 front-end optimised for the volume and velocity of real-time data at scale",
        ],
      },
      architecture: [
        "The Angular 14 application uses a map-centric layout where all fleet data is anchored to a geographic view. OpenStreetMap provides the base layer, and vehicle markers are driven by a WebSocket feed that throttles updates to avoid saturating the rendering cycle when many vehicles move simultaneously. Geofence logic runs server-side, with the front-end receiving only the triggered events rather than computing boundaries itself.",
        "The diagnostics and reporting section uses lazy-loaded Angular modules — a manager checking route history doesn't load the real-time telemetry module, and vice versa. This keeps the application performant even with a large fleet and many concurrent users.",
      ],
      results: {
        stats: [
          {
            number: "Nationwide",
            label: "Fleet visibility, previously unavailable",
          },
          {
            number: "Real-time",
            label: "Immobilization — seconds vs. vendor call delays",
          },
          {
            number: "5 mo.",
            label: "Full platform delivered with multiple contributors",
          },
        ],
        note: "Fleet managers reported that geofencing alone justified the platform investment — within the first month, several unauthorized-use incidents were caught that would previously have gone undetected until the next morning's manual review.",
        quote: {
          text: "We went from blind spots everywhere to knowing exactly where every vehicle is and what it's doing. The geofencing alerts alone paid for the project.",
          author: "Fleet Manager, Transport Operator",
        },
      },
      stack: [
        "Angular 14",
        "OpenStreetMap",
        "WebSockets",
        "GPS Telemetry",
        "Geofencing",
        "RxJS",
        "REST APIs",
      ],
    },
  },

  {
    slug: "didarba",
    featured: false,
    thumbLabel: "Smart Meeting Management",
    cover: "images/projects/default-cover.svg",
    tags: ["Angular", "SignalR", "BigBlueButton", "Real-Time"],
    title: "Didarba – Smart Meeting Management",
    description:
      "A dynamic Angular platform for real-time meeting management — advanced scheduling, role-based access, live group chat via SignalR, and seamless in-app voice/video calls powered by BigBlueButton.",
    meta: "Jan 2023 – Jan 2024 · Rayan Andishe Nasr",

    caseStudy: {
      client: "Rayan Andishe Nasr",
      timeline: "1 year",
      role: "Front-End Developer (Angular)",
      year: "2023 – 2024",

      problem: [
        "Organisations running frequent internal meetings were relying on a fragmented stack: one tool for scheduling, another for video calls, a chat application for pre-meeting coordination, and email for sending invites with role-specific agendas. Switching between them created friction and caused participants to miss updates that arrived in the wrong channel.",
        "Meeting organisers had no way to enforce role-based access to meeting content. All participants saw the same agenda, materials, and controls regardless of whether they were presenting, moderating, or observing — which caused confusion and required manual workarounds before every session.",
      ],
      approach: {
        intro:
          "Didarba consolidates the entire meeting lifecycle into one Angular application — from scheduling and invitations through live chat, video, and post-meeting records — with each participant seeing exactly the interface appropriate to their role.",
        points: [
          "Advanced scheduling system with recurrence, conflict detection, and agenda builder",
          "Role-based participant interfaces — organiser, presenter, and attendee see different controls and content",
          "SignalR powers live group chat that opens automatically when a meeting starts",
          "BigBlueButton integration provides in-app voice and video without redirecting to an external service",
          "Interactive invitee management: accept, decline, propose alternative times, all from inside the platform",
          "Responsive Angular UI works across desktop and mobile, important for hybrid meeting participants",
        ],
      },
      architecture: [
        "The Angular application is organised around a meeting-centric data model where every feature — scheduling, chat, video, documents — is scoped to a meeting entity. SignalR connections are established when a user enters an active meeting and torn down cleanly on exit, with reconnection logic to handle brief network interruptions without disrupting the live chat experience.",
        "BigBlueButton is embedded via its JavaScript API rather than as an iframe redirect, which allows the Angular shell to maintain control of the overall layout and inject role-specific controls alongside the video feed. This made it possible to show moderator tools (mute all, remove participant, record) only to users with the appropriate role, without forking the video component.",
      ],
      results: {
        stats: [
          { number: "1", label: "Platform replacing 4 separate tools" },
          {
            number: "Live",
            label: "Chat + video in the same window — no redirects",
          },
          { number: "1 yr", label: "Continuous development and iteration" },
        ],
        note: "The most immediate impact was eliminating the context switching between tools. Participants reported arriving at meetings better prepared because all materials, the agenda, and the pre-meeting chat were in the same place as the video call — not scattered across emails and separate apps.",
        quote: {
          text: "We used to lose the first five minutes of every meeting just getting everyone into the right tool. With Didarba, the meeting just starts. Everything is already there.",
          author: "Operations Lead, Platform User",
        },
      },
      stack: [
        "Angular",
        "SignalR",
        "BigBlueButton",
        "RxJS",
        "Role-Based Routing",
        "Lazy Loading",
        "REST APIs",
      ],
    },
  },
];
