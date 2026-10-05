"use client";

import { useRef, useState } from "react";
import type { FormEvent } from "react";
import { GoArrowUpRight } from "react-icons/go";

type Field = "name" | "email" | "message";
type SubmissionError = { field?: string; message?: string };
const endpoint = "https://formspree.io/f/xqeynkvr";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<Field, string>>>({});
  const sending = useRef(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending.current) return;
    const form = event.currentTarget;
    const name = form.elements.namedItem("name") as HTMLInputElement;
    const message = form.elements.namedItem("message") as HTMLTextAreaElement;
    name.setCustomValidity(name.value.trim() ? "" : "Please enter your name.");
    message.setCustomValidity(message.value.trim() ? "" : "Please write a message.");
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    data.set("name", name.value.trim());
    data.set("message", message.value.trim());
    sending.current = true;
    setIsSubmitting(true);
    setError("");
    setFieldErrors({});
    try {
      const response = await fetch(endpoint, { method: "POST", body: data, headers: { Accept: "application/json" } });
      if (response.ok) {
        form.reset();
        setSucceeded(true);
      } else {
        const result = await response.json().catch(() => ({})) as { errors?: SubmissionError[] };
        const fields: Partial<Record<Field, string>> = {};
        for (const item of result.errors ?? []) {
          if (item.field === "name" || item.field === "email" || item.field === "message") fields[item.field] = item.message || "Please check this field.";
        }
        setFieldErrors(fields);
        setError("Your message couldn’t be sent. Please try again or email me directly.");
      }
    } catch {
      setError("Your message couldn’t be sent. Please try again or email me directly.");
    } finally {
      sending.current = false;
      setIsSubmitting(false);
    }
  }

  if (succeeded) {
    return <div className="form-success" role="status"><span className="success-check" aria-hidden="true">✓</span><h2>Thanks for reaching out.</h2><p>Your message is on its way. I’ll get back to you as soon as I can.</p><button type="button" className="button button-secondary" onClick={() => setSucceeded(false)}>Send another message</button></div>;
  }

  return (
    <form action={endpoint} method="POST" onSubmit={onSubmit} className="contact-form" aria-label="Contact Stanley" aria-busy={isSubmitting}>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="name">Your name</label>
          <input id="name" type="text" name="name" autoComplete="name" placeholder="Alex Morgan" required maxLength={120} disabled={isSubmitting} aria-invalid={!!fieldErrors.name} aria-describedby={fieldErrors.name ? "name-error" : undefined} onInput={event => event.currentTarget.setCustomValidity("")} />
          {fieldErrors.name && <span id="name-error">{fieldErrors.name}</span>}
        </div>
        <div className="form-field">
          <label htmlFor="email">Email address</label>
          <input id="email" type="email" name="email" autoComplete="email" placeholder="alex@example.com" required maxLength={254} disabled={isSubmitting} aria-invalid={!!fieldErrors.email} aria-describedby={fieldErrors.email ? "email-error" : undefined} />
          {fieldErrors.email && <span id="email-error">{fieldErrors.email}</span>}
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="message">What do you have in mind?</label>
        <textarea id="message" name="message" placeholder="A little about your project, timeline, or idea…" rows={6} required maxLength={5000} disabled={isSubmitting} aria-invalid={!!fieldErrors.message} aria-describedby={fieldErrors.message ? "message-error" : undefined} onInput={event => event.currentTarget.setCustomValidity("")} />
        {fieldErrors.message && <span id="message-error">{fieldErrors.message}</span>}
      </div>
      <div className="form-status" role="alert">{error}</div>
      <div className="form-footer"><p>No mailing lists. Just a conversation.</p><button type="submit" className="button button-primary" disabled={isSubmitting}>{isSubmitting ? "Sending…" : "Send message"}<GoArrowUpRight aria-hidden="true" /></button></div>
      <p className="sr-only" role="status">{isSubmitting ? "Sending your message. Please wait." : ""}</p>
    </form>
  );
}
