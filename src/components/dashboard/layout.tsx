import type { ReactNode } from "react";
import Navbar from "./navbar";
import Head from "next/head";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <div className="min-w-screen flex min-h-screen">
        <div className="min-h-screen w-[5%]">
          <Navbar />
        </div>
        <div className="min-h-screen w-[95%]">
          <main className="min-w-screen min-h-screen">{children}</main>
        </div>
      </div>
    </>
  );
}
