import React, { useState } from "react";
import ClimitraHeader from "./ClimitraHeader";
import Footer from "./Footer";

const TeamPage = () => {
  const [activeTab, setActiveTab] = useState("team");
  const [isExpanded, setIsExpanded] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#FDFDFD] flex flex-col overflow-hidden">
      {/* HERO SECTION */}
      <div className="relative w-full h-[611px] overflow-hidden">
        <img
          src="/images/team.png"
          alt="Team Hero Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1C6248E5] to-[#00000000] z-10" />

        <ClimitraHeader
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          menuItems={[
            { label: "Home", route: "home" },
            { label: "Industrial Decarbonization", route: "industrial" },
            { label: "CDR", route: "cdr" },
            { label: "Tech Suite", route: "tech" },
            { label: "Our Team", route: "team" },
          ]}
          showContactButton={true}
          zIndex={20}
        />

        <div className="absolute w-full top-[242.21px] px-4 flex flex-col items-center z-20">
          <div className="w-[302px] h-[72px] flex items-center justify-center">
            <h1 className="text-white text-[60px] leading-[120%] font-semibold font-montserrat text-center">
              Our Team
            </h1>
          </div>
          <div className="w-[468px] h-[29px] mt-[40px] flex items-center justify-center">
            <p className="text-white text-[24px] leading-[100%] font-semibold font-montserrat text-center">
              Driven by <span className="text-white">Purpose.</span> Defined by
              People
            </p>
          </div>
        </div>
      </div>

      {/* MEET THE TEAM SECTION */}
      <div className="w-full bg-[#FDFDFD] py-20">
        <div className="max-w-6xl mx-auto px-8">
          {/* Section Header */}
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-[36px] font-bold font-montserrat leading-[44px] mb-4 text-center">
              <span className="text-[#0C0C0C]">Meet the </span>
              <span className="text-[#1C6248]">Team</span>
            </h2>
            <div className="w-[134px] h-1 bg-[#1C6248] rounded"></div>
          </div>

          {/* Team Description */}
          <div className="text-center mb-24 -mx-[13px]">
            <p className="text-[#6C6C6C] text-xl font-montserrat font-normal leading-[30px]">
              Climitra's founding team is a group of dynamic engineers
              passionate about climate solutions. With experience at firms like
              McKinsey, Schlumberger, and Bain, we bring deep technical and
              operational expertise. Our backgrounds span climate innovation,
              advanced engineering, and scalable sustainability solutions.
              Driven by impact, we're unlocking India's billion-ton biomass
              opportunity.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex items-center justify-center mb-16">
            <div className="flex items-center bg-white rounded-lg">
              <div className="relative">
                <button
                  onClick={() => setActiveTab("team")}
                  className={`px-6 py-3 text-2xl font-bold font-montserrat transition-colors ${
                    activeTab === "team" ? "text-[#1C6248]" : "text-[#C9C9C8]"
                  }`}
                >
                  Team
                </button>
                {activeTab === "team" && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[27px] h-1 bg-[#1C6248]"></div>
                )}
              </div>
              
              <div className="relative">
                <button
                  onClick={() => setActiveTab("advisors")}
                  className={`px-6 py-3 text-2xl font-bold font-montserrat transition-colors ${
                    activeTab === "advisors" ? "text-[#1C6248]" : "text-[#C9C9C8]"
                  }`}
                >
                  Advisors
                </button>
                {activeTab === "advisors" && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[27px] h-1 bg-[#1C6248]"></div>
                )}
              </div>
            </div>
          </div>

          {/* Team Tab Content */}
          {activeTab === "team" && (
            <div>
              {/* Founders Section */}
              <div className="flex flex-col items-center mb-24">
                <h3 className="text-[#1C6248] text-[24px] font-bold font-montserrat mb-2">
                  Founders
                </h3>
                <div className="w-[27px] h-1 bg-[#1C6248] mb-16"></div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-20 max-w-6xl w-full justify-items-center">
                  {/* Shubhankar Mihir Seth */}
                  <div className="flex flex-col items-center">
                    <div className="relative w-[180px] h-[180px] mb-6">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[#1C6248] to-[#6BBD4E] p-1">
                        <div className="w-full h-full rounded-full overflow-hidden bg-white">
                          <img
                            src="/images/Headshot 1.png"
                            alt="Shubhankar Mihir Seth"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-1">
<div className="w-[28px] h-[28px] border-[1.5px] border-[#1C6248] rounded-[5px] px-[7px] pt-[7px] pb-[6px] pr-[6px] box-border flex items-center justify-center">
  <img src="/images/linkedin_teams.png" alt="LinkedIn" className="w-full h-full object-contain" />
</div>

                      <h4 className="text-[#1C6248] text-[18px] font-medium font-montserrat">
                        Shubhankar Mihir Seth
                      </h4>
                    </div>
                  </div>

                  {/* Shaurya Sharma */}
                  <div className="flex flex-col items-center">
                    <div className="relative w-[180px] h-[180px] mb-6">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[#1C6248] to-[#4D9A4B] p-1">
                        <div className="w-full h-full rounded-full overflow-hidden bg-white">
                          <img
                            src="/images/Shaurya 3.png"
                            alt="Shaurya Sharma"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-1">
                     <div className="w-[28px] h-[28px] border-[1.5px] border-[#1C6248] rounded-[5px] px-[7px] pt-[7px] pb-[6px] pr-[6px] box-border flex items-center justify-center">
  <img src="/images/linkedin_teams.png" alt="LinkedIn" className="w-full h-full object-contain" />
</div>

                      <h4 className="text-[#1C6248] text-[18px] font-medium font-montserrat">
                        Shaurya Sharma
                      </h4>
                    </div>
                  </div>

                  {/* Aryaman Mihir Seth */}
                  <div className="flex flex-col items-center">
                    <div className="relative w-[180px] h-[180px] mb-6">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[#1C6248] to-[#509E4C] p-1">
                        <div className="w-full h-full rounded-full overflow-hidden bg-white">
                          <img
                            src="/images/Aryaman Photo 4.png"
                            alt="Aryaman Mihir Seth"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-1">
<div className="w-[28px] h-[28px] border-[1.5px] border-[#1C6248] rounded-[5px] px-[7px] pt-[7px] pb-[6px] pr-[6px] box-border flex items-center justify-center">
  <img src="/images/linkedin_teams.png" alt="LinkedIn" className="w-full h-full object-contain" />
</div>

                      <h4 className="text-[#1C6248] text-[18px] font-medium font-montserrat">
                        Aryaman Mihir Seth
                      </h4>
                    </div>
                  </div>
                </div>
              </div>

              {/* Core Team Section */}
              <div className="flex flex-col items-center mb-24">
                <h3 className="text-[#1C6248] text-[24px] font-bold font-montserrat mb-2">
                  Core Team
                </h3>
                <div className="w-[27px] h-1 bg-[#1C6248] mb-16"></div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-20 max-w-6xl w-full justify-items-center">
                  {/* Nandini Kaushik */}
                  <div className="flex flex-col items-center">
                    <div className="relative w-[180px] h-[180px] mb-6">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[#1C6248] to-[#4D9A4B] p-1">
                        <div className="w-full h-full rounded-full overflow-hidden bg-white">
                          <img
                            src="/images/Shaurya 3.png"
                            alt="Nandini Kaushik"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-1">
                     <div className="w-[28px] h-[28px] border-[1.5px] border-[#1C6248] rounded-[5px] px-[7px] pt-[7px] pb-[6px] pr-[6px] box-border flex items-center justify-center">
  <img src="/images/linkedin_teams.png" alt="LinkedIn" className="w-full h-full object-contain" />
</div>

                      <h4 className="text-[#1C6248] text-[18px] font-medium font-montserrat">
                        Nandini Kaushik
                      </h4>
                    </div>
                  </div>

                  {/* Sanat Vohra */}
                  <div className="flex flex-col items-center">
                    <div className="relative w-[180px] h-[180px] mb-6">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[#1E6448] to-[#6ABC4E] p-1">
                        <div className="w-full h-full rounded-full overflow-hidden bg-white">
                          <img
                            src="/images/unnamed2.png"
                            alt="Sanat Vohra"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-1">
                     <div className="w-[28px] h-[28px] border-[1.5px] border-[#1C6248] rounded-[5px] px-[7px] pt-[7px] pb-[6px] pr-[6px] box-border flex items-center justify-center">
  <img src="/images/linkedin_teams.png" alt="LinkedIn" className="w-full h-full object-contain" />
</div>

                      <h4 className="text-[#1C6248] text-[18px] font-medium font-montserrat">
                        Sanat Vohra
                      </h4>
                    </div>
                  </div>

                  {/* Aman Agarwal */}
                  <div className="flex flex-col items-center">
                    <div className="relative w-[180px] h-[180px] mb-6">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[#1D6348] to-[#6BBD4E] p-1">
                        <div className="w-full h-full rounded-full overflow-hidden bg-white">
                          <img
                            src="/images/unnamed3.png"
                            alt="Aman Agarwal"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-[28px] h-[28px] border-[1.5px] border-[#1C6248] rounded-[5px] px-[7px] pt-[7px] pb-[6px] pr-[6px] box-border flex items-center justify-center">
  <img src="/images/linkedin_teams.png" alt="LinkedIn" className="w-full h-full object-contain" />
</div>

                      <h4 className="text-[#1C6248] text-[18px] font-medium font-montserrat">
                        Aman Agarwal
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Advisors Tab Content */}
          {activeTab === "advisors" && (
            <div>
              {/* Profile Card & Details Section */}
              <div
                className={`flex ${isExpanded ? "flex-col items-center" : "flex-row items-start justify-center gap-12"} mb-16`}
              >
                {/* Image */}
                <div className="relative w-[201px] h-[257px] flex-shrink-0 mb-8 lg:mb-0">
                  <img
                    src="/images/prof.png"
                    alt="Prof. Vikram Vishal"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-12 bg-white rounded-b-lg" />
                </div>

                {/* Info Block */}
                <div
                  className={`flex flex-col ${isExpanded ? "items-center" : "items-start justify-start mt-8"} text-left`}
                >
                  {/* LinkedIn + Name */}
                  <div
                    className={`flex items-center gap-2 mb-2 ${isExpanded ? "justify-center" : ""}`}
                  >
                    <div className="w-6 h-6 border-[1.5px] border-[#1C6248] rounded flex items-center justify-center">
                      <img
                        src="/images/linkedin_teams.png"
                        alt="LinkedIn"
                        className="w-3 h-3"
                      />
                    </div>
                    <h3 className="text-[#1C6248] text-xl font-medium font-montserrat">
                      Prof. Vikram Vishal
                    </h3>
                  </div>

                  {/* Designation */}
                  <p
                    className={`text-[#767676] text-[16px] font-light font-montserrat leading-[30px] ${isExpanded ? "text-center" : "text-left"}`}
                  >
                    Professor, IIT Bombay
                  </p>
                  <p
                    className={`text-[#767676] text-[16px] font-light font-montserrat leading-[30px] ${isExpanded ? "text-center" : "text-left"}`}
                  >
                    Founder, UrjanovaC
                  </p>

                  {/* Read More Button - only when not expanded */}
                  {!isExpanded && (
                    <div className="mt-4">
                      <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="flex items-center gap-3 bg-[#1C6248] text-white px-6 py-2 rounded-lg font-bold font-montserrat transition-all hover:bg-[#0F4D36]"
                      >
                        <span>Read More</span>
                        <svg
                          className="w-3 h-2.5 transition-transform rotate-180"
                          viewBox="0 0 12 10"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5.29341 2.93683C5.48094 2.74936 5.73524 2.64404 6.00041 2.64404C6.26557 2.64404 6.51988 2.74936 6.70741 2.93683L10.7074 6.93683C10.8896 7.12543 10.9904 7.37803 10.9881 7.64023C10.9858 7.90243 10.8806 8.15324 10.6952 8.33865C10.5098 8.52406 10.259 8.62922 9.99681 8.6315C9.73461 8.63378 9.48201 8.53299 9.29341 8.35083L6.00041 5.05783L2.70741 8.35083C2.5188 8.53299 2.2662 8.63378 2.00401 8.6315C1.74181 8.62922 1.491 8.52406 1.30559 8.33865C1.12018 8.15324 1.01501 7.90243 1.01273 7.64023C1.01045 7.37803 1.11125 7.12543 1.29341 6.93683L5.29341 2.93683Z"
                            fill="white"
                          />
                        </svg>
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Detailed Bio - only when expanded */}
              {isExpanded && (
                <div className="text-center mb-8 -mx-[42px]">
                  <p className="text-[#6C6C6C] font-montserrat font-normal text-[16px] leading-[30px] text-center">
                    Prof. Vikram Vishal serves as a Professor in the Department
                    of Earth Sciences, and the Centre for Climate Studies, at
                    IIT Bombay. His academic journey includes various roles at
                    MIT, Stanford University, Monash University, IIT Roorkee,
                    IIT Bhubaneswar along with professional stints at Tata Steel
                    and Shell. He is the Convener of the DST-National Centre of
                    Excellence in CCUS, and is also the founder and CEO of
                    UrjanovaC Private Limited - a clean energy and net-zero
                    solutions company.
                    <br />
                    <br />
                    Prof. Vishal specializes in decarbonization and enhanced
                    energy recovery. He engages as a CCUS Expert and a Knowledge
                    Partner to lead Indian industries, multiple ministries and
                    chairs two subcommittees on CCUS at the Bureau of Indian
                    Standards. He also serves as the key National Expert on CCUS
                    and CO₂ removal for intergovernmental negotiations at the
                    IPCC.
                    <br />
                    <br />
                    Prof. Vishal holds recognition from all major science
                    academies in India. A three-time national award and two-time
                    Fulbright fellowship recipient, he has authored over a
                    hundred scientific research publications, a dozen national
                    and international S&T roadmaps, and has received five
                    patents.
                  </p>

                  {/* Close Button - positioned below the paragraph */}
                  <div className="flex justify-center mt-12">
                    <button
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="flex items-center gap-3 bg-[#1C6248] text-white px-6 py-2 rounded-lg font-bold font-montserrat transition-all hover:bg-[#0F4D36]"
                    >
                      <span>Close</span>
                      <svg
                        className="w-3 h-2.5 transition-transform rotate-0"
                        viewBox="0 0 12 10"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.29341 2.93683C5.48094 2.74936 5.73524 2.64404 6.00041 2.64404C6.26557 2.64404 6.51988 2.74936 6.70741 2.93683L10.7074 6.93683C10.8896 7.12543 10.9904 7.37803 10.9881 7.64023C10.9858 7.90243 10.8806 8.15324 10.6952 8.33865C10.5098 8.52406 10.259 8.62922 9.99681 8.6315C9.73461 8.63378 9.48201 8.53299 9.29341 8.35083L6.00041 5.05783L2.70741 8.35083C2.5188 8.53299 2.2662 8.63378 2.00401 8.6315C1.74181 8.62922 1.491 8.52406 1.30559 8.33865C1.12018 8.15324 1.01501 7.90243 1.01273 7.64023C1.01045 7.37803 1.11125 7.12543 1.29341 6.93683L5.29341 2.93683Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default TeamPage;
