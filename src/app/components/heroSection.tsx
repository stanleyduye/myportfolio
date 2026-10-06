import Image from "next/image";
import Link from "next/link";
import { GoArrowDown, GoArrowUpRight } from "react-icons/go";
import { ResumeButton } from "../shared/Button";

export default function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow" data-enter="1"><span className="status-dot" /> Stanley Duye · Frontend engineer</p>
        <h1 id="hero-title" data-enter="2" data-enter-solid>Thoughtful interfaces.<br /><span>Built with care.</span></h1>
        <p className="hero-description" data-enter="3">I turn complex ideas into clear, responsive web experiences. From your first product to the tools your team uses every day, I build for the people on the other side of the screen.</p>
        <div className="button-row" data-enter="4">
          <Link href="/contact" className="button button-primary">Let’s work together <GoArrowUpRight aria-hidden="true" /></Link>
          <ResumeButton />
        </div>
        <div data-enter="5"><a href="#selected-work" className="hero-work-link">Explore selected work <GoArrowDown aria-hidden="true" /></a></div>
      </div>
      <div className="hero-portrait" data-enter="3" data-enter-solid>
        <div className="portrait-frame">
          <Image src="/Images/optimized/hero-image.webp" alt="Stanley Duye" fill sizes="(max-width: 767px) 280px, 340px" preload className="portrait-image" />
        </div>
        <div className="portrait-caption"><span>Stanley Duye</span><span>Engineer & problem solver</span></div>
      </div>
    </section>
  );
}
