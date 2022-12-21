import Head from "next/head";
import Image from "next/image";
import About from "./sections/_about";
import Community from "./sections/_community";
import Contact from "./sections/_contact";
import Hero from "./sections/_hero";
import Ken from "./sections/_ken";
import Mission from "./sections/_mission";
import Service from "./sections/_service";

export default function Home() {
  return (
    <div className="bg-bg">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>TLCAK</title>
      </Head>
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
          {/* contact info */}
          <Contact />
        </div>
      </main>
    </div>
  );
}
