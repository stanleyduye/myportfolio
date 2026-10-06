import type { ReactNode } from "react";

// Next remounts templates on route changes, restarting the CSS entrances without
// holding navigation, cloning the outgoing page, or remounting the shared shell.
export default function Template({ children }: { children: ReactNode }) {
  return <div className="page-transition">{children}</div>;
}
