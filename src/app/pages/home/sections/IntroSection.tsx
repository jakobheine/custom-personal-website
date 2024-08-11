import VideoPlayer from "@/app/components/VideoPlayer";
import Image from "next/image";

export function IntroSection() {
  return (
    <div className="h-screen flex flex-col items-center">
      <div className="h-screen flex items-center justify-center animate-fadeIn px-4">
        <div className="w-32 h-32 sm:w-48 sm:h-48 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] flex-shrink-0 mr-4 md:mr-20">
          <Image
            src="/images/jakob.jpg"
            alt="picture of Jakob"
            layout="responsive"
            width={500}
            height={500}
            className="rounded-full"
          ></Image>
        </div>
        <div className="ml-4 sm:ml-8 md:ml-12 text-center md:text-left">
          <h1 className="text-4xl md:text-8xl">
            <VideoPlayer/>
          </h1>
          {/* <h2 className="mt-4 md:mt-10 text-xs sm:text-lg md:text-2xl lg:text-3xl font-chakra">
            Senior Software Engineer
          </h2> */}
        </div>
      </div>
      <div className="mt-8 mb-10">
        <svg
          id="scroll-button"
          className="w-20 h-20 sm:w-24 sm:h-24 md:w-12 md:h-12 lg:w-16 lg:h-16 text-white cursor-pointer opacity-0 delayed-appearance fade-in-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            d="M17 13l-5 5m0 0l-5-5m5 5V6"
          ></path>
        </svg>
      </div>
    </div>
  );
}
