'use client';
import Gallery from '../components/Gallery';
import About from './(articles)/about';
import Community from './(articles)/community';
import Hero from './(articles)/home';
import Ken from './(articles)/ken';
import Mission from './(articles)/mission';
import Service from './(articles)/service';

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
