import type { Metadata } from "next";
import { GoArrowUpRight } from "react-icons/go";
import { PageTitle } from "../shared/PageTitle";
import ContactForm from "./ContactForm";

export const metadata: Metadata = { title: "Contact", description: "Get in touch with Stanley Duye to discuss your website, application, or next project." };

export default function Contact() {
  return (
    <section className="page-section">
      <PageTitle eyebrow="Let’s start a conversation" title="Good work starts with a hello." paragraph="Have a project in mind, a role to discuss, or a question? Tell me a little about it and I’ll get back to you." />
      <div className="contact-layout" data-enter="4" data-enter-solid>
        <div className="contact-info"><h2>Let’s build something useful.</h2><p>I’d love to hear what you’re working on, what you need, and where I can help.</p><div className="contact-email"><span className="eyebrow">Prefer email?</span><a href="mailto:stanleyduye@gmail.com" className="text-link">stanleyduye@gmail.com <GoArrowUpRight aria-hidden="true" /></a></div><p className="contact-note">Your message goes directly to me.</p></div>
        <ContactForm />
      </div>
    </section>
  );
}
