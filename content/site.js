export const site = {
    hero: {
        name: "Ravi K Gupta",
        title: "Backend Systems Engineer · Multi-Tenant SaaS Architecture",
        tagline:
            "Laravel & Go backend engineer focused on SaaS products that have to stay fast and predictable.",
        location: "Delhi, India",
        openToWork: true, // used subtly in Contact, not in the hero UI
        highlights: [
            "Working on web backends since 2014",
            "Most of my time goes into multi-tenant SaaS and internal product tooling",
            "Care a lot about stability, data design, and clear APIs",
        ],
        actions: [
            {
                label: "Email",
                href: "mailto:dev.ravikgupt@gmail.com",
            },
            {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/ravi-k-dev",
            },
            {
                label: "GitHub",
                href: "https://github.com/devravik",
            },
        ],
    },

    about: {
        heading: "About",
        paragraphs: [
            "I’ve been working on backend systems since 2014, mostly for SaaS products and web apps that can’t afford to fall over when traffic spikes.",
            "Day to day I’m in Laravel and Go (Fiber): designing APIs, shaping data models, and fixing the parts that usually hurt first — slow queries, missing indexes, noisy background jobs, and brittle integrations.",
            "I like being close to the product and building backends that still make sense a few years later, not just for the next release. I’m open to remote backend roles and longer-term work with teams building real products.",
        ],
        focusAreas: [
            "Designing and evolving multi-tenant architectures",
            "Keeping APIs versioned and stable as features change",
            "Making search, reporting, and analytics fast enough to feel instant",
            "Tuning queries and indexes instead of only throwing hardware at the problem",
            "Using queues, workers, and Redis to keep UIs responsive under load",
        ],
    },

    skills: {
        heading: "Skills",
        categories: [
            {
                name: "Backend & Architecture",
                items: [
                    "Backend architecture and system design",
                    "Data modelling for real-world, messy domains",
                    "Tenant isolation strategies (shared and isolated)",
                    "Horizontal scaling and performance tuning",
                    "Background processing pipelines and queues",
                ],
            },
            {
                name: "Languages & Frameworks",
                items: [
                    "PHP / Laravel",
                    "Go (Golang, Fiber)",
                    "JavaScript / TypeScript",
                    "Node.js",
                ],
            },
            {
                name: "Data & Search",
                items: [
                    "Relational database design (MySQL, PostgreSQL)",
                    "Query optimisation and indexing",
                    "Analytics / reporting data models",
                    "Algolia",
                    "Meilisearch / Elasticsearch",
                ],
            },
            {
                name: "Cloud, DevOps & Reliability",
                items: [
                    "AWS (S3, EC2, SES, RDS), DigitalOcean, Vercel",
                    "Docker & containers",
                    "GitHub Actions / CI/CD",
                    "Caching layers and Redis",
                    "Observability and application monitoring",
                ],
            },
            {
                name: "Frontend & Apps",
                items: ["Vue.js", "Next.js", "React Native (Expo)"],
            },
        ],
    },

    featured: {
        heading: "Featured Project",
        projects: [
            {
                name: "Genexr Analytics",
                role: "Senior Backend Engineer",
                period: "2025 - Present",
                description:
                    "Multi-tenant analytics platform that sits behind other SaaS products. I’m responsible for the API design, data model, and tenant isolation strategy so each customer gets clean dashboards and exports without ever seeing anyone else’s data.",
                bullets: [
                    "Designed the event and metrics model to keep writes simple and reads fast.",
                    "Built Go (Fiber) services behind a small, well-documented HTTP API.",
                    "Implemented tenant-aware routing, auth, and data isolation for all queries.",
                    "Added background jobs for aggregations, scheduled reports, and CSV exports.",
                    "Shaped the PostgreSQL schema specifically for analytics-style workloads.",
                ],
                techStack: [
                    "Go (Fiber) services",
                    "Next.js reporting dashboard",
                    "PostgreSQL analytics schema",
                    "Multi-tenant routing & auth",
                    "Background jobs & exports",
                ],
                links: [
                    {
                        label: "Genexr Analytics",
                        href: "https://genexr.com",
                    },
                ],
            },
        ],
    },

    projects: {
        heading: "Projects",
        items: [
            {
                name: "Genexr Analytics",
                category: "Product",
                role: "Senior Backend Engineer (Founder)",
                period: "2026 - Present",
                description:
                    "Analytics and reporting layer for SaaS products. It exposes a clean API for sending events and gives each tenant its own dashboards, charts, and exports.",
                image: "./assets/projects/genexr-example-001.png",
                techStack: [
                    "Go (Fiber) services behind a simple HTTP API",
                    "Next.js reporting dashboard",
                    "PostgreSQL schema tuned for analytics queries",
                    "Tenant-aware routing, auth, and data isolation",
                    "Background jobs for aggregations and exports",
                ],
                links: [
                    {
                        label: "Genexr Analytics",
                        href: "https://genexr.com",
                    },
                ],
            },
            {
                name: "Fonefix Repair Management System",
                category: "Digital Transformation",
                role: "Senior Backend Engineer · Waggingtail",
                period: "Ongoing",
                description:
                    "Backend behind a large device repair business — handles bookings, job state, technician updates, and the operational reporting the team runs their day on.",
                image: "./assets/projects/fonefix-example-001.png",
                techStack: [
                    "Workflow-driven backend design",
                    "Data modelling for the full repair lifecycle",
                    "Job and technician scheduling",
                    "Internal reporting for branches and teams",
                ],
                links: [],
            },
            {
                name: "GigHQ",
                category: "Digital Businesses",
                role: "Senior Backend Engineer · Waggingtail",
                period: "Ongoing",
                description:
                    "Community and booking platform that connects musicians with hospitality venues, with feeds, profiles, and event workflows.",
                image: "./assets/projects/gighq-example-001.png",
                techStack: [
                    "Community and booking workflows",
                    "Artist, venue, and event data modelling",
                    "Search across artists and gigs",
                    "Payment flows for bookings",
                ],
                links: [],
            },
            {
                name: "Planolitix",
                category: "Financial Tools",
                role: "Senior Backend Engineer · Waggingtail",
                period: "Ongoing",
                description:
                    "Financial diagnostic tool that uses cashflow modelling to show clients how their position changes across different life stages.",
                image: "./assets/projects/planolitix-example-001.png",
                techStack: [
                    "Financial data modelling",
                    "Long-horizon cashflow calculations",
                    "Graph-based reporting",
                    "Performance-focused SQL tuning",
                ],
                links: [],
            },
            {
                name: "Moneyguide",
                category: "Financial Tools",
                role: "Senior Backend Engineer · Waggingtail",
                period: "Ongoing",
                description:
                    "Retirement and planning tool that lets advisers compare scenarios and generate client-friendly reports.",
                image: "./assets/projects/moneyguide-example-001.png",
                techStack: [
                    "Scenario modelling for retirement planning",
                    "Adviser-facing reporting and exports",
                    "Document generation and summaries",
                    "Secure handling of client data",
                ],
                links: [],
            },
            {
                name: "Skillsnacks",
                category: "Digital Learning",
                role: "Senior Backend Engineer · Waggingtail",
                period: "Ongoing",
                description:
                    "Microlearning platform for retail sales teams, with snack-sized lessons and coaching activities behind a subscription model.",
                image: "./assets/projects/skillsnacks-example-001.png",
                techStack: [
                    "Subscription access model",
                    "Learning content and assessment data structures",
                    "Engagement and progress tracking",
                    "Multi-tenant delivery for different brands",
                ],
                links: [],
            },
            {
                name: "Vetty",
                category: "Digital Businesses",
                role: "Senior Backend Engineer · Waggingtail",
                period: "Ongoing",
                description:
                    "Subscription e‑commerce platform for pet treatments, handling recurring orders, billing, and fulfilment.",
                image: "./assets/projects/vetty-example-001.png",
                techStack: [
                    "Subscription billing engine",
                    "Order and fulfilment workflows",
                    "Inventory and logistics integrations",
                    "Customer notification flows",
                ],
                links: [],
            },
            {
                name: "AttendAssist",
                category: "Product",
                role: "Independent Software Developer",
                period: "2025 - Present",
                description:
                    "Attendance management app focused on making the daily check‑in/out process simple for teachers and teams.",
                image: "./assets/projects/attendassist-example-001.png",
                techStack: [
                    "React Native (Expo)",
                    "Mobile-first API design",
                    "Attendance data modelling",
                    "Auth and role management",
                    "CI/CD for mobile and backend",
                ],
                links: [
                    {
                        label: "Play Store",
                        href: "https://play.google.com/store/apps/details?id=com.attendassist.app",
                    },
                ],
            },
            {
                name: "Top Places India",
                category: "Product",
                role: "Senior Backend Engineer",
                period: "2026",
                description:
                    "Travel discovery platform that helps people explore Indian destinations, itineraries, and lesser-known spots in one place.",
                image: "./assets/projects/topplacesindia-example-001.png",
                techStack: [
                    "Next.js application shell",
                    "Supabase / PostgreSQL data layer",
                    "Destination search and filters",
                    "Caching and incremental rendering",
                ],
                links: [
                    {
                        label: "Live site",
                        href: "https://www.topplacesindia.com/",
                    },
                ],
            },
        ],
    },

    experience: {
        heading: "Experience",
        roles: [
            {
                company: "Waggingtail Technology Limited",
                title: "Senior Software Engineer · Full-time",
                location: "Delhi, India · Remote",
                period: "Oct 2018 - Present",
                summary:
        "Lead backend engineer across several client products — responsible for backend direction, architecture, and keeping systems healthy as traffic and scope grow.",
                bullets: [
        "Responsible for backend architecture, data modelling, and long-term system direction across multiple SaaS products and internal tools.",
                    "Built and maintained REST APIs in Laravel and Go (Fiber), keeping contracts stable while features evolved.",
                    "Introduced tenant isolation patterns and worked on multi-tenant setups where products needed to serve many customers safely.",
                    "Reduced API response times and heavy report queries through better indexing, query rewrites, and benchmarking.",
                    "Set up background workers, queues, and Redis so slow work didn’t block the UI.",
                    "Integrated payment providers and other third‑party APIs in a way that failed predictably, not randomly.",
                    "Managed deployments using GitHub CI/CD, Laravel Forge, AWS containers, DigitalOcean App Platform, and Vercel.",
                    "Reviewed code and helped junior developers think in terms of long‑lived systems, not just tickets.",
                ],
                products: [
                    "Fonefix - device repair service platform (repair workflows, job tracking, technician updates).",
                    "Vetty - pet treatment and subscription-based food platform.",
                    "Planolitix / Moneyguide - financial services and retirement planning tools.",
                    "GigHQ & K3HR - community and artist booking platforms with feed-style features.",
                    "Skillsnacks - microlearning platform.",
                    "Teraumahi - private community platform.",
                ],
                techStack: [
                    "Laravel",
                    "Go (Fiber)",
                    "Vue.js",
                    "Next.js",
                    "MySQL",
                    "Redis",
                    "AWS",
                    "DigitalOcean",
                ],
            },
            {
                company: "Infoicon Technologies",
                title: "Senior Programmer",
                location: "Noida, Uttar Pradesh, India",
                period: "Jun 2015 - Oct 2018",
                summary:
                    "Backend-focused developer on multiple client projects, usually responsible for APIs and data-heavy parts of the system.",
                bullets: [
                    "Developed and maintained REST APIs for web applications.",
                    "Designed backend modules with a focus on clear structure and maintainability.",
                    "Wrote and tuned SQL queries to keep pages responsive.",
                    "Implemented search and filtering features where needed.",
                    "Integrated various third-party APIs and services.",
                    "Handled background jobs and scheduled tasks for periodic work.",
                ],
                techStack: ["PHP", "Laravel", "MySQL", "JavaScript"],
            },
            {
                company: "Webzesty Pvt Ltd",
                title: "Sr. Web Developer",
                location: "Greater Delhi Area · On-site",
                period: "Apr 2014 - Jun 2015",
                summary:
                    "Worked on full-stack web applications using PHP frameworks and JavaScript frontends.",
                bullets: [
                    "Developed backend features using Laravel and CodeIgniter.",
                    "Designed and maintained MySQL schemas.",
                    "Created REST-style endpoints for frontend integrations.",
                    "Built frontend components with JavaScript and Vue.js.",
                    "Fixed bugs, improved performance, and maintained existing applications.",
                ],
                techStack: ["Laravel", "CodeIgniter", "Vue.js", "MySQL", "JavaScript"],
            },
            {
                company: "SunHill Systems Pvt Ltd",
                title: "Web Developer",
                location: "Greater Delhi Area · On-site",
                period: "Aug 2013 - Apr 2014",
                summary:
                    "First role in web development, focused on server-side features and smaller enhancements.",
                bullets: [
                    "Developed and maintained backend features for web applications.",
                    "Built and consumed REST APIs.",
                    "Worked with databases to store and retrieve application data.",
                    "Helped with bug fixes and small feature additions.",
                    "Learned application architecture by working closely with senior developers.",
                ],
                techStack: ["PHP", "JavaScript", "MySQL"],
            },
        ],
    },

    education: {
        heading: "Education",
        items: [
            {
                institution: "Uttar Pradesh Technical University",
                degree: "Bachelor of Technology (B.Tech.)",
                period: "2008 - 2012",
            },
        ],
    },

    languages: {
        heading: "Languages",
        items: [
            { name: "English", level: "Full professional proficiency" },
            { name: "Hindi", level: "Native or bilingual proficiency" },
        ],
    },

    contact: {
        heading: "Contact",
        email: "dev.ravikgupt@gmail.com",
        location: "Delhi, India",
        openToWork: true,
        links: [
            {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/ravi-k-dev",
            },
            {
                label: "GitHub",
                href: "https://github.com/devravik",
            },
            {
                label: "StackOverflow",
                href: "https://stackoverflow.com/users/3894259/k-ravi",
            },
            {
                label: "Instagram",
                href: "https://instagram.com/kravishots",
            },
        ],
    },
};

