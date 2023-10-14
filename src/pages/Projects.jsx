import React from "react";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div>
      <div className="flex justify-center">
        <div className="bg-gray-200 shadow-2xl h-[350px] w-[1300px] flex mt-10 mb-10 rounded-2xl">
          <div className="w-2/3 pt-5 pl-6">
            <a href="https://oceanfdn.org/projects/">
              <p className="font-bold text-4xl text-primary">
                The Ocean Foundation
              </p>
              <p className="text-lg pt-4 pr-6">
                The Ocean Foundation’s projects span the globe and cover a
                myriad of issues and topics. Each of our projects works within
                our four core areas: ocean literacy, protecting species,
                conserving habitats, and building the capacity of the marine
                conservation community. Two-thirds of our projects address
                international ocean issues. We’re proud to support the people
                who run our projects as they work around the globe to protect
                our world ocean.
              </p>
            </a>
          </div>
          <div className=" w-1/3 flex justify-center h-2/3  ">
            <img
              className="w-5/6  transition-transform transform scale-100 group-hover:scale-250 rounded-lg"
              src="../public/images/sunrise.jpg"
              alt="beauty of oceans"
            />
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-center">
          <div className="bg-gray-200 shadow-2xl h-[350px] w-[1300px] flex mt-10 mb-10 rounded-2xl">
            <div className="w-2/3 pt-5 pl-6">
              <a href="https://www.unep.org/news-and-stories/story/7-conservation-projects-win-grants-underwater-innovation">
                <p className="font-bold text-4xl text-primary">
                  Restoring coral reefs in Belize
                </p>
                <p className="text-lg pt-4 pr-6">
                  Fragments of Hope, a community-based organization in the
                  Placencia Peninsula of southern Belize, re-seeds devastated
                  Caribbean reefs with diverse and resilient corals. With the
                  grant, Fragments of Hope will expand its work to the northern
                  side of Belize, an area plagued by stony coral tissue loss
                  disease. The condition rapidly kills corals, leaving behind a
                  bright white skeleton. The organization will also support the
                  nationwide mapping of coral reefs that are more resistant to
                  warming seas, considered key as climate change heats the
                  world’s oceans.
                </p>
              </a>
            </div>
            <div className=" w-1/3 flex justify-center h-2/3  ">
              <img
                className="w-5/6  transition-transform transform scale-100 group-hover:scale-250 rounded-lg"
                src="../public/images/bg.jpg"
                alt="beauty of oceans"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
