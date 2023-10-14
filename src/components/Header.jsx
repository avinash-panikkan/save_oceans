import React from "react";
import { useLocation,Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import { NavLink } from 'react-router-dom';

function Header() {
  const location = useLocation();
  if (location.pathname == "/") {
    return null;
  } else {
    return (
      <div className="bg-white h-20 flex items-center justify-between shadow-xl">
        <div className="logo w-24 h-24 flex ml-2 mb-4">
          <img src="../public/images/logo.png" alt="logo" />
        </div>
        <div className="flex gap-10 font-bold text-xl text-primary">
          <NavLink to='/home'><p>HOME</p></NavLink>
          <NavLink to='/survey'><p>SURVEY</p></NavLink>
          <NavLink to='/projects'><p>PROJECTS</p></NavLink>
          <NavLink to='/research'><p>RESEARCH</p></NavLink>
          <NavLink to='/about'><p>ABOUT</p></NavLink>
        </div>
        <div className="flex items-center gap-2 mr-4">
          <div className="relative">
            <input
              type="text"
              placeholder="  Search here"
              className="bg-white border rounded-3xl border-gray-500 w-80 py-2 pl-8 pr-4 focus:outline-none focus:border-blue-400"
            />

            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <SearchIcon className="text-gray-400 " />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
