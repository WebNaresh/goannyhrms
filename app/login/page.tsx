"use client";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import InputForm from "./_components/form";

export default function LoginPage() {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const carouselImages = ["/login/1.png", "/login/2.png"];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-6xl grid md:grid-cols-2 overflow-hidden h-fit">
        <div className="p-8 pt-12 flex justify-center">
          <InputForm />
        </div>

        <div className="relative hidden md:block bg-gray-50">
          <Slider {...carouselSettings}>
            {carouselImages.map((src, index) => (
              <div key={index} className="h-full">
                <Image
                  src={src}
                  alt={`Login Illustration ${index + 1}`}
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </Slider>
        </div>
      </Card>
    </div>
  );
}
