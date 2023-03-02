import Layout from "../components/Layout";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import spectral from "@next/font/local";
import open_sans from "@next/font/local";
import Head from "next/head";
import { NextSeo } from "next-seo";
import preview from "../assets/images/men.png";

const Spectral = spectral({
  src: [
    {
      path: "../assets/Spectral/Spectral-Light.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../assets/Spectral/Spectral-Regular.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/Spectral/Spectral-Medium.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/Spectral/Spectral-SemiBold.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/Spectral/Spectral-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-spectral",
});

const OpenSans = open_sans({
  src: [
    {
      path: "../assets/OpenSans/OpenSans-Light.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../assets/OpenSans/OpenSans-Regular.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/OpenSans/OpenSans-Medium.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/OpenSans/OpenSans-SemiBold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/OpenSans/OpenSans-Bold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../assets/OpenSans/OpenSans-ExtraBold.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-sans",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${OpenSans.variable}
    ${Spectral.variable} font-sans`}
    >
      <NextSeo
        title="True Light Christian assembly Kenya"
        description="True Light Christian Assembly Kenya, founded in 2016, aims to restore lives with God's Word and reach the world through missions and church planting."
        openGraph={{
          type: "website",
          siteName: "True Light Christian assembly Kenya",
          url: "www.truelightchristianassemblykenya.co.ke",
          title: "True Light Christian assembly Kenya",
          description:
            "True Light Christian Assembly Kenya, founded in 2016, aims to restore lives with God's Word and reach the world through missions and church planting.",
          images: [
            {
              url: "/prev.png",
              width: 850,
              height: 650,
              alt: "TLCAK",
            },
          ],
        }}
        robotsProps={{
          nosnippet: true,
          notranslate: true,
          noimageindex: true,
          noarchive: true,
          maxSnippet: -1,
          maxImagePreview: "none",
          maxVideoPreview: -1,
        }}
      />
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={"../assets/images/prev.png"} />
        <title>True Light Christian assembly Kenya</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
