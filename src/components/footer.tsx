import Link from "next/link";
import Image from "next/image";

import logoIcon from "public/footer/logo-icon-only.svg";
import logoName from "public/footer/logo-name-only.svg";

import instagramIcon from "public/footer/instagram-icon.svg";
import twitterIcon from "public/footer/twitter-icon.svg";
import facebookIcon from "public/footer/facebook-icon.svg";

export default function Footer() {
  return (
    <footer className="px-24">
      <div className="flex items-center justify-between border-t-2 border-[#000000] py-10">
        <ul className="flex w-96 flex-col gap-6">
          <li>
            <Image src={logoIcon as string} className="w-16" alt="" />
          </li>
          <li>
            <Image src={logoName as string} className="w-40" alt="" />
          </li>
          <li className="font-poppins text-sm">
            Streamlining cost-sharing with simplicity and efficiency by
            fostering community, maximizing savings, and enriching shared
            experiences
          </li>
        </ul>
        <ul className="flex gap-8">
          <li>
            <Image src={instagramIcon as string} className="w-12" alt="" />
          </li>
          <li>
            <Image src={twitterIcon as string} className="w-12" alt="" />
          </li>
          <li>
            <Image src={facebookIcon as string} className="w-12" alt="" />
          </li>
        </ul>
        <div className="flex w-96 gap-20 font-poppins">
          <ul className="flex flex-col items-center justify-center gap-4">
            <li className="font-medium">PRODUCT</li>
            <li>Home</li>
            <li>About</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
          <ul className="flex flex-col items-center justify-center gap-4">
            <li className="font-medium">FEATURES</li>
            <li>Login</li>
            <li>Sign-up</li>
            <li>404 Page</li>
            <li>Blog</li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-between gap-8 py-10 text-xs">
        <p className="font-poppins">
          Copyright © 2023 SplitShare LLC. All rights reserved.
        </p>
        <ul className="flex items-center gap-4">
          <li>
            <Link href="" className="font-poppins hover:text-gray-300">
              Legal
            </Link>
          </li>
          <li>
            <Link href="" className="font-poppins hover:text-gray-300">
              Terms & Conditions
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
