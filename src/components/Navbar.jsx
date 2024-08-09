import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link to="/" className=" text-[#16f2b3] text-3xl font-bold">
            RIO AGUSTIAN
          </Link>
        </div>
        <ul
          className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100"
          id="navbar-default"
        >
          <li>
            <a
              className="nav-link block px-4 py-2 no-underline outline-none transition-colors duration-300"
              href="/#about"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-[#16f2b3]">
                ABOUT
              </div>
            </a>
          </li>
          <li>
            <a
              className="nav-link block px-4 py-2 no-underline outline-none transition-colors duration-300"
              href="/#experience"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-[#16f2b3]">
                EXPERIENCE
              </div>
            </a>
          </li>
          <li>
            <a
              className="nav-link block px-4 py-2 no-underline outline-none transition-colors duration-300"
              href="/#skills"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-[#16f2b3]">
                SKILLS
              </div>
            </a>
          </li>
          <li>
            <a
              className="nav-link block px-4 py-2 no-underline outline-none transition-colors duration-300"
              href="/#projects"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-[#16f2b3]">
                PROJECTS
              </div>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
