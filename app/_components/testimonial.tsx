"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface Testimonial {
  id: number;
  quote: string;
  author?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "we really like this platform. our work becomes more efficient and orderly. highly recommended",
  },
  {
    id: 2,
    quote:
      "The platform has transformed how we work. Incredible efficiency gains!",
  },
  {
    id: 3,
    quote: "Best decision we made for our workflow. Highly recommended!",
  },
];

export default function TestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const previous = () => {
    setActiveIndex(
      (current) => (current - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="w-full bg-gray-950 px-4 py-16">
      <div className="container mx-auto max-w-6xl">
        {/* Decorative elements */}
        <div className="relative">
          <div className="absolute -top-2 left-0">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path
                d="M20 0C20 11.0457 11.0457 20 0 20"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="2"
              />
            </svg>
          </div>
          <div className="absolute -top-2 right-0">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path
                d="M20 0C20 11.0457 28.9543 20 40 20"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Our customer kind words
          </h2>
          <p className="text-gray-400">
            Know what they say about our platfrom after they used it
          </p>
        </div>

        {/* Testimonials carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card
                    className={`p-8 relative ${
                      index === activeIndex
                        ? "bg-blue-600 text-white"
                        : "bg-blue-950/50 text-gray-300"
                    }`}
                  >
                    <div className="absolute top-4 right-4 text-4xl opacity-20">
                      &quot;
                    </div>
                    <blockquote className="text-lg md:text-xl relative z-10">
                      {testimonial.quote}
                    </blockquote>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="ghost"
              size="icon"
              onClick={previous}
              className="text-white hover:bg-gray-800"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === activeIndex
                      ? "w-8 bg-blue-600"
                      : "w-2 bg-gray-600"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={next}
              className="text-white hover:bg-gray-800"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
