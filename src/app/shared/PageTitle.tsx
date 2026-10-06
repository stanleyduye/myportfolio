import type { ReactNode } from "react";

interface Props { title: ReactNode; paragraph: ReactNode; eyebrow?: string }

export const PageTitle = ({ title, paragraph, eyebrow }: Props) => (
  <div className="page-heading">
    {eyebrow && <p className="eyebrow" data-enter="1">{eyebrow}</p>}
    <h1 className="page-title" data-enter="2" data-enter-solid>{title}</h1>
    <p className="page-description" data-enter="3">{paragraph}</p>
  </div>
);
