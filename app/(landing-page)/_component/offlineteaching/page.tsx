import Iframe from "react-iframe";
import Container from "../../container";
import React from "react";

const OfflineTeaching = () => {
    return (
      <Container >
        <div className="space-y-2 text-center ">
          <h2 className="font-bold text-3xl">Dive into the World of Virtual and In-Person Education</h2>
          <p className="font-medium text-muted-foreground py-1">
          Keep abreast of our recent developments and significant occasions. Delve into thrilling initiatives and interactive conversations designed to enhance both your personal and professional journey. Be part of our collaborative efforts as we craft enriching encounters, fostering connections within a dynamic community.
          </p>
        </div>
        <div className="flex flex-col gap-y-4 ">
          <Iframe
            url="https://www.youtube.com/embed/XmWkcePhf84?si=uS4ovd-RcPFiWK1n"
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