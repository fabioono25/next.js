import React from "react";

export default function ProductDetailsLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <h2>Features products</h2>
    </>
  );
}
