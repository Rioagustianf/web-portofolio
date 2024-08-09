import React from "react";
import Image from "next/image"; // Gunakan Image dari next/image
import Link from "next/link";
import { FaCode, FaPlay } from "react-icons/fa";
import placeholder from "/public/png/placeholder.png";

const SingleProject = ({ project }) => {
  const { title, description, tags, code, demo, image, features } = project;

  return (
    <div className="group w-full h-fit flex flex-col items-center justify-center relative cursor-text overflow-hidden px-3 md:px-8 py-[1.4rem] bg-[linear-gradient(90deg,#281e57_0%,#201435_100%)] shadow-2xl rounded-lg border border-[#1a1443]">
      <div className="absolute left-0 top-0 flex justify-center opacity-40">
        {/* SVG Background */}
      </div>

      <div className="flex flex-col items-center justify-between w-full h-full">
        <h2 className="text-[#EFF3F4] not-italic font-semibold text-[1.525rem] leading-[110%] text-center capitalize">
          {title}
        </h2>
        <div className="p-6">
          <Image
            src={image ? image.src : placeholder}
            alt={title}
            width={1080}
            height={720}
            className="w-80 h-64 transition-opacity duration-[0.7s] delay-[0.3s] rounded-lg group-hover:opacity-0"
          />
        </div>
        <div className="flex items-center justify-between w-full">
          <Link
            href={demo}
            target="_blank"
            className="flex justify-center items-center w-10 h-10 rounded-full border-2 border-[#EFF3F4] text-[#EFF3F4] transition-all duration-300 hover:bg-[#231d4b] hover:text-violet-600 hover:border-[#0F0C41] hover:scale-110 decoration-clone cursor-pointer no-underline delay-[0.3s]"
          >
            <FaPlay />
          </Link>

          <Link
            href={code}
            target="_blank"
            className="flex justify-center items-center w-10 h-10 rounded-full border-2 border-[#EFF3F4] text-[#EFF3F4] transition-all duration-300 hover:bg-[#231d4b] hover:text-violet-600 hover:border-[#0F0C41] hover:scale-110 cursor-pointer no-underline delay-[0.3s] group-hover:translate-x-[-140px]"
          >
            <FaCode />
          </Link>
        </div>
      </div>
      <p className="absolute w-[90%] md:w-[85%] md:min-h-[150px] translate-x-[-110%] transition-transform duration-[0.9s] p-6 leading-[110%] rounded-[0_0_40%_40%] bg-[linear-gradient(90deg,#281e57_0%,#201435_100%)] text-[#EFF3F4] group-hover:translate-x-0 group-hover:opacity-100">
        {description}
      </p>
    </div>
  );
};

export default SingleProject;
