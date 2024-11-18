import React from "react";

const AppFooter = () => {
  return (
    <div className="bg-[#FCFCFC] p-6 sm:p-12 md:p-16">
      <div className="flex flex-col md:flex-row md:justify-between gap-12 items-center md:items-start text-center md:text-left">
        {/* --- Logo and description --- */}
        <div className="flex flex-col w-full md:w-[373px] h-auto space-y-4 md:pr-16 items-center md:items-start">
          <div className="w-[200px] sm:w-[234px] h-14">
            <img src="/logo.png" alt="logo" />
          </div>

          <p className="text-[14px] leading-[18px] text-[#050419]">
            A software company specializes in creating, developing, and
            maintaining software solutions. They build applications and digital
            tools to enhance productivity, streamline processes, and solve
            business challenges across various industries.
          </p>

          <div className="flex space-x-3 justify-center md:justify-start">
            <img src="/twitter.png" alt="twitter" className="w-6 h-6" />
            <img src="/instagram.png" alt="instagram" className="w-6 h-6" />
            <img src="/g.png" alt="facebook" className="w-6 h-6" />
          </div>
        </div>

        {/* --- Our Links --- */}
        <div className="flex flex-col w-full md:w-1/4 space-y-4 items-center md:items-start">
          <h1 className="font-medium text-xl text-[#232B38]">Our Links</h1>
          <ul className="space-y-2 text-sm text-[#050419]">
            <li>About</li>
            <li>Careers</li>
            <li>Service</li>
          </ul>
        </div>

        {/* --- Our Services --- */}
        <div className="flex flex-col w-full md:w-1/4 space-y-4 items-center md:items-start">
          <h1 className="font-medium text-xl text-[#232B38]">Our Services</h1>
          <ul className="space-y-2 text-sm text-[#050419]">
            <li>Software Integration</li>
            <li>Maintenance and Support</li>
            <li>UI/UX Design</li>
            <li>Mobile App Development</li>
          </ul>
        </div>

        {/* --- Contact Us --- */}
        <div className="flex flex-col w-full md:w-1/4 space-y-4 items-center md:items-start">
          <h1 className="font-medium text-xl text-[#232B38]">Contact Us</h1>
          <p className="text-sm text-[#050419]">
            Have questions or need assistance? Reach out to our team—we're here
            to help!
          </p>
          <div className="w-full md:w-[152px]">
            <button className="bg-[#050419] text-white py-3 px-7 rounded-[34px] w-full md:w-auto">
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppFooter;
