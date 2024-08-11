/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export function Socials() {
  return (
    <div className="flex justify-center mt-20">
      <div className="flex space-x-20">
      <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 icon-container">
          <a
            href="https://linkedin.com/in/jakob-heine"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/svgs/linked-in.svg"
              alt="LinkedIn"
              width={80}
              height={80}
              className="w-full h-full bounce-icon"
            />
          </a>
        </div>
        <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 icon-container">
          <a
            href="https://github.com/jakobheine"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/svgs/github.svg"
              alt="GitHub"
              width={80}
              height={80}
              className="w-full h-full bounce-icon"
            />
          </a>
        </div>
        <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 icon-container">
          <a
            href="https://instagram.com/_jakobheine"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/svgs/instagram.svg"
              alt="Instagram"
              width={80}
              height={80}
              className="w-full h-full bounce-icon"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
