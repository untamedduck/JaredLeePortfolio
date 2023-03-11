import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import TypedHook from "./TypedHook";
const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col py-0 items-center justify-center h-full lg:h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full max-h-96 mt-60 lg:mt-0">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Software Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            HI! I'm Jared Lee, I am a Junior at Arizona State University
            pursuing a Bachelor's degree in Computer Science. I love all kinds
            of programming and have been working hard to become a well-rounded
            programmer. I am proficient in Java, JavaScript, C++, React.JS,
            TailWindCSS and Node.js. I also have limited experience with C,
            Scheme, PROLOG, MATLAB and more. Some of my other hobbies are Disc
            Golf, Mountain Biking, video games, and hiking.
          </p>

          <div className="flex justify-center lg:justify-start">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-purple-600 to-[#5525c6] cursor-pointer justify-center"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="py-4 lg:py-0 mt-6 lg:mt-0">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
