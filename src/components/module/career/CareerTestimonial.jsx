import React from "react";
import { Carousel } from "@mantine/carousel";
import { Box, Text, Title, Button, rem } from "@mantine/core";

import {
  IconArrowRight,
  IconArrowLeft,
  IconArrowUpRight,
} from "@tabler/icons-react";

const CareerTestimonial = () => {
  return (
    <Box
      py="xl"
      px="lg"
      style={{ backgroundColor: "#F3F4F6", textAlign: "Center" }}
    >
      {/* Top Section */}
      <Box
        sx={(theme) => ({
          width: "100%",
          padding: theme.spacing.md,
          backgroundColor: "#F7F7FC",
          [theme.fn.smallerThan("sm")]: { padding: theme.spacing.sm },
          [theme.fn.largerThan("md")]: { padding: theme.spacing.xl },
          [theme.fn.largerThan("lg")]: { padding: theme.spacing.xl * 1.5 },
        })}
      >
        {/* Title Section */}
        <Box mb="lg">
          <Text
            size="sm"
            weight={500}
            sx={{ lineHeight: "1.25", color: "#0558EE", textAlign: "center" }}
          >
            Client Testimonials
          </Text>
          <Title
            order={1}
            sx={(theme) => ({
              fontWeight: 600,
              color: "#050419",
              fontSize: theme.fontSizes.xl,
              textAlign: "center",
              [theme.fn.smallerThan("sm")]: {
                fontSize: theme.fontSizes.lg * 2,
              },
              [theme.fn.largerThan("md")]: { fontSize: theme.fontSizes.xl * 2 },
              [theme.fn.largerThan("lg")]: {
                fontSize: theme.fontSizes.xl * 2.5,
              },
            })}
          >
            What our Clients Say
          </Title>
        </Box>
      </Box>

      {/* Carousel */}
      <div className="carousel">
        <Carousel
          withIndicators
          slideSize="25%"
          slideGap="0px"
          align="start"
          nextControlIcon={
            <IconArrowRight style={{ width: rem(16), height: rem(16) }} />
          }
          previousControlIcon={
            <IconArrowLeft style={{ width: rem(16), height: rem(16) }} />
          }
          withControls
          classNames={{
            control: "w-[30px] h-[30px] ",
            indicators: "custom-indicators",
            controls: "custom-controls",
          }}
          styles={{
            control: {
              color: "#0558EE",
              margin: "5px",
            },
            indicator: {
              width: "30px",
              height: "10px",
              backgroundColor: "darkblue",
              borderRadius: "5px",
              marginLeft: "10px",
            },
          }}
        >
          {/* Slides */}
          {[
            {
              content: `[Software Company’s Name] has been instrumental in optimizing our
              workflow and boosting efficiency." " Their software is intuitive and
              reliable, and their team provides excellent support." " I highly
              recommend them for any business seeking dependable tech
              solutions.`,
              title: "John Doe",
              text: "Web Developer",
            },
            {
              content: `[Software Company’s Name] has been instrumental in optimizing our
              workflow and boosting efficiency." " Their software is intuitive and
              reliable, and their team provides excellent support." " I highly
              recommend them for any business seeking dependable tech
              solutions.`,
              title: "John Doe",
              text: "Web Developer",
            },
            {
              content: `[Software Company’s Name] has been instrumental in optimizing our
              workflow and boosting efficiency." " Their software is intuitive and
              reliable, and their team provides excellent support." " I highly
              recommend them for any business seeking dependable tech
              solutions.`,
              title: "John Doe",
              text: "Web Developer",
            },
            {
              content: `[Software Company’s Name] has been instrumental in optimizing our
                workflow and boosting efficiency." " Their software is intuitive and
                reliable, and their team provides excellent support." " I highly
                recommend them for any business seeking dependable tech
                solutions.`,
              title: "John Doe",
              text: "Web Developer",
            },
          ].map((slide, index) => (
            <Carousel.Slide key={index}>
              <Box
                p="md"
                bg="white"
                style={{
                  height: rem(346),
                  width: rem(312),
                  display: "flex",
                  flexDirection: "column",
                  gap: rem(20),
                }}
              >
                <Text size="sm" color="gray">
                  {slide.content}
                </Text>
                <Title order={3} size="h3" weight={500} mb="sm">
                  {slide.title}
                </Title>
                <Text size="sm" color="gray">
                  {slide.text}
                </Text>
              </Box>
            </Carousel.Slide>
          ))}
        </Carousel>
      </div>
    </Box>
  );
};

export default CareerTestimonial;
