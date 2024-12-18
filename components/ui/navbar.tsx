"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white flex justify-center items-center">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/placeholder.svg" alt="Logo" width={40} height={40} />
          <span className="text-xl font-bold">GOANNY HRMS</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-sm font-medium">
            Home
          </Link>
          <Link href="/feature" className="text-sm font-medium">
            Feature
          </Link>
          <Link href="/testimonials" className="text-sm font-medium">
            Testimonials
          </Link>
          <Link href="/pricing" className="text-sm font-medium">
            Pricing
          </Link>
          <Link href="/download" className="text-sm font-medium">
            Download
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
