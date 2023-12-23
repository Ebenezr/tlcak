"use client"
import type { Metadata } from 'next';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import spectral from '@next/font/local';
import open_sans from '@next/font/local';
import Layout from '../components/Layout';
import '../styles/globals.css';

const Spectral = spectral({
  src: [
    {
      path: '../assets/Spectral/Spectral-Light.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../assets/Spectral/Spectral-Regular.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../assets/Spectral/Spectral-Medium.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/Spectral/Spectral-SemiBold.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/Spectral/Spectral-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-spectral',
});

const OpenSans = open_sans({
  src: [
    {
      path: '../assets/OpenSans/OpenSans-Light.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../assets/OpenSans/OpenSans-Regular.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../assets/OpenSans/OpenSans-Medium.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/OpenSans/OpenSans-SemiBold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/OpenSans/OpenSans-Bold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../assets/OpenSans/OpenSans-ExtraBold.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-sans',
});

// export const metadata: Metadata = {
//   title: 'TLCAK',
//   description: 'True Light Christian assembly Kenya',
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main
          className={`${OpenSans.variable}
    ${Spectral.variable} font-sans`}
        >
          <NextSeo
            title="True Light Christian assembly Kenya"
            description="True Light Christian Assembly Kenya, founded in 2016, aims to restore lives with God's Word and reach the world through missions and church planting."
            openGraph={{
              type: 'website',
              siteName: 'True Light Christian assembly Kenya',
              url: 'www.truelightchristianassemblykenya.co.ke',
              title: 'True Light Christian assembly Kenya',
              description:
                "True Light Christian Assembly Kenya, founded in 2016, aims to restore lives with God's Word and reach the world through missions and church planting.",
              images: [
                {
                  url: '/prev.png',
                  width: 1200,
                  height: 650,
                  alt: 'TLCAK',
                },
              ],
            }}
            robotsProps={{
              nosnippet: true,
              notranslate: true,
              noimageindex: true,
              noarchive: true,
              maxSnippet: -1,
              maxImagePreview: 'none',
              maxVideoPreview: -1,
            }}
          />
          <Head>
            <link rel="shortcut icon" href="/favicon.ico" />
            <meta charSet="utf-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <meta property="og:type" content="website" />
            <meta
              property="og:image"
              content="https://res.cloudinary.com/dbkeoqmg5/image/upload/v1678879245/ogimage_ttf5zp.jpg"
            />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content="TLCAK" />

            {/* <!-- Open Graph / Facebook --> */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://tlcak.vercel.app/" />
            <meta
              property="og:title"
              content="True Light Christian assembly Kenya"
            />
            <meta
              property="og:description"
              content="True Light Christian Assembly Kenya, founded in 2016, aims to restore lives with God's Word and reach the world through missions and church planting."
            />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta
              property="og:image"
              content="https://res.cloudinary.com/dbkeoqmg5/image/upload/v1678879245/ogimage_ttf5zp.jpg"
            ></meta>

            {/* <!-- Twitter --> */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://tlcak.vercel.app/" />
            <meta
              property="twitter:title"
              content="True Light Christian assembly Kenya"
            />
            <meta
              property="twitter:description"
              content="True Light Christian Assembly Kenya, founded in 2016, aims to restore lives with God's Word and reach the world through missions and church planting."
            />
            <meta property="twitter:image:width" content="1200" />
            <meta property="twitter:image:height" content="630" />
            <meta
              property="twitter:image"
              content="https://res.cloudinary.com/dbkeoqmg5/image/upload/v1678879245/ogimage_ttf5zp.jpg"
            />

            <title>True Light Christian assembly Kenya</title>
          </Head>
          <Layout>{children}</Layout>
        </main>
      </body>
    </html>
  );
}
