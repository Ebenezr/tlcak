import About from "./sections/_about";
import Community from "./sections/_community";
import Hero from "./sections/_hero";
import Ken from "./sections/_ken";
import LightBox from "./sections/_lightbox";
import Mission from "./sections/_mission";
import Service from "./sections/_service";
import Slider from "./sections/_slider";

export default function Home() {
  return (
    <div className="bg-bg">
      {/* main container wrapper */}
      <main className="flex flex-col ">
        {/* home page */}
        <Hero />
        {/* about church */}
        <div className=" ">
          <About />
          {/* mission statement */}
          <Mission />
          {/* about ken */}
          <Ken />
          {/* service order */}
          <Service />
          {/* our community */}
          <Community />
          {/* slider */}
          <Slider />
          <LightBox />
        </div>
      </main>
    </div>
  );
}
