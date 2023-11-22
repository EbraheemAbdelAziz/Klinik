import About from "./componants/About";
import HeroSection from "./componants/HeroSection";
import Main from "./componants/Main";
import NavBar from "./componants/NavBar";

const HomePaage = () =>{
    return (
      <>
        <Main>
          <HeroSection />
          <About />
        </Main>
      </>
    );
}
export default HomePaage;