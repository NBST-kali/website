// import React from "react";

// const HeroWorks = () => {
//   return (
//     <section className="p-10 bg-[#F5F7FA] max-w-[1470px] mx-auto w-full">
//       <div className="mb-2">
//         <p className="text-[#0558EE] mb-2 font-normal leading-5">Our Works</p>
//         <h2 className="text-[32px] leading-10 font-medium mb-4 text-[#050419]">
//           Our Latest Works
//         </h2>

//         {/*  */}
//         <p className="text-[#344358] text-[16px] leading-5 mb-4">
//           At [Your Company Name], we provide tailored software solutions to
//           drive your success. <br />
//           Explore our services today!
//         </p>
//       </div>

//       {/* Image Grid and See All Button */}
//       <div className="flex justify-center items-center py-0 rounded-[40px] h-auto w-full mb-20 sm:mb-32 lg:mb-40">
//         <div className="grid grid-cols-1 sm:grid-cols-[60%_40%] gap-3 w-full h-full">
//           {/* Left side: Single large image */}
//           <div className="flex justify-center items-center w-full h-[300px] sm:h-[350px] md:h-[450px] lg:h-full">
//             <img
//               src="/work1.jpg"
//               alt="Left section"
//               className="object-cover w-full h-full rounded-[14px] shadow-lg"
//             />
//           </div>

//           {/* Right side: Two sections (stacked) */}
//           <div className="grid grid-rows-2 gap-4 w-full h-full">
//             {/* Top section: Medium image */}
//             <div className="flex justify-center items-center w-full h-[180px] sm:h-[180px] md:h-[225px] lg:h-full mt-2">
//               <img
//                 src="/work2.jpg"
//                 alt="Top Right section"
//                 className="object-cover w-full h-full rounded-[14px] shadow-lg"
//               />
//             </div>

//             {/* Bottom section: Image on the left and button on the right */}
//             <div className="grid grid-cols-2 gap-4 w-full h-[150px] sm:h-[200px] md:h-[225px] lg:h-[50%]">
//               {/* Left side: Small image */}
//               <div className="flex justify-center items-center w-full h-full">
//                 <img
//                   src="/work3.png"
//                   alt="Bottom Left section"
//                   className="object-cover w-full h-full rounded-[14px] shadow-lg"
//                 />
//               </div>

//               {/* Right side: Button */}
//               <div className="flex justify-center items-center bg-[#3D44FF] rounded-[14px] shadow-lg w-full h-full sm:mt-0">
//                 <button className="text-white text-xl sm:text-2xl font-medium">
//                   See All →
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Footer Section */}
//       <div className="py-6 px-6 bg-[#050419] mt-10 rounded-2xl sm:py-[92px] sm:px-[161px] sm:mt-20 sm:rounded-3xl">
//         <div className="gap-4 flex flex-col items-center justify-center sm:gap-6">
//           <h1 className="font-medium text-2xl sm:text-[32px] leading-normal sm:leading-[40px] text-[#ECFEFF] text-center">
//             Data Speaks, We Listen
//           </h1>

//           <p className="font-normal text-sm leading-normal text-[#D0F9FD] text-center sm:text-[16px] sm:leading-[21px]">
//             Insight is the first step toward innovation; by analyzing our data,
//             we unlock the potential for transformative ideas that drive progress
//             and create value.
//           </p>

//           <div className="w-full h-auto text-white flex flex-col gap-4 justify-around items-center sm:w-[1006px] sm:h-[104px] sm:flex-row sm:gap-0">
//             <div className="text-center">
//               <h1 className="font-semibold text-4xl sm:text-[60px] leading-tight sm:leading-[78px]">
//                 25+
//               </h1>
//               <p className="font-medium text-base leading-normal sm:text-[20px] sm:leading-[26px]">
//                 Expert Developers
//               </p>
//             </div>

//             <div className="text-center">
//               <h1 className="font-semibold text-4xl leading-normal sm:text-[60px] sm:leading-[78px]">
//                 150+
//               </h1>
//               <p className="font-medium text-base leading-normal sm:text-[20px] sm:leading-[26px]">
//                 Projects Done
//               </p>
//             </div>

//             <div className="text-center">
//               <h1 className="font-semibold text-4xl leading-normal sm:text-[60px] sm:leading-[78px]">
//                 50+
//               </h1>
//               <p className="font-medium text-base sm:text-[20px] leading-normal sm:leading-[26px]">
//                 Satisfied Clients
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroWorks;

import React from "react";
import {
  Container,
  Grid,
  Image,
  Button,
  Text,
  Title,
  Box,
  Stack,
  SimpleGrid,
  rem,
} from "@mantine/core";

const PRIMARY_COL_HEIGHT = rem(300);

// const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;

const HeroWorks = () => {
  return (
    <Container
      py="xl"
      px="md"
      size="lg"
      style={{ backgroundColor: "#F5F7FA", borderRadius: "14px" }}
    >
      {/* Header Section */}
      <Stack mb="lg" spacing="sm">
        <Text color="#0558EE" size="sm" weight={500}>
          Our Works
        </Text>
        <Title size="h2" order={2} style={{ color: "#050419" }}>
          Our Latest Works
        </Title>
        <Text size="sm" style={{ color: "#344358" }}>
          At [Your Company Name], we provide tailored software solutions to
          drive your success. <br />
          Explore our services today!
        </Text>
      </Stack>

      {/* Image Grid */}
      <Container my="md">
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
          <Image
            src="/work1.jpg"
            alt="Left section"
            radius="md"
            style={{
              height: "100%",
              objectFit: "cover",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            }}
          />

          <Grid gutter="md">
            <Grid.Col>
              {/* <Skeleton
                height={SECONDARY_COL_HEIGHT}
                radius="md"
                animate={false}
              /> 
              */}
              <Image
                src="/work2.jpg"
                alt="Top Right section"
                radius="md"
                style={{
                  height: "100%",
                  objectFit: "cover",
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                }}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <Image
                src="/work3.png"
                alt="Bottom Left section"
                radius="md"
                style={{
                  height: "100%",
                  objectFit: "cover",
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                }}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              {/* <Skeleton
                height={SECONDARY_COL_HEIGHT}
                radius="md"
                animate={false}
              /> */}
              <Button
                size="md"
                variant="filled"
                style={{
                  color: "white",
                  fontSize: "1.25rem",
                  fontWeight: "500",
                  backgroundColor: "#3D44FF",
                  borderRadius: "14px",
                  height: "100%",
                  width: "220px",
                }}
              >
                See All →
              </Button>
            </Grid.Col>
          </Grid>
        </SimpleGrid>
      </Container>

      {/* Footer Section */}
      <Box
        mt="xl"
        py="xl"
        px="lg"
        style={{ backgroundColor: "#050419", borderRadius: "20px" }}
      >
        {/* Statistics */}
        <Stack spacing="lg">
          <Title order={2} style={{ color: "#ECFEFF", textAlign: "center" }}>
            Data Speaks, We Listen
          </Title>
          <Text size="sm" style={{ color: "#D0F9FD", textAlign: "center" }}>
            Insight is the first step toward innovation; by analyzing our data,
            we unlock the potential for transformative ideas that drive progress
            and create value.
          </Text>

          {/* Statistics */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "24px", // Space between items
            }}
          >
            <div
              style={{
                flex: "1 1 30%", // Adjusts size for desktop
                maxWidth: "30%", // Ensures proper sizing on desktop
                minWidth: "100px", // Ensures a good layout on mobile
                textAlign: "center",
              }}
            >
              <Stack align="center">
                <Title order={1} style={{ color: "white", fontSize: "60px" }}>
                  25+
                </Title>
                <Text size="sm" style={{ color: "#D0F9FD" }}>
                  Expert Developers
                </Text>
              </Stack>
            </div>

            <div
              style={{
                flex: "1 1 30%",
                maxWidth: "30%",
                minWidth: "100px",
                textAlign: "center",
              }}
            >
              <Stack align="center">
                <Title order={1} style={{ color: "white", fontSize: "60px" }}>
                  150+
                </Title>
                <Text size="sm" style={{ color: "#D0F9FD" }}>
                  Projects Done
                </Text>
              </Stack>
            </div>

            <div
              style={{
                flex: "1 1 30%",
                maxWidth: "30%",
                minWidth: "100px",
                textAlign: "center",
              }}
            >
              <Stack align="center">
                <Title order={1} style={{ color: "white", fontSize: "60px" }}>
                  50+
                </Title>
                <Text size="sm" style={{ color: "#D0F9FD" }}>
                  Satisfied Clients
                </Text>
              </Stack>
            </div>
          </div>
        </Stack>
      </Box>
    </Container>
  );
};

export default HeroWorks;
