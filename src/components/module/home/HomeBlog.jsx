import React from "react";
import { IconCalendarMonth } from "@tabler/icons-react";

const HomeBlog = () => {
  return (
    <div className="flex flex-col h-auto w-full p-6 sm:p-8 md:p-[60px] gap-4">
      {/* --- Header Section --- */}
      <div className="w-full text-center md:text-left">
        <p className="font-normal text-[16px] sm:text-[16px] leading-5 text-[#0558EE]">
          Blogs & News
        </p>
        <h1 className="font-medium text-[32px] sm:text-[28px] md:text-[32px] leading-10 md:leading-10 text-[#050419]">
          What’s New in Our Project
        </h1>
        <p className="font-normal text-[16px] leading-5 sm:text-[16px] text-[#344358] max-w-full md:max-w-[642px] mt-2 mx-auto md:mx-0">
          At [Your Company Name], we provide tailored software solutions to
          drive your success. Explore our services today!
        </p>
      </div>

      {/* --- Blog Cards Section ---*/}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-[60px] mt-8">
        {/* Blog Card 1 */}
        <div className="p-4 md:p-[20px] w-full bg-[#F5F7FA] rounded-lg">
          <img
            src="/blog.png"
            alt="blog"
            className="h-[200px] w-full object-cover rounded-tl-lg rounded-tr-lg"
          />
          <div className="mt-[16px]">
            <div className="text-[12px] text-[#344358] flex justify-between items-center">
              {/* Left Side: Icon and Date */}
              <div className="flex items-center space-x-2">
                <IconCalendarMonth />
                <p className="font-medium text-[14px] leading-[18px]">
                  Sept 27, 2024
                </p>
              </div>
              {/* Right Side: Read Time */}
              <span className="font-medium text-[14px] leading-[18px] text-[#0558EE]">
                2 min Read
              </span>
            </div>
            <h2 className="font-medium text-[24px] sm:text-[24px] leading-7 sm:leading-[30px] text-[#050419] mt-2">
              Major Performance Boost Released
            </h2>
            <p className="text-[14px] text-[#344358] mt-1">
              Transform your vision into reality with our bespoke software
              solutions. We collaborate closely with you to design, develop, and
              deploy...
            </p>
          </div>
        </div>

        {/* Blog Card 2 */}
        <div className="p-4 md:p-[20px] w-full bg-[#F5F7FA] rounded-lg">
          <img
            src="/blog.png"
            alt="blog"
            className="h-[200px] w-full object-cover rounded-tl-lg rounded-tr-lg"
          />
          <div className="mt-[16px]">
            <div className="text-[12px] text-[#344358] flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <IconCalendarMonth />
                <p className="font-medium text-[14px] leading-[18px]">
                  Sept 27, 2024
                </p>
              </div>
              <span className="font-medium text-[14px] leading-[18px] text-[#0558EE]">
                2 min Read
              </span>
            </div>
            <h2 className="font-medium text-[24px] sm:text-[24px] leading-7 sm:leading-[30px] text-[#050419] mt-2">
              Major Performance Boost Released
            </h2>
            <p className="text-[14px] text-[#344358] mt-1">
              Transform your vision into reality with our bespoke software
              solutions. We collaborate closely with you to design, develop, and
              deploy...
            </p>
          </div>
        </div>

        {/* Blog Card 3 */}
        <div className="p-4 md:p-[20px] w-full bg-[#F5F7FA] rounded-lg">
          <img
            src="/blog.png"
            alt="blog"
            className="h-[200px] w-full object-cover rounded-tl-lg rounded-tr-lg"
          />
          <div className="mt-[16px]">
            <div className="text-[12px] text-[#344358] flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <IconCalendarMonth />
                <p className="font-medium text-[14px] leading-[18px]">
                  Sept 27, 2024
                </p>
              </div>
              <span className="font-medium text-[14px] leading-[18px] text-[#0558EE]">
                2 min Read
              </span>
            </div>
            <h2 className="font-medium text-[24px] sm:text-[24px] leading-7 sm:leading-[30px] text-[#050419] mt-2">
              Major Performance Boost Released
            </h2>
            <p className="text-[14px] text-[#344358] mt-1">
              Transform your vision into reality with our bespoke software
              solutions. We collaborate closely with you to design, develop, and
              deploy...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBlog;
