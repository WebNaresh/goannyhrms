export default function TestimonialCard() {
  return (
    <div className="relative w-[500px]">
      <div className="bg-primary rounded-[32px] p-8 relative">
        {/* Avatar placeholder */}
        <div className="w-16 h-16 bg-gray-200 rounded-lg mb-12" />

        {/* Quote mark in top right */}
        <div className="absolute top-8 right-8 text-[#45CACA] text-6xl font-serif">
          "
        </div>

        {/* Testimonial text */}
        <div className="text-white text-3xl font-medium leading-tight">
          <span className="text-4xl">"</span>
          we really like this platform. our work becomes more efficient and
          orderly. highly recommended
          <span className="text-4xl">"</span>
        </div>
      </div>

      {/* Speech bubble pointer */}
      <div className="absolute -bottom-6 left-16 w-0 h-0 border-l-[24px] border-l-transparent border-t-[24px] border-t-primary border-r-[24px] border-r-transparent" />
    </div>
  );
}
