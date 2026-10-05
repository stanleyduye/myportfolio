import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

const projects = [
  {
    id: 8,
    title: "BasheerCore Construction",
    category: "Construction website",
    description: "A home for a Lagos construction company’s services, equipment, and project inquiries. Built to help clients find what they need and request a quote.",
    image: "/Images/optimized/basheercore.webp",
    link: "https://basheercore.com/",
  },
  {
    id: 2,
    title: "Go-Mailer",
    category: "Email marketing",
    description: "A digital marketing website for a team helping businesses reach their audience through email campaigns, custom templates, and campaign insights.",
    image: "/Images/optimized/go-mailer.webp",
    link: "https://go-mailer.com",
  },
  {
    id: 1,
    title: "Organogram Workspace",
    category: "Business platform",
    description: "A unified workspace for HR, payroll, and performance management. Bringing everyday business operations together in one place.",
    image: "/Images/optimized/workspace.webp",
    link: "https://organogram.ltd/workspace",
  },
  {
    id: 5,
    title: "Workspace Performance (OKR)",
    category: "Performance management",
    description: "Tools for setting goals, sharing feedback, and evaluating progress. Helping teams connect individual performance with their organization’s objectives.",
    image: "/Images/optimized/okr.webp",
    link: "https://okr.organogram.app/",
  },
  {
    id: 7,
    title: "BuildByte",
    category: "AI website builder",
    description: "An AI-assisted platform for creating and managing a business’s online presence, from building a website to keeping it up to date.",
    image: "/Images/optimized/buildbyte.webp",
    link: "https://app2.buildbyte.dev/fe",
  },
  {
    id: 3,
    title: "Workspace HR",
    category: "Human resources",
    description: "A cloud-based HR application for managing employee records, attendance, and performance. Less administration, more time for people.",
    image: "/Images/optimized/hr.webp",
    link: "https://people.organogram.app/",
  },
  {
    id: 6,
    title: "Marp Cleaning Services",
    category: "Services website",
    description: "A website for a professional cleaning company, showcasing residential and commercial services, from regular maintenance to specialist deep cleaning.",
    image: "/Images/optimized/marp.webp",
    link: "https://marpcleaningservice.com.ng/",
  },
  {
    id: 4,
    title: "Workspace Payroll",
    category: "Payroll management",
    description: "An application that simplifies salary calculations, tax deductions, and compliance reporting so businesses can pay their teams accurately and on time.",
    image: "/Images/optimized/payroll.webp",
    link: "https://payroll.organogram.app/",
  },
];

interface Props { limit?: number; headingLevel?: "h2" | "h3" }

export default function ProjectListings({ limit, headingLevel = "h2" }: Props) {
  const Heading = headingLevel;
  const visibleProjects = limit ? projects.slice(0, limit) : projects;
  return (
    <div className="project-grid">
      {visibleProjects.map((project, index) => (
        <a key={project.id} data-project-card href={project.link} target="_blank" rel="noopener noreferrer" className="project-card" aria-label={["View", project.title, "website (opens in a new tab)"].join(" ")}>
          <div className="project-image">
            <Image src={project.image} alt={[project.title, "website preview"].join(" ")} fill sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1199px) calc((100vw - 80px) / 2), 544px" className="project-screenshot" />
          </div>
          <div className="project-content">
            <div className="project-meta"><span>{project.category}</span><span className="project-number">{String(index + 1).padStart(2, "0")}</span></div>
            <Heading className="project-title">{project.title}</Heading>
            <p className="project-description">{project.description}</p>
            <span className="project-visit">View website <GoArrowUpRight aria-hidden="true" /></span>
          </div>
        </a>
      ))}
    </div>
  );
}
