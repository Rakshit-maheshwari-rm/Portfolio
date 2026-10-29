import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import About from "./About";
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";

function Index() {
    return (
        <>
            <Navbar />
            <Home />
            <About />
            <Education />
            <Experience />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </>
    )
}

export default Index;