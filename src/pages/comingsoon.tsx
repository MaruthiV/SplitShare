import React, { useState } from "react";
import Head from "next/head";
import { db } from "../utils/firebase_init";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmit] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    db.collection("preregistration")
      .add({
        email: email,
      })
      .then(() => {
        setSubmit(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Head>
        <title>SplitShare | Coming Soon</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
      </Head>
      <div className="absolute h-full w-full bg-[linear-gradient(180deg,_#FFFFFF_90%,#f7b801_90%)]"></div>
      <div className="absolute h-[90%] w-full heropattern-topography-slate-300"></div>
      <main className="relative flex select-none flex-col items-center justify-center gap-12 sm:pt-20 lg:pt-40">
        <ul className="flex flex-col items-center gap-5 pt-20">
          <li className="font-poppins text-5xl font-semibold md:text-8xl">
            SplitShare
          </li>
          <li className="flex w-80 items-center justify-center font-poppins text-2xl font-semibold md:text-4xl">
            Coming Soon
          </li>
        </ul>
        <section className="w-80 rounded-md border-2 border-black bg-white px-4 py-10 md:w-96">
          <form onSubmit={handleSubmit} className="">
            <div className="mb-4">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Join Our Mailing List"
                className="w-full rounded-md border-2 border-slate-200 px-4 py-2 text-sm placeholder-slate-500 heropattern-topography-slate-300 focus:border-[#F7B801] focus:outline-none focus:ring-[#F7B801]"
                required
              />
            </div>

            {submitted ? (
              <button
                disabled
                type="submit"
                className="group flex w-full items-center justify-center rounded-lg bg-[#98760e]
          px-4 py-4 text-xl font-thin text-white focus:outline-none "
              >
                Thanks for Preregistering!
              </button>
            ) : (
              <button
                type="submit"
                className="group flex w-full items-center justify-center rounded-lg bg-[#F7B801] px-4 py-2 hover:bg-[#f5cf5f] focus:bg-[#f5cf5f] focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 63 64"
                  fill="none"
                >
                  <rect
                    width="51.8681"
                    height="33.8556"
                    transform="matrix(0.861625 -0.507546 0.492492 0.870317 0.682129 30.2808)"
                    fill="white"
                  />
                  <rect
                    x="24.0801"
                    y="1.90479"
                    width="14.3197"
                    height="60.2415"
                    className="fill-[#F7B801] group-hover:fill-[#f5cf5f] group-focus:fill-[#f5cf5f]"
                  />
                  <rect
                    x="29.1802"
                    y="0.304199"
                    width="4.31553"
                    height="63.4437"
                    fill="white"
                  />
                </svg>
              </button>
            )}
          </form>
        </section>
      </main>
    </>
  );
}
