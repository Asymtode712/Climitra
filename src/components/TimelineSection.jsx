import React from 'react';

const TimelineSection = () => {
  return (
    <div className="w-[1280px] h-[1850px] relative bg-white overflow-hidden mx-auto my-12">
      {/* ABSOLUTE POSITIONED TIMELINE BLOCK */}
        <div className="w-96 h-0 left-[268px] top-[1426px] absolute outline outline-2 outline-offset-[-1px] outline-zinc-100"></div>
        <div className="w-80 h-0 left-[640px] top-[755px] absolute origin-top-left rotate-90 outline outline-2 outline-offset-[-1px] outline-lime-500"></div>
        <div className="w-80 h-0 left-[640px] top-[1102px] absolute origin-top-left rotate-90 outline outline-2 outline-offset-[-1px] outline-lime-500"></div>
        <div className="w-96 h-0 left-[640px] top-[376px] absolute origin-top-left rotate-90 outline outline-2 outline-offset-[-1px] outline-teal-800"></div>
        <div className="w-80 h-0 left-[695px] top-[1102px] absolute outline outline-2 outline-offset-[-1px] outline-zinc-100"></div>
        <img className="w-24 h-24 left-[1192px] top-[328px] absolute" src="images/satellite.png" alt="" />
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
        <img className="w-24 h-24 left-[88px] top-[710px] absolute" src="images/fire.png" alt="" />
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
        <img className="w-24 h-24 left-[1102px] top-[1057px] absolute" src="images/smoke.png" alt="" />
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
        <img className="w-24 h-24 left-[94px] top-[1381px] absolute" src="images/tree.png" alt="" />
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
  );
};

export default TimelineSection;
