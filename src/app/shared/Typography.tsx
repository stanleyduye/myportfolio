import type { ReactNode } from "react";

interface Props { children: ReactNode; className?: string }

export const Paragraph = ({ children, className = "" }: Props) => <p className={["paragraph", className].join(" ")}>{children}</p>;
export const Title = ({ children, className = "" }: Props) => <h1 className={["page-title", className].join(" ")}>{children}</h1>;
export const SectionTitle = ({ children, className = "" }: Props) => <h2 className={className}>{children}</h2>;
export const HomepageSectionTitle = SectionTitle;
