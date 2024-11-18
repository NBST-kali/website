// import React from "react";
// import { IconArrowUpRight } from "@tabler/icons-react";

// const Hero = () => {
//   return (
//     <div className="w-full p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col-reverse md:flex-row justify-between items-center gap-6 md:gap-8">
//       {/* Left Section: Text */}
//       <div className="w-full md:w-6/12 flex flex-col gap-4 sm:gap-6 lg:gap-8">
//         <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#050419]">
//           Transform Your Business with <br className="hidden sm:block" />
//           Innovative Software <br className="hidden sm:block" />
//           Solutions
//         </h1>

//         <p className="text-base sm:text-lg lg:text-xl text-[#232B38]">
//           Tailored software designed to streamline your operations and drive
//           growth.
//         </p>

//         <button
//           href="#"
//           className="h-[50px] w-[160px] flex items-center px-4 sm:px-5 lg:px-6 py-2 bg-black text-white rounded-full"
//         >
//           <p className="mr-2">Get Started</p> <IconArrowUpRight />
//         </button>
//       </div>

//       {/* Right Section: Image */}
//       <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[557px] md:w-1/2 flex justify-center">
//         <img
//           src="/hero.jpg"
//           alt="Right Section"
//           className="w-full h-full object-cover rounded-lg"
//         />
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React from "react";
import { IconArrowUpRight } from "@tabler/icons-react";
import { Box, Title, Text, Button, Image } from "@mantine/core";

const Hero = () => {
  return (
    <Box
      display="flex"
      align="left"
      justify="space-between"
      py="xl"
      px="lg"
      width="auto"
      p="60px"
    >
      {/* Left Section*/}

      <Box w="50%" pr="lg">
        <Title
          order={1}
          size="h1"
          weight={700}
          color="#050419"
          mb="md"
          pt="100px"
          height="170px"
          width="725px"
        >
          Transform Your Business with <br />
          Innovative Software <br />
          Solutions
        </Title>

        <Text size="lg" color="#232B38" mb="lg">
          Tailored software designed to streamline your operations and drive
          growth.
        </Text>

        <Button
          component="a"
          href="#"
          size="md"
          radius="xl"
          variant="filled"
          color="dark"
          style={{ height: "50px", width: "160px" }}
        >
          Get Started <IconArrowUpRight />
        </Button>
      </Box>

      {/* Right Section: Image */}
      <Box w="50%" pl="lg">
        <Image
          src="/hero.jpg"
          alt="Right Section"
          fit="cover"
          height={301}
          width={333}
          p={10}
          radius="md"
        />
      </Box>
    </Box>
  );
};

export default Hero;
