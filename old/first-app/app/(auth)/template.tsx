"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";
import "./styles.css";

import { useState } from "react";

const navLinks = [
  { href: "/", text: "Home" },
  { href: "/blog", text: "Blog" },
  { href: "/products", text: "Products" },
  { href: "/register", text: "Register" },
  { href: "/login", text: "Login" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const [input, setInput] = useState("");

  return (
    <>
      <div>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
      </div>
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
