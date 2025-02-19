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
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
      </Head>
      <div className="absolute min-h-screen w-[95%] bg-[linear-gradient(0deg,_#FFFFFF_63%,#f7b801_63%)]"></div>
      <main className="relative flex select-none flex-col items-center justify-center gap-12 pt-14">
        <ul className="flex flex-col items-center gap-5 pt-10">
          <li className="font-poppins text-5xl font-semibold md:text-8xl">
            Contact Us
          </li>
          <li className="text-md flex w-96 items-center justify-center font-poppins font-normal">
            We&apos;d love to hear from you. Whether you have a question about
            our service, pricing, or anything else, our team is ready to assist
            you.
          </li>
        </ul>
        <section className="rounded-md border-2 bg-white px-4 py-10">
          <form
            onSubmit={handleSubmit}
            className="mx-auto max-w-md font-poppins"
          >
            <ul className="mb-4 flex justify-between gap-5 px-28">
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

Home.requireAuth = true;
