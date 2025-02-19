import React, { type FC, Fragment, useEffect, useRef, useState } from "react";

import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import { Dialog, Transition } from "@headlessui/react";

import spotifyIcon from "public/dashboard/services-icons/spotify-icon.svg";

// Popup close button
import otpExitIcon from "public/dashboard/otp-exit-icon.svg";

export default function Home() {
  // Routing functionality
  const { pathname } = useRouter();

  // Dashboard Page Variables and Functions
  const dashboardColor = pathname === "/dashboard/home" ? "orange" : "white";

  // Popup Variables and Functions
  const [OTPColor, setOTPColor] = useState("white");
  const [isOTPOpen, setIsOTPOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  function closeOTPModal() {
    setIsOTPOpen(false);
    setOTPColor("white");
  }
  function openOTPModal() {
    setIsOTPOpen(true);
    setOTPColor("orange");
  }
  function closeConfirmModal() {
    setIsConfirmOpen(false);
  }
  function switchModal() {
    setIsOTPOpen(false);
    setIsConfirmOpen(true);
  }
  // Example Confirmation Information
  const splitGroup = {
    partyLeader: "Lorem Ipsum",
    img: spotifyIcon as string,
    serviceName: "Spotify",
    subscription: "Premium Duo",
    cost: 14.99,
  };
  // OTP Popup Number Input
  // interface Props {}

  let currentOTPIndex = 0;
  const OTPField: FC<{ id: number }> = ({ id }): JSX.Element => {
    const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
    const [activeOTPIndex, setActiveOTPIndex] = useState<number>(0);

    const inputRef = useRef<HTMLInputElement>(null);
    const handleOnChange = ({
      target,
    }: React.ChangeEvent<HTMLInputElement>): void => {
      const { value } = target;
      const newOTP: string[] = [...otp];
      newOTP[currentOTPIndex] = value.substring(value.length - 1);

      if (!value) setActiveOTPIndex(currentOTPIndex - 1);
      else setActiveOTPIndex(currentOTPIndex + 1);

      setOtp(newOTP);
    };

    const handleOnKeyDown = (
      { key }: React.KeyboardEvent<HTMLInputElement>,
      index: number
    ) => {
      currentOTPIndex = index;
      if (key === "Backspace") setActiveOTPIndex(currentOTPIndex - 1);
    };
    useEffect(() => {
      inputRef.current?.focus();
    }, [activeOTPIndex]);

    return (
      <div className="flex items-center justify-center space-x-3" key={id}>
        {otp.map((_, index) => {
          return (
            <React.Fragment key={index}>
              <input
                ref={index === activeOTPIndex ? inputRef : null}
                type="number"
                className="h-14 w-14 rounded border-2 border-gray-400 bg-transparent text-center text-xl font-semibold text-gray-400 outline-none transition focus:border-gray-700 focus:text-gray-700"
                onChange={handleOnChange}
                onKeyDown={(e) => handleOnKeyDown(e, index)}
                value={otp[index]}
              />
            </React.Fragment>
          );
        })}
      </div>
    );
  };

  // Invite Page Variables and Functions
  const inviteColor = pathname === "/dashboard/invite" ? "orange" : "white";

  // Notifications Page Variables and Functions
  // Change for server side so when notifications has been clicked, meant to cancel shake and alert popup
  /*
  let [notificationsCancel, setNotificationsCancel] = useState(true);
  function changeNotifications() {
    setNotificationsCancel(false);
  }
  */

  const notificationsColor =
    pathname === "/dashboard/notifications" ? "orange" : "white";
  const notificationsAlert =
    pathname === "/dashboard/notifications" ? "hidden" : "";
  const notificationsID =
    pathname === "/dashboard/notifications" ? "" : "shake";

  // Search Page Variables and Functions
  const searchColor = pathname === "/dashboard/search" ? "orange" : "white";

  const unionColor = pathname === "/" ? "orange" : "white";

  // Settings Page Variables and Functions
  const settingsColor = pathname === "/dashboard/settings" ? "orange" : "white";

  // Help Page Variables and Functions
  const helpColor = pathname === "/dashboard/help" ? "orange" : "white";

  return (
    <>
      <nav className="sticky top-0 z-50 flex min-h-screen flex-col justify-between bg-[#000000] px-8 py-16">
        <ul className="flex flex-col items-center gap-12 lg:gap-16">
          <li>
            <Link href="home" title="Home">
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
                  fill={dashboardColor}
                />
                <rect
                  x="24.0801"
                  y="1.90503"
                  width="14.3197"
                  height="60.2415"
                  fill="black"
                />
                <rect
                  x="29.1802"
                  y="0.30426"
                  width="4.31553"
                  height="63.4437"
                  fill={dashboardColor}
                />
              </svg>
            </Link>
          </li>
          <li>
            <button type="button" onClick={openOTPModal} title="Enter Code">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 34 34"
                fill="none"
                className=""
              >
                <path
                  d="M28.0598 0H15.0633C12.4553 0 10.282 1.92835 9.89082 4.42643C8.06523 4.73322 6.5439 5.96035 5.84844 7.66957C2.58845 7.93252 0.0239258 10.6497 0.0239258 14.0243V27.1283C0.0239258 30.6344 2.84925 33.4831 6.32657 33.4831H19.323C22.6265 33.4831 25.3649 30.8974 25.6257 27.6104C27.3209 26.9092 28.5379 25.3753 28.8422 23.5346C31.3198 23.1402 33.2323 20.9489 33.2323 18.3193V5.25913C33.2758 2.36661 30.9286 0 28.0598 0ZM31.1025 18.3631C31.1025 19.7656 30.1897 20.905 28.9291 21.2995V9.64174C28.9291 6.74922 26.5819 4.38261 23.7132 4.38261H12.1511C12.5423 3.11165 13.6724 2.1913 15.0633 2.1913H28.0598C29.755 2.1913 31.1025 3.54991 31.1025 5.25913V18.3631ZM23.4958 27.1283C23.4958 29.4073 21.6268 31.2918 19.3665 31.2918H6.37003C4.10977 31.2918 2.24072 29.4073 2.24072 27.1283V14.0243C2.24072 11.7454 4.10977 9.86087 6.37003 9.86087H19.3665C21.6268 9.86087 23.4958 11.7454 23.4958 14.0243V27.1283Z"
                  fill={OTPColor}
                />
              </svg>
            </button>
          </li>
          <li>
            <Link href="invite" title="Invite Others">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 34 35"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M27.7232 27.4726H26.3382V28.8857C26.3382 29.6657 25.7177 30.2987 24.9532 30.2987C24.1887 30.2987 23.5683 29.6657 23.5683 28.8857V27.4726H22.1833C21.4188 27.4726 20.7983 26.8396 20.7983 26.0596C20.7983 25.2796 21.4188 24.6465 22.1833 24.6465H23.5683V23.2335C23.5683 22.4535 24.1887 21.8205 24.9532 21.8205C25.7177 21.8205 26.3382 22.4535 26.3382 23.2335V24.6465H27.7232C28.4877 24.6465 29.1081 25.2796 29.1081 26.0596C29.1081 26.8396 28.4877 27.4726 27.7232 27.4726ZM9.71866 31.8262V30.3242C9.71866 30.05 9.75882 29.783 9.83361 29.5286C10.0594 28.767 10.605 28.1297 11.346 27.8061L14.4192 26.4623C14.9289 26.239 15.2585 25.7289 15.2585 25.1637V20.4894C15.2585 20.0471 15.0549 19.6302 14.7101 19.3618C14.3264 19.0678 13.9885 18.7202 13.6907 18.3316C13.6478 18.278 13.6201 18.2158 13.5799 18.1607C13.3431 17.8286 13.1354 17.4655 12.9636 17.074C12.8847 16.8903 12.8196 16.7024 12.7614 16.5117C12.7143 16.3576 12.6589 16.2121 12.6243 16.051C12.5426 15.6666 12.4886 15.2724 12.4886 14.8697V8.5548C12.49 8.53078 12.4927 8.50534 12.4927 8.48556V8.4785C12.4927 8.44317 12.4983 8.40784 12.4997 8.37111C12.5052 8.3273 12.5121 8.2835 12.5149 8.23828C12.5343 7.74937 12.6008 7.28024 12.7074 6.84643L12.7088 6.84502C12.8071 6.44654 12.9512 6.08621 13.1187 5.75556C13.7614 4.48524 14.9081 3.56534 16.6435 3.56534H18.6918C21.38 3.56534 23.5683 5.79795 23.5683 8.54067V14.8697C23.5683 15.9662 23.2483 17.0062 22.6584 17.9176C19.1904 18.9364 16.6435 22.1977 16.6435 26.0596C16.6435 26.0836 16.6462 26.1062 16.6476 26.1302C16.6462 26.1444 16.6435 26.1585 16.6435 26.174C16.6435 26.2193 16.6545 26.2617 16.6559 26.3069C16.6656 26.67 16.7002 27.0261 16.7543 27.378C16.8083 27.7609 16.8941 28.1297 16.9966 28.4957C17.0077 28.5338 17.0174 28.572 17.0285 28.6101C17.3844 29.8112 17.9633 30.9134 18.7652 31.8262H9.71866ZM33.263 26.0596C33.263 21.7018 30.0236 18.1056 25.8742 17.6364C26.1775 16.7561 26.3382 15.8277 26.3382 14.8697V8.54067C26.3382 4.23795 22.9076 0.739258 18.6918 0.739258H16.6435C14.3652 0.739258 12.465 1.82165 11.2283 3.56534H9.71866C5.38373 3.56534 2.79385 7.89209 2.79385 12.0747V16.3138C2.79385 18.7344 3.79518 20.9882 5.56377 22.6005V24.2325L3.33121 25.2089C1.32164 26.0864 0.0239258 28.0944 0.0239258 30.3242V33.2393C0.0239258 34.0193 0.644389 34.6523 1.40889 34.6523H8.3337H24.9532C25.1651 34.6523 25.3604 34.5944 25.5405 34.5082C29.8491 34.1973 33.263 30.5333 33.263 26.0596Z"
                  fill={inviteColor}
                />
              </svg>
            </Link>
          </li>
          <li>
            <Link
              href="notifications"
              /*onClick={changeNotifications}*/ title="Notifications"
            >
              <svg
                id={notificationsID}
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 14 16"
                fill="none"
              >
                <g clip-path="url(#clip0_1_2)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.80593 1.54409C4.0863 1.79585 1.96194 3.93433 1.96194 6.53471V11.1502C1.73373 11.2109 1.52921 11.3297 1.35859 11.4892C1.05558 11.7711 0.885498 12.1537 0.885498 12.5529C0.885498 12.9521 1.05558 13.3348 1.35859 13.6167C1.66107 13.899 2.07174 14.0575 2.50016 14.0575H4.86995C5.28169 14.9412 6.23434 15.562 7.34415 15.562C8.45396 15.562 9.40661 14.9412 9.81835 14.0575H12.1881C12.6166 14.0575 13.0272 13.899 13.3297 13.6167C13.6327 13.3348 13.8028 12.9521 13.8028 12.5529C13.8028 12.1537 13.6327 11.7711 13.3297 11.4892C13.1623 11.3332 12.9621 11.2149 12.7436 11.1402C12.7264 10.0353 12.7264 6.53471 12.7264 6.53471C12.7264 3.93433 10.602 1.79585 7.88237 1.54409V1.018C7.88237 0.74116 7.64125 0.516479 7.34415 0.516479C7.04705 0.516479 6.80593 0.74116 6.80593 1.018V1.54409ZM6.13261 14.0575H8.55568C8.25966 14.3654 7.82586 14.559 7.34415 14.559C6.86244 14.559 6.42864 14.3654 6.13261 14.0575ZM12.7264 12.5529C12.7264 12.6858 12.6698 12.8137 12.5687 12.9075C12.468 13.0018 12.3308 13.0545 12.1881 13.0545H2.50016C2.35753 13.0545 2.22029 13.0018 2.11964 12.9075C2.01845 12.8137 1.96194 12.6858 1.96194 12.5529C1.96194 12.42 2.01845 12.2921 2.11964 12.1984C2.16162 12.1592 2.20952 12.1251 2.26657 12.1121C2.28487 12.1081 2.30263 12.1031 2.31986 12.0976C2.75043 11.9561 3.03838 11.5775 3.03838 11.1522V6.53471C3.03838 4.319 4.96629 2.52256 7.34415 2.52256C9.72201 2.52256 11.6499 4.319 11.6499 6.53471C11.6499 6.53471 11.6499 10.0504 11.6677 11.1572C11.6698 11.5735 11.9524 11.9436 12.3738 12.082C12.4443 12.1061 12.5121 12.1457 12.5687 12.1984C12.6698 12.2921 12.7264 12.42 12.7264 12.5529Z"
                    fill={notificationsColor}
                  />
                  <path
                    d="M13 2.5C13 3.88071 11.8807 5 10.5 5C9.11929 5 8 3.88071 8 2.5C8 1.11929 9.11929 0 10.5 0C11.8807 0 13 1.11929 13 2.5Z"
                    fill="orange"
                    className={notificationsAlert}
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_2">
                    <rect width="14" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Link>
          </li>
          <li>
            <Link href="search" title="Search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 34 35"
                fill="none"
              >
                <path
                  d="M32.8234 30.3426L22.0828 19.3842C21.9415 19.24 21.7541 19.1606 21.5547 19.1606C21.3553 19.1606 21.1669 19.24 21.0266 19.3842L20.8776 19.5373L20.4897 19.9319L17.8887 17.277C18.007 17.1317 18.1199 16.9842 18.2283 16.8344C21.1427 12.8078 20.814 7.08887 17.2422 3.44464C13.3078 -0.568462 6.90813 -0.568462 2.97478 3.44464C-0.959692 7.45887 -0.959692 13.9883 2.97478 18.0025C4.94143 20.0091 7.52497 21.0118 10.1085 21.0118C12.2165 21.0118 14.3235 20.3444 16.0962 19.0086C16.2441 18.8979 16.3887 18.7817 16.5312 18.662L19.1333 21.3169L18.7455 21.7116L18.5965 21.8636C18.305 22.1598 18.305 22.6439 18.5965 22.9412L29.337 33.8996C29.6307 34.1992 30.0152 34.3479 30.3998 34.3479C30.7844 34.3479 31.169 34.1992 31.4615 33.8996L32.8234 32.51C33.4095 31.9131 33.4095 30.9406 32.8234 30.3426ZM15.9034 16.6376C14.3059 18.2675 12.2078 19.0824 10.1085 19.0824C8.00923 19.0824 5.91001 18.2675 4.31256 16.6376C1.11657 13.3768 1.11657 8.07033 4.31256 4.81066C5.86069 3.23111 7.91834 2.36032 10.1085 2.36032C12.2976 2.36032 14.3552 3.23111 15.9034 4.81066C19.0994 8.07033 19.0994 13.3768 15.9034 16.6376Z"
                  fill={searchColor}
                />
              </svg>
            </Link>
          </li>
          <li>
            <Link href="/" title="Back to Start">
              <svg
                width="33"
                height="33"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.25 4.75H6.75C5.64543 4.75 4.75 5.64543 4.75 6.75V12.25C4.75 13.3546 5.64543 14.25 6.75 14.25H9.75V17.25C9.75 18.3546 10.6454 19.25 11.75 19.25H17.25C18.3546 19.25 19.25 18.3546 19.25 17.25V11.75C19.25 10.6454 18.3546 9.75 17.25 9.75H14.25V6.75C14.25 5.64543 13.3546 4.75 12.25 4.75Z"
                  stroke={unionColor}
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </Link>
          </li>
        </ul>
        <ul className="flex flex-col items-center gap-12 lg:gap-16">
          <li>
            <Link href="settings" title="Settings">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M38.1337 16.2377L33.8589 15.497C33.6169 14.7152 33.2943 13.9746 32.9313 13.234L35.4317 9.65421C35.7947 9.11931 35.7543 8.37867 35.3107 7.92605L31.8828 4.42859C31.4391 3.97598 30.7132 3.89369 30.1889 4.30515L26.6803 6.85624C25.9947 6.48592 25.2285 6.15675 24.4622 5.90987L23.7766 1.58947C23.6557 0.931128 23.1314 0.478516 22.4861 0.478516H17.6466C17.0014 0.478516 16.4771 0.931128 16.3561 1.58947L15.6302 5.95102C14.864 6.1979 14.138 6.52707 13.4121 6.89739L9.9035 4.3463C9.37922 3.97598 8.65331 4.01712 8.20969 4.46974L4.78173 7.9672C4.33811 8.41981 4.25745 9.16045 4.66074 9.69536L7.16114 13.2751C6.79818 13.9746 6.47554 14.7564 6.23357 15.5382L1.99904 16.2377C1.35377 16.3611 0.910156 16.896 0.910156 17.5544V22.492C0.910156 23.1503 1.35377 23.6852 1.99904 23.8086L6.2739 24.5493C6.51587 25.3311 6.8385 26.0717 7.20146 26.8124L4.70107 30.3921C4.33811 30.927 4.37844 31.6677 4.82206 32.1203L8.25002 35.6177C8.69363 36.0703 9.41955 36.1526 9.94383 35.7412L13.4524 33.1901C14.138 33.5604 14.9043 33.8896 15.6705 34.1365L16.3965 38.498C16.5174 39.1563 17.0417 39.6089 17.687 39.6089H22.5264C23.1717 39.6089 23.696 39.1563 23.817 38.498L24.5026 34.0953C25.2688 33.8484 25.9947 33.5192 26.7207 33.1489L30.2293 35.7C30.7535 36.0703 31.4795 36.0292 31.9231 35.5766L35.351 32.0791C35.7947 31.6265 35.8753 30.8859 35.472 30.351L32.9716 26.7712C33.3346 26.0717 33.6572 25.2899 33.8992 24.5081L38.1741 23.7675C38.8193 23.6441 39.2629 23.1092 39.2629 22.4508V17.5544C39.2226 16.896 38.779 16.3611 38.1337 16.2377ZM20.0664 27.0592C16.2351 27.0592 13.1701 23.8909 13.1701 20.0232C13.1701 16.1142 16.2755 12.9871 20.0664 12.9871C23.8573 12.9871 26.9626 16.1142 26.9626 20.0232C26.9626 23.9321 23.8976 27.0592 20.0664 27.0592Z"
                  fill={settingsColor}
                />
              </svg>
            </Link>
          </li>
          <li>
            <Link href="help" title="Help">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 13 13"
                fill="none"
              >
                <path
                  d="M12.347 3.84526C12.0467 3.12846 11.6169 2.48501 11.0696 1.93242C10.5221 1.37969 9.88439 0.945736 9.17471 0.642717C8.43948 0.328875 7.65846 0.169617 6.85388 0.169617C6.04903 0.169617 5.26827 0.328742 4.53318 0.642717C3.82323 0.945869 3.18568 1.37982 2.63826 1.93242C2.09084 2.48501 1.66082 3.1286 1.36064 3.84526C1.04948 4.58731 0.891846 5.37545 0.891846 6.18791C0.891846 7.00024 1.04948 7.78851 1.36051 8.5307C1.66082 9.24723 2.09071 9.89108 2.63813 10.4437C3.18555 10.9963 3.8231 11.4301 4.53304 11.733C5.26814 12.0469 6.0489 12.2061 6.85374 12.2061C7.65833 12.2061 8.43935 12.0469 9.17458 11.733C9.88426 11.43 10.5221 10.9963 11.0695 10.4437C11.6169 9.89094 12.0467 9.24723 12.3468 8.5307C12.6579 7.78851 12.8155 7.00024 12.8155 6.18791C12.8156 5.37545 12.6579 4.58731 12.347 3.84526ZM6.85374 11.8334C3.77002 11.8334 1.26125 9.30067 1.26125 6.18791C1.26125 3.07489 3.77002 0.542512 6.85374 0.542512C9.9376 0.542512 12.4464 3.07502 12.4464 6.18791C12.4464 9.30067 9.9376 11.8334 6.85374 11.8334Z"
                  fill={helpColor}
                />
                <path
                  d="M8.68118 2.38024C8.44414 2.14082 8.16778 1.95284 7.85993 1.8215C7.54108 1.68509 7.20239 1.61615 6.85377 1.61615C6.50515 1.61615 6.16672 1.68522 5.84761 1.8215C5.53976 1.9527 5.2634 2.14082 5.02635 2.38024C4.78917 2.61953 4.60282 2.8985 4.47272 3.20914C4.33771 3.5314 4.26929 3.87329 4.26929 4.22508C4.26929 4.30738 4.33546 4.37418 4.41713 4.37418H5.4982C5.57973 4.37418 5.6459 4.30738 5.6459 4.22508C5.6459 3.55277 6.18776 3.00592 6.85364 3.00592C7.51964 3.00592 8.06137 3.55277 8.06137 4.22508C8.06137 4.60666 7.88918 4.95898 7.58913 5.19226C7.54863 5.22379 7.50614 5.25265 7.46233 5.27843C7.45717 5.2815 7.45201 5.28458 7.44685 5.28738C7.44394 5.28925 7.44076 5.29086 7.43811 5.29259C6.65312 5.71813 6.16539 6.54048 6.16539 7.43951V7.87186C6.16539 7.9543 6.23157 8.0211 6.3131 8.0211H7.39417C7.4757 8.0211 7.54214 7.9543 7.54214 7.87186V7.43951C7.54214 7.05019 7.75418 6.69533 8.09565 6.51335C8.10505 6.50841 8.11418 6.5032 8.12331 6.49772L8.13019 6.49385C8.1388 6.4889 8.1478 6.48343 8.15666 6.47848C8.25024 6.42317 8.3417 6.36104 8.42852 6.29371C8.73532 6.05522 8.98944 5.74539 9.16295 5.39707C9.34534 5.03126 9.43812 4.63699 9.43812 4.22521C9.43812 3.87343 9.36969 3.53166 9.23469 3.20927C9.10459 2.8985 8.91823 2.61953 8.68118 2.38024ZM8.89917 5.26267C8.74538 5.5713 8.52037 5.84586 8.24839 6.05696C8.17175 6.11654 8.09075 6.17159 8.0075 6.22076C7.99916 6.22557 7.99135 6.23011 7.98315 6.23492C7.98249 6.23519 7.98196 6.23545 7.98143 6.23599L7.97388 6.2404C7.96846 6.24347 7.96329 6.24668 7.95787 6.24935C7.51911 6.48303 7.24646 6.93943 7.24646 7.43938V7.72276H6.46081V7.43938C6.46081 6.6495 6.88977 5.92696 7.58026 5.55393C7.58198 5.55299 7.58489 5.55112 7.58648 5.55019L7.59244 5.54698C7.59866 5.54324 7.60488 5.53963 7.6115 5.53589C7.66603 5.50369 7.7191 5.46748 7.76953 5.42834C8.14277 5.13828 8.35705 4.69952 8.35705 4.22481C8.35705 3.38804 7.68257 2.70731 6.85377 2.70731C6.07473 2.70731 5.43215 3.30867 5.35777 4.07557H4.56947C4.58575 3.81638 4.64464 3.56466 4.74484 3.32524C4.86025 3.05015 5.02516 2.80297 5.23534 2.59094C5.44526 2.37891 5.68998 2.2123 5.96276 2.0958C6.2452 1.97515 6.54499 1.91409 6.85377 1.91409C7.16268 1.91409 7.46247 1.97515 7.74465 2.0958C8.01743 2.2123 8.26215 2.37877 8.4722 2.59094C8.68224 2.80284 8.84716 3.05015 8.96244 3.32524C9.08195 3.61036 9.14257 3.91298 9.14257 4.22481C9.1427 4.58956 9.06078 4.93867 8.89917 5.26267Z"
                  fill={helpColor}
                />
                <path
                  d="M6.85375 8.72339C6.2976 8.72339 5.84521 9.18006 5.84521 9.7416C5.84521 10.3029 6.2976 10.7595 6.85375 10.7595C7.40964 10.7595 7.86216 10.3029 7.86216 9.7416C7.86216 9.18006 7.40964 8.72339 6.85375 8.72339ZM6.85375 10.4612C6.46053 10.4612 6.14063 10.1381 6.14063 9.74147C6.14063 9.34426 6.46053 9.02173 6.85375 9.02173C7.24698 9.02173 7.56675 9.34426 7.56675 9.74147C7.56675 10.1381 7.24698 10.4612 6.85375 10.4612Z"
                  fill={helpColor}
                />
              </svg>
            </Link>
          </li>
        </ul>
      </nav>

      <Transition appear show={isOTPOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeOTPModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="flex h-80 w-full max-w-md transform flex-col justify-between overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="flex justify-between font-poppins text-lg font-medium leading-6 text-gray-900"
                  >
                    Enter your Split code.
                    <button type="button" onClick={closeOTPModal}>
                      <Image
                        src={otpExitIcon as string}
                        alt="Exit Button"
                        className="w-4"
                      />
                    </button>
                  </Dialog.Title>
                  <OTPField id={currentOTPIndex} />
                  <div className="mt-4 flex items-center justify-center">
                    <button
                      type="button"
                      className="mt-2 rounded-xl bg-[#F7B801] px-16 py-3 font-poppins text-[#FFFFFF] transition-all duration-300 hover:bg-[#ffdc75] hover:text-[#000000] "
                      onClick={switchModal}
                    >
                      Submit
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      <Transition appear show={isConfirmOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeOTPModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="flex h-full w-80 max-w-md transform flex-col gap-4  overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="flex justify-end text-lg font-medium leading-6 text-gray-900"
                  >
                    <button type="button" onClick={closeConfirmModal}>
                      <Image
                        src={otpExitIcon as string}
                        alt="Exit Button"
                        className="w-4"
                      />
                    </button>
                  </Dialog.Title>
                  <div className="flex flex-col items-center justify-between gap-6 rounded-xl px-10 pb-10 pt-5 font-poppins shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.3)]">
                    <ul className="flex flex-col items-center">
                      <li className="text-2xl font-semibold">Party Leader:</li>
                      <li>{splitGroup.partyLeader}</li>
                    </ul>
                    <ul className="flex flex-col items-center gap-2">
                      <li className="text-2xl font-semibold">Platform:</li>
                      <li>
                        <Image
                          src={splitGroup.img}
                          alt={splitGroup.serviceName.concat(" Icon")}
                          className="w-12"
                        />
                      </li>
                      <li>{splitGroup.serviceName}</li>
                    </ul>
                    <ul className="text-poppins flex flex-col items-center">
                      <li className="text-2xl font-semibold">Subscription:</li>
                      <li>{splitGroup.subscription}</li>
                    </ul>
                    <ul className="text-poppins flex flex-col items-center">
                      <li className="text-2xl font-semibold">Cost:</li>
                      <li>${splitGroup.cost}</li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-center">
                    <button
                      type="button"
                      className="rounded-xl bg-[#F7B801] px-16 py-3 font-inter font-poppins text-[#FFFFFF] transition-all duration-300 hover:bg-[#ffdc75] hover:text-[#000000] "
                      onClick={closeConfirmModal}
                    >
                      Join Split
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
