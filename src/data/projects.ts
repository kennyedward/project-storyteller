
export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  contributions: string[];
  imageUrl: string;
  coverImage: string; // higher res for case study 
  tagline: string;
  client: string;
  timeline: string;
  role: string;
  problem: string;
  approach: string;
  process: string[];
  outcome: string;
  nextProject: string; // slug of the next project
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Building Forto's design system from the ground up",
    slug: "enterprise-design-system",
    description: "Forto delivers tech-driven solutions to streamline global logistics, and I contributed to building a design system for its SHIP platform—a tool for managing and optimizing shipments. My work focused on creating a scalable, consistent UI framework to support Forto's growing team and evolving product needs.",
    contributions: [
      "Design system architecture",
      "Component library design",
      "Documentation & governance",
      "Cross-functional collaboration"
    ],
    imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000",
    coverImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000",
    tagline: "Building a unified design language for enterprise software",
    client: "Forto",
    timeline: "8 months",
    role: "Lead Designer",
    problem: "Forto was struggling with inconsistent user experiences across their product suite, leading to customer confusion and inefficient development cycles. The design and development teams had no shared language or component library, resulting in duplicated work and quality issues.",
    approach: "I led a cross-functional team to create a comprehensive design system that would serve as the single source of truth for all digital products at Forto. The approach focused on building not just components, but also establishing governance, documentation, and adoption strategies.",
    process: [
      "Conducted an extensive audit of existing products and interfaces to identify patterns and inconsistencies",
      "Collaborated with stakeholders to define core design principles and usage guidelines",
      "Developed a modular component library with Figma, ensuring accessibility and responsiveness",
      "Created comprehensive documentation for designers and developers",
      "Implemented governance processes to maintain the system's integrity",
      "Facilitated workshops to drive adoption across teams"
    ],
    outcome: "The design system reduced development time by 40%, improved consistency across products, and significantly enhanced the user experience. Designers and developers reported higher satisfaction and productivity, while customer support tickets related to interface confusion decreased by 35%.",
    nextProject: "healthcare-platform"
  },
  {
    id: "2",
    title: "Healthcare Platform Redesign",
    slug: "healthcare-platform",
    description: "Reimagining a healthcare management platform to enhance user experience for both patients and healthcare providers.",
    contributions: [
      "UX research & strategy",
      "Information architecture",
      "Interaction design",
      "Usability testing"
    ],
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2000",
    coverImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2000",
    tagline: "Simplifying healthcare management for patients and providers",
    client: "MedConnect",
    timeline: "6 months",
    role: "UX Designer",
    problem: "MedConnect's existing platform was causing frustration among patients and healthcare providers due to its complex navigation, outdated interface, and cumbersome workflows. User retention was dropping and customer support was overwhelmed with basic usability questions.",
    approach: "I took a user-centered approach, conducting extensive research with both patients and healthcare providers to understand their needs, pain points, and mental models. This research informed a complete redesign of the platform's information architecture and interface.",
    process: [
      "Conducted user interviews, contextual inquiries, and survey research with various user types",
      "Created user personas and journey maps to identify pain points and opportunities",
      "Redesigned the information architecture based on user mental models",
      "Developed wireframes and prototypes for key user flows",
      "Conducted usability testing and refined designs based on feedback",
      "Worked closely with developers to ensure proper implementation"
    ],
    outcome: "The redesigned platform saw a 65% increase in user satisfaction scores, a 42% reduction in support tickets, and a 28% improvement in task completion rates. Healthcare providers reported saving an average of 45 minutes per day on administrative tasks.",
    nextProject: "e-commerce-app"
  },
  {
    id: "3",
    title: "E-commerce Mobile App",
    slug: "e-commerce-app",
    description: "Designing a mobile-first e-commerce experience with a focus on personalization and seamless checkout.",
    contributions: [
      "UI/UX design",
      "Prototyping",
      "Visual design",
      "User testing"
    ],
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2000",
    coverImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2000",
    tagline: "Crafting a delightful mobile shopping experience",
    client: "ShopEasy",
    timeline: "4 months",
    role: "Product Designer",
    problem: "ShopEasy was losing mobile customers due to a complicated checkout process and lack of personalization. Cart abandonment rates were high, and the existing app failed to showcase products effectively or encourage repeat purchases.",
    approach: "I focused on creating a visually appealing, intuitive mobile shopping experience with personalized recommendations and a streamlined checkout process. The design emphasized high-quality product imagery, easy navigation, and user-friendly interactions.",
    process: [
      "Analyzed user data and conducted competitive research to identify opportunities",
      "Created user flows for key shopping journeys",
      "Designed a visual language that highlighted products while maintaining brand identity",
      "Developed interactive prototypes for user testing",
      "Implemented A/B testing to refine the checkout process",
      "Collaborated with the marketing team to integrate personalization features"
    ],
    outcome: "The new mobile app resulted in a 53% decrease in cart abandonment, a 37% increase in average order value, and a 76% improvement in customer retention. User engagement metrics showed significant increases, with users spending 40% more time browsing products.",
    nextProject: "enterprise-design-system"
  }
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

export const getNextProject = (currentSlug: string): Project | undefined => {
  const currentProject = getProjectBySlug(currentSlug);
  if (!currentProject) return undefined;
  
  return getProjectBySlug(currentProject.nextProject);
};
