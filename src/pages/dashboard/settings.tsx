import React, { useState } from "react";

import Head from "next/head";

import { Switch } from "@headlessui/react";

export default function Home() {
  const [darkEnabled, setDarkEnabled] = useState(false);
  const [DRMEnabled, setDRMEnabled] = useState(false);
  const [explicitEnabled, setExplicitEnabled] = useState(false);

  return (
    <>
      <Head>
        <title>SplitShare | Settings</title>
        <meta
          name="description"
          content="SplitShare is an innovative web-based platform that facilitates the easy and seamless splitting of subscription services among a group of users."
        />
      </Head>
      <main className="min-w-screen flex min-h-screen justify-center px-32 pt-20">
        <div className="flex h-max w-screen flex-col gap-10">
          <div className="">
            <ul className="flex flex-col items-start justify-center">
              <li className="font-inter text-6xl">Settings</li>
              <li className="text-light pl-1 font-inter">
                Pick your preferences
              </li>
            </ul>
          </div>
          <div>
            <div className="flex flex-col items-center gap-10">
              <ul className="flex w-[500px] flex-col gap-3 rounded px-10 py-5 shadow-2xl">
                <li className="text-2xl">Lighting Mode</li>
                <ul className="flex items-center justify-between gap-20 px-5">
                  <li className="w-54">Toggle between light/dark mode</li>
                  <li>
                    <Switch
                      checked={darkEnabled}
                      onChange={setDarkEnabled}
                      className={`${
                        darkEnabled ? "bg-[#F7B801]" : "bg-[#D3D3D3]"
                      }
            relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                    >
                      <span className="sr-only">Use setting</span>
                      <span
                        aria-hidden="true"
                        className={`${
                          darkEnabled ? "translate-x-9" : "translate-x-0"
                        }
                pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                      />
                    </Switch>
                  </li>
                </ul>
              </ul>
              <ul className="flex w-[500px] flex-col gap-3 rounded px-10 py-5 shadow-2xl">
                <li className="text-2xl">DRM Services</li>
                <ul className="flex items-center justify-between gap-20 px-5">
                  <li className="w-54">
                    Choose to exclude services that use DRM in your search list
                  </li>
                  <li>
                    <Switch
                      checked={DRMEnabled}
                      onChange={setDRMEnabled}
                      className={`${
                        DRMEnabled ? "bg-[#F7B801]" : "bg-[#D3D3D3]"
                      }
            relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                    >
                      <span className="sr-only">Use setting</span>
                      <span
                        aria-hidden="true"
                        className={`${
                          DRMEnabled ? "translate-x-9" : "translate-x-0"
                        }
                pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                      />
                    </Switch>
                  </li>
                </ul>
              </ul>
              <ul className="flex w-[500px] flex-col gap-3 rounded px-10 py-5 shadow-2xl">
                <li className="text-2xl">Explicit Content</li>
                <ul className="flex items-center justify-between gap-20 px-5">
                  <li className="w-54">
                    Choose to exclude services that are explicit in your search
                    list
                  </li>
                  <li>
                    <Switch
                      checked={explicitEnabled}
                      onChange={setExplicitEnabled}
                      className={`${
                        explicitEnabled ? "bg-[#F7B801]" : "bg-[#D3D3D3]"
                      }
            relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                    >
                      <span className="sr-only">Use setting</span>
                      <span
                        aria-hidden="true"
                        className={`${
                          explicitEnabled ? "translate-x-9" : "translate-x-0"
                        }
                pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                      />
                    </Switch>
                  </li>
                </ul>
              </ul>
              <ul className="flex w-[500px] flex-col gap-3 rounded px-10 py-5 shadow-2xl">
                <li className="text-2xl">Parental Controls</li>
              </ul>
              <ul className="flex w-[500px] flex-col gap-3 rounded px-10 py-5 shadow-2xl">
                <li className="text-2xl">Payment</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

Home.requireAuth = true;