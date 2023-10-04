import About from "../About";
import Contact from "../Contact";
import Events from "../Events";
import Footer from "../Footer";
import Gallery from "../Gallery";
import Latestnews from "../Latestnews";
import video from "./bgVideo.mp4";
import Header from "./Header";
import HomeCont from "./HomeCont";

function Home() {
  return (
    <div className="homePage" id="home">
      <div className="scrollUp" id="scrollUpBtn">
        <a href="#home" className="">
          <i class="fa-solid fa-chevron-up fa-2x"></i>
        </a>
      </div>
      <video src={video} autoPlay muted loop />
      <div className="flex flex-col align-center justify-start content">
        <Header />
        <HomeCont />
      </div>
      <About />
      <Events />
      <Gallery />
      <Contact />
      <Latestnews />
      <Footer />
    </div>
  );
}

export default Home;
