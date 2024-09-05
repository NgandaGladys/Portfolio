import React from "react";
import foods from "../assets/foods.png";

const ProjectItem = ({ img, title, tech }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 t0-[#001b5e]">
      <img src={img} alt="/" className="rounded-xl group-hover:opacity-10" />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl font-bold text-white tracking-wider text-center">
          {title}
        </h3>{" "}
        <img src={img} title="Customer support" />
        <p className="px-4 py-2">{tech}</p>
        <a href="/">
          <p className="text-center p-3 rounded-ld bg-white hover:bg-purple-600 text-purple-700 font-bold cursor-pointer text-lg hover:text-white">
            More information
          </p>
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
