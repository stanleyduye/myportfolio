import Link from "next/link";
import { GoArrowRight, GoArrowUpRight } from "react-icons/go";
import ProjectListings from "../projects/list";

export default function HomepageSections() {
  return (
    <>
      <section id="selected-work" className="section" aria-labelledby="selected-work-title">
        <div className="section-heading" data-reveal>
          <div><p className="eyebrow">A few things I’ve built</p><h2 id="selected-work-title">Selected work<span className="section-count">04</span></h2></div>
          <Link href="/projects" className="text-link">All projects <GoArrowRight aria-hidden="true" /></Link>
        </div>
        <ProjectListings limit={4} headingLevel="h3" />
        <div data-reveal><Link href="/projects" className="button button-secondary projects-more">View all 8 projects <GoArrowRight aria-hidden="true" data-direction="right" /></Link></div>
      </section>
      <section className="about-preview section" aria-labelledby="about-preview-title">
        <div data-reveal><p className="eyebrow">A little about me</p><h2 id="about-preview-title">Curious by nature.<br />An engineer by practice.</h2></div>
        <div className="about-preview-copy" data-reveal data-reveal-delay="1"><p>I started learning web development in 2020 and have been building ever since. My work spans marketing websites and the business tools that help teams manage people, payroll, and performance.</p><p>I care about the details: readable code, accessible interfaces, and interactions that feel natural.</p><Link href="/about-me" className="text-link">More about me <GoArrowRight aria-hidden="true" /></Link></div>
      </section>
      <section className="contact-callout" aria-labelledby="contact-callout-title" data-reveal="soft">
        <div><p className="eyebrow">Have something in mind?</p><h2 id="contact-callout-title">Let’s make it happen.</h2><p>Tell me about your idea. I’d love to help bring it to life.</p></div>
        <Link href="/contact" className="button button-primary">Get in touch <GoArrowUpRight aria-hidden="true" /></Link>
      </section>
    </>
  );
}
