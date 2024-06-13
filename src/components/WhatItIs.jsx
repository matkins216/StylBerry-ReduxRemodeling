import React from "react";

const WhatItIs = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center md:h-1/2 text-center p-5 md:px-16 py-10 font-poppins w-fit ">
      <div className="flex flex-col items-center lg:flex-row mx-5 md:items-center gap-8 sm:gap-10 z-10">
        <div className="flex flex-col  w-5/6 lg:w-1/3 h-fit items-center justify-center gap-4 md:gap-6 shadow-2xl  max-h-svh rounded-2xl p-3 py-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-24 h-24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
            />
          </svg>
          <p className="flex text-center text-xl font-bold">Custom-Coded</p>
          <p className="flex text-center md:text-xl">
            I custom code your site to reduce unnecessary plugins, security
            vulnerabilities, and other hinderances to your site's performance.
          </p>
        </div>
        <div className="flex flex-col w-5/6 lg:w-1/3 h-fit items-center justify-center gap-4 md:gap-6 shadow-2xl max-h-svh rounded-2xl p-3 py-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-24 h-24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
            />
          </svg>
          <p className="flex text-center text-xl font-bold">
            Simple Onboarding
          </p>
          <ul className="md:text-xl list-disc text-left">
            <li>Collect</li>
            <li>Create</li>
            <li>Critique</li>
            <li>Care</li>
          </ul>
          <p className="flex text-center md:text-xl">
            My onboarding process is built to keep you involved in the business
            and not bothered with constant interruptions to your day.
          </p>
        </div>
        <div className="flex flex-col w-5/6 lg:w-1/3 h-fit items-center justify-center gap-4 md:gap-6 shadow-2xl max-h-svh rounded-2xl p-3 py-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-24 h-24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
            />
          </svg>
          <p className="flex text-center text-xl font-bold">
            Website Management
          </p>
          <p className="flex text-center md:text-xl">
            Updates, Edits, Reports, and Hosting included with your site! I
            worry about your site so you don't have to.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatItIs;
