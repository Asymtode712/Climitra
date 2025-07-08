import React from "react";

const Footer = () => {
  return (
    <div className="bg-[rgba(243,243,243,1)] flex w-full flex-col items-stretch px-4 md:px-16 pt-8 md:pt-16 pb-12 md:pb-20 max-w-full">
      {/* Top Row with Logo and Social Icon */}
      <div className="flex flex-wrap items-center gap-8 justify-between max-w-full">
        {/* Logo (Replace src with your own) */}
        <img
          src="images/group-52.svg"
          alt="Logo"
          className="w-36 h-9 object-contain"
        />

        {/* Social Media Icon */}
        <div className="flex min-w-[120px] items-center gap-4 justify-end flex-1 max-w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/fa40ec4c4f874f5487270f37d6db6a59/de99c908bb955142a103cd1a450a88dcbafb24ee?placeholderIfAbsent=true"
            alt="Social Media"
            className="aspect-square object-contain object-center w-8"
          />
        </div>
      </div>

      {/* Address */}
      <div className="flex mt-4 items-center gap-2 flex-wrap text-base font-montserrat">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/fa40ec4c4f874f5487270f37d6db6a59/f8e6161bef1d578bb80afedd76e94fd3d2297d2c?placeholderIfAbsent=true"
          alt="Location"
          className="aspect-square object-contain object-center w-5"
        />
        <div className="text-climitra-text font-medium leading-none">
          Connect with us -
        </div>
        <div className="text-climitra-text font-normal leading-7">
          2/4, Sarvpriya Vihar, Hauz Khas, Delhi 110016
        </div>
      </div>

      {/* Divider */}
      <div className="bg-climitra-green self-center flex mt-8 w-full max-w-4xl h-px" />

      {/* Bottom Section with Copyright & Links */}
      <div className="flex flex-wrap mt-8 w-full items-center gap-8 font-montserrat text-climitra-primary font-medium">
        <div className="text-climitra-primary text-xs leading-none flex-1">
          Climitra@2025. All rights reserved.
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-wrap items-center gap-4 text-sm leading-normal">
          {[
            "Home",
            "Industrial Decarbonization",
            "CDR",
            "Tech Suite",
            "Our Team",
            "Contact Us",
          ].map((label, index) => (
            <button
              key={index}
              onClick={() => {
                if (label === "CDR" && window.navigateTo) {
                  window.navigateTo("cdr");
                } else if (label === "Home" && window.navigateTo) {
                  window.navigateTo("home");
                }
              }}
              className={`${
                label !== "Contact Us" ? "rounded-full px-4 py-2 bg-white" : ""
              } text-climitra-primary hover:underline transition-all`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
