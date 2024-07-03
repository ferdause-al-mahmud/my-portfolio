
import HeroImage from "/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import SocialLinks from "./SocialLinks";

const Home = () => {
  return (
    <div
      name="home"
      className=" flex flex-col w-full pt-44 md:pt-10 bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white">
            I{"'"}m Mahmud
          </h2>

          <h2 className="text-3xl sm:text-5xl font-bold text-white">
            <span className="text-blue-500">MERN</span> Stack Developer
          </h2>

          <p className="text-gray-500 py-4 max-w-md">
            I have 2 years of experience building and desgining software.
            Currently, I love to work on web application using technologies like
            React, Tailwind, Next JS, NodeJs, MongoDB,and ExpressJs.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-[50%] md:w-[500px]"
          />
        </div>


      </div>
      <SocialLinks />
    </div>
  );
};

export default Home;
