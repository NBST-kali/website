import React from "react";
import { Card, Avatar, Text, Group, Container } from "@mantine/core";
import PersonImage from "../../../image/person.png";

const testimonials = [
  {
    name: "Martin Goutry",
    jobTitle: "Backend Developer",
    image: PersonImage,
    info: "This software solves a long-standing issue we've faced in UI development, providing a seamless workflow that enhances ease of use and productivity.",
    date: "2021.03.02",
  },
  {
    name: "Theo Champion",
    jobTitle: "Frontend Developer",
    image: PersonImage,
    info: "This tool has revolutionized our work by simplifying development and offering intuitive features.",
    date: "2021.03.01",
  },
  {
    name: "Agnes Remi",
    jobTitle: "Back-end Developer",
    image: PersonImage,
    info: "It's a promising solution for teams looking for better workflow efficiency.",
    date: "2021.03.02",
  },
  {
    name: "Roman Atwoods",
    jobTitle: "Software Engineer",
    image: PersonImage,
    info: "The software addresses a critical gap in our tools with outstanding results.",
    date: "2021.03.01",
  },
  {
    name: "Jane Doe",
    jobTitle: "UI Designer",
    image: PersonImage,
    info: "The intuitive features and design have enhanced our team's collaboration significantly.",
    date: "2021.03.01",
  },
  {
    name: "Martin Goutry",
    jobTitle: "Backend Developer",
    image: PersonImage,
    info: "This software solves a long-standing issue we've faced in UI development, providing a seamless workflow that enhances ease of use and productivity.",
    date: "2021.03.02",
  },
];

function Testimonials() {
  const cardStyles = [
    { top: "0", left: "50%", transform: "translateX(-50%)", zIndex: 1 },
    { top: "160px", left: "10%", zIndex: 2 },
    { top: "200px", left: "50%", transform: "translateX(-50%)", zIndex: 3 },
    { bottom: "260px", left: "60%", zIndex: 4 },
    { top: "350px", right: "35%", transform: "translateX(-50%)", zIndex: 5 },
    { top: "350px", left: "70%", transform: "translateX(-50%)", zIndex: 6 },
  ];

  return (
    <Container style={{ position: "relative", padding: "50px 0" }}>
      <Text align="center" weight={700} size="xl" mb="xl">
        What our Clients Say
      </Text>
      <div style={{ position: "relative", height: "500px" }}>
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            shadow="md"
            padding="lg"
            className="zoom-card"
            style={{
              position: "absolute",
              width: "300px",
              ...cardStyles[index % cardStyles.length], // Apply styles cyclically
            }}
          >
            <Group>
              <Avatar src={testimonial.image} radius="xl" />
              <div>
                <Text weight={500}>{testimonial.name}</Text>
                <Text size="sm" color="dimmed">
                  {testimonial.jobTitle}
                </Text>
              </div>
            </Group>
            <Text mt="sm" size="sm">
              {testimonial.info}
            </Text>
            <Text size="xs" color="dimmed" mt="sm">
              User: {testimonial.date}
            </Text>
          </Card>
        ))}
      </div>
    </Container>
  );
}

export default Testimonials;
