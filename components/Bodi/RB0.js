/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import dailyacts from "../../public/DA300.png";
import ReactPlayer from "react-player";
import Link from "next/link";

const RB0 = () => {
  return (
    <div className="max-w-full mx-auto">
      <div className="py-10 filter dark:invert md:px-8">
        <div className="text-5xl md:text-6xl ml-2 dark:text-black font-bold flex items-end italic">
          RB-0{" "}
          <span>
            {" "}
            <Link href="https://github.com/planktonrobo/RB-0" passHref={true}>
              <a>
                <img
                  className="w-4 ml-2 mb-3"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"
                  alt="github"
                />
              </a>
            </Link>
          </span>
        </div>
        <div className="pl-4 md:pl-6 text-gray-500 dark:text-gray-900 flex gap-2 "></div>
      </div>
      <div className="flex justify-center py-8 ">
        <ReactPlayer url="https://www.youtube.com/watch?v=74PCJwJipgs" />
      </div>
      <div className="flex justify-center md:px-10">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 bg-yellow-50 dark:bg-gray-900 shadow-xl rounded-xl h-auto w-full max-w-full p-4">
          <div className="text-2xl antialiased font-semibold md:col-span-2">
            Notable:
          </div>

          <div className="text-base">
            • Featured on{" "}
            <span>
              <Link
                href="https://twitter.com/NVIDIAEmbedded/status/1393211876717342720?s=20"
                passHref={true}
              >
                <a className="border-b-2">NVIDIA blog</a>
              </Link>
            </span>
          </div>
          <div className="text-base">
            • Featured on{" "}
            <span>
              <Link
                href="https://www.hackster.io/planktonrobo/rb-0-jetson-nano-powered-rover-ca242a"
                passHref={true}
              >
                <a className="border-b-2">Hackster</a>
              </Link>
            </span>
          </div>
          <div className="text-base">• Uses AI to identify obstacles</div>
          <div className="text-base">
            • Inspired by NASA rocker-bogie rovers
          </div>
          <div className="text-base">
            • Designed in fusion 360 and 3D printed
          </div>
          <div className="text-base">• Connect remotely with SSH</div>
        </div>
      </div>
    </div>
  );
};

export default RB0;
