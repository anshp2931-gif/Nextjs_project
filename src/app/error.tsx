"use client";

import Link from "next/link";
import { AlertCircle } from "lucide-react";

export default function ErrorBoundary({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="w-full max-w-lg mx-auto py-16 text-center animate-in">
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500/20 to-rose-500/10 border border-red-500/20 text-red-400 flex items-center justify-center mx-auto mb-5">
        <AlertCircle className="w-7 h-7" />
      </div>
      <h2 className="text-2xl font-extrabold gradient-text-warm">Something went wrong</h2>
      <p className="text-sm text-dark-400 mt-2">
        An error occurred while loading this page.
      </p>

      <div className="mt-6 flex items-center justify-center gap-3">
        <button
          onClick={() => reset()}
          className="glow-btn px-5 py-2.5 text-sm"
        >
          Try again
        </button>
        <Link
          href="/"
          className="ghost-btn px-5 py-2.5 text-sm"
        >
          Back to Students
        </Link>
      </div>
    </div>
  );
}
