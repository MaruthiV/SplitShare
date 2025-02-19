import React from "react";

import Head from "next/head";
import Image from "next/image";

import smallLogoBlack from "public/dashboard/small-logo-white.svg";
import donutCircle from "public/dashboard/notifications-icons/donut-circle.svg";
import initialsIcon from "public/dashboard/initials-icon.svg";

export default function Home() {
  const sizeGroup = 5;
  const joinNotifications = [
    {
      id: 2,
      img: initialsIcon as string,
      name: "John Doe",
      planName: "Spotify Family Plan",
      date: "Aug 1, 2023",
    },
    {
      id: 1,
      img: initialsIcon as string,
      name: "Jane Doe",
      planName: "Spotify Family Plan",
      date: "July 31, 2023",
    },
  ];
  const defaultNotifications = [
    {
      message: "Join your first split by clicking the “Join a Split” Icon.",
      date: "July 27, 2023",
    },
    {
      message:
        "Create your first split by clicking on the “Create a Split” Icon.",
      date: "July 27, 2023",
    },
    {
      message: "Welcome to SplitShare! Learn how to get started.",
      date: "July 27, 2023",
    },
  ];

  return (
    <>
      <Head>
        <title>SplitShare | Notifications</title>
        <meta
          name="description"
          content="SplitShare is an innovative web-based platform that facilitates the easy and seamless splitting of subscription services among a group of users."
        />
      </Head>
      <main className="flex justify-between gap-20 px-32 pt-20">
        <div className="flex flex-col justify-between">
          <div>
            <ul className="flex flex-col items-start justify-center">
              <li className="font-inter text-6xl">Notifications</li>
            </ul>
          </div>
          <div className="">
            {joinNotifications.map((item, index) => (
              <ul className="flex items-center gap-10 pt-20 font-poppins" key={index}>
                <li>
                  <Image src={donutCircle as string} alt="" className="w-6" />
                </li>
                <ul className="flex items-center">
                  <li>
                    <ul className="flex h-16 w-[1250px] items-center gap-5 rounded bg-white px-5 shadow-2xl">
                      <li>
                        <Image src={item.img} alt="" className="w-12" />
                      </li>
                      <li>
                        {item.name} has just joined your &quot;{item.planName}&quot;
                        Split. {sizeGroup - item.id} to go!
                      </li>
                    </ul>
                  </li>
                  <li className="">
                    <div className="h-0.5 w-24 bg-slate-300" />
                  </li>
                  <li className="pl-5 font-bold">{item.date}</li>
                </ul>
              </ul>
            ))}
            {/*DEFAULT, don't change array*/}
            {defaultNotifications.map((item, key) => (
              <ul className="flex items-center gap-10 pt-20 font-poppins" key={key}>
                <li>
                  <Image src={donutCircle as string} alt="" className="w-6" />
                </li>
                <ul className="flex items-center">
                  <li>
                    <ul className="flex h-16 w-[1250px] items-center gap-5 rounded bg-white px-5 shadow-2xl">
                      <li>
                        <Image src={smallLogoBlack as string} alt="" className="w-12" />
                      </li>
                      <li>{item.message}</li>
                    </ul>
                  </li>
                  <li className="">
                    <div className="h-0.5 w-24 bg-slate-300" />
                  </li>
                  <li className="pl-5 font-bold">{item.date}</li>
                </ul>
              </ul>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

Home.requireAuth = true;