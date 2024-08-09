"use client"; // This ensures that the component runs on the client side

import { useEffect } from 'react';
import { IntroSection } from './sections/IntroSection';
import { NextSection } from './sections/NextSection';

export default function Home() {
  useEffect(() => {
    const scrollButton = document.getElementById('scroll-button');
    if (scrollButton) {
      scrollButton.addEventListener('click', function () {
        document.getElementById('next-section')?.scrollIntoView({
          behavior: 'smooth',
        });
      });
    }
  }, []);

  return (
    <>
      <IntroSection />
      <NextSection />
    </>
  );
}