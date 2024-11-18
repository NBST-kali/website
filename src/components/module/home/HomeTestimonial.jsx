import React from "react";
import { Carousel } from "@mantine/carousel";

const HomeTestimonial = () => {
  return (
    <div className="w-full p-4 sm:p-8 md:p-12 lg:p-16 bg-[#F7F7FC]">
      {/* Title Section */}
      <div className="mb-8 text-center md:text-left">
        <p className="font-medium text-sm sm:text-base md:text-lg leading-5 text-[#0558EE]">
          Client Testimonials
        </p>
        <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#050419]">
          What our Clients Say
        </h1>
      </div>

      {/* Testimonial Cards */}
      <Carousel
        withIndicators
        slideSize="33.3333%"
        slideGap="md"
        align="start"
        withControls
        classNames={{
          control: "carousel-control",
          indicators: "test-indicators",
          controls: "test-controls",
        }}
        styles={{
          control: {
            color: "white",
            backgroundColor: "#0558EE",
            borderRadius: "50%",
          },
        }}
      >
        {/* Carousel slides */}
        <Carousel.Slide>
          <div className="p-6 rounded-lg top-8 bg-white flex flex-col justify-center relative shadow-lg mx-2 mb-2 z-50">
            <img
              src="/person.png"
              alt="person"
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full mb-4 absolute -top-8 left-4 sm:left-6"
            />
            <p className="font-normal text-xs sm:text-sm md:text-base text-[#232B38] mb-4 mt-4">
              "[Software Company’s Name] has been instrumental in optimizing our
              workflow and boosting efficiency. Their software is intuitive and
              reliable, and their team provides excellent support. I highly
              recommend them for any business seeking dependable tech
              solutions."
            </p>
            <h1 className="font-semibold text-sm sm:text-base md:text-lg text-[#050419]">
              John Doe
            </h1>
            <p className="font-normal text-xs sm:text-sm md:text-base text-[#344358]">
              Web Developer
            </p>
          </div>
        </Carousel.Slide>

        <Carousel.Slide>
          <div className="p-6 rounded-lg top-8 bg-white flex flex-col justify-center relative shadow-lg mx-2 mb-2 z-50">
            <img
              src="/person.png"
              alt="person"
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full mb-4 absolute -top-8 left-4 sm:left-6"
            />
            <p className="font-normal text-xs sm:text-sm md:text-base text-[#232B38] mb-4 mt-4">
              "[Software Company’s Name] has been instrumental in optimizing our
              workflow and boosting efficiency. Their software is intuitive and
              reliable, and their team provides excellent support. I highly
              recommend them for any business seeking dependable tech
              solutions."
            </p>
            <h1 className="font-semibold text-sm sm:text-base md:text-lg text-[#050419]">
              John Doe
            </h1>
            <p className="font-normal text-xs sm:text-sm md:text-base text-[#344358]">
              Web Developer
            </p>
          </div>
        </Carousel.Slide>

        <Carousel.Slide>
          <div className="p-6 rounded-lg top-8 bg-white flex flex-col justify-center relative shadow-lg mx-2 mb-2 z-50">
            <img
              src="/person.png"
              alt="person"
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full mb-4 absolute -top-8 left-4 sm:left-6"
            />
            <p className="font-normal text-xs sm:text-sm md:text-base text-[#232B38] mb-4 mt-4">
              "[Software Company’s Name] has been instrumental in optimizing our
              workflow and boosting efficiency. Their software is intuitive and
              reliable, and their team provides excellent support. I highly
              recommend them for any business seeking dependable tech
              solutions."
            </p>
            <h1 className="font-semibold text-sm sm:text-base md:text-lg text-[#050419]">
              John Doe
            </h1>
            <p className="font-normal text-xs sm:text-sm md:text-base text-[#344358]">
              Web Developer
            </p>
          </div>
        </Carousel.Slide>

        <Carousel.Slide>
          <div className="p-6 rounded-lg top-8 bg-white flex flex-col justify-center relative shadow-lg mx-2 mb-2 z-50">
            <img
              src="/person.png"
              alt="person"
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full mb-4 absolute -top-8 left-4 sm:left-6"
            />
            <p className="font-normal text-xs sm:text-sm md:text-base text-[#232B38] mb-4 mt-4">
              "[Software Company’s Name] has been instrumental in optimizing our
              workflow and boosting efficiency. Their software is intuitive and
              reliable, and their team provides excellent support. I highly
              recommend them for any business seeking dependable tech
              solutions."
            </p>
            <h1 className="font-semibold text-sm sm:text-base md:text-lg text-[#050419]">
              John Doe
            </h1>
            <p className="font-normal text-xs sm:text-sm md:text-base text-[#344358]">
              Web Developer
            </p>
          </div>
        </Carousel.Slide>

        <Carousel.Slide>
          <div className="p-6 rounded-lg top-8 bg-white flex flex-col justify-center relative shadow-lg mx-2 mb-2 z-50">
            <img
              src="/person.png"
              alt="person"
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full mb-4 absolute -top-8 left-4 sm:left-6"
            />
            <p className="font-normal text-xs sm:text-sm md:text-base text-[#232B38] mb-4 mt-4">
              "[Software Company’s Name] has been instrumental in optimizing our
              workflow and boosting efficiency. Their software is intuitive and
              reliable, and their team provides excellent support. I highly
              recommend them for any business seeking dependable tech
              solutions."
            </p>
            <h1 className="font-semibold text-sm sm:text-base md:text-lg text-[#050419]">
              John Doe
            </h1>
            <p className="font-normal text-xs sm:text-sm md:text-base text-[#344358]">
              Web Developer
            </p>
          </div>
        </Carousel.Slide>
      </Carousel>

      {/* Styles for control positions */}
      <style jsx>{`
        .carousel-control {
          width: 30px;
          height: 30px;
        }

        @media (max-width: 768px) {
          .carousel-control {
            position: absolute;
            top: 90%; /* Move controls below the carousel */
            transform: translateY(-50%);
          }

          .mantine-Carousel-control-prev {
            left: 10%; /* Position the "Previous" button */
          }

          .mantine-Carousel-control-next {
            right: 10%; /* Position the "Next" button */
          }
        }
      `}</style>
    </div>
  );
};

export default HomeTestimonial;
