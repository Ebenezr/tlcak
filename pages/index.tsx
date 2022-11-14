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
    <div>
      <Head>
        <title>TLCAK</title>
      </Head>
      {/* main container wrapper */}
      <main className="px-4 flex flex-col gap-5">
        {/* home page */}
        <Hero />
        {/* about church */}
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
      </main>
    </div>
  );
}
