import React from "react";
import { FaEye } from "react-icons/fa";

const Doc = () => {
  return (
    <div id="resume" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Resume</h1>
      <p className="text-center py-8">
        attached resume for more details about me
      </p>
      <div className="grid grid-cols-1 justify-center px-4 py-2 gap-3">
        <div className="py-4 text-center font-black">
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center"
          >
            <FaEye className="mr-2" />{" "}
            {/* Add some margin to the right of the icon */}
            View My Resume
          </a>
        </div>

        <button className="border-2 p-4 bg-green-400 items-center --ml-[400px]">
          <a href="/Resume.pdf" download="My_Resume.pdf">
            Download My Resume
          </a>
        </button>
      </div>
    </div>
  );
};

export default Doc;
