"use client";

import { useEffect } from "react";

const ErrorPage = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    console.error("App Error:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
      <h1 className="text-3xl font-bold mb-4">Something went wrong</h1>
      <p className="text-gray-600 mb-6">
        An unexpected error occurred. Please try again later.
      </p>
      <button
        onClick={() => reset()}
        className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
      >
        Try Again
      </button>
    </div>
  );
};

export default ErrorPage;
