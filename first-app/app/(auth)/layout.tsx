"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";
import "./styles.css";

const navLinks = [
  { href: "/", text: "Home" },
  { href: "/blog", text: "Blog" },
  { href: "/products", text: "Products" },
  { href: "/register", text: "Register" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <>
      <nav>
        <ul>
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
                >
                  {link.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      {children}
    </>
  );
}
