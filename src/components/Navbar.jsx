// src/components/Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <nav className="absolute top-[77px] left-[334px] flex items-center gap-7 z-10">
      <div className="text-white text-lg font-bold font-['Montserrat'] text-center">Home</div>
      <div className="text-white text-lg font-medium font-['Montserrat'] text-center">Industrial Decarbonization</div>
      <div className="text-white text-lg font-medium font-['Montserrat'] text-center">CDR</div>
      <div className="text-white text-lg font-medium font-['Montserrat'] text-center">Tech Suite</div>
      <div className="text-white text-lg font-medium font-['Montserrat'] text-center">Our Team</div>
    </nav>
  );
};

export default Navbar;
