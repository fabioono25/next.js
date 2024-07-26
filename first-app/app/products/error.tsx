"use client";

import React from "react";

function ErrorBoundary({ error, reset }: { error: Error; reset: () => void }) {
  

  return (
    <div>
      An Error Occurred: {error.message}. Please do something about it.
      <button onClick={reset}>Try again</button>
    </div>
  );
}

export default ErrorBoundary;
