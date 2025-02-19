import React from "react";

import Head from "next/head";

import { RadioGroup } from "@headlessui/react";

export default function Home() {
  const types = [
    {
      id: 1,
      name: "Subscription",
      desc: "Recurring payment at every set time interval",
    },
    {
      id: 2,
      name: "Purchase",
      desc: "One-time purchase that can be immediately paid off",
    },
  ];

  return (
    <>
      <Head>
        <title>SplitShare | Invite</title>
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
                Start saving and start splitting.
              </li>
              <li className="w-[80%] font-poppins text-xl font-light text-white">
                Easily decrease how much you pay by sharing it with the people
                you know
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
                  Choose your split type
                </li>
                <li className="font-poppins text-xl font-light text-slate-400">
                  Easily decrease how much you pay by sharing it with the people
                  you know
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
                    relative flex cursor-pointer gap-10 rounded-2xl px-10 py-10 shadow-md focus:outline-none`
                      }
                    >
                      {({ active, checked }) => (
                        <>
                          <div className="flex w-full items-center justify-between">
                            <div className="flex items-center">
                              <div className="flex items-center justify-center gap-10 text-sm">
                                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-yellow-400 text-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="96"
                                    height="96"
                                    viewBox="0 0 96 120"
                                    fill="none"
                                    className={
                                      plan.id === 1 ? "pt-5" : "hidden"
                                    }
                                  >
                                    <path
                                      d="M34.6595 44.3282C34.4682 44.1188 34.215 44.0022 33.9519 44.0022C33.6887 44.0022 33.4355 44.1188 33.2442 44.3282L28.2933 50.0691C28.2003 50.1767 28.1266 50.3045 28.0762 50.4452C28.0259 50.5858 28 50.7366 28 50.8889C28 51.0411 28.0259 51.1919 28.0762 51.3325C28.1266 51.4732 28.2003 51.601 28.2933 51.7086L40.3205 65.6582C40.5072 65.8758 40.7608 65.9987 41.0256 66C41.1576 66.0001 41.2883 65.97 41.4102 65.9113C41.5321 65.8527 41.6427 65.7666 41.7358 65.6582L46.6867 59.9173C46.7796 59.8097 46.8534 59.6819 46.9038 59.5413C46.9541 59.4006 46.98 59.2499 46.98 59.0976C46.98 58.9453 46.9541 58.7946 46.9038 58.6539C46.8534 58.5133 46.7796 58.3855 46.6867 58.2779L45.6115 57.0324L52.4527 58.0462H52.5827C54.4948 58.0421 56.3682 57.4224 57.9937 56.2561L58.0387 56.2271L72.5413 44.6411C73.0762 44.2398 73.4953 43.6625 73.7448 42.9833C73.9944 42.3041 74.0629 41.5539 73.9416 40.8292C73.8488 40.2863 73.6466 39.7765 73.3514 39.3414C73.0562 38.9063 72.6764 38.5581 72.2429 38.3254C71.8095 38.0927 71.3347 37.982 70.8572 38.0024C70.3798 38.0227 69.9133 38.1735 69.4958 38.4425L59.749 43.6562C59.733 43.2112 59.6465 42.7733 59.494 42.3644C59.2809 41.8822 58.9866 41.4544 58.6284 41.1061C58.2702 40.7579 57.8555 40.4963 57.4086 40.3368H57.3486C56.5654 40.1882 55.7707 40.1377 54.9782 40.1862C52.7071 40.2663 50.4372 39.9856 48.2319 39.352C40.7906 37.226 36.0897 43.0306 34.9445 44.6526L34.6595 44.3282ZM41.0256 63.202L30.4187 50.8917L33.9544 46.7845L44.5613 59.0947L41.0256 63.202ZM47.7518 41.5939C50.1192 42.2725 52.5556 42.5727 54.9932 42.486C55.6227 42.4528 56.2536 42.4838 56.8785 42.5787C57.2223 42.7127 57.5099 42.992 57.6836 43.3608C57.8283 43.8733 57.7924 44.4313 57.5836 44.9133C56.8385 45.5853 54.8381 46.9641 50.9724 46.9641C50.8411 46.9641 50.711 46.994 50.5897 47.0523C50.4683 47.1105 50.3581 47.1958 50.2652 47.3034C50.1723 47.411 50.0986 47.5387 50.0484 47.6793C49.9981 47.8199 49.9722 47.9705 49.9722 48.1227C49.9722 48.2748 49.9981 48.4255 50.0484 48.5661C50.0986 48.7066 50.1723 48.8343 50.2652 48.9419C50.3581 49.0495 50.4683 49.1349 50.5897 49.1931C50.711 49.2513 50.8411 49.2813 50.9724 49.2813C55.5433 49.2813 57.9737 47.5434 58.9739 46.6107L70.3609 40.5396H70.4109C70.5997 40.4091 70.8185 40.3491 71.0378 40.3678C71.257 40.3864 71.4659 40.4828 71.6362 40.6439C71.8152 40.8101 71.9418 41.0402 71.9962 41.2985C72.0379 41.5606 72.0127 41.8311 71.9239 42.0769C71.8351 42.3228 71.6865 42.5334 71.4961 42.683H71.4511L56.9485 54.2691C55.6589 55.1951 54.1749 55.694 52.6577 55.7116L43.316 54.3212L36.3648 46.3037C36.8599 45.539 40.9356 39.6532 47.7518 41.5939Z"
                                      fill="white"
                                    />
                                    <path
                                      d="M57.6835 18.2899C57.7777 18.3952 57.8895 18.4787 58.0125 18.5356C58.1356 18.5926 58.2675 18.6219 58.4007 18.6219C58.5338 18.6219 58.6657 18.5926 58.7888 18.5356C58.9118 18.4787 59.0236 18.3952 59.1178 18.2899C59.212 18.1847 59.2867 18.0597 59.3376 17.9222C59.3886 17.7847 59.4148 17.6373 59.4148 17.4885C59.4148 17.3397 59.3886 17.1923 59.3376 17.0548C59.2867 16.9173 59.212 16.7923 59.1178 16.6871C57.4601 14.8236 55.319 13.5914 52.9988 13.1654C50.6786 12.7394 48.2973 13.1413 46.1932 14.314C44.0891 15.4868 42.3692 17.3707 41.2779 19.6981C40.1865 22.0256 39.7792 24.6782 40.1139 27.2791C40.4485 29.8799 41.5081 32.2968 43.142 34.1863C44.7759 36.0759 46.9011 37.3419 49.2157 37.8046C51.5302 38.2674 53.9164 37.9032 56.0352 36.7639C58.154 35.6246 59.8976 33.7682 61.0184 31.4583L63 32.0246L61.3681 25.4999L57.126 30.3425L58.9759 30.8749C58.6081 31.5388 58.1746 32.1544 57.6835 32.71C56.4076 34.1354 54.7821 35.106 53.0125 35.4991C51.243 35.8922 49.4089 35.6901 47.7421 34.9184C46.0753 34.1467 44.6507 32.84 43.6484 31.1635C42.6462 29.4871 42.1112 27.5161 42.1112 25.4999C42.1112 23.4837 42.6462 21.5128 43.6484 19.8363C44.6507 18.1599 46.0753 16.8532 47.7421 16.0815C49.4089 15.3098 51.243 15.1077 53.0125 15.5008C54.7821 15.8939 56.4076 16.8645 57.6835 18.2899Z"
                                      fill="white"
                                    />
                                  </svg>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="40"
                                    height="40"
                                    viewBox="0 0 41 45"
                                    fill="none"
                                    className={plan.id === 2 ? "" : "hidden"}
                                  >
                                    <path
                                      d="M26.1134 30.668V33.3401H23.3806V45H40.3239V33.3401H37.5911V30.668C37.5911 27.5101 35.0405 24.9595 31.8826 24.9595C28.7247 24.9595 26.1134 27.5101 26.1134 30.668ZM38.3198 42.996H25.4453V35.4049H38.3198V42.996ZM35.587 30.668V33.3401H28.1781V30.668C28.1781 28.6032 29.8178 26.9636 31.8826 26.9636C33.8866 26.9636 35.587 28.664 35.587 30.668ZM6.25506 42.5101H20.2227V40.5061H6.25506C3.94737 40.5061 2.06478 38.9271 2.00405 37.0445L4.37247 10.3846H8.68421V14.1498H10.6883V10.3846H23.1984V14.1498H25.2024V10.3846H29.5142L30.4858 21.498L32.4899 21.3158L31.336 8.38057H25.2024V8.31985C25.2024 3.76519 21.498 0 16.8826 0C12.2672 0 8.56275 3.70446 8.56275 8.31985V8.38057H2.55061L0 36.9231V36.9838C0 40.0202 2.79352 42.5101 6.25506 42.5101ZM10.6883 8.31985C10.6883 4.85831 13.4818 2.06478 16.9433 2.06478C20.4049 2.06478 23.1984 4.85831 23.1984 8.31985V8.38057L10.6883 8.31985Z"
                                      fill="white"
                                    />
                                  </svg>
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
                                  <RadioGroup.Description
                                    as="span"
                                    className={`inline ${
                                      checked
                                        ? "text-gray-900"
                                        : "text-gray-500"
                                    }`}
                                  >
                                    <span>{plan.desc}</span>
                                  </RadioGroup.Description>
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