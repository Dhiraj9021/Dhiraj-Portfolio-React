import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomeSection from "./sections/HomeSection";
import Services from "./sections/Services";
import Resume from "./sections/Resume";
import Projects from "./sections/projects";
import Contact from "./sections/Contact";
import Education from "./sections/Education";
import Competitive from "./sections/Competetive";   
import StatsSection from "./sections/StatsSection";

function App() {
  return (
    <>
      <Navbar />
      <HomeSection />
      <Services />
      <Competitive />
      <Resume />
      <Projects />
      <Education />
      <Contact />
       <StatsSection />
      <Footer />
      

    </>
  );
}

export default App;