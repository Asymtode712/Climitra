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
      <div className="relative w-full h-[38.1875rem] overflow-hidden">
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
        <div className="absolute w-full top-[14.75rem] px-4 sm:px-6 md:px-8 flex flex-col items-center z-10">
          <h1 className="text-white font-semibold font-montserrat leading-tight text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl max-w-[57.6875rem] text-center mx-auto">
            Unlocking India's billion-ton biomass opportunity for Climate Action
          </h1>

          {/* CTA Button */}
          <div className="mt-[5.3125rem] flex justify-center">
            <button className="w-32 sm:w-36 md:w-40 lg:w-44 h-9 sm:h-10 md:h-11 lg:h-12 px-4 py-2 bg-teal-800 rounded-full flex items-center justify-center gap-2 text-white text-sm font-semibold font-montserrat hover:bg-teal-700 transition-colors duration-200">
              Find out more
            </button>
          </div>
        </div>
      </div>

      {/* ABSOLUTE POSITIONED TIMELINE BLOCK */}
      <div className="w-[80.0rem] h-[115.625rem] relative bg-white overflow-hidden mx-auto my-12">
        <div className="w-96 h-0 left-[16.75rem] top-[89.125rem] absolute outline outline-2 outline-offset-[-0.0625rem] outline-zinc-100"></div>
        <div className="w-80 h-0 left-[40.0rem] top-[47.1875rem] absolute origin-top-left rotate-90 outline outline-2 outline-offset-[-0.0625rem] outline-lime-500"></div>
        <div className="w-80 h-0 left-[40.0rem] top-[68.875rem] absolute origin-top-left rotate-90 outline outline-2 outline-offset-[-0.0625rem] outline-lime-500"></div>
        <div className="w-96 h-0 left-[40.0rem] top-[23.5rem] absolute origin-top-left rotate-90 outline outline-2 outline-offset-[-0.0625rem] outline-teal-800"></div>
        <div className="w-80 h-0 left-[43.4375rem] top-[68.875rem] absolute outline outline-2 outline-offset-[-0.0625rem] outline-zinc-100"></div>
        <div className="w-28 h-28 left-[68.875rem] top-[19.875rem] absolute bg-white overflow-hidden flex items-center justify-center">
          <img
            src="images/satellite.png"
            alt="Satellite"
            className="w-24 h-24 object-contain"
          />
        </div>

        <div className="px-4 py-[0.3125rem] left-[45.125rem] top-[28.0rem] absolute bg-emerald-50 inline-flex justify-center items-center gap-2.5 overflow-hidden">
          <div className="justify-start text-teal-800 text-2xl font-semibold font-['Montserrat'] leading-7">
            Biomass Mapping and Mobilisation
          </div>
        </div>
        <div className="w-96 left-[46.5625rem] top-[32.3125rem] absolute inline-flex flex-col justify-start items-start gap-5">
          <div className="w-96 text-right justify-center text-neutral-500 text-lg font-normal font-['Source_Sans_Pro'] leading-snug tracking-wide">
            We digitize biomass supply chains using AI-led satellite mapping and
            local intel, mobilizing 1,000+ tons/day to meet industrial
            specs—solving visibility, quality, and logistics at scale for steel
            decarbonization.
          </div>
        </div>

        <button className="w-40 h-10 px-5 py-3 left-[66.5625rem] top-[41.0625rem] absolute bg-teal-800 rounded-lg outline outline-[0.075rem] outline-offset-[-0.075rem] outline-teal-800 inline-flex justify-center items-center gap-2.5 overflow-hidden">
          <span className="text-center text-white text-base font-medium font-['Montserrat'] whitespace-nowrap">
            Know More
          </span>
        </button>
        <button className="w-40 h-10 px-5 py-3 left-[5.5rem] top-[64.9375rem] absolute bg-teal-800 rounded-lg outline outline-[0.075rem] outline-offset-[-0.075rem] outline-teal-800 inline-flex justify-center items-center gap-2.5 overflow-hidden">
          <span className="text-center text-white text-base font-medium font-['Montserrat'] whitespace-nowrap">
            Know More
          </span>
        </button>
        <div className="px-4 py-[0.3125rem] left-[5.5rem] top-[51.875rem] absolute bg-emerald-50 inline-flex justify-center items-center gap-2.5 overflow-hidden">
          <div className="justify-start text-teal-800 text-2xl font-semibold font-['Montserrat'] leading-7">
            Bespoke Conversion Technology
          </div>
        </div>
        <div className="w-96 left-[5.5rem] top-[56.1875rem] absolute inline-flex flex-col justify-start items-start gap-5">
          <div className="self-stretch justify-center text-neutral-500 text-lg font-normal font-['Source_Sans_Pro'] leading-snug tracking-wide">
            We build advanced pyrolysis systems tailored to local biomass,
            delivering consistent quality across 25+ industrial parameters
            including calorific value, volatile matter, ash, moisture, and fixed
            carbon.
          </div>
        </div>
        <img
          className="w-24 h-24 left-[5.5rem] top-[44.375rem] absolute"
          src="images/fire.png"
          alt=""
        />
        <div className="px-4 py-[0.3125rem] left-[51.75rem] top-[73.5625rem] absolute bg-emerald-50 inline-flex justify-center items-center gap-2.5 overflow-hidden">
          <div className="justify-start text-teal-800 text-2xl font-semibold font-['Montserrat'] leading-7">
            Industrial Decarbonization
          </div>
        </div>
        <div className="w-96 left-[48.625rem] top-[77.875rem] absolute inline-flex flex-col justify-start items-start gap-5">
          <div className="self-stretch text-right justify-center text-neutral-500 text-lg font-normal font-['Source_Sans_Pro'] leading-snug tracking-wide">
            We integrate into steel plants with dynamic biochar blending,
            real-time emissions tracking, and ESG dashboards—fully aligned with
            CBAM, CCTS, and green steel compliance pathways.
          </div>
        </div>
        <button className="w-40 h-10 px-5 py-3 left-[66.5625rem] top-[85.25rem] absolute bg-teal-800 rounded-lg outline outline-[0.075rem] outline-offset-[-0.075rem] outline-teal-800 inline-flex justify-center items-center gap-2.5 overflow-hidden">
          <span className="text-center text-white text-base font-medium font-['Montserrat'] whitespace-nowrap">
            Know More
          </span>
        </button>
        <img
          className="w-24 h-24 left-[68.875rem] top-[66.0625rem] absolute"
          src="images/smoke.png"
          alt=""
        />
        <img
          className="w-8 h-8 left-[15.0625rem] top-[46.375rem] absolute"
          src="/images/ellipse-124.svg"
          alt="Ellipse"
        />
        <div className="px-4 py-[0.3125rem] left-[5.875rem] top-[93.8125rem] absolute bg-emerald-50 inline-flex justify-center items-center gap-2.5 overflow-hidden">
          <div className="justify-start text-teal-800 text-2xl font-semibold font-['Montserrat'] leading-7">
            Carbon Market Integration
          </div>
        </div>
        <div className="w-96 left-[5.875rem] top-[98.125rem] absolute inline-flex flex-col justify-start items-start gap-5">
          <div className="self-stretch justify-center text-neutral-500 text-lg font-normal font-['Source_Sans_Pro'] leading-snug tracking-wide">
            We generate high-integrity carbon removal credits through a digital
            MRV framework, enabling 100+ year carbon sequestration and access to
            both voluntary and compliance markets.
          </div>
        </div>
        <button className="w-32 h-10 px-5 py-3 left-[5.875rem] top-[106.875rem] absolute bg-teal-800 rounded-lg outline outline-[0.075rem] outline-offset-[-0.075rem] outline-teal-800 inline-flex justify-center items-center gap-2.5 overflow-hidden">
          <span className="text-center text-white text-base font-medium font-['Montserrat']">
            Know More
          </span>
        </button>
        <img
          className="w-24 h-24 left-[5.875rem] top-[86.3125rem] absolute"
          src="images/tree.png"
          alt=""
        />
        <div className="w-28 h-28 left-[36.625rem] top-[19.875rem] absolute bg-white rounded-[5.3125rem] outline outline-2 outline-offset-[-0.125rem] outline-zinc-100 overflow-hidden flex items-center justify-center">
          <img
            src="/images/timeline-item.svg"
            alt="Timeline Item"
            className="w-24 h-24 object-contain"
          />
        </div>
        <div
          className="w-80 h-0 left-[43.4375rem] top-[23.3125rem] absolute border-t-2 border-dotted"
          style={{ borderColor: "#1C6248" }}
        ></div>
        <img
          className="w-8 h-8 left-[62.955rem] top-[22.3125rem] absolute"
          src="/images/ellipse-124.svg"
          alt="Ellipse"
        />
        <div
          data-property-1="Component 35"
          className="w-80 h-6 left-[43.8125rem] top-[22.5rem] absolute"
        ></div>
        <div className="w-24 h-8 left-[51.1875rem] top-[22.25rem] absolute bg-teal-800 rounded-xl outline outline-2 outline-offset-[-0.125rem] outline-teal-800 overflow-hidden">
          <div className="left-[1.125rem] top-[0.5625rem] absolute text-center justify-start text-white text-xs font-semibold font-['Montserrat'] leading-none">
            Biomass
          </div>
        </div>
        <div className="w-96 h-0 left-[17.0625rem] top-[47.375rem] absolute outline outline-2 outline-offset-[-0.0625rem] outline-teal-800"></div>
        <img
          className="w-8 h-8 left-[15.375rem] top-[88.125rem] absolute"
          src="/images/ellipse-124.svg"
          alt="Ellipse"
        />
        <div className="w-28 h-28 left-[36.625rem] top-[43.8125rem] absolute bg-white rounded-[5.3125rem] outline outline-2 outline-offset-[-0.125rem] outline-zinc-100 overflow-hidden flex items-center justify-center">
          <img
            src="/images/timeline-item.svg"
            alt="Timeline Item"
            className="w-24 h-24 object-contain"
          />
        </div>
        <div className="w-28 h-28 left-[36.625rem] top-[65.4375rem] absolute bg-white rounded-[5.3125rem] outline outline-2 outline-offset-[-0.125rem] outline-zinc-100 overflow-hidden flex items-center justify-center">
          <img
            src="/images/timeline-item.svg"
            alt="Timeline Item"
            className="w-24 h-24 object-contain"
          />
        </div>
        <div className="w-24 h-8 left-[50.6875rem] top-[67.8125rem] absolute bg-lime-500 rounded-xl overflow-hidden">
          <div className="left-[1.3125rem] top-[0.5625rem] absolute text-center justify-start text-white text-xs font-semibold font-['Montserrat'] leading-none">
            Biochar
          </div>
        </div>
        <div className="w-28 h-28 left-[36.625rem] top-[85.6875rem] absolute bg-white rounded-[5.3125rem] outline outline-2 outline-offset-[-0.125rem] outline-zinc-100 overflow-hidden flex items-center justify-center">
          <img
            src="/images/timeline-item.svg"
            alt="Timeline Item"
            className="w-24 h-24 object-contain"
          />
        </div>
        <div className="w-24 h-8 left-[25.4375rem] top-[88.125rem] absolute bg-lime-500 rounded-xl overflow-hidden">
          <div className="left-[1.3125rem] top-[0.5625rem] absolute text-center justify-start text-white text-xs font-semibold font-['Montserrat'] leading-none">
            Biochar
          </div>
        </div>
        <img
          className="w-8 h-8 left-[62.955rem] top-[67.875rem] absolute"
          src="/images/ellipse-124.svg"
          alt="Ellipse"
        />
        <div className="w-[37.5625rem] left-[21.1875rem] top-[5.0rem] absolute text-center justify-start">
          <span className="text-neutral-950 text-4xl font-semibold font-['Montserrat'] leading-[3.125rem]">
            Behind the{" "}
          </span>
          <span className="text-teal-800 text-4xl font-semibold font-['Montserrat'] leading-[3.125rem]">
            Climitra Engine
          </span>
        </div>
        <div className="w-32 h-0 left-[35.8125rem] top-[9.25rem] absolute outline outline-4 outline-offset-[-0.125rem] outline-teal-800"></div>
        <div className="w-[63.5rem] left-[8.25rem] top-[11.125rem] absolute text-center justify-center">
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

      {/* CURRENT PROJECTS SECTION - Fixed width, 5.0rem gap, center-aligned */}
      <div className="px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-[#0c0c0c] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-none font-montserrat">
            Our <span className="text-climitra-green">Current</span> Projects
          </h2>
          <div className="w-20 sm:w-24 md:w-32 h-1 bg-climitra-green mx-auto mt-3 sm:mt-4 md:mt-6"></div>
        </div>

        <div className="max-w-[64.0rem] mx-auto mt-[5.0rem] flex flex-col items-center lg:flex-row lg:justify-center lg:gap-[5.0rem]">
          {/* Project 1 */}
          <div className="w-[17.75rem] h-[19.1875rem] flex flex-col justify-between rounded-xl bg-climitra-bg-green overflow-hidden shadow-lg hover:shadow-xl transition-shadow mb-12 lg:mb-0">
            <div className="aspect-[1.775] relative overflow-hidden">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/fa40ec4c4f874f5487270f37d6db6a59/389c7961cf69c74d45a01118e0bd13ccdbf78a96?placeholderIfAbsent=true"
                alt="Uttarakhand Project"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="pt-[1.5rem] px-4 pb-5">
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
          <div className="w-[17.75rem] h-[19.1875rem] flex flex-col justify-between rounded-xl bg-climitra-bg-green overflow-hidden shadow-lg hover:shadow-xl transition-shadow mb-12 lg:mb-0">
            <div className="aspect-[1.775] relative overflow-hidden">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/fa40ec4c4f874f5487270f37d6db6a59/6b12783ee2f81663334c50ab55a560fdb37dff93?placeholderIfAbsent=true"
                alt="Punjab Project"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="pt-[1.5rem] px-4 pb-5">
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
          <div className="w-[17.75rem] h-[19.1875rem] flex flex-col justify-between rounded-xl bg-climitra-bg-green overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="aspect-[1.775] relative overflow-hidden">
              <img
                src="images/image-101.png"
                alt="Gujarat Project"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="pt-[1.5rem] px-4 pb-5">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[5.0rem] gap-y-[5.0rem] mt-8 sm:mt-12 md:mt-16 lg:mt-20 px-4 sm:px-8 lg:px-[10.9375rem] place-items-center">
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
                className="w-[16.0rem] h-[17.6875rem] rounded-xl bg-climitra-bg-green flex flex-col justify-between overflow-hidden shadow-lg transition-transform hover:scale-105"
              >
                <div className="pt-6 px-4 pb-4">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-20 h-20 object-contain mx-auto"
                  />
                  <div className="mt-5 h-px border border-dashed border-climitra-green" />
                  <div className="mt-5 text-left">
                    <h3 className="text-[rgba(28,98,72,1)] text-[1.0625rem] font-medium leading-[1.3] font-montserrat">
                      {card.title}
                    </h3>
                    <p className="text-climitra-text text-[0.8625rem] font-light leading-[1.4] mt-2">
                      {card.desc}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between px-4 h-[3.5rem] bg-climitra-green text-white font-semibold text-[0.9375rem] rounded-b-xl">
                  <span>{card.cta}</span>
                  <img
                    src={card.arrow}
                    alt="Arrow"
                    className="w-[1.125rem] h-[1.125rem] object-contain"
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
