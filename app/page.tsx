import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { NextPage } from "next";
import Image from "next/image";
import Navbar from "./_components/navbar";
import TestimonialsCarousel from "./_components/testimonial";
import GoannySvg, { InterestedSvg, UnderlineSvg } from "./svg/goanny_svg";

interface Props {}

const Page: NextPage<Props> = async ({}) => {
  return (
    <>
      <Navbar />

      <section
        id="hero"
        className="relative overflow-hidden bg-zinc-900 py-20 md:py-32 flex justify-center h-[870px]"
      >
        <div className="container flex flex-col items-center text-center">
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Improve your performance using{" "}
            <span className="relative">
              SMarTea
              <span className="absolute bottom-0 left-0 right-0 h-1 ">
                <UnderlineSvg />
              </span>
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-zinc-400">
            Don&apos;t let your work be hampered by trivial matters. Increase
            your work efficiency with our platform and feel the SMarTea in
            managing employees
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6">
            <Button size="lg">Try free for 7 days</Button>
            <Button size="lg" variant="secondary">
              Learn more
            </Button>
          </div>
        </div>
        <Image
          src={"/heropage/screenshot.png"}
          height={400}
          width={1200}
          alt="screenshot"
          className="absolute top-[31rem] "
        />
      </section>

      <section
        id="features"
        className="relative overflow-hidden bg-primary px-6 py-24 text-center"
      >
        <div className="mx-auto max-w-4xl space-y-12">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            SMarTea was created to help HRD in managing work and employees in
            one platform easily.
          </h2>
          <p className="text-2xl font-medium text-white/90">
            Provide the ultimate digital engagement experience from anywhere on
            the web.
          </p>
          <GoannySvg />
        </div>
      </section>

      {/* Insights Section */}
      <section id="insights" className="mt-24 text-center">
        <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
          Convert insight into data that contains information about the progress
          of your company
        </h2>

        <div className="relative mt-16">
          <Image
            src="/heropage/analytics.png"
            alt="Analytics Dashboard"
            width={1200}
            height={800}
            className="mx-auto rounded-lg"
          />
        </div>
      </section>
      <TestimonialsCarousel />
      <section
        id="pricing"
        className="min-h-screen bg-zinc-900 text-white p-8 sm:flex "
      >
        <div className="max-w-6xl mx-auto flex flex-wrap lg:flex-nowrap">
          <div>
            <div className="space-y-4 max-w-2xl">
              <h1 className="text-5xl font-bold leading-tight">
                Choose the plan that fits your needs
              </h1>
              <p className="text-zinc-400">
                Compare our plans and select the one that best suits your
                business requirements
              </p>
            </div>

            {/* Toggle Switch */}
            <div className="flex items-center gap-4 relative w-fit">
              <div className="bg-zinc-800 p-1 rounded-full flex">
                <button className="px-6 py-2 rounded-full transition-colors bg-primary">
                  Monthly
                </button>
                <button className="px-6 py-2 rounded-full transition-colors">
                  Annual
                </button>
              </div>

              <div className="absolute -bottom-8 left-12">
                <InterestedSvg />
              </div>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-6 relative">
            {/* Basic Plan */}
            <Card className="bg-primary h-fit md:h-[450px]  border-0 flex flex-col relative !justify-between overflow-hidden">
              <CardHeader className="pb-4">
                <h3 className="text-lg font-medium text-white">BASIC PLAN</h3>
                <div className="text-2xl font-bold mt-2 text-white">
                  Key Features:
                </div>
                <p className="text-blue-200 mt-4">
                  for this package is suitable for you a new user who wants to
                  try our application
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-center gap-2 text-white">
                    <Check className="h-5 w-5 text-white" />
                    <span>Basic task management</span>
                  </li>
                  <li className="flex items-center gap-2 text-white">
                    <Check className="h-5 w-5 text-white" />
                    <span>Limited storage (5GB)</span>
                  </li>
                  <li className="flex items-center gap-2 text-white">
                    <Check className="h-5 w-5 text-white" />
                    <span>Email support</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant={"outline"} className="w-full mt-8 ">
                  Try for 7 days
                </Button>
              </CardFooter>
            </Card>

            {/* Pro Plan */}
            <Card className="bg-[#1F2937] flex flex-col justify-between h-fit md:h-[450px]  border-0 relative overflow-hidden">
              <div className="absolute -right-10 top-5 rotate-45 bg-primary px-12 py-1 text-sm">
                Most Popular package
              </div>
              <CardHeader className="pb-4">
                <h3 className="text-lg font-medium text-white">PRO PLAN</h3>
                <div className="text-2xl font-bold mt-2 text-white">
                  Advanced Features:
                </div>
                <p className="text-gray-300 mt-4">
                  for this package is suitable for business people who have many
                  tasks to handle it
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-center gap-2 text-white">
                    <Check className="h-5 w-5 text-white" />
                    <span>Advanced task management</span>
                  </li>
                  <li className="flex items-center gap-2 text-white">
                    <Check className="h-5 w-5 text-white" />
                    <span>Unlimited storage</span>
                  </li>
                  <li className="flex items-center gap-2 text-white">
                    <Check className="h-5 w-5 text-white" />
                    <span>24/7 priority support</span>
                  </li>
                  <li className="flex items-center gap-2 text-white">
                    <Check className="h-5 w-5 text-white" />
                    <span>Advanced analytics</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full mt-8 bg-primary hover:bg-[#1D4ED8]">
                  Started Now
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      <main
        id="contact"
        className="flex-1 container mx-auto px-4 py-12 flex flex-col items-center justify-center text-center max-w-4xl"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
          Are you ready to feel{" "}
          <span className="text-primary relative">
            the SMarTea
            <div className="absolute w-full h-1 bg-primary bottom-0 left-0 transform translate-y-1"></div>
          </span>{" "}
          of managing your business?
        </h1>
        <p className="text-gray-500 text-lg md:text-xl mb-12 max-w-3xl">
          we guarantee that you will be satisfied with our platform which has
          many interesting features and can make it easier to manage business
          and internet games
        </p>
        <Button size="lg">Try free for 7 days</Button>
      </main>

      {/* Footer */}
      <footer className="border-t">
        <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center relative">
              <Image
                src="/smartea.png"
                alt="SmarTea HRMS"
                width={200}
                height={100}
                className="w-full h-auto"
              />
            </div>
            <p className="text-gray-600 max-w-xs">
              Website and application-based human resource management platform
              for HR
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-4 text-gray-800">
              Social Media
            </h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Dribbble
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Behance
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-4 text-gray-800">
              About us
            </h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Feature
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-4 text-gray-800">
              Contact
            </h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Affiliate program
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Become Partner
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Contact Sales
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Page;
