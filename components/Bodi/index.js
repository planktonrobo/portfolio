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
    <div className="grid grid-cols-1 gap-28 md:gap-40">
      <section
       
        className="container mx-auto max-w-screen-md px-6 min-h-full"
      >
        <Header />
        <div>
          <Landing />
          <Skills />
          <Preview />
        </div>
      </section>

    

      <section
   
        className="container mx-auto max-w-screen-md  px-3 flex w-full min-h-full "
      >
        <Prosepen />
      </section>

   
      <section
  
        className="container mx-auto max-w-screen-md px-3 flex w-full min-h-full "
      >
        <DailyActs />
      </section>
 
      <section
    
        className="container mx-auto max-w-screen-md px-3 flex w-full min-h-full "
      >
        <RB0 />
      </section>
 
      <section
       
        className="flex justify-center items-center min-h-screen"
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
      </section>
    </div>
  );
};

export default Bodi;
