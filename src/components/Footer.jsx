import { CgGitFork } from "react-icons/cg";
import { FaCopyright } from "react-icons/fa6";
import { IoStar } from "react-icons/io5";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="relative border-t border-[#16f2b3] text-white">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2  bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <p className="text-sm inline-flex gap-1">
            <FaCopyright /> Developer Portfolio by{" "}
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/rio-agustian"
              className="text-[#16f2b3]"
            >
              Rio Agustian
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
