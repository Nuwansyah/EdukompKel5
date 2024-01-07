import { Navbarlp } from "./_component/Navbarlp";
import Footer from "./_component/footer/page";

const LandingPageL = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbarlp/>
      <div>{children}</div>
      <Footer/>
    </>
  );
};

export default LandingPageL;