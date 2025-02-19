import React from "react";

import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";

import { Pie, Legend, Cell } from "recharts";
// Disabling SSR for pie chart for no hydration error
const PieChart = dynamic(
  () => import("recharts").then((recharts) => recharts.PieChart),
  { ssr: false }
);

import Calendar from "../../components/dashboard/calendar";

// Top split info icon
import arrowIcon from "public/dashboard/arrow-icon.svg";

// Search icon
import magnifyingGlassIcon from "public/dashboard/edit.png";

// Company icons
import spotifyIcon from "public/dashboard/services-icons/spotify-icon.svg";
import chatGPTIcon from "public/dashboard/services-icons/chatgpt-icon.svg";
import netflixIcon from "public/dashboard/services-icons/netflix-icon.svg";
import appleMusicIcon from "public/dashboard/services-icons/applemusic-icon.svg";

export default function Home() {
  // Personal user stats
  const activeSplits = { num: 0, additional: 0 };
  const totalSavings = { num: 0, additional: 0 };
  const members = { num: 0, additional: 0 };
  const nextPayment = { month: 1, day: 1, img: spotifyIcon as string };
  const paymentHistory = [
    {
      id: 1,
      img: spotifyIcon as string,
      date: "1 January 12:00 am",
      company: "Spotify",
      cost: "0.00",
    },
    {
      id: 2,
      img: chatGPTIcon as string,
      date: "1 January 12:00 am",
      company: "ChatGPT",
      cost: "0.00",
    },
    {
      id: 3,
      img: appleMusicIcon as string,
      date: "1 January 12:00 am",
      company: "Apple Music",
      cost: "0.00",
    },
    {
      id: 4,
      img: spotifyIcon as string,
      date: "1 January 12:00 am",
      company: "Spotify",
      cost: "0.00",
    },
  ];

  // Subcription breakdown
  const data = [
    { name: "Spotify", value: 250, fill: "#234FEA" },
    {
      name: "Apple Music",
      value: 420,
      fill: "#A2DCF7",
    },
    { name: "ChatGPT", value: 330, fill: "#138BC2" },
  ];

  // Colors for pie chart
  const COLORS = ["#234FEA", "#A2DCF7", "#138BC2"];

  // Popular data stats
  const topSplits = [
    {
      id: 1,
      img: spotifyIcon as string,
      company: "Spotify",
      industry: "Music Entertainment",
    },
    {
      id: 2,
      img: netflixIcon as string,
      company: "Netflix",
      industry: "Video Entertainment",
    },
    {
      id: 3,
      img: chatGPTIcon as string,
      company: "ChatGPT",
      industry: "Utilities",
    },
    {
      id: 4,
      img: appleMusicIcon as string,
      company: "Apple Music",
      industry: "Music Entertainment",
    },
  ];

  // Coloring legend text
  const renderColorfulLegendText = (
    value: string,
    entry: any,
    index: number
  ) => {
    return <span className="text-color-class">{value}</span>;
  };

  // Positions of percentages
  const RADIAN = Math.PI / 180;
  interface renderCustomLabelProps {
    cx: number;
    cy: number;
    midAngle: number;
    innerRadius: number;
    outerRadius: number;
    percent: number;
    index: number;
  }

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }: renderCustomLabelProps) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
      <svg>
        <rect
          x={x - 10}
          y={y - 20}
          width="59"
          height="40"
          fill="#F3F3F3"
          rx="20"
        />
        <text
          x={x}
          y={y}
          fill={COLORS[index]}
          fontSize="20"
          textAnchor="start"
          //textAnchor={x > cx ? "start" : "end"}
          dominantBaseline="central"
        >
          {`${(percent * 100).toFixed(0)}%`}
        </text>
      </svg>
    );
  };

  return (
    <>
      <Head>
        <title>SplitShare | Dashboard</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
      </Head>
      <main className="flex h-[100%] w-[100%] justify-around px-32 pt-20">
        {/*the stack*/}
        <div className="flex h-[100%] w-[100%] flex-col justify-between gap-20 min-[1025px]:w-[80%]">
          <ul className="flex flex-col items-start justify-center">
            <li className="font-inter text-6xl">Dashboard</li>
            <li className="text-light pl-1 font-inter">
              Manage your subscriptions
            </li>
          </ul>
          <div className="flex gap-5">
            <ul className="flex h-48 w-48 flex-shrink-0 flex-col justify-between gap-1 rounded-xl from-[#C5D4F9] to-[#EFCEFC] p-5 font-poppins bg-gradient-[135deg] min-[1025px]:h-64 min-[1025px]:w-64 min-[1025px]:gap-5">
              <ul className="justify-left flex">
                <li className="font-semibold">Active Splits</li>
              </ul>
              <li className="text-center text-7xl font-medium">
                {activeSplits.num}
              </li>
              <li className="text-center font-light">
                +{activeSplits.additional} this month
              </li>
            </ul>
            <ul className="flex h-48 w-48 flex-shrink-0 flex-col justify-between gap-1 rounded-xl from-[#A2DCF7] to-[#C8EFEE] p-5 font-poppins bg-gradient-[135deg] min-[1025px]:h-64 min-[1025px]:w-64 min-[1025px]:gap-5">
              <ul className="justify-left flex">
                <li className="font-semibold">Total Savings</li>
              </ul>
              <li className="text-center text-7xl font-medium">
                ${totalSavings.num}
              </li>
              <li className="text-center font-light">
                +${totalSavings.additional} this month
              </li>
            </ul>
            <ul className="flex h-48 w-48 flex-shrink-0 flex-col justify-between gap-1 rounded-xl from-[#A2F7AA] to-[#F7FF99] p-5 font-poppins bg-gradient-[135deg] min-[1025px]:h-64 min-[1025px]:w-64 min-[1025px]:gap-5">
              <li className="font-semibold">Join Split</li>
              <li className="flex items-center justify-center">
                <Image
                  src={magnifyingGlassIcon}
                  alt="Search Icon"
                  className="w-28"
                />
              </li>
              <li className="text-center font-light">
                +{members.additional} this month
              </li>
            </ul>
            <ul className="flex h-48 w-48 flex-shrink-0 flex-col justify-between gap-4 rounded-xl from-[#F7A2A2] to-[#F7FF99] p-5 font-poppins bg-gradient-[135deg] min-[1025px]:h-64 min-[1025px]:w-64 min-[1025px]:gap-5">
              <li className="font-semibold">Next Payment</li>
              <li className="text-center text-7xl font-medium">
                {nextPayment.month}/{nextPayment.day}
              </li>
              <li className="flex items-center justify-center">
                <Image
                  className="w-10"
                  src={nextPayment.img}
                  alt="${nextPayment}_SVG_"
                />
              </li>
            </ul>
          </div>

          <ul className="flex gap-5">
            {/*pie chart*/}
            <ul className="flex h-80 w-[532px] flex-col justify-between rounded-xl from-[#FDFDFD] to-[#E0E0E0] p-5 font-poppins font-semibold bg-gradient-[135deg]">
              <li>
                <p className="">Subcription Breakdown</p>
              </li>
              <PieChart width={450} height={250} className="">
                <Legend
                  height={36}
                  iconType="circle"
                  layout="vertical"
                  verticalAlign="middle"
                  align="right"
                  iconSize={15}
                  formatter={renderColorfulLegendText}
                  wrapperStyle={{ top: 80 }}
                />
                <Pie
                  data={data}
                  cx={120}
                  labelLine={false}
                  label={renderCustomizedLabel}
                  innerRadius={45}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                      style={{
                        outline: "none",
                        filter: `drop-shadow(0px 0px 10px black)`,
                        // ${
                        //   COLORS[index % COLORS.length]
                        // }
                      }}
                      stroke="0"
                    />
                  ))}
                </Pie>
              </PieChart>
            </ul>
            {/*calendar*/}
            <li className="flex h-80 w-80 flex-shrink-0 flex-col justify-between rounded-xl from-[#FDA554] to-[#D4FCCE] p-5 font-poppins font-semibold bg-gradient-[135deg] min-[1025px]:w-[532px]">
              Calendar
              <Calendar />
            </li>
          </ul>

          <ul className="visible flex gap-5 min-[1813px]:invisible">
            <div className="flex h-[410px] w-96 flex-col justify-between rounded-xl from-[#F7A2D5] to-[#FF9999] p-5 font-poppins bg-gradient-[135deg]">
              <p className="font-semibold">Top Splits</p>
              <ul className="flex flex-col gap-10 px-5">
                {topSplits.map((split) => (
                  <ul key={split.id} className="flex justify-between">
                    <li className="">
                      <Image
                        className="w-12"
                        src={split.img}
                        alt="${split}_SVG_"
                      />
                    </li>
                    <ul className="w-36">
                      <li className="font-medium">{split.company}</li>
                      <li className="text-sm font-light">{split.industry}</li>
                    </ul>
                    <li>
                      <Image
                        className="w-4"
                        src={arrowIcon as string}
                        alt="CARROT_SVG_"
                      />
                    </li>
                  </ul>
                ))}
              </ul>
            </div>
            <div className="flex h-80 w-96 flex-col justify-between rounded-xl from-[#6066FF] to-[#FF99E9] p-5 font-poppins bg-gradient-[135deg]">
              <p className="font-semibold">Payment History</p>
              <ul className="flex flex-col gap-5 px-5">
                {paymentHistory.map((payment) => (
                  <ul key={payment.id} className="flex justify-between">
                    <li>
                      <Image
                        className="w-12"
                        src={payment.img}
                        alt="${split}_SVG_"
                      />
                    </li>
                    <ul className="w-36">
                      <li className="text-sm font-light">{payment.date}</li>
                      <li className="font-medium">{payment.company}</li>
                    </ul>
                    <li className="font-medium">-${payment.cost}</li>
                  </ul>
                ))}
              </ul>
            </div>
          </ul>
        </div>

        {/*top splits and payment history*/}
        <div className="collapse flex h-[100%] w-[20%] flex-col items-end gap-20 min-[1813px]:visible">
          <div className="flex h-[410px] w-96 flex-col justify-between rounded-xl from-[#F7A2D5] to-[#FF9999] p-5 font-poppins bg-gradient-[135deg]">
            <p className="font-semibold">Top Splits</p>
            <ul className="flex flex-col gap-10 px-5">
              {topSplits.map((split) => (
                <ul key={split.id} className="flex justify-between">
                  <li className="">
                    <Image
                      className="w-12"
                      src={split.img}
                      alt="${split}_SVG_"
                    />
                  </li>
                  <ul className="w-36">
                    <li className="font-medium">{split.company}</li>
                    <li className="text-sm font-light">{split.industry}</li>
                  </ul>
                  <li>
                    <Image
                      className="w-4"
                      src={arrowIcon as string}
                      alt="CARROT_SVG_"
                    />
                  </li>
                </ul>
              ))}
            </ul>
          </div>
          <div className="flex h-80 w-96 flex-col justify-between rounded-xl from-[#6066FF] to-[#FF99E9] p-5 font-poppins bg-gradient-[135deg]">
            <p className="font-semibold">Payment History</p>
            <ul className="flex flex-col gap-5 px-5">
              {paymentHistory.map((payment) => (
                <ul key={payment.id} className="flex justify-between">
                  <li>
                    <Image
                      className="w-12"
                      src={payment.img}
                      alt="${split}_SVG_"
                    />
                  </li>
                  <ul className="w-36">
                    <li className="text-sm font-light">{payment.date}</li>
                    <li className="font-medium">{payment.company}</li>
                  </ul>
                  <li className="font-medium">-${payment.cost}</li>
                </ul>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}

Home.requireAuth = true;
