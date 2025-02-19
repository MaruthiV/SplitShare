/*
import Head from "next/head";
import Image from 'next/image';
import React, {useState} from 'react';

interface CardProps {
  logo: string;
  header: string;
  description: string;
  info: string;
}

const Card: React.FC<CardProps> = ({ logo, header, description, info }) => {
  return (
    <div className="bg-[#9CC5A1] m-4 rounded-lg shadow-md hover:scale-105 transition-all">
      <Image src={logo} alt="Logo" className="ml-5 mb-7 mt-4" width={34} height={34}/>

      <h2 className="text-lg font-bold text-gray-800 my-2 ml-5">{header}</h2>
      <p className="text-gray-600 mt-5 ml-5 mb-4">{description}</p>
      <hr></hr>
      <p className="text-gray-600 my-4 ml-5">{info}</p>
    </div>
  );
};



export default function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    // NEED TO MAKE Backend for form
  };

  return (
    <>
      <Head>
        <title>SplitShare | Contact</title>
        <meta name="description" content="SplitShare is an innovative web-based platform that facilitates the easy and seamless splitting of subscription services among a group of users."/>
      </Head>


      <section className="px-3 mt-20 bg-gradient-to-t from-[#d4edd7] via-teal-100 to-white">
        <div className="min-h-[75vh]">
          <p className="font-inter ml-[15%] mb-2 lg:text-[1.5vw] text-[4vw]">
            CONTACT
          </p>

          <div className="flex flex-row w-full mb-20">
            <div className="ml-[15%]"> 
                <p className="font-poppins lg:text-[4vw] text-[9vw] [line-height:1]">
                  Get in touch 
                </p>
                <p className="font-poppins lg:text-[4vw] text-[9vw] [line-height:1]">
                  with us today!
                </p>
              </div>

              <div className="ml-[15%] mt-[4vw] mr-3"> 
                <p className="font-inter lg:text-[2vw] text-[4.5vw] [line-height:1]">
                  We are here to help 
                </p>
                <p className="font-inter lg:text-[2vw] text-[4.5vw] [line-height:1]">
                  so you can <span className="italic text-[">split</span> better.
                </p>
            </div>
          </div>

          <div className="mx-auto py-8">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 lg:mx-40 mx-[3%]">
              <Card
                logo="/contact/envelope-line-icon.png"
                header="Email"
                description="Feel free to reach out to us!"
                info="Email"
              />
              <Card
                logo="/contact/phone-line-icon.png"
                header="Phone"
                description="Feel free to contact us about any issues."
                info="Phone Number"
              />
            </div>
          </div>
        </div>


        <p className="text-center lg:text-[3vw] text-4xl mb-5">
          Contact Our Team
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto font-poppins">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 text-lg font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#49A078] focus:border-[#9CC5A1]"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-lg font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#49A078] focus:border-[#9CC5A1]"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2 text-lg font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-[#49A078] focus:border-[#9CC5A1]"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 text-lg font-semibold text-white bg-[#49A078] rounded-md hover:bg-[#9CC5A1] focus:outline-none focus:bg-[#9CC5A1]"
        >
          Submit
        </button>
      </form>
      </section>
    </>
  );
}
*/

import React, { useState } from "react";

import Head from "next/head";

export default function Home() {
  const [type, setType] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [feedbackColor, setFeedbackColor] = useState("white");
  const [feedbackStrokeColor, setFeedbackStrokeColor] = useState("black");
  const [assistanceColor, setAssistanceColor] = useState("white");
  const [assistanceStrokeColor, setAssistanceStrokeColor] = useState("black");

  function selectFeedback() {
    setType("feedback");
    setFeedbackColor("orange");
    setFeedbackStrokeColor("orange");
    setAssistanceColor("white");
    setAssistanceStrokeColor("black");
  }

  function selectAssistance() {
    setType("assistance");
    setFeedbackColor("white");
    setFeedbackStrokeColor("black");
    setAssistanceColor("orange");
    setAssistanceStrokeColor("orange");
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Type:", type);
    console.log("Email:", email);
    console.log("Subject:", subject);
    console.log("Message:", message);
    // NEED TO MAKE Backend for form
  };

  return (
    <>
      <Head>
        <title>SplitShare | Contact Us</title>
        <meta
          name="description"
          content="SplitShare is an innovative web-based platform that facilitates the easy and seamless splitting of subscription services among a group of users."
        />
      </Head>
      <div className="absolute min-h-screen w-[100%] bg-[linear-gradient(0deg,_#FFFFFF_63%,#f7b801_63%)]"></div>
      <main className="relative mb-40 flex flex-col justify-center gap-10 px-[650px]">
        <ul className="flex flex-col items-center gap-5 pt-20">
          <li className="font-inter text-6xl font-semibold">Contact Us</li>
          <li className="w-[475px] text-center">
            We&apos;d love to hear from you. Whether you have a question about our
            service, pricing, or anything else, our team is ready to assist you.
          </li>
        </ul>
        <section className="rounded-md border-2 bg-white py-10">
          <form
            onSubmit={handleSubmit}
            className="mx-auto max-w-md font-poppins"
          >
            <ul className="mb-4 flex justify-between px-28">
              <li>
                <button
                  className="flex items-center justify-center gap-2"
                  onClick={selectFeedback}
                >
                  <p>Feedback</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                  >
                    <circle
                      cx="5.5"
                      cy="5.5"
                      r="5"
                      fill={feedbackColor}
                      stroke={feedbackStrokeColor}
                    />
                  </svg>
                </button>
              </li>
              <li>
                <button
                  className="flex items-center justify-center gap-2"
                  onClick={selectAssistance}
                >
                  <p>Assistance</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                  >
                    <circle
                      cx="5.5"
                      cy="5.5"
                      r="5"
                      fill={assistanceColor}
                      stroke={assistanceStrokeColor}
                    />
                  </svg>
                </button>
              </li>
            </ul>
            <div className="mb-4">
              <label htmlFor="email" className="mb-2 block font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-[#F7B801] focus:outline-none focus:ring-[#F7B801]"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="mb-2 block font-medium">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-[#F7B801] focus:outline-none focus:ring-[#F7B801]"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="mb-2 block font-medium">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="w-full resize-none rounded-md border border-gray-300 px-4 py-2 focus:border-[#F7B801] focus:outline-none focus:ring-[#F7B801]"
                required
              ></textarea>
            </div>
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
          </form>
        </section>
      </main>
    </>
  );
}
