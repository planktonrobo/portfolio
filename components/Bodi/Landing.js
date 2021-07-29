import Image from "next/image";
import profilePic from "../../public/me.png";
import Badges from "./Badges";
const Landing = () => {
  return (
    <div className="pt-10 md:pt-20 grid grid-cols-1 md:grid-cols-3  gap-6 font-semibold text-4xl sm:text-5xl">
      <div className="flex items-center md:col-span-2">
        <span className="pb-4 md:pb-0">
          Hello, my name is{" "}
          <span className="inline-block">
            Noah Wardlow. <div className="inline-block animate-wiggle">👋</div>
          </span>
        </span>
      </div>
      <div className="flex justify-center md:justify-start items-center ">
        <div className="w-40 h-40 md:w-48 md:h-48 relative">
          <Image
            className=" filter rounded-full contrast-125 "
            src={profilePic}
            alt="me"
          />
          {/* Badges compontent could go here? */}
        </div>
      </div>
    </div>
  );
};

export default Landing;
