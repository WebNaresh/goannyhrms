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
import GoannySvg, {
  InterestedSvg,
  PopularPlanSvg,
  UnderlineSvg,
} from "./svg/goanny_svg";

interface Props {}

const Page: NextPage<Props> = async ({}) => {
  return (
    <>
      <section className="relative overflow-clip bg-zinc-900 py-20 md:py-32 flex justify-center h-[870px]">
        <div className="container flex flex-col items-center text-center">
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Improve your performance using{" "}
            <span className="relative">
              Easy HR
              <span className="absolute bottom-0 left-0 right-0 h-1 ">
                <UnderlineSvg />
              </span>
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-zinc-400">
            Don&apos;t let your work be hampered by trivial matters. Increase
            your work efficiency with our platform and feel the ease in managing
            employees
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Try free for 12 days
            </Button>
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
          className="absolute top-[30rem] "
        />
      </section>
      <section className="relative overflow-hidden bg-blue-600 px-6 py-24 text-center">
        <div className="mx-auto max-w-4xl space-y-12">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            EasyHR was created to help HRD in managing work and employees in one
            platform easily.
          </h2>
          <p className="text-2xl font-medium text-white/90">
            Provide the ultimate digital engagement experience from anywhere on
            the web.
          </p>
          <GoannySvg />
        </div>
      </section>

      {/* Insights Section */}
      <section className="mt-24 text-center">
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
      <div className="min-h-screen bg-zinc-900 text-white p-8">
        <div className="max-w-6xl mx-auto flex">
          <div>
            {/* Header Section */}
            <div className="space-y-4 max-w-2xl">
              <h1 className="text-5xl font-bold leading-tight">
                The best feature with the best pricing package
              </h1>
              <p className="text-zinc-400">
                let&apos;s see the purchase packages we offer and choose
                according to your needs
              </p>
            </div>

            {/* Toggle Switch */}
            <div className="flex items-center gap-4 relative w-fit">
              <div className="bg-zinc-800 p-1 rounded-full flex">
                <button className="px-6 py-2 rounded-full transition-colors bg-[#2563EB]">
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
            <Card className="bg-[#2563EB] border-0 relative overflow-hidden">
              <CardHeader className="pb-4">
                <h3 className="text-lg font-medium text-white">BASIC PLAN</h3>
                <div className="text-5xl font-bold mt-2 text-white">FREE</div>
                <p className="text-blue-200 mt-4">
                  for this package is suitable for you a new user who wants to
                  try our application
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-center gap-2 text-white">
                    <Check className="h-5 w-5 text-white" />
                    <span>1 TB cloud storage</span>
                  </li>
                  <li className="flex items-center gap-2 text-white">
                    <Check className="h-5 w-5 text-white" />
                    <span>1 TB cloud storage</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full mt-8 bg-[#1F2937] hover:bg-[#374151]">
                  Try for 12 days
                </Button>
              </CardFooter>
            </Card>

            <PopularPlanSvg />
            {/* Pro Plan */}
            <Card className="bg-[#1F2937] border-0 relative overflow-hidden">
              <div className="absolute -right-10 top-5 rotate-45 bg-[#2563EB] px-12 py-1 text-sm">
                Most Popular package
              </div>
              <CardHeader className="pb-4">
                <h3 className="text-lg font-medium text-white">PRO PLAN</h3>
                <div className="text-5xl font-bold mt-2 text-white">$32.00</div>
                <p className="text-gray-300 mt-4">
                  for this package is suitable for business people who have many
                  tasks to handle it
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-center gap-2 text-white">
                    <Check className="h-5 w-5 text-white" />
                    <span>1 TB cloud storage</span>
                  </li>
                  <li className="flex items-center gap-2 text-white">
                    <Check className="h-5 w-5 text-white" />
                    <span>1 TB cloud storage</span>
                  </li>
                  <li className="flex items-center gap-2 text-white">
                    <Check className="h-5 w-5 text-white" />
                    <span>1 TB cloud storage</span>
                  </li>
                </ul>
                <CardFooter>
                  <Button className="w-full mt-8 bg-[#2563EB] hover:bg-[#1D4ED8]">
                    Started Now
                  </Button>
                </CardFooter>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
