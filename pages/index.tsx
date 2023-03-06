import Gallery from "../components/Gallery";
import About from "./sections/_about";
import Community from "./sections/_community";
import Hero from "./sections/_hero";
import Ken from "./sections/_ken";
import Mission from "./sections/_mission";
import Service from "./sections/_service";

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
          <Gallery />
        </div>
      </main>
    </div>
  );
}
