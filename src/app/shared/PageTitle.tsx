import type { ReactNode } from "react";

interface Props { title: ReactNode; paragraph: ReactNode; eyebrow?: string }

export const PageTitle = ({ title, paragraph, eyebrow }: Props) => (
  <div className="page-heading">
    {eyebrow && <p className="eyebrow">{eyebrow}</p>}
    <h1 className="page-title">{title}</h1>
    <p className="page-description">{paragraph}</p>
  </div>
);
