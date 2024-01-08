
import Container from "../../container";

import CarouselMentor from "./carouselmentor";


export default function Mentor() {
    return (
        <div className="container mx-auto px-6 py-10 "> 
          <Container className="pt-10 lg:pt-20 lg:pb-20 pb-6 space-y-8">
            <div className="space-y-2 text-center">
              <h2 className="font-bold text-3xl py-4">Meet Our Expert Teachers</h2>
              <p className="font-medium text-muted-foreground py-1 ">
              Unveil the remarkable personalities who lead and nurture our community. 
              Boasting varied expertise and a fervor for empowering others, our instructors 
              are committed to fostering your development. Immerse yourself in a learning journey 
              where you can glean insights from these exceptional individuals. Elevate your understanding 
              and refine your skills under the guidance of these seasoned mentors who are passionately devoted 
              to propelling your success.
              </p>
            </div>
            <CarouselMentor />
          </Container>
        </div>
      );

}