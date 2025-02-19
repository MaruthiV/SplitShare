import React, { useState } from "react";

import Head from "next/head";
import Image from "next/image";

import { RadioGroup } from "@headlessui/react";

import spotifyIcon from "public/dashboard/services-icons/spotify-icon.svg";
import appleMusicIcon from "public/dashboard/services-icons/applemusic-icon.svg";
import netflixIcon from "public/dashboard/services-icons/netflix-icon.svg";

export default function Home() {
  const [search, setSearch] = useState("");

  const types = [
    {
      id: 1,
      img: spotifyIcon as string,
      name: "Spotify",
    },
    {
      id: 2,
      img: appleMusicIcon as string,
      name: "Apple Music",
    },
    {
      id: 3,
      img: netflixIcon as string,
      name: "Netflix",
    },
  ];

  return (
    <>
      <Head>
        <title>SplitShare | Search</title>
        <meta
          name="description"
          content="SplitShare is an innovative web-based platform that facilitates the easy and seamless splitting of subscription services among a group of users."
        />
      </Head>
      <div className="absolute min-h-screen w-[100%] bg-[linear-gradient(270deg,_#FFFFFF_63%,#f7b801_63%)]"></div>
      <main className="min-w-screen relative flex min-h-screen gap-40 px-32 pt-20">
        <div className="flex items-center justify-between">
          <ul className="flex w-[80%] flex-col gap-20">
            <ul className="flex flex-col gap-10">
              <li className="font-poppins text-5xl text-white">
                Select the subscription to share.
              </li>
              <li className="w-[80%] font-poppins text-xl font-light text-white">
                Select what type of subscription you will be splitting with
                others
              </li>
            </ul>
            <ul className="flex gap-2">
              <div className="h-1 w-8 rounded bg-white"></div>
              <div className="h-1 w-8 rounded bg-white"></div>
              <div className="h-1 w-8 rounded bg-white"></div>
            </ul>
          </ul>
        </div>

        <div className="mr-40 flex items-center justify-between">
          <ul className="flex flex-col gap-10">
            <li>
              <ul>
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FDF1CC] shadow-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 63 64"
                    fill="none"
                  >
                    <rect
                      width="51.8681"
                      height="33.8556"
                      transform="matrix(0.861625 -0.507546 0.492492 0.870317 0.682129 30.281)"
                      fill="#F7B801"
                    />
                    <rect
                      x="24.0801"
                      y="1.90503"
                      width="14.3197"
                      height="60.2415"
                      fill="#FDF1CC"
                    />
                    <rect
                      x="29.1802"
                      y="0.30426"
                      width="4.31553"
                      height="63.4437"
                      fill="#F7B801"
                    />
                  </svg>
                </div>
              </ul>
            </li>
            <li>
              <ul className="flex flex-col gap-5">
                <li className="font-poppins text-5xl font-bold">
                  Search for your next subscription
                </li>
                <li className="flex w-full items-center justify-center font-poppins text-xl font-light">
                  <form className="w-[80%]">
                    <label className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Search
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <svg
                          className="h-4 w-4 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 20"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                          />
                        </svg>
                      </div>
                      <input
                        type="search"
                        id="default-search"
                        className="block w-full rounded-lg border border-gray-300 p-4 pl-10 text-sm text-gray-900 focus:border-yellow-400 focus:outline-none focus:ring-yellow-400"
                        placeholder="Search Music, Streaming, TV..."
                        required
                      ></input>
                    </div>
                  </form>
                </li>
              </ul>
            </li>
            <li>
              <RadioGroup>
                <RadioGroup.Label className="sr-only">
                  Server size
                </RadioGroup.Label>
                <div className="space-y-2">
                  {types.map((plan) => (
                    <RadioGroup.Option
                      key={plan.name}
                      value={plan}
                      className={({ active, checked }) =>
                        `${
                          active
                            ? "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-[#F7B801]"
                            : ""
                        }
                  ${active ? "bg-[#FDF1CC] bg-opacity-75" : "bg-white"}
                    relative flex cursor-pointer gap-10 rounded-2xl px-5 py-5 shadow-md focus:outline-none`
                      }
                    >
                      {({ active, checked }) => (
                        <>
                          <div className="flex w-full items-center justify-between">
                            <div className="flex items-center">
                              <div className="flex items-center justify-center gap-10 text-sm">
                                <div className="bg-white-400 flex h-16 w-16 items-center justify-center rounded-xl text-center">
                                  <Image
                                    className="w-14"
                                    src={plan.img}
                                    alt="${split}_SVG_"
                                  />
                                </div>
                                <div>
                                  <RadioGroup.Label
                                    as="p"
                                    className={`font-medium  ${
                                      checked
                                        ? "text-gray-900"
                                        : "text-gray-900"
                                    }`}
                                  >
                                    {plan.name}
                                  </RadioGroup.Label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup>
            </li>
            <li className="flex h-12 w-[30%] items-center justify-center rounded-xl bg-yellow-500 font-poppins text-white">
              Next Step
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}

Home.requireAuth = true;
