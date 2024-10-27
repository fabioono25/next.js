import React from "react";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default function ProductDetailsLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  const random = getRandomInt(2);

  if (random === 0) {
    throw new Error("Error loading product");
  }
  return (
    <>
      {children}
      <h2>Features products</h2>
    </>
  );
}
