import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from from-gray-800 to-black text-white lg:pb-80"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-0 lg:mt-0 mt-24">
          <p className="text-4xl font-bold inline border-b-4 border-gray-5">
            About
          </p>
        </div>
        <p className="text-xl mt-10 ">
        I recently graduated from Chandler Gilbert Community College with an associates in Computer Science and I have transferred to Arizona State University pursuing a Bachelor's degree in
         computer science. My love for computers was sparked at a young age from video games, I always carried a curiosity for learning how the things I interacted with worked. 
         This is what led me to pursue computer science. I began teaching myself JavaScript, CSS, and HTML while in high school and have continued to learn more about web development by 
         learning React and TailWind CSS.
        </p>
        <br />
        <p className="text-xl mt-4">
        In college, I have learned the core principles of Object-Oriented Programming through the use of Java and C++. I have experience programming 
         in at least one language from each of the 4 programming language paradigms: Object-Oriented, Functional, Procedural, and Logic. Along with this, I have taken data-structures and algorithms, 
         as well as some low level language classes like assembly logic. I've also taken engineering classes, so I have experience with SolidWorks, Logic Works and MATLAB. 
         I have been working hard to become a well-rounded developer
          and have been creating personal projects outside my college curriculum to push myself and learn as much as I can! You can see a few of them below!

        </p>
      </div>
    </div>
  );
};

export default About;
