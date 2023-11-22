import About from "./componants/About";
import { Departmint } from "./componants/Departmint";
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
        </Main>
      </>
    );
}
export default HomePaage;