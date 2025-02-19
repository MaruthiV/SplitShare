import logoBlack from "public/logo-black.png";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import firebase from "../utils/firebase_init";
import {signInWithGoogle, signOutWithGoogle} from "../utils/authentication"

interface navLink {
  name: string;
  link: string;
}

const navList: navLink[] = [
  { name: "Dashboard", link: "dashboard/home" },
  { name: "How It Works", link: "about" },
  { name: "Product", link: "product" },
  { name: "Contact", link: "contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const path = router.pathname;
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    // Toggle body scroll
    if (!menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };
  
  return (
    <>
      <nav className="h-24">
        <div
          className="md-[5%] fixed top-0 z-50 flex w-screen flex-row items-center
         justify-between bg-white bg-opacity-[0.1%] px-4 py-6 text-[1.1vw] backdrop-blur-[5px] lg:px-[10vw]"
        >
          <div className="flex items-center justify-center">
            <Link href="/">
              <Image
                src={logoBlack}
                className="w-96 lg:w-48"
                alt="splitshare-logo-black"
              />
            </Link>
          </div>

          <ul className="hidden w-auto gap-8 lg:flex lg:flex-wrap lg:items-center lg:justify-center">
            {navList.map((nav: navLink) => (
              <li key={nav.name}>
                <Link href={nav.link} passHref>
                  <div
                    className={` ${
                      path.localeCompare("/" + nav.link) === 0
                        ? "outline-gray-500"
                        : "outline-transparent"
                    } rounded-xl px-3 py-3 font-inter outline outline-2 transition-all duration-300 hover:outline-gray-500`}
                  >
                    {nav.name}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex w-full justify-end lg:hidden">
            <button
              className="text-gray-600 hover:text-gray-800 focus:text-gray-800 focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className="h-10 w-10 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {menuOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19 5H5V4h14v1zm0 8H5v-1h14v1zm0 6H5v-1h14v1zM4 6H3v12h1V6zm0 12h18v1H4v-1z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6H20V5H4v1zm0 7h16v-1H4v1zm0 7h16v-1H4v1z"
                  />
                )}
              </svg>
            </button>
          </div>
          <AuthShowcase />
        </div>

        <ul
          className={`${
            menuOpen
              ? "fixed inset-0 top-40 z-50 block bg-transparent"
              : "hidden"
          } w-full gap-8`}
        >
          <li>
            <Link href="dashboard/home" passHref>
              <div className="rounded-xl bg-[#FFFFFF] px-3 py-3 font-inter outline outline-[#FFFFFF] transition-all duration-300 hover:outline-[#dfdfdf]">
                Home
              </div>
            </Link>
          </li>
          <li>
            <Link href="about" passHref>
              <div className="rounded-xl bg-[#FFFFFF] px-3 py-3 font-inter outline outline-[#FFFFFF] transition-all duration-300 hover:outline-[#dfdfdf]">
                How It Works
              </div>
            </Link>
          </li>
          <li>
            <Link href="services" passHref>
              <div className="rounded-xl bg-[#FFFFFF] px-3 py-3 font-inter outline outline-[#FFFFFF] transition-all duration-300 hover:outline-[#dfdfdf]">
                Services
              </div>
            </Link>
          </li>
          <li>
            <Link href="contact" passHref>
              <div className="rounded-xl bg-[#FFFFFF] px-3 py-3 font-inter outline outline-[#FFFFFF] transition-all duration-300 hover:outline-[#dfdfdf]">
                Contact
              </div>
            </Link>
          </li>

          <li>
            <Link href="" passHref>
              <MobileAuthShowcase />
            </Link>
          </li>

          <li>
            <Link href="" passHref>
              <button className="ml-3 mt-2 rounded-xl bg-[#F7B801] px-3 py-3 font-inter text-[#FFFFFF] transition-all duration-300 hover:bg-[#ffdc75] hover:text-[#000000]">
                Sign Up For Free
              </button>
            </Link>
          </li>
        </ul>
      </nav>
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={toggleMenu}
        />
      )}
    </>
  );
}
function AuthShowcase(): JSX.Element {
  const router = useRouter()
  //const user = firebase.auth().currentUser;
  return (
    <div className="hidden w-auto gap-8 lg:flex lg:flex-wrap lg:items-center lg:justify-center">
      <div className="flex flex-col items-center justify-end">
        <p className="text-2]xl text-center text-white"></p>
        <button
          className="rounded-xl px-3 py-3 font-inter outline outline-2 outline-transparent transition-all duration-300 hover:outline-gray-500"
          // onClick={user ? () => {void signOutWithGoogle()} : () => {void signInWithGoogle()}}
          onClick={() => {void router.push("comingsoon")}}
        >
          Sign In
          {/* {user ? "Sign Out" : "Sign In"} */}
        </button>
      </div>

      <Link href="comingsoon" passHref={true}>
        <div className="rounded-xl bg-[#F7B801] px-3 py-3 font-inter text-[#FFFFFF] transition-all duration-300 hover:bg-[#ffdc75] hover:text-[#000000]">
          Sign Up For Free
        </div>
      </Link>
    </div>
  );
}

function MobileAuthShowcase(): JSX.Element {
  //const user = firebase.auth().currentUser;
  const router = useRouter();
  return (
    <button
      className="ml-3 mt-2 rounded-xl bg-[#49A078] px-3
        py-3 font-inter text-[#FFFFFF] transition-all duration-300 hover:bg-[#49A078] hover:text-[#000000]"
      // onClick={user ? () => {void signOutWithGoogle()} : () => {void signInWithGoogle()}}
      onClick={() => {void router.push("comingsoon")}}
    >
      {/* {user ? "Sign Out" : "Sign In"} */}
      Sign In
    </button>
  );
}