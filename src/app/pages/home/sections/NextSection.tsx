/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Socials } from "./Socials";
import { EmailContact } from "./EmailContact";

export function NextSection() {
  // Function to calculate age based on the given birthdate and current date
  const calculateAge = (dateString: string): number => {
    const birthDate = new Date(dateString);
    const today = new Date();

    // Ensure both are treated as numbers
    const ageInMilliseconds = today.getTime() - birthDate.getTime();
    const ageDate = new Date(ageInMilliseconds); // Age in milliseconds converted to a date
    return Math.abs(ageDate.getUTCFullYear() - 1970); // Subtract 1970 (epoch year) to get the actual age
  };

  // Calculate the age based on the provided birthdate
  const age = calculateAge("1997-11-21");

  return (
    <div
      id="next-section"
      className="flex items-center justify-center w-full h-screen"
    >
      <div className="p-4 sm:p-6 md:p-8 lg:p-10 w-full max-w-5xl h-auto">
        <p className="text-left text-white text-xl sm:text-2xl">
          Welcome to My Homepage
          <br />
          <br />
          Hello! I'm Jakob, {age} years old, living in the beautiful city of
          Dresden with my fiancée and my dog.
          <br />
          <br />
          I work as a Software Development Engineer for Amazon.
          <br />
          <br />
        </p>
        <EmailContact />
        <p className="text-left text-white text-xl sm:text-2xl">
          <br />
          So Long,
          <br />
          Jakob
        </p>
        <Socials />
      </div>
    </div>
  );
}
