
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Container from "../../container";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

const Aboutus = () => {
    return (
        <Container className="min-h-screen space-y-4 pb-4 ">
          <h2 className="font-bold text-center text-3xl pb-4">Meet our web developer</h2>
          <div className=" w-full items-center">
            <div className="text-center pt-1">
              <div className="inline-block mb-4 relative shrink-0 rounded-[.95rem]">
                <Image 
                className="inline-block shrink-0 rounded-[.95rem] w-[130px] h-[150px] object-contain" 
                src="https://images.unsplash.com/photo-1703851818231-10fe4dc01526?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="avarat image"
                width={150} // Specify the width property here
                height={150}/>
              </div>
              <div className="text-center ">
                <a href="javascript:void(0)" className="text-dark font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out">Nuwansyah Billah Amantana</a>
                <span className="block text-sky-800 font-medium text-muted">Web Programmer</span>
              </div>
            </div>
            <div className="text-center pt-10">
              <div className="inline-block mb-4 relative shrink-0 rounded-[.95rem]">
                <Image 
                className="inline-block shrink-0 rounded-[.95rem] w-[130px] h-[150px] object-contain" 
                src="https://images.unsplash.com/photo-1627125451522-2f35aed06077?q=80&w=1898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="avarat image"
                width={150} // Specify the width property here
                height={150}
                />
              </div>
              <div className="text-center">
                <a href="javascript:void(0)" className="text-dark font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out">Puja Rahayu A</a>
                <span className="block text-sky-800 font-medium text-muted">Web Designer</span>
              </div>
            </div>
            <div className="text-center pt-10">
              <div className="inline-block mb-4 relative shrink-0 rounded-[.95rem]">
                <Image 
                className="inline-block shrink-0 rounded-[.95rem] w-[130px] h-[150px] object-contain" 
                src="https://images.unsplash.com/photo-1698365039593-5180c517bb96?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="avarat image"
                width={150} // Specify the width property here
                height={150}
                />
              </div>
              <div className="text-center">
                <a href="javascript:void(0)" className="text-dark font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out">M Fadhli R</a>
                <span className="block text-sky-800 font-medium text-muted">Web Designer</span>
              </div>
            </div>
          </div>
        </Container>
      );
}
 
export default Aboutus;