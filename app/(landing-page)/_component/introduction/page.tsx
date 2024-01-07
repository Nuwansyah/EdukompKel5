import Link from "next/link";
import Container from "../../container";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Photo from "./photo";

 
export default function Introduction() {
  return (
    <div>
      <Container>
      
      <div className="flex flex-col gap-y-8">
        <div className="w-full flex lg:flex-row lg:justify-between space-y-8 lg:space-y-0">
          <div className="">
            <div className="items-start lg:w-[100%]">
              <Photo />
            </div>
            <div className="space-y-4 mb-4 container mx-auto px-6 py-5 text-center">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white lg:text-4xl">
                Grow your professional skill with best mentor
              </h2>
              <p className="lg:text-lg text-justify ">
                Embark on a transformative learning journey with the ultimate
                online course platform! Uncover the perfect course tailored just
                for you and dive into a world of seamless and enriching
                education. Your pathway to knowledge begins here. Discover,
                learn, and thrive!
              </p>
            </div>
          </div>
        </div>


        <div className="md:mt-1 grid grid-cols-1 md:grid-cols-4 gap-6 border-2 border-brand rounded-lg">
          <div className="flex flex-col items-center py-8 border-b-2 md:border-b-0 md:border-r-2 border-brand">
            <h2 className="text-4xl font-semibold text-brand">69+</h2>
            <p className="mt-2 font-medium">Active Student</p>
          </div>
          <div className="flex flex-col items-center py-8 border-b-2 md:border-b-0 md:border-r-2 border-brand">
            <h2 className="text-4xl font-semibold text-brand">69</h2>
            <p className="mt-2 font-medium">Skilled Mentor</p>
          </div>
          <div className="flex flex-col items-center py-8 border-b-2 md:border-b-0 md:border-r-2 border-brand">
            <h2 className="text-4xl font-semibold text-brand">69</h2>
            <p className="mt-2 font-medium">Total Course</p>
          </div>
          <div className="flex flex-col items-center py-8">
            <h2 className="text-4xl font-semibold text-brand">69</h2>
            <p className="mt-2 font-medium">Awards</p>
          </div>
        </div>
        <div className="flex flex-col items-center pt-10">
        <p className="mt-2 font-medium pb-4">What are you waiting for, Join us!</p>
          <Link
              href="/dashboard"
              className={cn(
                buttonVariants({ size: "lg", variant: "primary" }),
                "rounded-full lg:w-fit group"
              )}
              >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-all duration-300" />
          </Link>
        </div>
        
      </div>
    </Container>
    </div>
  )
}
