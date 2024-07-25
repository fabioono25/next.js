import React from "react";

export default function AuthLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <>
      <h2>Inner layout</h2>
      {children}
    </>
  );
}
