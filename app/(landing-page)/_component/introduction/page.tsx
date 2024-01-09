import Link from "next/link";
import Container from "../../container";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Photo from "./photo";

 
export default function Introduction() {
  return (
    <div className="container mx-auto px-6 py-10 ">
      <Container className="pt-10 lg:pt-20 lg:pb-20 pb-6 space-y-8">
      
      <div className="flex flex-col gap-y-8">
        <div className="w-full flex lg:flex-row lg:justify-between space-y-8 lg:space-y-0 items-center">
          <div className="">
            <div className="items-start lg:w-[100%] relative h-80  mb-4 ">
              <Photo />
            </div>
            <div className="space-y-4 mb-4 container mx-auto px-20 py-4 text-center">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white lg:text-4xl w-45">
              Elevate your professional expertise with unparalleled guidance from top-notch teachers!
              </h2>
              <p className="lg:text-lg text-justify pt-4 ">
              Embark on a transformative learning journey with our premier online and offline course platform. Uncover tailor-made courses designed specifically for your needs and immerse yourself in a world of seamless and enriching education.
              oin us on this educational adventure, where knowledge knows no bounds. Our platform is not just a destination; its a launchpad for your ambitions. With a commitment to excellence, we provide a diverse range of courses to cater to 
              your unique learning style. Seize the opportunity to learn from the best teachers in the industry and watch your skills flourish. Your journey to expertise starts here
              </p>
            </div>
          </div>
        </div>


        <div className="md:mt-1 grid grid-cols-1 md:grid-cols-4 gap-6 border-2 border-brand rounded-lg">
          <div className="flex flex-col items-center py-8 border-b-2 md:border-b-0 md:border-r-2 border-brand">
            <h2 className="text-4xl font-semibold text-brand">948+</h2>
            <p className="mt-2 font-medium">Active Student</p>
          </div>
          <div className="flex flex-col items-center py-8 border-b-2 md:border-b-0 md:border-r-2 border-brand">
            <h2 className="text-4xl font-semibold text-brand">120+</h2>
            <p className="mt-2 font-medium">Expert Teacher</p>
          </div>
          <div className="flex flex-col items-center py-8 border-b-2 md:border-b-0 md:border-r-2 border-brand">
            <h2 className="text-4xl font-semibold text-brand">132+</h2>
            <p className="mt-2 font-medium">Total Course</p>
          </div>
          <div className="flex flex-col items-center py-8">
            <h2 className="text-4xl font-semibold text-brand">10+</h2>
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
