import type { Metadata } from "next";
import { PageTitle } from "../shared/PageTitle";
import ProjectListings from "./list";

export const metadata: Metadata = { title: "Projects", description: "Selected websites and applications built by Stanley Duye, frontend engineer." };

export default function Projects() {
  return (
    <section className="page-section">
      <PageTitle eyebrow="The portfolio · 08 projects" title="Work, brought to life." paragraph="Websites that tell a story. Applications that make everyday work easier. A selection of projects I’ve helped build." />
      <ProjectListings />
    </section>
  );
}
