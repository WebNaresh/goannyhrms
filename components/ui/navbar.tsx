"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white flex justify-center">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
            <span className="text-xl font-bold text-white">G</span>
          </div>
        </Link>
        <nav className="hidden gap-6 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
          >
            About Us
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
          >
            Login
          </Link>
          <Button>
            <Link href="/get-started">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
