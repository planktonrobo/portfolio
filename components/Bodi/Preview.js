import React from "react";

const Preview = () => {
  return (
      <>
    <div className="flex pt-20 md:pt-36 justify-center items-center min-h-full">
      <div className="text-4xl md:text-5xl font-semibold">Portfolio</div>
    </div>
    <div className="flex justify-center pt-10">
    <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 animate-bounce"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={4}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg></div>
    </>
  );
};

export default Preview;
