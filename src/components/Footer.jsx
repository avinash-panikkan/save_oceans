import React from "react";
import { useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();
  if (location.pathname == "/") {
    return null;
  } else {
    return <div className="bg-secondary w-full h-24 pt-5 pl-10 text-white">
        <p>Contact Us: 9961xxxxxxx</p>
        <p>Email: saveoceans@xyz.com</p>
    </div>;
  }
}
export default Footer;
