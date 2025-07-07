// src/components/Navbar.jsx
import React from "react";

const Navbar = () => {
    return (
       <nav className="absolute hidden lg:flex top-[77px] left-[334px] items-center gap-7 z-10">
          <div className="text-white text-lg font-bold font-montserrat text-center cursor-pointer hover:text-teal-200 transition-colors">
            Home
          </div>
          <div className="text-white text-lg font-medium font-montserrat text-center cursor-pointer hover:text-teal-200 transition-colors">
            Industrial Decarbonization
          </div>
          <div className="text-white text-lg font-medium font-montserrat text-center cursor-pointer hover:text-teal-200 transition-colors">
            CDR
          </div>
          <div className="text-white text-lg font-medium font-montserrat text-center cursor-pointer hover:text-teal-200 transition-colors">
            Tech Suite
          </div>
          <div className="text-white text-lg font-medium font-montserrat text-center cursor-pointer hover:text-teal-200 transition-colors">
            Our Team
          </div>
        </nav>
    );
};

export default Navbar;
