"use client";

import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const CarouselMentor = () => {
  const mentorsData = [
    {
      id: 1,
      name: "Dadang sudarmi",
      image: "/fotomentor/blank_image_male.jpg",
      role: "Senior Developer",
    },
    {
      id: 2,
      name: "Asep",
      image: "/fotomentor/blank_image_male.jpg",
      role: "Back-end Developer",
    },
    {
      id: 3,
      name: "Tono",
      image: "/fotomentor/blank_image_male.jpg",
      role: "Graphics Designer",
    },
    {
      id: 4,
      name: "Alex Sutejo",
      image: "/fotomentor/blank_image_male.jpg",
      role: "IT Consultant",
    },
    {
      id: 5,
      name: "Adam Lembert",
      image: "/fotomentor/blank_image_male.jpg",
      role: "Cyber Security",
    },
    {
      id: 6,
      name: "George Hitam",
      image: "/fotomentor/blank_image_male.jpg",
      role: "Data Analyst",
    },
    {
      id: 7,
      name: "George Brown",
      image: "/fotomentor/blank_image_male.jpg",
      role: "3D Consultant",
    },
    {
      id: 8,
      name: "George Brown",
      image: "/fotomentor/blank_image_male.jpg",
      role: "UI/UX Designer",
    },
    {
      id: 9,
      name: "George Brown",
      image: "/fotomentor/blank_image_male.jpg",
      role: "Cleaning Service",
    },
    {
      id: 10,
      name: "George Brown",
      image: "/fotomentor/blank_image_male.jpg",
      role: "Marketing Analyst",
    },
  ];

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {mentorsData.map((mentor) => (
          <CarouselItem key={mentor.id} className="md:basis-1/3 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardHeader className="p-0 border-b-2">
                  <AspectRatio>
                    <Image
                      src={mentor.image}
                      alt={mentor.name}
                      className="w-full h-full object-cover rounded-t-md"
                      fill
                    />
                  </AspectRatio>
                </CardHeader>
                <CardContent className="text-center mt-4">
                  <h3 className="font-bold text-xl">{mentor.name}</h3>
                  <p className="text-muted-foreground">{mentor.role}</p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="space-x-2 flex items-center justify-center">
        <CarouselPrevious className="static md:absolute mt-6 md:mt-0" />
        <CarouselNext className="static md:absolute mt-6 md:mt-0" />
      </div>
    </Carousel>
  );
};

export default CarouselMentor;