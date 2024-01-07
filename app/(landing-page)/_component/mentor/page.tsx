
import Container from "../../container";

import CarouselMentor from "./carouselmentor";


export default function Mentor() {
    return (
        <div className="container mx-auto px-6 py-10 "> 
          <Container className="pt-10 lg:pt-20 lg:pb-20 pb-6 space-y-8">
            <div className="space-y-2 text-center">
              <h2 className="font-bold text-3xl py-4">Meet Our Mentors</h2>
              <p className="font-medium text-muted-foreground py-1 ">
                Discover the inspiring individuals who guide and mentor our
                community. With diverse expertise and a passion for helping others
                succeed, our mentors are dedicated to supporting your growth. Learn
                from the best as you embark on a journey of knowledge and skill
                development.
              </p>
            </div>
            <CarouselMentor />
          </Container>
        </div>
      );

}