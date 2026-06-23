/* ============================================================================
   PROJECTS.JS — پروژه‌ها + کیس استادی هرکدوم
   ============================================================================
   این فایل هم کارت‌های بخش "Selected Works" را می‌سازد و هم محتوای صفحه‌ی
   case-study.html را — یعنی یک پروژه را اینجا تعریف می‌کنی و خودش هم روی
   صفحه‌ی اصلی ظاهر می‌شود، هم یک صفحه‌ی کیس‌استادی کامل می‌گیرد.

   برای دیدن کیس‌استادی هر پروژه:
   case-study.html?project=SLUG    (مثلا case-study.html?project=logistics)

   ── برای اضافه‌کردن یک پروژه‌ی جدید ──
   1) یک بلاک {...} کامل از پایین کپی کن
   2) slug را به یک مقدار یکتا و بدون فاصله تغییر بده (همین در URL استفاده می‌شود)
   3) فیلدهای داخل caseStudy را با محتوای واقعی پروژه پر کن
   4) اگر عکس کاور نداری، فیلد cover را به همان آدرس پیش‌فرض زیر بگذار:
      "images/projects/default-cover.svg"
   ============================================================================ */

const PROJECTS = [

  // ── پروژه ۱: داشبورد لجستیک (featured) ──────────────────────────────
  {
    slug: "logistics",
    featured: true,
    thumbLabel: "Operations Dashboard",
    cover: "images/projects/logistics-cover.svg",
    tags: ["React", "Node.js", "WebSockets", "PostgreSQL"],
    title: "Real-Time Logistics Platform",
    description: "A live operations dashboard for a logistics company tracking 2000+ daily shipments. Replaced spreadsheets and manual calls with a WebSocket-driven interface that updates every 5 seconds.",
    meta: "2024 · Delivered in 6 weeks",

    caseStudy: {
      client: "Logistics Startup",
      timeline: "6 weeks",
      role: "Full-stack development",
      year: "2024",

      problem: [
        "The client's dispatch team was coordinating shipments across three regional hubs using a shared spreadsheet and group phone calls. Every status change had to be entered manually, which meant the data dispatchers were looking at was usually 20–40 minutes out of date.",
        "Drivers had no way to report delays except by calling in, which meant the same five-person team was fielding calls all day instead of solving problems. As shipment volume grew, the system stopped scaling — errors crept in, and customers started noticing."
      ],
      approach: {
        intro: "Instead of trying to digitize the spreadsheet workflow, we rebuilt it around a different assumption: dispatchers should never have to ask \"what's the status\" — the system should already know.",
        points: [
          "Drivers update status from a lightweight mobile-friendly form at each checkpoint",
          "Updates push to dispatchers over WebSockets within seconds, no refresh needed",
          "Shipments are auto-flagged when they fall behind an expected schedule",
          "A single dashboard view replaced three separate spreadsheets and a phone tree"
        ]
      },
      architecture: [
        "The backend runs on Node.js with a WebSocket layer handling live status broadcasts, backed by PostgreSQL for shipment records and history. Each shipment update writes to the database first, then broadcasts to connected dispatcher sessions — so the dashboard is always reading from the source of truth, not a cache that can drift.",
        "On the frontend, React subscribes to a single shipment-events channel and updates only the rows that changed, instead of refetching the whole table. With several hundred shipments in view at once, this kept the interface fast even during peak hours."
      ],
      results: {
        stats: [
          { number: "~50%", label: "Less time spent on status calls" },
          { number: "5s",   label: "Average update latency, down from ~30min" },
          { number: "3→1",  label: "Spreadsheets consolidated into one view" }
        ],
        note: "The dispatch team went from reacting to problems hours after they happened to catching delays as they occurred. Customer-facing delay notifications, which used to require a manual call, now go out automatically.",
        quote: {
          text: "Alireza understood the problem before I finished explaining it. The dashboard he built cut our ops team's daily admin time in half.",
          author: "Mohammad K., COO"
        }
      },
      stack: ["React", "Node.js", "WebSockets", "PostgreSQL", "Docker", "Redis (pub/sub)"]
    }
  },

  // ── پروژه ۲: مارکت‌پلیس ──────────────────────────────────────────────
  {
    slug: "marketplace",
    featured: false,
    thumbLabel: "E-Commerce Platform",
    cover: "images/projects/marketplace-cover.svg",
    tags: ["Next.js", "Stripe", "MongoDB"],
    title: "Custom B2B Marketplace",
    description: "Multi-vendor marketplace with role-based access, inventory management, and automated invoicing. Handles 500+ monthly orders.",
    meta: "2023",

    caseStudy: {
      client: "E-Commerce Platform",
      timeline: "10 weeks",
      role: "Full-stack development",
      year: "2023",

      problem: [
        "The client connected wholesale buyers with multiple independent vendors, but the buying process ran through email threads and manual invoices. Vendors had no shared system to manage stock, so overselling was common, and the finance team spent most of each week reconciling orders by hand.",
        "There was no single place a buyer could see live pricing, current stock, and order status across vendors — every purchase meant a back-and-forth that could take days."
      ],
      approach: {
        intro: "We built a marketplace where vendors manage their own catalog and stock, and buyers can purchase directly without anyone in the middle confirming availability by hand.",
        points: [
          "Role-based accounts separate vendor, buyer, and admin permissions",
          "Stock levels update in real time as orders are placed, preventing overselling",
          "Stripe Connect handles split payments so each vendor is paid directly",
          "Invoices generate automatically on order completion, no manual entry"
        ]
      },
      architecture: [
        "Built on Next.js for both the buyer-facing storefront and the vendor admin panel, sharing a single codebase but with separate route groups and permission checks. MongoDB stores catalog and order data, chosen for the flexibility of varying product attributes across vendor categories.",
        "Stripe Connect handles the marketplace payment split, with webhook listeners updating order and payout status server-side — so the UI never has to guess whether a payment actually went through."
      ],
      results: {
        stats: [
          { number: "500+", label: "Orders processed monthly" },
          { number: "0",    label: "Manual invoices needed post-launch" },
          { number: "Days → minutes", label: "Time from order to confirmed availability" }
        ],
        note: "Vendors gained direct control over their own listings and stock, and the buyer side became self-serve — removing the client's team from the middle of every transaction.",
        quote: {
          text: "Handed over a chaotic legacy codebase and got back something the whole team could actually work in. Communication was excellent throughout.",
          author: "Sara N., CTO"
        }
      },
      stack: ["Next.js", "TypeScript", "MongoDB", "Stripe Connect", "REST APIs"]
    }
  },

  // ── پروژه ۳: سیستم منابع انسانی ──────────────────────────────────────
  {
    slug: "hr-system",
    featured: false,
    thumbLabel: "HR Automation",
    cover: "images/projects/hr-cover.svg",
    tags: ["React", "Node.js", "PDF Generation"],
    title: "Internal HR System",
    description: "Leave management, payroll summaries, and contract generation in one place — replacing a tangle of Google Sheets for a 120-person company.",
    meta: "2023",

    caseStudy: {
      client: "120-person company",
      timeline: "5 weeks",
      role: "Full-stack development",
      year: "2023",

      problem: [
        "HR ran on a set of Google Sheets — one for leave requests, one for payroll summaries, another for tracking which contracts had been issued. As headcount passed 100 people, the sheets started conflicting with each other, and approvals were getting lost in comment threads.",
        "Generating an employment contract meant manually copying details into a Word template. Mistakes were easy to make and hard to catch before a document had already been signed."
      ],
      approach: {
        intro: "Rather than digitizing each spreadsheet separately, we treated employee records as the single source of truth that leave, payroll, and contracts all pull from.",
        points: [
          "Employees submit and track leave requests directly, with manager approval built in",
          "Payroll summaries calculate automatically from attendance and leave records",
          "Contracts generate as PDFs from employee data, removing manual copy-paste",
          "A simple audit log shows who changed what, addressing the lost-approval problem"
        ]
      },
      architecture: [
        "A Node.js backend handles the business logic — leave balance calculations, approval workflows, and payroll roll-ups — backed by a relational schema that keeps employee, leave, and payroll records properly linked instead of duplicated across sheets.",
        "Contract generation uses a templating engine that fills employee data into predefined PDF layouts server-side, so legal and HR can update the template without touching code."
      ],
      results: {
        stats: [
          { number: "4",   label: "Spreadsheets retired" },
          { number: "0",   label: "Manual contract edits needed" },
          { number: "120", label: "Employees onboarded to the system" }
        ],
        note: "HR moved from chasing approvals across comment threads to a workflow where requests, approvals, and resulting paperwork all live in the same place.",
        quote: {
          text: "He doesn't just write code — he flags things that could go wrong later. Every decision came with a short explanation of the tradeoffs.",
          author: "Ali H., Founder"
        }
      },
      stack: ["React", "Node.js", "PostgreSQL", "PDF Templating", "REST APIs"]
    }
  }

  // برای پروژه‌ی بعدی، یک بلاک کامل { ... } دیگر همینجا (با کاما قبلش) اضافه کن.
];
