import React, { useState } from "react";
import ClimitraHeader from "./ClimitraHeader";
import Footer from "./Footer";

const ContactUs = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
    subject: "",
    query: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="bg-[rgba(253,253,253,1)] flex flex-col overflow-hidden">
      {/* HERO SECTION */}
      <div className="relative w-full h-[611px] overflow-hidden">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="/images/contact.png"
          alt="Contact Us Background"
        />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1C6248E5] to-[#00000000] z-0" />

      <ClimitraHeader 
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        menuItems={[
          { label: "Home", route: "home" },
          { label: "CDR", route: "cdr" },
          { label: "Industrial Decarbonization", route: "industrial" },
          { label: "Tech Suite", route: "tech" },
          { label: "Our Team", route: "team" }
        ]}
        showContactButton={false}
        customContactButton={
          <button className="ml-4 rounded-lg outline outline-2 outline-white px-3 py-1.5 text-climitra-green text-sm font-medium font-montserrat bg-white transition duration-200">
            Contact Us
          </button>
        }
        zIndex={10}
      />

        {/* HERO TEXT */}
        <div className="absolute w-full top-[236px] px-4 sm:px-6 md:px-8 flex flex-col items-center z-10">
          <div className="w-[340px] h-[72px] flex justify-center items-center">
            <h1 className="text-white text-[60px] font-semibold font-montserrat leading-[120%] text-center">
              Contact Us
            </h1>
          </div>
          <p className="text-white font-semibold font-montserrat text-center mt-[40px] leading-[100%] text-[24px]">
            Join us in India’s biomass-driven sustainability revolution!
          </p>
        </div>
      </div>

      {/* CONTACT SECTION */}
      <div className="flex flex-col items-center gap-20 py-20 px-4 sm:px-6 md:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-[64px] w-full max-w-[1400px] px-[74px]">
          <div className="flex flex-col items-start gap-5 w-full lg:w-1/2">
<h2 className="text-[36px] leading-[44px] font-semibold font-montserrat tracking-normal">
  <span className="text-[#0C0C0C]">Get in </span>
  <span className="text-climitra-green">Touch</span>
</h2>
<p className="text-climitra-text font-montserrat font-normal text-[19px] leading-[28px] tracking-[0px] w-[564px]">
  Fill out the form to get in touch. Our team will contact you
  <br />
  <span className="inline-block">shortly.</span>
</p>

{/* ✅ CONTACT INFO GRID FIXED */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[50px] gap-y-[50px] w-full mt-10">
              {/* Phone */}
              <div className="flex items-center gap-[18px]">
                <div className="w-[62px] h-[62px] min-w-[62px] bg-climitra-green rounded-full flex items-center justify-center">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-climitra-green font-montserrat font-semibold text-[24px] leading-[34px]">Phone</h3>
                  <p className="text-climitra-text font-montserrat font-semibold text-[20px] leading-[28.4px]">
                    +91-8050015051
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-[18px]">
                <div className="w-[62px] h-[62px] min-w-[62px] bg-climitra-green rounded-full flex items-center justify-center">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-climitra-green font-montserrat font-semibold text-[24px] leading-[34px]">Email</h3>
                  <p className="text-climitra-text font-montserrat font-semibold text-[20px] leading-[28.4px]">
                    hello@climitra.com
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-center gap-[18px]">
                <div className="w-[62px] h-[62px] min-w-[62px] bg-climitra-green rounded-full flex items-center justify-center">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-climitra-green font-montserrat font-semibold text-[24px] leading-[34px]">Address</h3>
                  <p className="text-climitra-text font-montserrat font-semibold text-[20px] leading-[28.4px]">
                    New Delhi, <br /> India
                  </p>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center gap-[18px]">
                <div className="w-[62px] h-[62px] min-w-[62px] bg-climitra-green rounded-full flex items-center justify-center">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-climitra-green font-montserrat font-semibold text-[24px] leading-[34px]">LinkedIn</h3>
                  <p className="text-climitra-text font-montserrat font-semibold text-[20px] leading-[28.4px]">
                    Climitra
                  </p>
                </div>
              </div>
            </div>
          </div>



     

          {/* Contact Form */}
          <div className="w-full lg:w-1/2 bg-[#F0FFF9] rounded-[11px] p-[30px] relative aspect-[537/432]">
            <form onSubmit={handleSubmit} className="h-full flex flex-col">
              <div className="flex gap-[50px] mb-[40px]">
                <div className="flex-1">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-none outline-none text-climitra-green text-[18px] font-montserrat placeholder-climitra-green pb-[9px]"
                  />
                  <div className="w-full border-b-2 border-[#BDBDBD]"></div>
                </div>
                <div className="flex-1">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email ID"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-none outline-none text-climitra-green text-[18px] font-montserrat placeholder-climitra-green pb-[9px]"
                  />
                  <div className="w-full border-b-2 border-[#BDBDBD]"></div>
                </div>
              </div>

              <div className="mb-[30px] relative">
                <select
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-none outline-none text-climitra-green text-[18px] font-montserrat pb-[9px] appearance-none cursor-pointer"
                >
                  <option value="">What describes you best?</option>
                  <option value="industrial-buyer">Industrial Buyer</option>
                  <option value="credit-buyer">Credit Buyer</option>
                  <option value="researcher">Researcher</option>
                  <option value="ngo">NGO</option>
                  <option value="other">Other</option>
                </select>
                <div className="w-full border-b-2 border-[#BDBDBD]"></div>
                <div className="absolute right-[20px] top-[12px] pointer-events-none">
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 18 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transform rotate-0"
                  >
                    <path
                      d="M3.94922 6.20755L8.77707 10.3457L13.6049 6.20755"
                      stroke="#1C6248"
                      strokeWidth="1.94737"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <div className="mb-[30px]">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-none outline-none text-climitra-green text-[18px] font-montserrat placeholder-climitra-green pb-[9px]"
                />
                <div className="w-full border-b-2 border-[#BDBDBD]"></div>
              </div>

              <div className="mb-[30px]">
                <textarea
                  name="query"
                  placeholder="Query"
                  rows={3}
                  value={formData.query}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-none outline-none text-climitra-green text-[18px] font-montserrat placeholder-climitra-green pb-[9px] resize-none"
                />
                <div className="w-full border-b-2 border-[#BDBDBD]"></div>
              </div>

              <div className="flex justify-end mt-auto">
                <button
                  type="submit"
                  className="bg-climitra-green text-white px-6 py-3 rounded-lg font-montserrat font-semibold hover:bg-climitra-green/90 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Map Image */}
        <div className="w-full max-w-[1400px] mt-20 px-[74px]">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/f167d9867927ada272a98440ff3a574a80937bbc?width=2289"
            alt="Map"
            className="w-full h-[300px] object-cover rounded-[18px]"
          />
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default ContactUs;
