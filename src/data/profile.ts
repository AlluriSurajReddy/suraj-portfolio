export const profile = {
  name: "Suraj Reddy Alluri",
  headline: "Software Engineer",
  subHeadline: "Backend & Cloud Systems (Java, Spring Boot)",
  location: "USA",
  email: "surajreddy1707@gmail.com",
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
      name: "Saayam For All — Volunteer Service",
      oneLiner: "Backend service work with real AWS patterns for uploads and secure APIs.",
      problem:
        "Teams needed reliable backend flows for user/volunteer features while keeping data access controlled.",
      solution:
        "Implemented Spring Boot APIs with clear service boundaries and storage patterns suited for production setups.",
      impact:
        "Improved API reliability and kept the codebase easier to extend with consistent structure and validations.",
      tech: ["Spring Boot", "PostgreSQL", "AWS S3", "Docker"],
      highlights: [
        "Clean API design with validation and consistent responses",
        "Structured service + repository layers for maintainability",
        "Cloud storage integration pattern suitable for real projects",
      ],
      links: { github: "", live: "" },
      featured: true,
    },
    {
      name: "Botnest — AI Chatbot Builder",
      oneLiner: "No-code chatbot builder with a modern product-style workflow.",
      problem:
        "Creating and managing chatbots usually requires custom coding and repeated setup per bot.",
      solution:
        "Built a Next.js app with a reusable flow to create bots, manage configs, and connect integrations cleanly.",
      impact:
        "Faster iteration for new bots and a clearer product workflow that can scale to more features.",
      tech: ["Next.js", "TypeScript", "Tailwind", "Prisma"],
      highlights: [
        "Reusable UI components and clean routing structure",
        "Structured data model for bots/configuration",
        "Product-style UX focused on simple flows",
      ],
      links: { github: "", live: "" },
      featured: true,
    },
  ],
};