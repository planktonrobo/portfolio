/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import prosepen from "../../public/prosepen.png";
import ReactPlayer from "react-player";
import Link from "next/link";

const Prosepen = () => {
  return (
    <div className="max-w-full mx-auto w-full child ">
      <div className="py-10  filter dark:invert transition duration-150 ease-in-out transform hover:-translate-y-1 ">
        <div className="w-56 md:w-64 antialiased">
          <Image src={prosepen} alt="prosepen" />
        </div>
        <div className="pl-10 md:pl-12 text-gray-500 dark:text-gray-900 flex gap-3 ">
          <Link href="https://prosepen.com/" passHref={true}>
            <a className="flex  items-center gap-1 border-b-2 border-green-50 hover:border-gray-300 dark:border-gray-200 dark:hover:border-gray-900">
              <span className="text-xs ">prosepen.com</span>
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
          <Link href="https://github.com/planktonrobo/prosepen" passHref={true}>
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
      <div className="player-wrapper mb-2 md:mb-4">
        <ReactPlayer className="react-player " url="https://youtu.be/DrzxaH1OPPQ" width="100%" height="100%"/>
      </div>
      <div className="flex justify-center ">
        <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-2 bg-green-50 dark:bg-gray-900 shadow-xl rounded-xl h-auto w-full max-w-full p-4 ">
          <div className="text-2xl antialiased font-semibold md:col-span-2">
            Notable:
          </div>
          <div className="text-sm">
            • Data stored in Redux so only loaded once
          </div>
          <div className="text-sm">
            • Medium like text editor for creating posts
          </div>
          <div className="text-sm">
            • User authentication
          </div>
          <div className="text-sm">
            • Follow other users and customize profile
          </div>

          <div className="text-sm">• Upload images to firebase storage</div>
          <div className="text-sm">
            • Notifications system
          </div>
          <div className="text-sm">
            • Like, bookmark, share, and comment on posts
          </div>
          
          <div className="text-sm">
            <a href="https://www.producthunt.com/posts/prosepen?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-prosepen">
              <img
                className="w-44 "
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=301994&theme=light"
                alt="prosepen - An all in one site for creative writers | Product Hunt"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prosepen;
