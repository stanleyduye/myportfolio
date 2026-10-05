import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { TbBrandLinkedin } from "react-icons/tb";

export default function FooterModule() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div><Link href="/" className="footer-name">Stanley Duye<span className="brand-dot">.</span></Link><p>Building with intention.</p></div>
        <div className="footer-links"><a href="mailto:stanleyduye@gmail.com">Email <GoArrowUpRight aria-hidden="true" /></a><a href="https://linkedin.com/in/stanley-duye-892510118" target="_blank" rel="noopener noreferrer">LinkedIn <TbBrandLinkedin aria-hidden="true" /></a><a href="https://github.com/stanleyduye" target="_blank" rel="noopener noreferrer">GitHub <FaGithub aria-hidden="true" /></a></div>
        <p className="copyright">© {new Date().getFullYear()} Stanley Duye</p>
      </div>
    </footer>
  );
}
