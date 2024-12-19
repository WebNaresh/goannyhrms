export interface TestimonialCardProps {
  quote: string;
  author?: string;
}

export default function TestimonialCard({
  quote,
  author,
}: TestimonialCardProps) {
  return (
    <div className="relative w-full max-w-[500px] mx-auto">
      <div className="bg-primary rounded-[32px] p-8 relative">
        {/* Avatar placeholder */}
        <div className="w-16 h-16 bg-gray-200 rounded-lg mb-12" />

        {/* Quote mark in top right */}
        <div className="absolute top-8 right-8 text-[#45CACA] text-6xl font-serif">
          &quot;
        </div>

        {/* Testimonial text */}
        <div className="text-white text-3xl font-medium leading-tight">
          <span className="text-4xl">&quot;</span>
          {quote}
          <span className="text-4xl">&quot;</span>
        </div>

        {/* Author */}
        {author && (
          <div className="mt-4 text-white text-xl font-medium">- {author}</div>
        )}
      </div>

      {/* Speech bubble pointer */}
      <div className="absolute -bottom-5 left-14 w-0 h-0 border-l-[24px] border-l-transparent border-t-[24px] border-t-primary border-r-[24px] border-r-transparent" />
    </div>
  );
}
