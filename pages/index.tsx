import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>TLCAK</title>
      </Head>
      {/* main container wrapper */}
      <main>
        <section>
          <p className="text-4xl">heros</p>
        </section>
        {/* footer section */}
        <footer>
          {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
        </footer>
      </main>
    </div>
  );
}
