import React from "react";

function Research() {
  return (
    <div>
      <div className="flex justify-center">
        <div className="bg-gray-200 shadow-2xl h-[350px] w-[1300px] flex mt-10 mb-10 rounded-2xl">
          <div className="w-2/3 pt-5 pl-6">
            <a href="https://www.sciencedirect.com/science/article/pii/S2468502X19300440">
              <p className="font-bold text-4xl text-primary">
                A survey on visual analysis of ocean data
              </p>
              <p className="text-lg pt-4 pr-6">
                A major challenge in analysis of huge amounts of ocean data is
                the complexity of the data and the inherent complexity of ocean
                dynamic processes. Interactive visual analysis serves as an
                efficient complementary approach for the detection of various
                phenomena or patterns, and correlation exploring or comparing
                multiple variables in researchers daily work. Firstly, this
                paper presents a basic concept of the ocean data produced from
                numerous measurement devices or computer simulations.
              </p>
            </a>
          </div>
          <div className=" w-1/3 flex justify-center h-2/3  ">
            <img
              className="w-5/6  transition-transform transform scale-100 group-hover:scale-250 rounded-lg"
              src="../public/images/o3.jpg"
              alt="beauty of oceans"
            />
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-center">
          <div className="bg-gray-200 shadow-2xl h-[350px] w-[1300px] flex mt-10 mb-10 rounded-2xl">
            <div className="w-2/3 pt-5 pl-6">
              <a href="https://www.oceanconservation.org/research/">
                <p className="font-bold text-4xl text-primary">
                  Scientific Findings
                </p>
                <p className="text-lg pt-4 pr-6">
                  Our studies provide an important, fact-based foundation for
                  the protection of marine mammals and their ocean environment.
                  OCS scientific findings help steer conservation and management
                  policies, inform decisions regarding Marine Protected Areas,
                  and shape engaging public education campaigns.
                </p>
              </a>
            </div>
            <div className=" w-1/3 flex justify-center h-2/3  ">
              <img
                className="w-5/6  transition-transform transform scale-100 group-hover:scale-250 rounded-lg"
                src="../public/images/o4.jpg"
                alt="beauty of oceans"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Research;
