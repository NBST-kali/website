// import React from "react";
// import { rem } from "@mantine/core";
// import { Carousel } from "@mantine/carousel";
// import {
//   IconArrowRight,
//   IconArrowLeft,
//   IconArrowUpRight,
// } from "@tabler/icons-react";

// const HeroServices = () => {
//   return (
//     <div className="w-full p-6 sm:p-12 md:p-14 bg-gray-100">
//       {/* Top Section */}
//       <div className="text-left mb-12">
//         <p className="text-base font-normal text-[#0558EE] mb-4">
//           Our Services
//         </p>
//         <h1 className="font-medium text-2xl sm:text-3xl md:text-4xl text-[#050419] mb-4">
//           Our Areas Of Expertise
//         </h1>
//         <span className="font-normal text-sm sm:text-base text-gray-600">
//           At [Your Company Name], we provide tailored software solutions to
//           drive your success. <br className="hidden sm:block" />
//           Explore our services today!
//         </span>
//       </div>

//       {/* Slider */}
//       <div className="carousel">
//         <Carousel
//           withIndicators
//           slideSize="25%"
//           slideGap="0px"
//           align="start"
//           nextControlIcon={
//             <IconArrowRight style={{ width: rem(16), height: rem(16) }} />
//           }
//           previousControlIcon={
//             <IconArrowLeft style={{ width: rem(16), height: rem(16) }} />
//           }
//           withControls
//           classNames={{
//             control: "w-[30px] h-[30px] ",
//             indicators: "custom-indicators",
//             controls: "custom-controls",
//           }}
//           styles={{
//             control: {
//               color: "#0558EE",
//               margin: "5px",
//             },
//             indicator: {
//               width: "30px",
//               height: "10px",
//               backgroundColor: "darkblue",
//               borderRadius: "5px",
//               marginLeft: "10px",
//             },
//           }}
//         >
//           <Carousel.Slide>
//             <div className=" p-3  flex flex-col gap-5 h-[346px] w-[312px] bg-white">
//               <h3 className="font-medium text-xl sm:text-2xl mb-7">
//                 Customer Software Development
//               </h3>
//               <p className="font-normal text-sm sm:text-base text-gray-700  ">
//                 Transform your vision into reality with our bespoke software
//                 solutions. We collaborate closely with you to design, develop,
//                 and deploy software tailored to your specific business needs,
//                 ensuring flexibility and scalability for future growth.
//               </p>
//             </div>
//           </Carousel.Slide>

//           <Carousel.Slide>
//             <div className=" p-3  flex flex-col gap-5 h-[346px] w-[312px]  bg-white">
//               <h3 className="font-medium text-xl sm:text-2xl mb-14">
//                 Software Integration
//               </h3>
//               <p className="font-normal text-sm sm:text-base text-gray-700 ">
//                 We specialize in seamless software integration to optimize your
//                 operations and ensure smooth interoperability between various
//                 systems and applications.
//               </p>
//             </div>
//           </Carousel.Slide>

//           <Carousel.Slide>
//             <div className="p-3  flex flex-col gap-5 h-[346px] w-[312px]   bg-white">
//               <h3 className="font-medium text-xl sm:text-2xl mb-12">
//                 UI/UX Design
//               </h3>
//               <p className="font-normal text-sm sm:text-base text-gray-700">
//                 Our design experts craft user-friendly interfaces that enhance
//                 user engagement and deliver intuitive experiences across all
//                 devices.
//               </p>
//             </div>
//           </Carousel.Slide>

//           <Carousel.Slide>
//             <div className=" p-3 flex flex-col gap-5 h-[346px] w-[312px]    bg-white">
//               <h3 className="font-medium text-xl sm:text-2xl mb-10">
//                 Mobile App Development
//               </h3>
//               <p className="font-normal text-sm sm:text-base text-gray-700">
//                 We build high-performance mobile applications that provide a
//                 seamless user experience, tailored to your specific business
//                 needs.
//               </p>
//             </div>
//           </Carousel.Slide>

//           <Carousel.Slide>
//             <div className=" p-3  flex flex-col gap-5 h-[346px] w-[312px]   bg-white">
//               <h3 className="font-medium text-xl sm:text-2xl mb-10">
//                 Ethical Hacking
//               </h3>
//               <p className="font-normal text-sm sm:text-base text-gray-700">
//                 Transform your vision into reality with our bespoke software
//                 solutions. We collaborate closely with you to design, develop,
//                 and deploy software tailored to your specific business needs,
//                 ensuring flexibility and scalability for future growth.
//               </p>
//             </div>
//           </Carousel.Slide>

//           <Carousel.Slide>
//             <div className=" p-3  flex flex-col gap-5 h-[346px] w-[312px]  bg-white">
//               <h3 className="font-medium text-xl sm:text-2xl mb-10">
//                 Network Administration
//               </h3>
//               <p className="font-normal text-sm sm:text-base text-gray-700">
//                 We specialize in seamless software integration to optimize your
//                 operations and ensure smooth interoperability between various
//                 systems and applications.
//               </p>
//             </div>
//           </Carousel.Slide>
//         </Carousel>
//       </div>

//       {/* </Slider> */}

//       {/* Bottom Section */}
//       <div className="h-[470px] w-auto py-[120px] px-[10px] md:py-20 bg-[#050419] mt-12 md:mt-20 rounded-3xl text-center">
//         <div className="h-[143px] gap-x-6">
//           <h1 className="h-[77px] w-auto gap-x-2 font-medium text-3xl sm:text-4xl md:text-[60px] text-white leading-snug">
//             Ready to Transform Your Business?
//           </h1>
//           <p className="font-normal text-base sm:text-lg text-white mt-3 mb-6 text-center leading-5 sm:mb-10">
//             Get in touch with us today for a free consultation and discover how
//             our tailored software solutions can drive your success!
//           </p>
//         </div>
//         <div className="w-full flex justify-center">
//           <button className="px-7 py-2 flex mt-[20px] justify-center items-center bg-[#050419] text-white rounded-full border border-white h-[50px] w-[200px] gap-x-2 sm:mt-[20px]">
//             Get Started <IconArrowUpRight />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroServices;

import React from "react";
import { Box, Text, Title } from "@mantine/core";

const HeroServices = () => {
  const services = [
    {
      title: "Custom Software Development",
      content:
        "Turn your vision into reality with our custom software solutions designed to meet your unique business needs. We work closely with you to create flexible, scalable software that supports your growth.",
    },
    {
      title: "UI/UX Design",
      content:
        "Our design experts craft user-friendly interfaces that enhance user engagement and deliver intuitive experiences across all devices.",
    },
    {
      title: "Mobile App Development",
      content:
        "We build high-performance mobile applications that provide a seamless user experience, tailored to your specific business needs..",
    },
    {
      title: "Software Integration",
      content:
        "We specialize in seamless software integration to optimize your operations and ensure smooth interoperability between various systems and applications.",
    },
  ];

  return (
    <Box py="xl" px="lg" style={{ backgroundColor: "#F3F4F6" }}>
      <div className="layout-container">
        {/* Left Column */}
        <div className="top-section">
          <Text size="sm" color="#0558EE" mb="sm">
            Our Services
          </Text>
          <Title order={1} size="h1" weight={500} color="#050419" mb="md">
            Our Areas Of Expertise
          </Title>
          <Text size="sm" color="gray" style={{ maxWidth: "600px" }}>
            At [Your Company Name], we provide tailored software solutions to
            drive your success. Explore our services today!
          </Text>
        </div>

        {/* Right Column */}
        <div className="grid-section">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <Title order={4} size="h3" weight={500} mb="sm">
                {service.title}
              </Title>
              <Text size="sm" color="gray">
                {service.content}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </Box>
  );
};

export default HeroServices;
