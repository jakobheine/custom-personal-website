import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Jakob Heine',
}

export default function Home() {
  return (
    <IntroSection></IntroSection>
  );
}

function IntroSection() {
  return (
    <div className="h-screen flex items-center justify-center animate-fadeIn">
      <Image src="/jakob.jpg" alt="picture of Jakob" width={500} height={500} className="rounded-full mr-20"></Image>
      <div>
        <h1>Jakob <br></br>Heine.</h1>
        {/* <h2 className="mt-12">Senior Software Engineer</h2> */}
        <h2 className="mt-12">Senior Software Engineer</h2>
      </div>
    </div>
  );
}