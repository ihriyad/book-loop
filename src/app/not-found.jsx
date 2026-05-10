"use client";

import { Button } from "@heroui/react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        {/* Title */}
        <h2 className="mt-4 text-2xl sm:text-3xl font-semibold ">
          Page not found
        </h2>

        {/* Description */}
        <p className="mt-3  text-sm sm:text-base">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Actions */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="px-6 py-3 rounded-xl   text-sm font-medium transition"
          >
            Go Home
          </Link>

          <Button variant="outline" onClick={() => window.history.back()}>
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
}
