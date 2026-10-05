import type { Metadata } from "next";
import { PageTitle } from "../shared/PageTitle";
import { ResumeButton } from "../shared/Button";
import MyStory from "./components/myStory";

export const metadata: Metadata = { title: "About", description: "Meet Stanley Duye, a frontend engineer with experience building marketing websites and enterprise business applications." };

const skillGroups = [
  { title: "Frontend", list: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Angular", "React Native", "Redux", "React Query", "Tailwind CSS", "Material UI", "shadcn/ui", "Styled Components", "Sass / SCSS", "Bootstrap", "Responsive design"] },
  { title: "Data & AI engineering", list: ["AI engineering", "Natural language processing", "LangChain", "REST APIs", "JSON & data manipulation", "Performance optimization", "Caching strategies", "Git / GitHub"] },
  { title: "Backend foundations", list: ["Python", "Node.js", "Express", "MongoDB", "Go", "PostgreSQL", "Supabase", "Ruby on Rails"] },
  { title: "How I work", list: ["Problem solving", "Debugging", "Communication", "Leadership", "Commitment", "Collaboration", "Attention to detail"] },
];

export default function AboutModule() {
  return (
    <section className="page-section">
      <PageTitle eyebrow="The person behind the pixels" title="Always learning. Always building." paragraph="I’m Stanley, a frontend engineer who enjoys making complex things feel simple. I bring curiosity, care, and a practical approach to every project." />
      <div className="story-layout section">
        <div><p className="eyebrow">My path into engineering</p><h2>A curiosity that<br />became a craft.</h2><div className="story-resume"><ResumeButton /></div></div>
        <div className="story-copy"><MyStory /></div>
      </div>
      <section className="skills-section section" aria-labelledby="skills-title">
        <div className="section-heading"><div><p className="eyebrow">My toolkit</p><h2 id="skills-title">Skills & strengths</h2></div><p className="section-note">The tools change. The care stays.</p></div>
        <div className="skill-grid">{skillGroups.map(group => <div key={group.title} className="skill-group"><h3>{group.title}</h3><ul>{group.list.map(skill => <li key={skill}>{skill}</li>)}</ul></div>)}</div>
      </section>
    </section>
  );
}
