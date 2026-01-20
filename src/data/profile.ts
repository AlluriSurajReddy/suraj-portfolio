export const profile = {
  name: "Suraj Reddy",
  headline: "Software Engineer",
  subHeadline: "Backend & Cloud Systems (Java, Spring Boot)",
  location: "USA",
  email: "surajreddy170@gmail.com",
  availability: "Open to Backend and Full-Stack roles (Java, Spring Boot, Cloud).",
  topTech: ["Java", "Spring Boot", "Microservices", "AWS", "PostgreSQL", "React/Next.js"],
  links: {
    github: "https://github.com/AlluriSurajReddy",
    linkedin: "https://www.linkedin.com/in/mrsurajreddy",
  },

  summary: [
    "I build cloud-native backend systems and full-stack apps with Java, Spring Boot, and modern cloud platforms.",
    "I focus on clean REST APIs, microservices, security, and performance—so systems stay reliable as they scale.",
  ],

  stats: [
    { label: "Years of experience", value: "4+" },
    { label: "AWS focus", value: "S3 • RDS • EC2 • Lambda" },
    { label: "Core stack", value: "Java • Spring • React" },
    { label: "Projects", value: "2+ featured" },
  ],

  about: [
    "I’m a software engineer who focuses on building backend systems that stay reliable in real production environments.",
    "I’ve worked on cloud-native applications across banking, healthcare, retail, and insurance—usually in teams where correctness, security, and performance matter more than flashy features.",
    "My day-to-day work often involves designing REST APIs, structuring services cleanly, and making trade-offs around scalability, latency, and data consistency. I care a lot about clear service boundaries, predictable behavior, and systems that are easy for other engineers to understand and extend.",
    "I enjoy working end-to-end when needed, but I’m most effective on the backend—owning APIs, integrations, deployments, and production support.",
  ],
  highlights: [
    { title: "Backend + Cloud", desc: "Java/Spring Boot services deployed on AWS/Azure/GCP.", icon: "cloud" },
    { title: "APIs & Security", desc: "Clean REST APIs, JWT auth, role-based access.", icon: "shield" },
    { title: "Performance", desc: "Latency + query tuning, caching, reliable workflows.", icon: "gauge" },
    { title: "Production mindset", desc: "Monitoring, logging, CI/CD, incident readiness.", icon: "wrench" },
  ],

  skills: [
    {
      group: "Backend",
      items: [
        "Java", "Spring Boot", "Spring MVC", "Spring Security", "Spring Cloud", "Hibernate/JPA", "Microservices", "REST APIs",
      ],
    },
    {
      group: "Frontend",
      items: [
        "React",
        "Next.js",
        "Angular",
        "TypeScript",
        "JavaScript (ES6+)",
        "Redux",
        "HTML5/CSS3",
      ],
    },
    {
      group: "Cloud & DevOps",
      items: [
        "AWS",
        "Azure",
        "GCP",
        "Docker",
        "Kubernetes",
        "Terraform",
        "Jenkins",
        "GitHub Actions",
        "SonarQube",
      ],
    },
    {
      group: "Data",
      items: ["PostgreSQL", "MySQL", "Oracle SQL", "MongoDB", "DynamoDB"],
    },
    {
      group: "Distributed Systems",
      items: ["Kafka", "Redis", "GCP Pub/Sub"],
    },
    {
      group: "Testing & Tools",
      items: ["JUnit", "Mockito", "Postman", "Selenium (Basic)", "Splunk", "CloudWatch"],
    },
  ],
  approach: [
    "I enjoy building backend systems that solve real business problems and continue to work reliably as they scale.",
    "My approach starts with understanding the problem domain clearly, then designing services with well-defined boundaries, predictable APIs, and data models that are easy to reason about in production.",
    "I care deeply about fundamentals — clean code, secure access patterns, observability, and deployments that don’t break under real usage. I like systems that teams can extend confidently without fear.",
    "I’m comfortable working end-to-end: from requirement discussions to implementation, cloud deployment, monitoring, and iteration based on feedback.",
  ],

  experience: [
    {
      role: "Software Engineer",
      company: "JPMorgan Chase & Co.",
      period: "Aug 2024 – Present",
      context: "Worked on a cloud-native credit risk and loan decisioning platform used by internal banking teams to evaluate applications in real time.",
      impact: [
        "Designed and built Spring Boot microservices and REST APIs for applicant profiling, credit checks, and decision orchestration.",
        "Implemented secure access using Spring Security with JWT-based authentication and role-based authorization.",
        "Optimized service interactions, caching, and database queries to reduce average decision latency by ~30–35%.",
        "Deployed and monitored services on AWS using Docker and CloudWatch to maintain production visibility and reliability."
      ],
      tech: ["Java", "Spring Boot", "Spring Security", "Microservices", "PostgreSQL", "AWS", "Docker", "CloudWatch"]
    },
    {
      role: "Full Stack Java Developer",
      company: "Tata Consultancy Services (TCS)",
      period: "Aug 2021 – Aug 2023",
      context: "Built and maintained a healthcare workflow automation platform used to manage patient intake, clinical tasks, and discharge processes.",
      impact: [
        "Designed microservices using Spring Boot and REST APIs for patient records, task lifecycle management, and audit logging.",
        "Used Spring Cloud for service-to-service communication and centralized configuration to keep systems loosely coupled.",
        "Built role-based Angular interfaces for doctors, nurses, and coordinators to streamline clinical workflows.",
        "Reduced manual follow-ups by ~30–35% by implementing task orchestration and automated status tracking."
      ],
      tech: ["Java", "Spring Boot", "Spring Cloud", "Spring Security", "PostgreSQL", "Angular", "Docker", "Azure", "Kubernetes (AKS)"]
    },
    {
      role: "Java Developer",
      company: "Adidas AG",
      period: "Jan 2021 – Jul 2021",
      context: "Worked on return and refund microservices to improve reverse logistics and reduce invalid return requests.",
      impact: [
        "Designed backend services for return initiation, eligibility checks, refund processing, and shipment tracking.",
        "Implemented a rules engine to validate return policies, reducing invalid return requests by ~30%.",
        "Built a React-based interface for support teams to initiate returns and manage exceptions.",
        "Improved return processing time by ~35% and refund turnaround by ~25% through workflow optimization."
      ],
      tech: ["Java", "Spring Boot", "Spring Security", "PostgreSQL", "React", "Docker", "GCP", "GKE"]
    },
    {
      role: "Software Engineer",
      company: "State Farm",
      period: "Aug 2020 – Dec 2020",
      context: "Developed backend services for insurance policy administration and claims processing to digitize customer workflows.",
      impact: [
        "Designed modular backend services separating policy, claims, payments, and customer domains.",
        "Built Spring Boot REST APIs for policy issuance, renewals, endorsements, and claim tracking.",
        "Developed Angular-based interfaces for customers and agents with role-based access.",
        "Improved incident resolution time by ~25% through better monitoring and CloudWatch-based alerts."
      ],
      tech: ["Java", "Spring Boot", "MySQL", "Angular", "AWS", "Docker", "CloudWatch", "Maven"]
    },
  ],

  education: {
    school: "Clark University",
    degree: "Master’s in Computer Science",
    note: "Focused on backend systems, cloud-native applications, and scalable web platforms.",
  },

  projects: [
      {
        name: "BotNest — AI Chatbot Builder Platform",
        featured: true,
        oneLiner:
          "Full-stack AI chatbot platform built as a Master’s capstone project to create and manage customizable chatbots.",
        problem:
          "Teams needed a way to build and deploy AI chatbots without writing custom code, while still controlling configuration, access, and usage.",
        solution:
          "Built a full-stack platform with reusable chatbot flows, secure authentication, subscription handling, and persistent conversation storage.",
        impact:
          "Enabled faster chatbot setup with a clean product-style workflow and a scalable architecture suitable for future expansion.",
        highlights: [
          "Designed modular backend APIs and data models",
          "Integrated OpenAI for AI-driven conversations",
          "Implemented authentication, billing, and role-based access",
          "Coordinated team delivery as Scrum Master"
        ],
        tech: [
          "Next.js",
          "TypeScript",
          "Node.js",
          "PostgreSQL",
          "Prisma",
          "OpenAI",
          "Clerk",
          "Stripe",
          "Docker",
          "Vercel"
        ],
        links: {
          github: "https://github.com/BotNestOrg/BotNest"
        }
      },

      {
        name: "Saayam For All — Volunteer Service",
        featured: true,
        oneLiner:
          "Backend service for managing volunteer data and secure APIs in a cloud-ready environment.",
        problem:
          "The platform required reliable backend services to manage volunteer profiles and access-controlled data while following production-grade patterns.",
        solution:
          "Designed and implemented Spring Boot REST APIs with clean service boundaries, validation, and cloud storage integration patterns.",
        impact:
          "Improved backend reliability and maintainability with a structure that supports future scaling and feature expansion.",
        highlights: [
          "Built REST APIs using Spring Boot with layered architecture",
          "Applied secure access patterns and input validation",
          "Designed cloud-friendly storage and configuration flows",
          "Focused on maintainable, production-style backend design"
        ],
        tech: [
          "Java",
          "Spring Boot",
          "REST APIs",
          "PostgreSQL",
          "AWS",
          "Docker"
        ],
        links: {
          github: null
        }
      },

      {
        name: "MasterChef — Restaurant Management System",
        featured: true,
        oneLiner:
          "Java-based restaurant management system for handling orders, menus, and staff workflows.",
        problem:
          "Small restaurants needed a simple system to manage daily operations such as orders, menus, and staff coordination.",
        solution:
          "Developed a Java-based application with clear domain modeling, persistence, and basic user flows.",
        impact:
          "Demonstrated strong Java fundamentals and end-to-end application design using core backend concepts.",
        highlights: [
          "Implemented core business logic using Java and OOP principles",
          "Designed CRUD workflows for restaurant operations",
          "Structured application using MVC-style patterns"
        ],
        tech: [
          "Java",
          "JDBC",
          "JSP",
          "MySQL"
        ],
        links: {
          github: "https://github.com/niral-nadisara/Masterchef"
        }
      }
  ],
};