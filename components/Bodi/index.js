/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Header from "../Header";
import Landing from "./Landing";
import Preview from "./Preview";

import dynamic from "next/dynamic";

const RB0 = dynamic(() => import("./RB0"));
const Prosepen = dynamic(() => import("./Prosepen"));
const DailyActs = dynamic(() => import("./DailyActs"));
const Skills = dynamic(() => import("./Skills"));

const Bodi = () => {
  return (
    <Parallax pages={5} style={{ top: "0", left: "0" }}>
      <ParallaxLayer
        offset={0}
        speed={0.5}
        className="container mx-auto max-w-screen-md px-8 min-h-full"
      >
        <Header />
        <div>
          <Landing />
          <Skills />
          <Preview />
        </div>
      </ParallaxLayer>

      <ParallaxLayer
        offset={1}
        speed={0.4}
        className="bg-yellow-50 dark:bg-gray-900 min-h-full"
      />

      <ParallaxLayer
        offset={1}
        speed={1.0}
        className="container mx-auto max-w-screen-md  px-3 flex w-full min-h-full "
      >
        <Prosepen />
      </ParallaxLayer>

      <ParallaxLayer
        offset={2}
        speed={0.4}
        className="bg-green-50 dark:bg-black min-h-full"
      />
      <ParallaxLayer
        offset={2}
        speed={1.0}
        className="container mx-auto max-w-screen-md px-3 flex w-full min-h-full "
      >
        <DailyActs />
      </ParallaxLayer>
      <ParallaxLayer
        offset={3}
        speed={0.4}
        className="bg-yellow-50 dark:bg-gray-900 min-h-full"
      />
      <ParallaxLayer
        offset={3}
        speed={1.0}
        className="container mx-auto max-w-screen-md px-3 flex w-full min-h-full "
      >
        <RB0 />
      </ParallaxLayer>
      <ParallaxLayer
        offset={4}
        speed={0.4}
        className="bg-green-50 dark:bg-black min-h-full"
      />
      <ParallaxLayer
        offset={4}
        speed={1.0}
        className="flex justify-center items-center"
      >
        <div className="flex-none">
          <div className="text-6xl font-bold">Contact me!</div>
          <div className="flex justify-center items-center gap-2 pt-2">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </span>
            nmwardlow@gmail.com
          </div>
        </div>
      </ParallaxLayer>
    </Parallax>
  );
};

export default Bodi;
