"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white flex justify-center items-center ">
      <div className=" flex h-16 items-center justify-between container">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/heropage/goanny.png"
            alt="Logo"
            width={120}
            height={40}
          />
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
