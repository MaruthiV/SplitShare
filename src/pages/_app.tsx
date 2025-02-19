import Layout from "../components/layout";
import DashboardLayout from "../components/dashboard/layout";
import { AuthGuard } from "../components/AuthGuard";
import { AppProps } from "next/app";
import { NextPage } from "next";
import firebase from "../utils/firebase_init";
import "npm/styles/globals.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export type NextApplicationPage<P = any, IP = P> = NextPage<P, IP> & {
  requireAuth?: boolean;
};

const excludedRoutes = [
  "/dashboard/home",
  "/dashboard/invite",
  "/dashboard/notifications",
  "/dashboard/search",
  "/dashboard/settings",
  "/dashboard/help",
  "/dashboard/subscription",
]; // Pages where we don't want default nav and footer


function MyApp({
  Component,
  pageProps,
}: { Component: NextApplicationPage; pageProps: AppProps }) {

  const router = useRouter();
  const stopLayout = excludedRoutes.includes(router.route);
  const [login, setLogin] = useState(false);

  useEffect(() => {
    // Listen for Firebase authentication state changes and do redirects
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setLogin(true);
        void router.push("/dashboard/home");
      } else {
        setLogin(false);
        void router.push("/");
      }
    });
  }, [login]);

  return (
    <>
      {Component.requireAuth ? (
        <AuthGuard>
          {stopLayout ? (
            <DashboardLayout>
              <Component {...pageProps} />
            </DashboardLayout>
          ) : (
            <Layout>
              <Component {...pageProps} />
            </Layout>
          )}
        </AuthGuard>
      ) : stopLayout ? (
        <DashboardLayout>
          <Component {...pageProps} />
        </DashboardLayout>
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  );
}


// function MyApp({ Component, pageProps }: AppProps) {
//   const router = useRouter();

//   useEffect(() => {
//     const changeRoute = async () => {
//       await router.push("/comingsoon");
//     };
//     changeRoute().catch((err) => {
//       console.log(err);
//     });
//   }, []);

//   return <Component {...pageProps} />;
// }

export default MyApp;
