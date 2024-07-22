import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jakob Heine',
};

export default function Home() {
  return (
    <div>
      <IntroSection></IntroSection>
    </div>
  );
}

function IntroSection() {
  return (
    <div className="h-screen flex items-center justify-center animate-fadeIn px-4">
      <div className="w-32 h-32 sm:w-48 sm:h-48 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] flex-shrink-0 mr-4 md:mr-20">
        <Image src="/jakob.jpg" alt="picture of Jakob" layout="responsive" width={500} height={500} className="rounded-full"></Image>
      </div>
      <div className="ml-4 sm:ml-8 md:ml-12 text-center md:text-left">
        <h1 className="text-4xl md:text-8xl">Jakob <br />Heine.</h1>
        <h2 className="mt-4 md:mt-10 text-xs sm:text-lg md:text-2xl lg:text-3xl font-chakra">Senior Software Engineer</h2>
      </div>
    </div>
  );
}