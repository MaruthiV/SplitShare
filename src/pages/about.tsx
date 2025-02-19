import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import React from 'react';

interface CardProps {
  number: string;
  text: string;
}

const Card: React.FC<CardProps> = ({number, text}) => {
  return (
    <div className="bg-white w-96 h-20 rounded-xl flex font-inter mb-4">
      <p className="ml-4 align-middle m-auto">
        <span className="text-gray-400 text-lg font-bold"> {number} </span>
        <span className="ml-5 text-black text-xl font-extrabold"> {text} </span>
      </p>
    </div>
  )
}

interface StepProps {
  number: string; 
  title: string;
  logo: string;
  description: string;
}

const StepR: React.FC<StepProps> = ({number, title, logo, description}) => {
  return (
    <div className="w-[30vw] mr-10">
      <div className="bg-[#F7B801] rounded-3xl mb-5 w-min px-2">
        <p className="text-white font-quicksand font-bold text-lg">
          {number}
        </p>
      </div>

      <div className="flex flex-row">
        <div className="align-self-center mb-5"> 
          <p className="text-white font-quicksand font-semibold text-6xl">
            {title}
          </p>
        </div>  

        <div className="align-self-top"> 
          <Image src={logo} alt={"Block Image Design"} width={600} height={600}/>
        </div>  

      </div>

      <p className="text-white font-quicksand text-lg"> 
        {description}
      </p>
    </div>
  )
}

// const StepL: React.FC<StepProps> = ({number, title, logo, description}) => {
//   return (
//     <div className="w-[30vw] mr-10">
//       <div className="bg-[#F7B801] rounded-3xl mb-5 w-min px-2">
//         <p className="text-white font-quicksand font-bold text-lg">
//           {number}
//         </p>
//       </div>


//       <div className="flex flex-row relative">
//         <div className="align-self-top mr-10"> 
//           <Image src={logo} alt={"Block Image Design"} width={240} height={240}/>
//         </div>  

//         <div className="align-self-center mb-5"> 
//           <p className="text-white font-quicksand font-semibold text-6xl absolute right-px">
//             {title}
//           </p>
//         </div>  

//       </div>

//       <p className="text-white font-quicksand text-lg"> 
//         {description}
//       </p>
//     </div>
//   )
// }



export default function About() {
  return (
    <>
      <Head>
        <title>SplitShare | How It Works</title>
        <meta name="description" content="SplitShare is an innovative web-based platform that facilitates the easy and seamless splitting of subscription services among a group of users."/>
      </Head>

      <div className='snap-y snap-mandatory w-screen overflow-y-scroll'>
        <section className="snap-start flex w-full h-screen bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))]
        from-[#FDE6A3] via-[#FFFBEE] to-white pt-16">
          
          <div className="container mx-auto">
            <div className="flex flex-col mt-10 ml-40">
              <div className="w-[20vw]"> 
                <h1 className="text-5xl font-bold tracking-tight mb-20">
                  Learn how to get started
                </h1>
                <p className="text-gray-700 mb-8">
                  Streamlining cost-sharing with simplicity and 
                  efficiency by fostering community, 
                  maximizing savings, and enriching shared
                  experiences
                </p>

                <Link href="#steps"> 
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-12 h-12 mt-20 animate-bounce">
                    <path d="M26.29 20.29 18 28.59V0h-2v28.59l-8.29-8.3-1.42 1.42 10 10a1 1 0 0 0 1.41 0l10-10z" data-name="Arrow Down"/>
                  </svg>
                </Link>

              </div>
            </div>
          </div>

          <div className="justify-self-end mr-60 mt-10"> 
            <div className="flex-col"> 
              <Card number="01." text="Sign In/Sign Up"/>
              <Card number="02." text="Create Your Group"/>
              <Card number="03." text="Share Your Group"/>
              <Card number="04." text="Enter Financial Info"/>
            </div>
          </div>

        </section>
        
        <section className="w-full h-fit bg-[#231D51] pt-40" id="steps">
           <div className="flex justify-end "> 
            <div className="flex flex-col gap-[60vh]">
              <StepR number="01" title="Log In & Create Your Group"
                logo="/cubes/cube1.png" description="Start by setting up a group for the service or bill you want to share. 
                You can choose from popular subscriptions listed on our platform, 
                or create your own for a unique product or service"/>
              <StepR number="02" title="Share Your Group with Others"
                logo="/cubes/cube2.png" description="Invite others to join your group with a simple link or email invitation. They can easily join your group by signing up and logging in to SplitShare"/>
              <StepR number="03" title="Secure Payment Setup"
                logo="/cubes/cube3.png" description="When your friends join the group, they enter their payment information securely through Adyen, an industry-leading payment management service. We prioritize your security; we never see or store your card information"/>
              <StepR number="04" title="Enjoy Shared Services"
                logo="/cubes/cube4.png" description="Once everyone has joined and set up their payments, you're ready to go! Enjoy your shared service or product, while SplitShare handles the payments"/>
              <StepR number="05" title="Seamless Transactions"
                logo="/cubes/cube5.png" description="Payments are made smoothly through our platform. No more reminders or chasing up – SplitShare manages all transactions, so you can focus on enjoying your shared experiences"/>
              </div>  
           </div>

            <div className="mt-24 text-black text-3xl font-quicksand font-semibold 
            flex justify-center gap-12 pb-24 text-center align-center"> 
              <div className="bg-white w-[25vw] h-[20vw] rounded-2xl shadow-lg flex flex-col align-center justify-center text-center">
                  <p className="px-20">Transactional Encryption (Adyen)</p>
              </div>

              <div className="bg-white w-[25vw] h-[20vw] rounded-2xl shadow-lg flex flex-col align-center justify-center text-center">
                  <p className="px-20">Website Encryption and Safety (SSL)</p>
              </div>
            </div>
        </section>

      </div>
    </>
  );
}
