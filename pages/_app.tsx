import Layout from "../components/Layout";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import spectral from "@next/font/local";
import open_sans from "@next/font/local";
import Head from "next/head";
import { NextSeo } from "next-seo";

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
          title: "True Light Christian assembly Kenya",
          description:
            "True Light Christian Assembly Kenya, founded in 2016, aims to restore lives with God's Word and reach the world through missions and church planting.",
          images: [
            {
              url: "/2.png",
              width: 800,
              height: 600,
              alt: "Rev.Lukiri Kennedy ",
            },
          ],
        }}
      />
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>TLCAK</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
