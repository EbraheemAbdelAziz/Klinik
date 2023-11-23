import About from "./componants/About";
import { Departmint } from "./componants/Departmint";
import { Doctors } from "./componants/Doctors";
import { Gallery } from "./componants/Gallery";
import HeroSection from "./componants/HeroSection";
import Main from "./componants/Main";

const HomePaage = () =>{
  return (
    <>
      <Main>
        <HeroSection />
        <About />
        <Departmint />
        <Gallery />
        <Doctors />
      </Main>
    </>
  );
}
export default HomePaage;