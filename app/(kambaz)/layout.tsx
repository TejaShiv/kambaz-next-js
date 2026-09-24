import { ReactNode } from "react";
import KambazNavigation from "./Navigation";

export default function KambazLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <table>
      <tbody>
        <tr>
          <td valign="top">
            <KambazNavigation />
          </td>
          <td valign="top">{children}</td>
        </tr>
      </tbody>
    </table>
  );
}