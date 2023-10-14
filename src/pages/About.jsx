import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="w-full h-screen flex">
      <div className="w-2/3 pl-10 flex flex-col gap-5 pt-5 pr-8">
        <p className="font-bold text-primary text-6xl">About Us</p>
        <p className="text-lg">
          Welcome to{" "}
          <span className="text-primary font-semibold">Save Oceans</span>, where
          passion meets purpose in our commitment to safeguarding the oceans. At
          the core of our mission is a deep reverence for the immense beauty and
          life-giving force of the world's oceans. We recognize the urgent need
          to address the threats facing these vital ecosystems, particularly the
          pervasive challenge of pollution. Our journey begins with a shared
          belief that every drop counts, and by fostering awareness, education,
          and actionable change, we strive to create a ripple effect towards
          cleaner, healthier oceans. From advocating for responsible waste
          management to championing sustainable practices, Save Oceans serves as
          a beacon for individuals and communities eager to make a positive
          impact. Join us in the movement for anti-pollutant oceans—where the
          majesty of the sea is preserved for generations to come. Together,
          let's turn the tide and nurture a future where our oceans thrive,
          pristine and resilient.
        </p>
        <div className="h-20  flex items-center justify-center gap-6">
          <Link>
            <div className="bg-primary w-14 h-14 rounded-full flex justify-center items-center">
              <LinkedInIcon
                style={{ width: "40px", height: "40px", color: "white" }}
              />
            </div>
          </Link>
          <Link>
            <div className="bg-primary w-14 h-14 rounded-full flex justify-center items-center">
              <EmailIcon
                style={{ width: "40px", height: "40px", color: "white" }}
              />
            </div>
          </Link>
          <Link>
            <div className="bg-primary w-14 h-14 rounded-full flex justify-center items-center">
              <PhoneIcon
                style={{ width: "40px", height: "40px", color: "white" }}
              />
            </div>
          </Link>
        </div>
        <div className="h-20 flex justify-center items-center gap-8">
          <Link to={"/contact"}>
            <button className="bg-secondary hover:bg-primary px-4 py-2 rounded-lg text-white font-semibold">
              Contact Us
            </button>
          </Link>
          <Link>
            <button className="bg-secondary hover:bg-primary px-4 py-2 rounded-lg text-white font-semibold">
              Donate
            </button>
          </Link>
        </div>
      </div>
      <div className=" w-1/3 flex flex-col justify-center h-full items-center gap-10">
        <div className="bg-gray-100 w-4/5 h-2/5 flex flex-col justify-center items-center gap-1 shadow-xl rounded-xl cursor-pointer">
          <img
            src="../public/images/ocean_img.jpg"
            alt="Oceans"
            className="h-3/4 w-4/5 rounded-lg"
          />
          <p className="font-semibold text-xl text-primary">Oceans</p>
        </div>

        <div className="bg-gray-100 w-4/5 h-2/5 flex flex-col justify-center items-center gap-1 shadow-xl rounded-xl cursor-pointer">
          <img
            src="../public/images/rivers.jpg"
            alt="Oceans"
            className="h-3/4 w-4/5 rounded-lg"
          />
          <p className="font-semibold text-xl text-primary">Rivers</p>
        </div>
      </div>
    </div>
  );
}

export default About;
