import React, { useState } from "react";
import AnimatedImpact from "./AnimatedImpact";
import ClimitraHeader from "./ClimitraHeader";
import Footer from "./Footer";
import { Menu } from "lucide-react";

function ClimitraEngine() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[rgba(253,253,253,1)] flex flex-col overflow-hidden">
      {/* HERO SECTION */}
      <div className="relative w-full h-[611px] overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1C6248E5] to-[#00000000] z-0" />

        <ClimitraHeader 
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          menuItems={[
            { label: "Home", route: "home" },
            { label: "Industrial Decarbonization", route: "industrial" },
            { label: "CDR", route: "cdr" },
            { label: "Tech Suite", route: "tech" },
            { label: "Our Team", route: "team" }
          ]}
          showContactButton={true}
          zIndex={10}
        />

        {/* Hero Text */}
        <div className="absolute w-full top-[236px] px-4 sm:px-6 md:px-8 flex flex-col items-center z-10">
          <h1 className="text-white font-semibold font-montserrat leading-tight text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl max-w-[923px] text-center mx-auto">
            Unlocking India's billion-ton biomass opportunity for Climate Action
          </h1>

          {/* CTA Button */}
          <div className="mt-[85px] flex justify-center">
            <button className="w-32 sm:w-36 md:w-40 lg:w-44 h-9 sm:h-10 md:h-11 lg:h-12 px-4 py-2 bg-teal-800 rounded-full flex items-center justify-center gap-2 text-white text-sm font-semibold font-montserrat hover:bg-teal-700 transition-colors duration-200">
              Find out more
            </button>
          </div>
        </div>
      </div>

      {/* ABSOLUTE POSITIONED TIMELINE BLOCK */}
      <div className="w-[1280px] h-[1850px] relative bg-white overflow-hidden mx-auto my-12">
        <div className="w-96 h-0 left-[268px] top-[1426px] absolute outline outline-2 outline-offset-[-1px] outline-zinc-100"></div>
        <div className="w-80 h-0 left-[640px] top-[755px] absolute origin-top-left rotate-90 outline outline-2 outline-offset-[-1px] outline-lime-500"></div>
        <div className="w-80 h-0 left-[640px] top-[1102px] absolute origin-top-left rotate-90 outline outline-2 outline-offset-[-1px] outline-lime-500"></div>
        <div className="w-96 h-0 left-[640px] top-[376px] absolute origin-top-left rotate-90 outline outline-2 outline-offset-[-1px] outline-teal-800"></div>
        <div className="w-80 h-0 left-[695px] top-[1102px] absolute outline outline-2 outline-offset-[-1px] outline-zinc-100"></div>
        <div className="w-28 h-28 left-[1102px] top-[318px] absolute bg-white overflow-hidden flex items-center justify-center">
          <img
            src="images/satellite.png"
            alt="Satellite"
            className="w-24 h-24 object-contain"
          />
        </div>

        <div className="px-4 py-[5px] left-[722px] top-[448px] absolute bg-emerald-50 inline-flex justify-center items-center gap-2.5 overflow-hidden">
          <div className="justify-start text-teal-800 text-2xl font-semibold font-['Montserrat'] leading-7">
            Biomass Mapping and Mobilisation
          </div>
        </div>
        <div className="w-96 left-[745px] top-[517px] absolute inline-flex flex-col justify-start items-start gap-5">
          <div className="w-96 text-right justify-center text-neutral-500 text-lg font-normal font-['Source_Sans_Pro'] leading-snug tracking-wide">
            We digitize biomass supply chains using AI-led satellite mapping and
            local intel, mobilizing 1,000+ tons/day to meet industrial
            specs—solving visibility, quality, and logistics at scale for steel
            decarbonization.
          </div>
        </div>

        <button className="w-40 h-10 px-5 py-3 left-[1065px] top-[657px] absolute bg-teal-800 rounded-lg outline outline-[1.20px] outline-offset-[-1.20px] outline-teal-800 inline-flex justify-center items-center gap-2.5 overflow-hidden">
          <span className="text-center text-white text-base font-medium font-['Montserrat'] whitespace-nowrap">
            Know More
          </span>
        </button>
        <button className="w-40 h-10 px-5 py-3 left-[88px] top-[1039px] absolute bg-teal-800 rounded-lg outline outline-[1.20px] outline-offset-[-1.20px] outline-teal-800 inline-flex justify-center items-center gap-2.5 overflow-hidden">
          <span className="text-center text-white text-base font-medium font-['Montserrat'] whitespace-nowrap">
            Know More
          </span>
        </button>
        <div className="px-4 py-[5px] left-[88px] top-[830px] absolute bg-emerald-50 inline-flex justify-center items-center gap-2.5 overflow-hidden">
          <div className="justify-start text-teal-800 text-2xl font-semibold font-['Montserrat'] leading-7">
            Bespoke Conversion Technology
          </div>
        </div>
        <div className="w-96 left-[88px] top-[899px] absolute inline-flex flex-col justify-start items-start gap-5">
          <div className="self-stretch justify-center text-neutral-500 text-lg font-normal font-['Source_Sans_Pro'] leading-snug tracking-wide">
            We build advanced pyrolysis systems tailored to local biomass,
            delivering consistent quality across 25+ industrial parameters
            including calorific value, volatile matter, ash, moisture, and fixed
            carbon.
          </div>
        </div>
        <img
          className="w-24 h-24 left-[88px] top-[710px] absolute"
          src="images/fire.png"
          alt=""
        />
        <div className="px-4 py-[5px] left-[828px] top-[1177px] absolute bg-emerald-50 inline-flex justify-center items-center gap-2.5 overflow-hidden">
          <div className="justify-start text-teal-800 text-2xl font-semibold font-['Montserrat'] leading-7">
            Industrial Decarbonization
          </div>
        </div>
        <div className="w-96 left-[778px] top-[1246px] absolute inline-flex flex-col justify-start items-start gap-5">
          <div className="self-stretch text-right justify-center text-neutral-500 text-lg font-normal font-['Source_Sans_Pro'] leading-snug tracking-wide">
            We integrate into steel plants with dynamic biochar blending,
            real-time emissions tracking, and ESG dashboards—fully aligned with
            CBAM, CCTS, and green steel compliance pathways.
          </div>
        </div>
        <button className="w-40 h-10 px-5 py-3 left-[1065px] top-[1364px] absolute bg-teal-800 rounded-lg outline outline-[1.20px] outline-offset-[-1.20px] outline-teal-800 inline-flex justify-center items-center gap-2.5 overflow-hidden">
          <span className="text-center text-white text-base font-medium font-['Montserrat'] whitespace-nowrap">
            Know More
          </span>
        </button>
        <img
          className="w-24 h-24 left-[1102px] top-[1057px] absolute"
          src="images/smoke.png"
          alt=""
        />
        <img
          className="w-8 h-8 left-[241px] top-[742px] absolute"
          src="/images/ellipse-124.svg"
          alt="Ellipse"
        />
        <div className="px-4 py-[5px] left-[94px] top-[1501px] absolute bg-emerald-50 inline-flex justify-center items-center gap-2.5 overflow-hidden">
          <div className="justify-start text-teal-800 text-2xl font-semibold font-['Montserrat'] leading-7">
            Carbon Market Integration
          </div>
        </div>
        <div className="w-96 left-[94px] top-[1570px] absolute inline-flex flex-col justify-start items-start gap-5">
          <div className="self-stretch justify-center text-neutral-500 text-lg font-normal font-['Source_Sans_Pro'] leading-snug tracking-wide">
            We generate high-integrity carbon removal credits through a digital
            MRV framework, enabling 100+ year carbon sequestration and access to
            both voluntary and compliance markets.
          </div>
        </div>
        <button className="w-32 h-10 px-5 py-3 left-[94px] top-[1710px] absolute bg-teal-800 rounded-lg outline outline-[1.20px] outline-offset-[-1.20px] outline-teal-800 inline-flex justify-center items-center gap-2.5 overflow-hidden">
          <span className="text-center text-white text-base font-medium font-['Montserrat']">
            Know More
          </span>
        </button>
        <img
          className="w-24 h-24 left-[94px] top-[1381px] absolute"
          src="images/tree.png"
          alt=""
        />
        <div className="w-28 h-28 left-[586px] top-[318px] absolute bg-white rounded-[85px] outline outline-2 outline-offset-[-2px] outline-zinc-100 overflow-hidden flex items-center justify-center">
          <img
            src="/images/timeline-item.svg"
            alt="Timeline Item"
            className="w-24 h-24 object-contain"
          />
        </div>
        <div
          className="w-80 h-0 left-[695px] top-[373px] absolute border-t-2 border-dotted"
          style={{ borderColor: "#1C6248" }}
        ></div>
        <img
          className="w-8 h-8 left-[1007.28px] top-[357px] absolute"
          src="/images/ellipse-124.svg"
          alt="Ellipse"
        />
        <div
          data-property-1="Component 35"
          className="w-80 h-6 left-[701px] top-[360px] absolute"
        ></div>
        <div className="w-24 h-8 left-[819px] top-[356px] absolute bg-teal-800 rounded-xl outline outline-2 outline-offset-[-2px] outline-teal-800 overflow-hidden">
          <div className="left-[18px] top-[9px] absolute text-center justify-start text-white text-xs font-semibold font-['Montserrat'] leading-none">
            Biomass
          </div>
        </div>
        <div className="w-96 h-0 left-[273px] top-[758px] absolute outline outline-2 outline-offset-[-1px] outline-teal-800"></div>
        <img
          className="w-8 h-8 left-[246px] top-[1410px] absolute"
          src="/images/ellipse-124.svg"
          alt="Ellipse"
        />
        <div className="w-28 h-28 left-[586px] top-[701px] absolute bg-white rounded-[85px] outline outline-2 outline-offset-[-2px] outline-zinc-100 overflow-hidden flex items-center justify-center">
          <img
            src="/images/timeline-item.svg"
            alt="Timeline Item"
            className="w-24 h-24 object-contain"
          />
        </div>
        <div className="w-28 h-28 left-[586px] top-[1047px] absolute bg-white rounded-[85px] outline outline-2 outline-offset-[-2px] outline-zinc-100 overflow-hidden flex items-center justify-center">
          <img
            src="/images/timeline-item.svg"
            alt="Timeline Item"
            className="w-24 h-24 object-contain"
          />
        </div>
        <div className="w-24 h-8 left-[811px] top-[1085px] absolute bg-lime-500 rounded-xl overflow-hidden">
          <div className="left-[21px] top-[9px] absolute text-center justify-start text-white text-xs font-semibold font-['Montserrat'] leading-none">
            Biochar
          </div>
        </div>
        <div className="w-28 h-28 left-[586px] top-[1371px] absolute bg-white rounded-[85px] outline outline-2 outline-offset-[-2px] outline-zinc-100 overflow-hidden flex items-center justify-center">
          <img
            src="/images/timeline-item.svg"
            alt="Timeline Item"
            className="w-24 h-24 object-contain"
          />
        </div>
        <div className="w-24 h-8 left-[407px] top-[1410px] absolute bg-lime-500 rounded-xl overflow-hidden">
          <div className="left-[21px] top-[9px] absolute text-center justify-start text-white text-xs font-semibold font-['Montserrat'] leading-none">
            Biochar
          </div>
        </div>
        <img
          className="w-8 h-8 left-[1007.28px] top-[1086px] absolute"
          src="/images/ellipse-124.svg"
          alt="Ellipse"
        />
        <div className="w-[601px] left-[339px] top-[80px] absolute text-center justify-start">
          <span className="text-neutral-950 text-4xl font-semibold font-['Montserrat'] leading-[50px]">
            Behind the{" "}
          </span>
          <span className="text-teal-800 text-4xl font-semibold font-['Montserrat'] leading-[50px]">
            Climitra Engine
          </span>
        </div>
        <div className="w-32 h-0 left-[573px] top-[148px] absolute outline outline-4 outline-offset-[-2px] outline-teal-800"></div>
        <div className="w-[1016px] left-[132px] top-[178px] absolute text-center justify-center">
          <span className="text-neutral-500 text-xl font-normal font-['Montserrat'] leading-loose">
            Building a{" "}
          </span>
          <span className="text-teal-800 text-xl font-semibold font-['Montserrat'] leading-loose">
            vertically integrated ecosystem
          </span>
          <span className="text-neutral-500 text-xl font-normal font-['Montserrat'] leading-loose">
            {" "}
            for waste biomass-driven industrial decarbonization and carbon
            dioxide removal (CDR) in India
          </span>
        </div>
      </div>
      {/* IMPACT SECTION */}

      <AnimatedImpact />

      {/* CURRENT PROJECTS SECTION - Fixed width, 80px gap, center-aligned */}
      <div className="px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-[#0c0c0c] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-none font-montserrat">
            Our <span className="text-climitra-green">Current</span> Projects
          </h2>
          <div className="w-20 sm:w-24 md:w-32 h-1 bg-climitra-green mx-auto mt-3 sm:mt-4 md:mt-6"></div>
        </div>

        <div className="max-w-[1024px] mx-auto mt-[80px] flex flex-col items-center lg:flex-row lg:justify-center lg:gap-[80px]">
          {/* Project 1 */}
          <div className="w-[284px] h-[307px] flex flex-col justify-between rounded-xl bg-climitra-bg-green overflow-hidden shadow-lg hover:shadow-xl transition-shadow mb-12 lg:mb-0">
            <div className="aspect-[1.775] relative overflow-hidden">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/fa40ec4c4f874f5487270f37d6db6a59/389c7961cf69c74d45a01118e0bd13ccdbf78a96?placeholderIfAbsent=true"
                alt="Uttarakhand Project"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="pt-[24px] px-4 pb-5">
              <h3 className="text-climitra-green text-base sm:text-lg md:text-xl font-medium leading-tight font-montserrat">
                Uttarakhand
              </h3>
              <p className="text-climitra-text italic text-sm sm:text-base leading-relaxed mt-1">
                Lantana camara
              </p>
              <div className="mt-4">
                <span className="inline-flex items-center justify-center rounded-md border border-climitra-green px-4 py-2 text-sm font-medium text-climitra-green">
                  Coming Soon
                </span>
              </div>
            </div>
          </div>

          {/* Project 2 (center) */}
          <div className="w-[284px] h-[307px] flex flex-col justify-between rounded-xl bg-climitra-bg-green overflow-hidden shadow-lg hover:shadow-xl transition-shadow mb-12 lg:mb-0">
            <div className="aspect-[1.775] relative overflow-hidden">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/fa40ec4c4f874f5487270f37d6db6a59/6b12783ee2f81663334c50ab55a560fdb37dff93?placeholderIfAbsent=true"
                alt="Punjab Project"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="pt-[24px] px-4 pb-5">
              <h3 className="text-climitra-green text-base sm:text-lg md:text-xl font-medium leading-tight font-montserrat">
                Punjab
              </h3>
              <p className="text-climitra-text italic text-sm sm:text-base leading-relaxed mt-1">
                Rice stubble
              </p>
              <div className="mt-4">
                <span className="inline-flex items-center justify-center rounded-md border border-climitra-green px-4 py-2 text-sm font-medium text-climitra-green">
                  Coming Soon
                </span>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="w-[284px] h-[307px] flex flex-col justify-between rounded-xl bg-climitra-bg-green overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="aspect-[1.775] relative overflow-hidden">
              <img
                src="images/image-101.png"
                alt="Gujarat Project"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="pt-[24px] px-4 pb-5">
              <h3 className="text-climitra-green text-base sm:text-lg md:text-xl font-medium leading-tight font-montserrat">
                Gujarat
              </h3>
              <p className="text-climitra-text italic text-sm sm:text-base leading-relaxed mt-1">
                Prosopis juliflora
              </p>
              <div className="mt-4">
                <span className="inline-flex items-center justify-center rounded-md border border-climitra-green px-4 py-2 text-sm font-medium text-climitra-green">
                  Coming Soon
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* START YOUR JOURNEY SECTION */}
      <div className="bg-[rgba(250,250,250,1)] px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-[#0c0c0c] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-none font-montserrat">
            Start your{" "}
            <span className="text-climitra-green">journey today</span> with us
          </h2>
          <div className="w-20 sm:w-24 md:w-32 h-1 bg-climitra-green mx-auto mt-3 sm:mt-4 md:mt-6"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[80px] gap-y-[80px] mt-8 sm:mt-12 md:mt-16 lg:mt-20 px-4 sm:px-8 lg:px-[175px] place-items-center">
            {[
              {
                img: "https://cdn.builder.io/api/v1/image/assets/fa40ec4c4f874f5487270f37d6db6a59/b377c6313c9e46f2b7081d0c0609c2a6ea51713b?placeholderIfAbsent=true",
                title: "Credit Buyers",
                desc: "Explore verified carbon credits",
                cta: "Explore",
                arrow:
                  "https://cdn.builder.io/api/v1/image/assets/fa40ec4c4f874f5487270f37d6db6a59/422e4d2b95e4dc3d8c6b01042244c338355f67ac?placeholderIfAbsent=true",
              },
              {
                img: "https://cdn.builder.io/api/v1/image/assets/fa40ec4c4f874f5487270f37d6db6a59/358ea4d139e39d6dba3446844d09388bd21cbc9a?placeholderIfAbsent=true",
                title: "Industrial Partners",
                desc: "Discover fossil fuel replacement solutions",
                cta: "Discover",
                arrow:
                  "https://cdn.builder.io/api/v1/image/assets/fa40ec4c4f874f5487270f37d6db6a59/60be63b5e06df429cad54f4c29ed758644c99cc5?placeholderIfAbsent=true",
              },
              {
                img: "https://cdn.builder.io/api/v1/image/assets/fa40ec4c4f874f5487270f37d6db6a59/b0a09aeaf89bbfa497b83c19260926f8a4ff2d90?placeholderIfAbsent=true",
                title: "Researchers & NGOs",
                desc: "Access our technology platform",
                cta: "Our Technology",
                arrow:
                  "https://cdn.builder.io/api/v1/image/assets/fa40ec4c4f874f5487270f37d6db6a59/dc4ff0ac9a84b69ec6e0859e2dffadb2e4e94b87?placeholderIfAbsent=true",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="w-[256px] h-[283px] rounded-xl bg-climitra-bg-green flex flex-col justify-between overflow-hidden shadow-lg transition-transform hover:scale-105"
              >
                <div className="pt-6 px-4 pb-4">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-20 h-20 object-contain mx-auto"
                  />
                  <div className="mt-5 h-px border border-dashed border-climitra-green" />
                  <div className="mt-5 text-left">
                    <h3 className="text-[rgba(28,98,72,1)] text-[17px] font-medium leading-[1.3] font-montserrat">
                      {card.title}
                    </h3>
                    <p className="text-climitra-text text-[13.8px] font-light leading-[1.4] mt-2">
                      {card.desc}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between px-4 h-[56px] bg-climitra-green text-white font-semibold text-[15px] rounded-b-xl">
                  <span>{card.cta}</span>
                  <img
                    src={card.arrow}
                    alt="Arrow"
                    className="w-[18px] h-[18px] object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default ClimitraEngine;
