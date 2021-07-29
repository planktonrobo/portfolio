import React from "react";

const Badges = () => {
  return (
    <div className="absolute -bottom-4 inset-x-0 md:left-14">
    <span className="flex justify-center pt-2 md:justify-start md:pt-0  gap-2 ">
      <span className="flex w-26 dark:bg-purple-200 dark:text-purple-500 items-center justify-center bg-green-100 p-2 rounded-lg text-green-500 font-medium text-xs ">
        <span className="pr-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </span>
        Austin, TX
      </span>
    </span>
    </div>
  );
};

export default Badges;
