/* eslint-disable @next/next/no-img-element */
import React from "react";
import Vercel from "../../public/favicon.ico";
import Image from "next/image";
const Skills = () => {
  return (
    <div className="pt-10 md:pt-20">
      <div className="text-3xl md:text-4xl font-semibold">Skills:</div>
      <div className="pt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="flex items-center gap-2 font-semibold">
          <span>
            <img
              className="w-5"
              src="https://img.icons8.com/color/48/000000/redux.png"
              alt=""
            />
          </span>
          Redux
        </div>
        <div className="flex items-center gap-2 font-semibold">
          <span>
            <img
              className="w-5"
              src="https://img.icons8.com/office/20/000000/react.png"
              alt=""
            />
          </span>
          React
        </div>
        <div className="flex items-center gap-2 font-semibold">
          <span>
            <img
              className="w-5"
              src="https://img.icons8.com/color/20/000000/sass-avatar.png"
              alt=""
            />
          </span>
          CSS/ Sass
        </div>
        <div className="flex items-center gap-2 font-semibold">
          <span>
            <img
              className="w-5"
              src="https://img.icons8.com/color/20/000000/html-5--v1.png"
              alt=""
            />
          </span>
          HTML
        </div>
        <div className="flex items-center gap-2 font-semibold">
          <span>
            <img
              className="w-5"
              src="https://img.icons8.com/color/100/000000/typescript.png"
              alt=""
            />
          </span>
          TypeScript
        </div>
        <div className="flex items-center gap-2 font-semibold">
          <span>
            <img
              className="w-5"
              src="https://img.icons8.com/color/20/000000/firebase.png"
              alt=""
            />
          </span>
          Firebase
        </div>
        <div className="flex items-center gap-2 font-semibold">
          <span>
            <img
              className="w-5"
              src="https://img.icons8.com/color/20/000000/nodejs.png"
              alt=""
            />
          </span>
          Node
        </div>
        <div className="flex items-center gap-2 font-semibold">
          <span>
            <img
              className="w-5"
              src="https://img.icons8.com/color/20/000000/google-cloud-platform.png"
              alt=""
            />
          </span>
          GCP
        </div>
        <div className="flex items-center gap-2 font-semibold">
          <span>
            <Image width={15} height={15} src={Vercel} alt="" />
          </span>
          Next.js
        </div>
        <div className="flex items-center gap-2 font-semibold">
          <span>
            <img
              className="w-5"
              src="https://avatars.githubusercontent.com/u/67109815?s=280&v=4"
              alt=""
            />
          </span>
          Tailwind
        </div>
        <div className="flex items-center gap-2 font-semibold">
          <span>
            <img
              className="w-5"
              src="https://img.icons8.com/color/20/000000/bootstrap.png"
              alt=""
            />
          </span>
          Bootstrap
        </div>
        <div className="flex items-center gap-2 font-semibold">
          <span>
            <img
              className="w-5"
              src="https://img.icons8.com/color/20/000000/blender-3d.png"
              alt=""
            />
          </span>
          Blender
        </div>
      </div>
    </div>
  );
};

export default Skills;
