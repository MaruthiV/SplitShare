import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from 'react';


export default function Product() {
  return (
    <>
      <Head>
        <title>SplitShare | Product</title>
        <meta name="description" content="SplitShare is an innovative web-based platform that facilitates the easy and seamless splitting of subscription services among a group of users."/>
      </Head>

      <section className="px-[10%] h-screen
      bg-gradient-to-b from-white via-gray-50 to-black" >
        <div className="mt-10">  
          <p className="font-poppins text-5xl text-center">Split the Cost, Not the Experience with </p>
          <p className="font-poppins text-5xl text-center text-[#4200FF] underline">SplitShare</p>
          <Image src="/product/purple-dashboard.png" alt="Purple Dashboard Picture" 
          height={800} width={800} className="m-auto pl-10"/>
        </div>
      </section>
      <div className="flex-col"> 
        <section id="product-gradient" className="px-[10%] h-[500vh] w-full">    
          <div className="absolute ml-[30vw] px-4 py-4 mt-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]
          from-red-700 via-red-300 to-white w-80 h-80 rounded-full">   
            <div className="mt-10">
              <p className="text-white text-lg italic font-poppins text-center">Simple</p>
              <p className="text-white text-md italic font-poppins w-72 text-center">We streamline the whole splitting process, making it easier for everyone to split subscriptions</p>
            </div>  
          </div>   
          <Image src="/product/dashboard.png" alt="Purple Dashboard Picture" 
              height={800} width={800} className="sticky top-[10vh] ml-[40%] pt-[30vh] z-20"/>
          <div className=" absolute ml-[20vw] px-4 py-4 mt-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]
          from-[#0E16DE] via-blue-400 to-white w-80 h-80 rounded-full">   
            <div className="mt-10">
              <p className="text-white text-lg italic font-poppins text-center">Convenient</p>
              <p className="text-white text-md italic font-poppins w-72 text-center">Enjoy the convenience of shared costs with SplitShare</p>
            </div>  
          </div>  

          <div className=" absolute top-[300vh] ml-[14vw] px-4 py-4 mt-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]
          from-yellow-600 via-yellow-300 to-white w-80 h-80 rounded-full">   
            <div className="mt-10">
              <p className="text-white text-lg italic font-poppins text-center">Transparent</p>
              <p className="text-white text-md italic font-poppins w-72 text-center">We believe in transparent pricing. We take x% on each transaction</p>
            </div>  
          </div>

          <div className=" absolute top-[400vh] ml-[10vw] px-4 py-4 mt-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]
          from-[#86A9A7] to-transparent w-80 h-80 rounded-full">   
            <div className="mt-10">
              <p className="text-white text-lg italic font-poppins text-center">Versatile</p>
              <p className="text-white text-md italic font-poppins w-72 text-center">Manage multiple shared subscriptions, as many as you want! All in one place</p>
            </div>  
          </div>

          <div className=" absolute top-[500vh] ml-[15vw] px-4 py-4 mt-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]
          from-gray-400 to-transparent w-80 h-80 rounded-full">   
            <div className="mt-10">
              <p className="text-white text-lg italic font-poppins text-center">Secure</p>
              <p className="text-white text-md italic font-poppins w-72 text-center">We partner with Adyen, a leading payment processor to keep your money secure</p>
            </div>  
          </div>
        </section>
      </div>
    </>
  );
}

