import Iframe from "react-iframe";
import Container from "../../container";
import React from "react";

const OfflineTeaching = () => {
    return (
      <Container className="pt-10 lg:pt-20 lg:pb-20 pb-6 space-y-8 ">
        <div className="space-y-2 text-center ">
          <h2 className="font-bold text-3xl">Online and onsite learning</h2>
          <p className="font-medium text-muted-foreground py-1">
            Stay updated with our latest happenings and noteworthy events. Explore
            exciting activities and engaging discussions that contribute to
            personal and professional growth. Join us as we create meaningful
            experiences and build a vibrant community together.
          </p>
        </div>
        <div className="flex flex-col gap-y-4 ">
          <Iframe
            url="https://www.youtube.com/embed/vww8-z6xMxY?si=a8nfjQYl30p9UplG"
            id=""
            className="w-full h-[200px] md:h-[400px] lg:h-[650px] rounded-md"
            display="block"
            position="relative"
          />
        </div>
      </Container>
    );
  };
  
  export default OfflineTeaching;