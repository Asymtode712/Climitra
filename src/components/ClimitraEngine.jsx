import React from "react";
import AnimatedImpact from "./AnimatedImpact";

function ClimitraEngine() {
  return (
    <div className="bg-[rgba(253,253,253,1)] flex flex-col overflow-hidden">
      {/* HERO SECTION */}
      <div className="relative w-full min-h-[400px] max-h-[700px] h-[60vw] overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-b from-teal-800/80 to-black/0" />
        {/* Navbar */}
        <nav className="absolute top-0 left-0 w-full flex items-center justify-between px-4 md:px-8 py-4 z-10">
          <div className="flex items-center gap-2">
            <img
              src="/images/mask-group.svg"
              alt="Climitra Logo"
              className="w-24 h-8 object-contain"
            />
          </div>
          <ul className="hidden md:flex gap-x-8">
            <li className="text-white text-base font-bold font-montserrat cursor-pointer">Home</li>
            <li className="text-white text-base font-medium font-montserrat cursor-pointer">Industrial Decarbonization</li>
            <li className="text-white text-base font-medium font-montserrat cursor-pointer">CDR</li>
            <li className="text-white text-base font-medium font-montserrat cursor-pointer">Tech Suite</li>
            <li className="text-white text-base font-medium font-montserrat cursor-pointer">Our Team</li>
          </ul>
          <button className="rounded-lg outline outline-2 outline-white px-4 py-2 text-white text-sm font-medium font-montserrat bg-transparent hover:bg-white hover:text-teal-800 transition">
            Contact Us
          </button>
        </nav>
        {/* Hero Text */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-4 flex flex-col items-center z-10">
          <h1
            className="
              text-white
              font-semibold
              font-montserrat
              leading-tight
              text-2xl
              sm:text-3xl
              md:text-4xl
              lg:text-5xl
              max-w-[923px]
              text-center
              mx-auto
            "
            style={{ lineHeight: "1.15" }}
          >
            Unlocking India’s billion-ton biomass opportunity for Climate Action
          </h1>
          <div className="mt-10 flex justify-center">
            <button className="w-44 h-12 px-7 py-4 bg-teal-800 rounded-full flex items-center justify-center gap-3.5 overflow-hidden">
              <span className="text-white text-base font-semibold font-montserrat">Find out more</span>
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
  <img className="w-24 h-24 left-[1192px] top-[328px] absolute" src="images/unnamed4.png" alt="" />
  <div className="w-28 h-24 left-[1192px] top-[311px] absolute bg-teal-800"></div>
  <div className="px-4 py-[5px] left-[722px] top-[448px] absolute bg-emerald-50 inline-flex justify-center items-center gap-2.5 overflow-hidden">
    <div className="justify-start text-teal-800 text-2xl font-semibold font-['Montserrat'] leading-7">Biomass Mapping and Mobilisation</div>
  </div>
  <div className="w-96 left-[745px] top-[517px] absolute inline-flex flex-col justify-start items-start gap-5">
    <div className="w-96 text-right justify-center text-neutral-500 text-lg font-normal font-['Source_Sans_Pro'] leading-snug tracking-wide">
      We digitize biomass supply chains using AI-led satellite mapping and local intel,
      mobilizing 1,000+ tons/day to meet industrial specs—solving visibility, quality,
      and logistics at scale for steel decarbonization.
    </div>
  </div>
  
        <button className="w-40 h-10 px-5 py-3 left-[1065px] top-[657px] absolute bg-teal-800 rounded-lg outline outline-[1.20px] outline-offset-[-1.20px] outline-teal-800 inline-flex justify-center items-center gap-2.5 overflow-hidden">
          <span className="text-center text-white text-base font-medium font-['Montserrat'] whitespace-nowrap">Know More</span>
        </button>
        <button className="w-40 h-10 px-5 py-3 left-[88px] top-[1039px] absolute bg-teal-800 rounded-lg outline outline-[1.20px] outline-offset-[-1.20px] outline-teal-800 inline-flex justify-center items-center gap-2.5 overflow-hidden">
          <span className="text-center text-white text-base font-medium font-['Montserrat'] whitespace-nowrap">Know More</span>
        </button>
        <div className="px-4 py-[5px] left-[88px] top-[830px] absolute bg-emerald-50 inline-flex justify-center items-center gap-2.5 overflow-hidden">
          <div className="justify-start text-teal-800 text-2xl font-semibold font-['Montserrat'] leading-7">Bespoke Conversion Technology</div>
        </div>
        <div className="w-96 left-[88px] top-[899px] absolute inline-flex flex-col justify-start items-start gap-5">
          <div className="self-stretch justify-center text-neutral-500 text-lg font-normal font-['Source_Sans_Pro'] leading-snug tracking-wide">
            We build advanced pyrolysis systems tailored to local biomass, delivering consistent quality across 25+ industrial parameters including calorific value, volatile matter, ash, moisture, and fixed carbon.
          </div>
        </div>
        <img className="w-24 h-24 left-[88px] top-[710px] absolute" src="https://placehold.co/90x90" alt="" />
        <div className="w-32 h-32 left-[69.02px] top-[700.68px] absolute bg-teal-800"></div>
        <div className="px-4 py-[5px] left-[828px] top-[1177px] absolute bg-emerald-50 inline-flex justify-center items-center gap-2.5 overflow-hidden">
          <div className="justify-start text-teal-800 text-2xl font-semibold font-['Montserrat'] leading-7">Industrial Decarbonization</div>
        </div>
        <div className="w-96 left-[778px] top-[1246px] absolute inline-flex flex-col justify-start items-start gap-5">
          <div className="self-stretch text-right justify-center text-neutral-500 text-lg font-normal font-['Source_Sans_Pro'] leading-snug tracking-wide">
            We integrate into steel plants with dynamic biochar blending, real-time emissions tracking, and ESG dashboards—fully aligned with CBAM, CCTS, and green steel compliance pathways.
          </div>
        </div>
        <button className="w-40 h-10 px-5 py-3 left-[1065px] top-[1364px] absolute bg-teal-800 rounded-lg outline outline-[1.20px] outline-offset-[-1.20px] outline-teal-800 inline-flex justify-center items-center gap-2.5 overflow-hidden">
          <span className="text-center text-white text-base font-medium font-['Montserrat'] whitespace-nowrap">Know More</span>
        </button>
        <img className="w-24 h-24 left-[1102px] top-[1057px] absolute" src="https://placehold.co/90x90" alt="" />
        <div className="w-32 h-24 left-[1085.80px] top-[1057px] absolute bg-teal-800"></div>
       <img
  className="w-8 h-8 left-[241px] top-[742px] absolute"
  src="/images/ellipse-124.svg"
  alt="Ellipse"
/>
        <div className="px-4 py-[5px] left-[94px] top-[1501px] absolute bg-emerald-50 inline-flex justify-center items-center gap-2.5 overflow-hidden">
          <div className="justify-start text-teal-800 text-2xl font-semibold font-['Montserrat'] leading-7">Carbon Market Integration</div>
        </div>
        <div className="w-96 left-[94px] top-[1570px] absolute inline-flex flex-col justify-start items-start gap-5">
          <div className="self-stretch justify-center text-neutral-500 text-lg font-normal font-['Source_Sans_Pro'] leading-snug tracking-wide">
            We generate high-integrity carbon removal credits through a digital MRV framework, enabling 100+ year carbon sequestration and access to both voluntary and compliance markets.
          </div>
        </div>
        <button className="w-32 h-10 px-5 py-3 left-[94px] top-[1710px] absolute bg-teal-800 rounded-lg outline outline-[1.20px] outline-offset-[-1.20px] outline-teal-800 inline-flex justify-center items-center gap-2.5 overflow-hidden">
          <span className="text-center text-white text-base font-medium font-['Montserrat']">Know More</span>
        </button>
        <img className="w-24 h-24 left-[94px] top-[1381px] absolute" src="https://placehold.co/90x90" alt="" />
        <div className="w-32 h-28 left-[67.90px] top-[1381px] absolute bg-teal-800"></div>
        <div className="w-28 h-28 left-[586px] top-[318px] absolute bg-white rounded-[85px] outline outline-2 outline-offset-[-2px] outline-zinc-100 overflow-hidden flex items-center justify-center">
  <img
    src="/images/timeline-item.svg"
    alt="Timeline Item"
    className="w-24 h-24 object-contain"
  />
</div>
        <div className="w-80 h-0 left-[695px] top-[373px] absolute border-t-2 border-dotted" style={{ borderColor: '#1C6248' }}></div>
       <img
  className="w-8 h-8 left-[1007.28px] top-[357px] absolute"
  src="/images/ellipse-124.svg"
  alt="Ellipse"
/>
        <div data-property-1="Component 35" className="w-80 h-6 left-[701px] top-[360px] absolute"></div>
        <div className="w-24 h-8 left-[819px] top-[356px] absolute bg-teal-800 rounded-xl outline outline-2 outline-offset-[-2px] outline-teal-800 overflow-hidden">
          <div className="left-[18px] top-[9px] absolute text-center justify-start text-white text-xs font-semibold font-['Montserrat'] leading-none">Biomass</div>
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
          <div className="left-[21px] top-[9px] absolute text-center justify-start text-white text-xs font-semibold font-['Montserrat'] leading-none">Biochar</div>
        </div>
<div className="w-28 h-28 left-[586px] top-[1371px] absolute bg-white rounded-[85px] outline outline-2 outline-offset-[-2px] outline-zinc-100 overflow-hidden flex items-center justify-center">
  <img
    src="/images/timeline-item.svg"
    alt="Timeline Item"
    className="w-24 h-24 object-contain"
  />
</div>
        <div className="w-24 h-8 left-[407px] top-[1410px] absolute bg-lime-500 rounded-xl overflow-hidden">
          <div className="left-[21px] top-[9px] absolute text-center justify-start text-white text-xs font-semibold font-['Montserrat'] leading-none">Biochar</div>
        </div>
<img
  className="w-8 h-8 left-[1007.28px] top-[1086px] absolute"
  src="/images/ellipse-124.svg"
  alt="Ellipse"
/>
        <div className="w-[601px] left-[339px] top-[80px] absolute text-center justify-start">
          <span className="text-neutral-950 text-4xl font-semibold font-['Montserrat'] leading-[50px]">Behind the </span>
          <span className="text-teal-800 text-4xl font-semibold font-['Montserrat'] leading-[50px]">Climitra Engine</span>
        </div>
        <div className="w-32 h-0 left-[573px] top-[148px] absolute outline outline-4 outline-offset-[-2px] outline-teal-800"></div>
        <div className="w-[1016px] left-[132px] top-[178px] absolute text-center justify-center">
          <span className="text-neutral-500 text-xl font-normal font-['Montserrat'] leading-loose">Building a </span>
          <span className="text-teal-800 text-xl font-semibold font-['Montserrat'] leading-loose">vertically integrated ecosystem</span>
          <span className="text-neutral-500 text-xl font-normal font-['Montserrat'] leading-loose"> for waste biomass-driven industrial decarbonization and carbon dioxide removal (CDR) in India</span>
        </div>
      </div>
      {/* IMPACT SECTION */}

      <AnimatedImpact />

      {/* CURRENT PROJECTS SECTION */}
      <div className="text-[#0c0c0c] text-center self-center mt-16 md:mt-20 text-2xl md:text-4xl font-semibold leading-none font-montserrat">
        Our <span className="text-climitra-green">Current</span> Projects
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/fa40ec4c4f874f5487270f37d6db6a59/8808f8c246b11e67a4015e8a90ad6614f59586d7?placeholderIfAbsent=true"
        alt="Divider"
        className="aspect-[34.48] object-contain object-center w-32 self-center mt-4 max-w-full"
      />
      <div className="self-center mt-16 md:mt-20 w-full max-w-5xl">
        <div className="flex flex-wrap gap-8">
          {/* Project 1 */}
          <div className="flex flex-col flex-1 min-w-[250px] max-w-[350px]">
            <div className="rounded-xl bg-climitra-bg-green flex-1 pb-4 overflow-hidden w-full">
              <div className="flex flex-col relative aspect-[1.775] w-full pt-24">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/fa40ec4c4f874f5487270f37d6db6a59/389c7961cf69c74d45a01118e0bd13ccdbf78a96?placeholderIfAbsent=true"
                  alt="Uttarakhand Project"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
              </div>
              <div className="flex flex-col items-start text-climitra-green mx-0 mt-5 mb-0 ml-5 text-base font-montserrat">
                <div className="text-climitra-green text-xl font-medium leading-tight">
                  Uttarakhand{" "}
                </div>
                <div className="text-climitra-text italic leading-8 self-stretch mt-1">
                  Lantana camara
                </div>
                <div className="justify-center items-center rounded-md border border-climitra-green flex mt-5 min-h-[30px] gap-2 font-sofia px-4 py-2">
                  <div className="text-climitra-green self-stretch my-auto">
                    Coming Soon
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Project 2 */}
          <div className="flex flex-col flex-1 min-w-[250px] max-w-[350px]">
            <div className="rounded-xl bg-climitra-bg-green flex-1 pb-4 overflow-hidden w-full">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/fa40ec4c4f874f5487270f37d6db6a59/6b12783ee2f81663334c50ab55a560fdb37dff93?placeholderIfAbsent=true"
                alt="Punjab Project"
                className="aspect-[1.78] object-contain object-center w-full"
              />
              <div className="flex flex-col items-start mx-0 mt-5 mb-0 ml-5 text-base font-montserrat">
                <div className="text-climitra-green text-xl font-medium leading-tight">
                  Punjab
                </div>
                <div className="text-climitra-text italic leading-8 mt-1">
                  Rice stubble
                </div>
                <div className="justify-center items-center rounded-md border border-climitra-green flex mt-5 min-h-[30px] gap-2 font-sofia px-4 py-2">
                  <div className="text-climitra-green self-stretch my-auto">
                    Coming Soon
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Project 3 */}
          <div className="flex flex-col flex-1 min-w-[250px] max-w-[350px]">
            <div className="rounded-xl bg-climitra-bg-green flex-1 pb-4 overflow-hidden w-full">
              <div className="flex flex-col relative aspect-[1.775] w-full pt-24">
                <img
                  src="images/image-101.png"
                  alt="Gujarat Project"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
              </div>
              <div className="flex flex-col items-start text-climitra-green mx-0 mt-5 mb-0 ml-5 text-base font-montserrat">
                <div className="text-climitra-green text-xl font-medium leading-tight">
                  Gujarat
                </div>
                <div className="text-climitra-text italic leading-8 mt-1">
                  Prosopis juliflora
                </div>
                <div className="justify-center items-center rounded-md border border-climitra-green flex mt-5 min-h-[30px] gap-2 font-sofia px-4 py-2">
                  <div className="text-climitra-green self-stretch my-auto">
                    Coming Soon
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

{/* CALL TO ACTION SECTION */}
<div className="bg-[rgba(250,250,250,1)] flex mt-16 md:mt-20 w-full flex-col overflow-hidden items-center font-montserrat justify-center p-8 md:p-20 max-w-full">
  <div className="flex w-full max-w-7xl flex-col items-center">
    {/* Heading */}
    <div className="text-[#0c0c0c] text-center text-2xl md:text-4xl font-semibold leading-none max-w-full">
      Start your
      <span className="text-climitra-green"> journey today</span> with us
    </div>

    {/* Divider Image */}
    <img
      src="https://cdn.builder.io/api/v1/image/assets/fa40ec4c4f874f5487270f37d6db6a59/bc99fa55e9a65f96645eca3e7a24bba072bf1bb9?placeholderIfAbsent=true"
      alt="Divider"
      className="aspect-[34.48] object-contain object-center w-32 mt-4 max-w-full"
    />

    {/* Cards Container */}
    <div className="flex flex-wrap mt-12 md:mt-20 items-stretch gap-8 justify-center w-full">
      {/* CARD 1 */}
      <div className="rounded-xl bg-climitra-bg-green flex flex-col justify-between overflow-hidden items-stretch w-64 shadow-lg transition-transform hover:scale-105">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/fa40ec4c4f874f5487270f37d6db6a59/b377c6313c9e46f2b7081d0c0609c2a6ea51713b?placeholderIfAbsent=true"
          alt="Credit Buyers"
          className="aspect-square object-contain object-center w-20 self-center mt-6"
        />
        <div className="mt-5 h-px border border-dashed border-climitra-green" />
        <div className="flex flex-col items-start px-5 pr-8 mt-4">
          <div className="text-[rgba(28,98,72,1)] text-lg md:text-xl font-medium leading-none whitespace-nowrap">
            Credit Buyers
          </div>
          <div className="text-climitra-text text-base font-light leading-5 mt-2">
            Explore verified carbon credits
          </div>
        </div>
        <button className="mt-6 mx-5 mb-6 flex items-center justify-center gap-3 text-base text-white font-semibold leading-8 bg-climitra-green px-4 py-2 rounded-lg hover:bg-green-900 transition-colors">
          Explore
          <img
            src="https://cdn.builder.io/api/v1/image/assets/fa40ec4c4f874f5487270f37d6db6a59/422e4d2b95e4dc3d8c6b01042244c338355f67ac?placeholderIfAbsent=true"
            alt="Arrow"
            className="w-5 h-5 object-contain"
          />
        </button>
      </div>

      {/* CARD 2 */}
      <div className="rounded-xl bg-climitra-bg-green flex flex-col justify-between overflow-hidden items-stretch w-64 shadow-lg transition-transform hover:scale-105">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/fa40ec4c4f874f5487270f37d6db6a59/358ea4d139e39d6dba3446844d09388bd21cbc9a?placeholderIfAbsent=true"
          alt="Industrial Partners"
          className="aspect-square object-contain object-center w-20 self-center mt-6"
        />
        <div className="mt-5 h-px border border-dashed border-climitra-green" />
        <div className="flex flex-col items-start px-5 pr-8 mt-4">
          <div className="text-[rgba(28,98,72,1)] text-lg md:text-xl font-medium leading-none whitespace-nowrap">
            Industrial Partners
          </div>
          <div className="text-climitra-text text-base font-light leading-5 mt-2">
            Discover fossil fuel replacement solutions
          </div>
        </div>
        <button className="mt-6 mx-5 mb-6 flex items-center justify-center gap-3 text-base text-white font-semibold leading-8 bg-climitra-green px-4 py-2 rounded-lg hover:bg-green-900 transition-colors">
          Discover
          <img
            src="https://cdn.builder.io/api/v1/image/assets/fa40ec4c4f874f5487270f37d6db6a59/60be63b5e06df429cad54f4c29ed758644c99cc5?placeholderIfAbsent=true"
            alt="Arrow"
            className="w-5 h-5 object-contain"
          />
        </button>
      </div>

      {/* CARD 3 */}
      <div className="rounded-xl bg-climitra-bg-green flex flex-col justify-between overflow-hidden items-stretch w-64 shadow-lg transition-transform hover:scale-105">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/fa40ec4c4f874f5487270f37d6db6a59/b0a09aeaf89bbfa497b83c19260926f8a4ff2d90?placeholderIfAbsent=true"
          alt="Researchers & NGOs"
          className="aspect-square object-contain object-center w-20 self-center mt-6"
        />
        <div className="mt-5 h-px border border-dashed border-climitra-green" />
        <div className="flex flex-col items-start px-5 pr-8 mt-4">
          <div className="text-[rgba(28,98,72,1)] text-lg md:text-xl font-medium leading-none whitespace-nowrap">
            Researchers & NGOs
          </div>
          <div className="text-climitra-text text-base font-light leading-5 mt-2">
            Access our technology platform
          </div>
        </div>
        <button className="mt-6 mx-5 mb-6 flex items-center justify-center gap-3 text-base text-white font-semibold leading-8 bg-climitra-green px-4 py-2 rounded-lg hover:bg-green-900 transition-colors">
          Our Technology
          <img
            src="https://cdn.builder.io/api/v1/image/assets/fa40ec4c4f874f5487270f37d6db6a59/dc4ff0ac9a84b69ec6e0859e2dffadb2e4e94b87?placeholderIfAbsent=true"
            alt="Arrow"
            className="w-5 h-5 object-contain"
          />
        </button>
      </div>
    </div>
  </div>
</div>

{/* FOOTER */}
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
          className={`${
            label !== "Contact Us"
              ? "rounded-full px-4 py-2 bg-white"
              : ""
          } text-climitra-primary hover:underline transition-all`}
        >
          {label}
        </button>
      ))}
    </div>
  </div>
</div>
    </div>
  );
}

export default ClimitraEngine;