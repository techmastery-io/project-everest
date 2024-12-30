import Link from "next/link";
import { ReactNode } from "react";

export default function SideNav() {
  return (
    <div className="flex h-screen">
      <div className="flex w-72 flex-col bg-gray-200">
        <nav>
          <ul>
            <NavItem href="/content">Content</NavItem>
            <NavItem href="/content-type">Content Types</NavItem>
          </ul>
        </nav>
      </div>
    </div>
  );
}


const NavItem = ({ href, children }: NavItemProps) => (
  <li>
    <Link
      href={href}
      className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
    >
      {children}
    </Link>
  </li>
);

interface NavItemProps {
  href: string;
  children: ReactNode;
}
