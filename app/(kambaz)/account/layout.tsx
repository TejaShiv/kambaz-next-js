import { ReactNode } from "react";
import AccountNavigation from "./Navigation";

export default function AccountLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div className="flex gap-6">
      <AccountNavigation />
      <div className="flex-1">{children}</div>
    </div>
  );
}
