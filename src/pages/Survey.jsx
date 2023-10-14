import React from "react";
import { Link } from "react-router-dom";

function Survey() {
  return (
    <div>
      <div className="flex justify-center">
        <div className="bg-gray-200 shadow-2xl h-[350px] w-[1300px] flex mt-10 mb-10 rounded-2xl">
          <div className="w-2/3 pt-5 pl-6">
            <a href="https://www.nature.com/articles/s41559-020-1259-6">
              <p className="font-bold text-4xl text-primary">
                Integrated ocean management for a sustainable ocean economy
              </p>
              <p className="text-lg pt-4 pr-6">
                The rapidly evolving ocean economy, driven by human needs for
                food, energy, transportation and recreation, has led to
                unprecedented pressures on the ocean that are further amplified
                by climate change, loss of biodiversity and pollution. The need
                for better governance of human activities in the ocean space has
                been widely recognized for years, and is now also incorporated
                in the United Nations Sustainable Development Goals.
              </p>
            </a>
          </div>
          <div className=" w-1/3 flex justify-center h-2/3  ">
            <img
              className="w-5/6  transition-transform transform scale-100 group-hover:scale-250 rounded-lg"
              src="../public/images/o1.jpg"
              alt="beauty of oceans"
            />
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-center">
          <div className="bg-gray-200 shadow-2xl h-[350px] w-[1300px] flex mt-10 mb-10 rounded-2xl">
            <div className="w-2/3 pt-5 pl-6">
              <a href="https://www.livingoceansfoundation.org/science/scientific-surveys/">
                <p className="font-bold text-4xl text-primary">
                  Scientific Surveys
                </p>
                <p className="text-lg pt-4 pr-6">
                  The Khaled bin Sultan Living Oceans Foundation conducts
                  scientific surveys on coral reefs to determine the status,
                  health, and resiliency of the coral reef ecosystem. At each
                  site we study, we bring a full team of scientific divers to
                  conduct these surveys to get the most scientifically accurate
                  data possible. This helps governments, environmental managers,
                  and local residents gain a better understanding of their coral
                  reefs so they can make informed decisions on how to manage and
                  protect them.
                </p>
              </a>
            </div>
            <div className=" w-1/3 flex justify-center h-2/3  ">
              <img
                className="w-5/6  transition-transform transform scale-100 group-hover:scale-250 rounded-lg"
                src="../public/images/o2.jpg"
                alt="beauty of oceans"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Survey;
