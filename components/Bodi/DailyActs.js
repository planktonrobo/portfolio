/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import dailyacts from "../../public/DA300.png";
import ReactPlayer from "react-player";
import Link from "next/link";

const DailyActs = () => {
  return (
    <div className="max-w-full mx-auto w-full">
      <div className="py-10 filter dark:invert ">
        <div className="w-56 md:w-64 antialiased pl-2">
          <Image src={dailyacts} alt="dailyacts" />
        </div>
        <div className="pl-4 md:pl-5 text-gray-500 dark:text-gray-900 flex gap-3 ">
          <Link href="https://dailyacts.io/" passHref={true}>
            <a className="flex  items-center gap-1 border-b-2 border-green-50 hover:border-gray-300 dark:border-white dark:hover:border-gray-900">
              <span className="text-xs ">dailyacts.io</span>
              <span>
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
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </span>
            </a>
          </Link>
          <Link href="https://github.com/planktonrobo/dailyacts/tree/d15f04c527ef89e68f164b9e91bdc666902ff18d" passHref={true}>
            <a>
              <img
                className="w-4"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"
                alt="github"
              />
            </a>
          </Link>
        </div>
      </div>
      <div className="player-wrapper mb-2 md:mb-4 ">
        <ReactPlayer className="react-player " width="100%" height="100%" url="https://youtu.be/iRgqxC64MGA" />
      </div>
      <div className="flex justify-center ">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 bg-green-50 dark:bg-black shadow-xl rounded-xl h-auto w-full max-w-full p-4">
          <div className="text-2xl antialiased font-semibold md:col-span-2">
            Notable:
          </div>

          <div className="text-base">
            • Uses Google Cloud Functions to parse articles
          </div>
          <div className="text-base">
            • Create and share archives with nested article data
          </div>
          <div className="text-base">
            • Display saved data in a timeline or table format
          </div>
          <div className="text-base">
            • Parse article publish date from URL with RegEx
          </div>
          <div className="text-base">
            • Login with Facebook, Twitter, or Google
          </div>
          <div className="text-base">
            • Used by journalist from Austin Chronicle, Austin KUTX, and more
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyActs;
