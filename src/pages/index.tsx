import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import dashboard from "public/dashboard-figma.png";

interface ServiceBoxProps {
  serviceImage: string;
  serviceName: string;
  serviceDescription: string;
}

const ServiceBox = ({serviceImage, serviceName, serviceDescription }: ServiceBoxProps) => {
  return (
    <div className="bg-white rounded-lg mx-6 p-4 items-center
     shadow-gray-200 overflow-hidden w-72 h-48">
      <div className="w-16 h-10 relative mt-4"> 
        <Image src={serviceImage} alt="Image" className="" fill={true} sizes="(max-width: 50px)"/>
      </div>  
      <p className="font-poppins text-lg font-medium">
        {serviceName}
      </p>

      <p className="font-poppins text-xs font-light mt-4 whitespace-pre-wrap">
        {serviceDescription}
      </p>
    </div>
  );
};

const servicesT: ServiceBoxProps[] = [
  {serviceImage: "/service-logos/twitch.png", serviceName: "Twitch", serviceDescription: "Use SplitShare to easily split this subscription among friends"},
  {serviceImage: "/service-logos/netflix.png", serviceName: "Netflix", serviceDescription: "Use SplitShare to easily split this subscription among friends"},
  {serviceImage: "/service-logos/spotify.png", serviceName: "Spotify", serviceDescription: "Use SplitShare to easily split this subscription among friends"},
  {serviceImage: "/service-logos/disney.png", serviceName: "Disney+", serviceDescription: "Use SplitShare to easily split this subscription among friends"},
  {serviceImage: "/service-logos/twitch.png", serviceName: "Twitch+", serviceDescription: "Use SplitShare to easily split this subscription among friends"},
  {serviceImage: "/service-logos/netflix.png", serviceName: "Netflix+", serviceDescription: "Use SplitShare to easily split this subscription among friends"},
  {serviceImage: "/service-logos/spotify.png", serviceName: "Spotify+", serviceDescription: "Use SplitShare to easily split this subscription among friends"},
  {serviceImage: "/service-logos/disney.png", serviceName: "Disney+", serviceDescription: "Use SplitShare to easily split this subscription among friends"},
];
const servicesB: ServiceBoxProps[] = [
  {serviceImage: "/service-logos/espn.png", serviceName: "ESPN+", serviceDescription: "Use SplitShare to easily split this subscription among friends"},
  {serviceImage: "/service-logos/primevideo.png", serviceName: "Amazon Prime", serviceDescription: "Use SplitShare to easily split this subscription among friends"},
  {serviceImage: "/service-logos/youtubetv.png", serviceName: "YoutubeTV", serviceDescription: "Use SplitShare to easily split this subscription among friends"},
  {serviceImage: "/service-logos/applemusic.png", serviceName: "Apple Music", serviceDescription: "Use SplitShare to easily split this subscription among friends"},
  {serviceImage: "/service-logos/espn.png", serviceName: "ESPN+", serviceDescription: "Use SplitShare to easily split this subscription among friends"},
  {serviceImage: "/service-logos/primevideo.png", serviceName: "Amazon Prime", serviceDescription: "Use SplitShare to easily split this subscription among friends"},
  {serviceImage: "/service-logos/youtubetv.png", serviceName: "YoutubeTV", serviceDescription: "Use SplitShare to easily split this subscription among friends"},
  {serviceImage: "/service-logos/applemusic.png", serviceName: "Apple Music", serviceDescription: "Use SplitShare to easily split this subscription among friends"},
];

const Carousel = ({id, services}: {id: string, services: ServiceBoxProps[]}) => {
  return (
    <div id={id} className="">
      <div className='scroller flex my-10'>
        {services.map((service, key) => (
          <ServiceBox serviceImage={service.serviceImage}  key={key}
          serviceName={service.serviceName} serviceDescription={service.serviceDescription}/>
        ))}
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <>
      <Head>
        <title>SplitShare</title>
        <meta name="description" content="SplitShare is an innovative web-based platform that facilitates the easy and seamless splitting of subscription services among a group of users."/>
      </Head>

      <section className="h-screen px-[10%]">
        <div className="flex">
          <div className="relative w-full lg:pl-[40%] lg:mt-12 mt-[20vh] pl-[32%]">
            <Image
              src={dashboard}
              className="w-full"
              alt="dashboard picture" 
            />
          </div>
          <div className="absolute w-1/2 h-full pt-16">
            <div className="flex flex-col gap-3">
              <p className="font-quicksand [font-size:15vw] lg:[font-size:5vw] [line-height:1] font-extrabold">Share More,</p>
              <p className="font-quicksand [font-size:15vw] lg:[font-size:5vw] [line-height:1] font-extrabold">Save More with</p>
              <div className="flex flex-row">
                <p className="font-quicksand [font-size:15vw] lg:[font-size:5vw] [line-height:1] font-extrabold text-[#F7B801]">SplitShare</p>
                <p className="font-quicksand [font-size:15vw] lg:[font-size:5vw] [line-height:1] font-extrabold">.</p>
              </div>
            </div>
            <div className="mt-8">
              <div className="flex flex-col">
                <p className="font-quicksand text-[5vw] lg:text-[1.5vw] font-medium">Seamlessly split subscriptions with your friends </p>
                <p className="font-quicksand text-[5vw] lg:text-[1.5vw] font-medium">and share the joy of saving!</p>
              </div>
            </div>
            <div className="mt-10">
              <Link href="/about" className="font-inter rounded-lg bg-[#F7B801] transition-all duration-300 
              text-[#FFFFFF] hover:bg-[#ffdc75] hover:text-[#000000] lg:px-7 lg:py-3 px-12 py-4">Get Started</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="h-[90vh] frontpage-animation"> 
        <div className="frontpage-animation-bg"> 
          <div className="flex px-[20%] "> 
            <p className="font-poppins text-5xl text-medium w-80"> 
              Split Popular Subscriptions
            </p>
            <p className="font-poppins text-sm w-80 ml-64"> 
            Use SplitShare to streamline your splitting process, save time and effort and forgot about letting down your friends
            </p>
      
          </div>

          <div> 
            <div className="pb-56"> 
            <Carousel id="scrollL" services={servicesT}/>
            </div>
            <div className="pb-56"> 
            <Carousel id="scrollR" services={servicesB}/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
