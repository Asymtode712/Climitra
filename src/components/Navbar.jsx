// src/components/Navbar.jsx
import React from "react";

const Navbar = () => {
    return (
       <div className="hidden md:flex items-center gap-[30px] ml-[265px]">
              <div className="text-white text-lg font-bold font-montserrat cursor-pointer hover:text-teal-200 transition-colors">
                Home
              </div>
              <div className="text-white text-lg font-medium font-montserrat cursor-pointer hover:text-teal-200 transition-colors">
                Industrial Decarbonization
              </div>
              <div className="text-white text-lg font-medium font-montserrat cursor-pointer hover:text-teal-200 transition-colors">
                CDR
              </div>
              <div className="text-white text-lg font-medium font-montserrat cursor-pointer hover:text-teal-200 transition-colors">
                Tech Suite
              </div>
              <div className="text-white text-lg font-medium font-montserrat cursor-pointer hover:text-teal-200 transition-colors">
                Our Team
              </div>
            </div>
    );
};

export default Navbar;
