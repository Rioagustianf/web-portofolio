import { Link } from "react-router-dom";
import { personalData } from "../../../utils/personalData";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { MdDownload } from "react-icons/md";
import HeroSvg from "./heroSVG";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <img
        src="/hero.svg"
        alt="hero image"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="text-3xl font-bold leading-10 md:font-extrabold lg:text-5xl lg:leading-[3.5rem]">
            Hello, <br />
            This is <span className="text-[#16f2b3]">{personalData.name}</span>
            {`, I'm a Junior `}
            <span className="text-[#16f2b3]">{personalData.designation}</span>
          </h1>

          <div className="my-7 flex items-center gap-2">
            <Link
              to={personalData.github}
              target="_blank"
              className="transition-all hover:text-[#16f2b3] hover:scale-125 duration-300"
            >
              <img src="/github.svg" alt="" />
            </Link>
            <Link
              to={personalData.linkedIn}
              target="_blank"
              className="transition-all hover:text-[#16f2b3] hover:scale-125 duration-300"
            >
              <img src="/linkedin.svg" alt="Linkedin" />
            </Link>
            <Link
              to={personalData.instagram}
              target="_blank"
              className="transition-all hover:text-[#16f2b3] hover:scale-125 duration-300"
            >
              <img src="/instagram.svg" alt="instagram" />
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
              role="button"
              target="_blank"
              to={personalData.resume}
            >
              <span>Get Resume</span>
              <MdDownload size={16} />
            </Link>
          </div>
        </div>
        <div className="order-1 lg:order-2 mt-10 mx-12">
          <HeroSvg />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
