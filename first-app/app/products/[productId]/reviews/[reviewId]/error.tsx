"use client";

import React from "react";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

function ErrorBoundary({ error, reset }: { error: Error; reset: () => void }) {
  const random = getRandomInt(2);

  if (random === 0) {
    throw new Error("Error loading product");
  }

  return (
    <div>
      An Error Occurred: {error.message}. Please do something about it.
      <button onClick={reset}>Try again</button>
    </div>
  );
}

export default ErrorBoundary;
