"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { LeftCloudSvg, RightCloudSvg } from "../svg/goanny_svg";
import TestimonialCard, { TestimonialCardProps } from "./testimonial-card";

const testimonials: TestimonialCardProps[] = [
  {
    quote:
      "We really like this platform. Our work becomes more efficient and orderly. Highly recommended!",
    author: "John Doe, CEO",
  },
  {
    quote:
      "The platform has transformed how we work. Incredible efficiency gains!",
    author: "Jane Smith, CTO",
  },
  {
    quote: "Best decision we made for our workflow. Highly recommended!",
    author: "Mike Johnson, Project Manager",
  },
];

export default function TestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const next = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }
  };

  const previous = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveIndex(
        (current) => (current - 1 + testimonials.length) % testimonials.length
      );
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [activeIndex]);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <div className="w-full bg-gray-950 px-4 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Decorative elements */}

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Customers&apos; Kind Words
          </h2>
          <p className="text-gray-400">
            Discover what they say about our platform after using it
          </p>
        </div>

        {/* Testimonials carousel */}
        <div className="relative overflow-hidden">
          <div className="absolute">
            <LeftCloudSvg className="absolute z-0 -top-8 -left-8 text-primary opacity-10" />
          </div>
          <div className="absolute right-0">
            <RightCloudSvg className="absolute -bottom-8 -right-8 text-primary opacity-10" />
          </div>
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-12 mt-8">
            <Button
              onClick={previous}
              className="text-white rounded-full h-10 w-10"
              disabled={isAnimating}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => !isAnimating && setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === activeIndex ? "w-8 bg-primary" : "w-2 bg-gray-600"
                  }`}
                />
              ))}
            </div>

            <Button
              onClick={previous}
              className="text-white rounded-full h-10 w-10"
              disabled={isAnimating}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
