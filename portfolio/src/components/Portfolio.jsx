import React from "react";
import adoptMe from "../assets/portfolio/adoptMe.JPG";
import NameGen from "../assets/portfolio/NameGen.JPG";
import PizzaRest from "../assets/portfolio/PizzaRest.JPG";
import ps5 from "../assets/portfolio/PS5.jpg";
import GUI from "../assets/portfolio/JavaGUI.JPG";
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: adoptMe,
      linkDeploy: "https://untamedduck.github.io/PetAdoption/",
      linkCode: "https://github.com/untamedduck/PetAdoption",
    },
    {
      id: 2,
      src: NameGen,
      linkDeploy: "https://untamedduck.github.io/ElderScrollsNameGenerator/",
      linkCode: "https://github.com/untamedduck/ElderScrollsNameGenerator",
    },
    {
      id: 3,
      src: PizzaRest,
      linkDeploy: "https://untamedduck.github.io/restaurant_practice_site/",
      linkCode: "https://github.com/untamedduck/restaurant_practice_site",
    },
    {
      id: 4,
      src: ps5,
        linkDeploy: "https://github.com/untamedduck/PS5-Stock-Check",
      linkCode: "https://github.com/untamedduck/PS5-Stock-Check",
    },
    {
      id: 5,
      src: GUI,

      linkDeploy: "https://github.com/untamedduck/JavaArrayGUI",
      linkCode: "https://github.com/untamedduck/JavaArrayGUI",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">
            Check out some of my work right here! I have plenty more I cant post here due to academic honesty, but if you would like to see more feel free to get in touch through the contact 
            form at the bottom of the page!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, linkDeploy, linkCode }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200"
              />
              <div className="flex items-center justify-center">
                <button
                  onClick={() => window.open(linkDeploy)}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Deployment
                </button>
                <button
                  onClick={() => window.open(linkCode)}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
