import Layout from "../components/Layout";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "@next/font/google";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
