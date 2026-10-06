"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about-me" },
];

export default function NavBar() {
  const pathname = usePathname();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const desktop = window.matchMedia("(min-width: 768px)");
    const closeOnResize = () => {
      if (!desktop.matches || !dialogRef.current) return;
      dialogRef.current.dataset.animated = "false";
      dialogRef.current.close();
    };
    desktop.addEventListener("change", closeOnResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      desktop.removeEventListener("change", closeOnResize);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!dialogRef.current?.open) return;
    dialogRef.current.dataset.animated = "false";
    dialogRef.current.close();
  }, [pathname]);

  const closeMenu = (event?: { detail: number }) => {
    if (!dialogRef.current) return;
    if (event?.detail === 0) dialogRef.current.dataset.animated = "false";
    dialogRef.current.close();
  };

  return (
    <header className="site-header">
      <div className="container nav-inner">
        <Link href="/" className="brand" aria-label="Stanley Duye home">Stanley Duye<span className="brand-dot">.</span></Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map(item => <Link key={item.href} href={item.href} className="nav-link" aria-current={pathname === item.href ? "page" : undefined}>{item.label}</Link>)}
        </nav>
        <Link href="/contact" className="button button-small button-secondary nav-contact" aria-current={pathname === "/contact" ? "page" : undefined}>Let’s talk <GoArrowUpRight aria-hidden="true" /></Link>
        <button ref={triggerRef} type="button" className="menu-trigger icon-button" aria-label="Open navigation menu" aria-expanded={isOpen} aria-controls="mobile-navigation" aria-haspopup="dialog" onClick={event => {
          if (!dialogRef.current) return;
          dialogRef.current.dataset.animated = String(event.detail > 0);
          dialogRef.current.showModal();
          setIsOpen(true);
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
        </button>
        <dialog ref={dialogRef} id="mobile-navigation" className="mobile-menu" aria-label="Navigation menu" onClick={event => { if (event.target === event.currentTarget) {
          const rect = event.currentTarget.getBoundingClientRect();
          if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeMenu();
        } }} onCancel={() => { if (dialogRef.current) dialogRef.current.dataset.animated = "false"; }} onClose={() => { setIsOpen(false); triggerRef.current?.focus({ preventScroll: true }); }}>
          <div className="mobile-menu-heading"><button type="button" className="icon-button" onClick={closeMenu} aria-label="Close navigation menu" autoFocus><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true"><path d="m6 6 12 12M6 18 18 6" /></svg></button></div>
          <nav aria-label="Mobile navigation">
            {navItems.map(item => <Link key={item.href} href={item.href} onClick={closeMenu} aria-current={pathname === item.href ? "page" : undefined}>{item.label}</Link>)}
            <Link href="/contact" onClick={closeMenu} aria-current={pathname === "/contact" ? "page" : undefined}>Get in touch <GoArrowUpRight aria-hidden="true" /></Link>
          </nav>
        </dialog>
      </div>
    </header>
  );
}
