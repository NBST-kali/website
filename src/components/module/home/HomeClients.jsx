import React from "react";

const HomeClients = () => {
  return (
    <div className="w-full p-6 sm:p-10 md:p-[60px] bg-[#E9F0FF]">
      {/* Header */}
      <div className="text-[#0558EE] font-medium text-sm sm:text-base mb-4 text-left md:text-left">
        Clients We’ve Empowered
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row lg:gap-32">
        {/* Left section */}
        <div className="lg:w-1/2 mb-6 lg:mb-0">
          <div className="gap-6">
            <h1 className="font-medium text-2xl sm:text-3xl md:text-[32px] leading-8 md:leading-10 mb-4">
              About Our Clients
            </h1>
            <p className="font-normal text-sm sm:text-base md:text-lg leading-6 text-[#050419]">
              Our client is a leading software company specializing in
              developing cutting-edge technology solutions for businesses across
              various industries. With a focus on innovation, efficiency, and
              user-centric design, they help organizations achieve their digital
              transformation goals.
            </p>
          </div>
        </div>

        {/* Right section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-11 lg:w-1/2">
          <img
            src="/techaxis.png"
            alt="Client Logo"
            className="h-auto w-auto"
          />
          <img
            src="/techaxis.png"
            alt="Client Logo"
            className="h-auto w-auto"
          />
          <img
            src="/techaxis.png"
            alt="Client Logo"
            className="h-auto w-auto"
          />
          <img
            src="/techaxis.png"
            alt="Client Logo"
            className="h-auto w-auto"
          />
          <img
            src="/techaxis.png"
            alt="Client Logo"
            className="h-auto w-auto"
          />
          <img
            src="/techaxis.png"
            alt="Client Logo"
            className="h-auto w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeClients;
