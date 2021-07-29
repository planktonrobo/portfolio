import React from "react";
import DarkSwitch from "./DarkSwitch";

const Header = () => {
  return (
    <div className="w-full h-16">
      <div className="container mx-auto max-w-screen-lg h-full">
        <div className="flex justify-between items-center h-full antialiased ">
          <span className="rounded-md text-xs sm:text-sm bg-green-100 dark:bg-purple-200 dark:text-purple-500 text-green-500 p-2 px-3 font-bold">
            Full Stack Developer
          </span>

          <div>
            <DarkSwitch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
